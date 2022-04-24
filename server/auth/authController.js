const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  }
  return jwt.sign(payload, config.get('jwtKey'), { expiresIn: '24h' })
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Bad request', errors })
      }
      const { username, password } = req.body
      const candidate = await User.findOne({ username })
      if (candidate) {
        return res.status(400).json({ message: `Пользователь с именем ${username} уже существует` })
      }
      const hashPassword = bcrypt.hashSync(password, 8)
      const userRole = await Role.findOne({ value: 'user' })
      const user = new User({ username, password: hashPassword, roles: [userRole.value], date: Date() })
      await user.save()
      return res.json({ message: 'Пользователь был успешно зарегистрирован' })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: 'Ошибка регистрации' })
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({ message: 'Неверный пароль' })
      }
      const token = generateAccessToken(user._id, user.roles)
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.username,
          roles: user.roles,
          isBlocked: user.isBlocked,
          balance: user.balance,
        },
      })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: 'Ошибка входа' })
    }
  }

  async auth(req, res) {
    try {
      const user = await User.findOne({ _id: req.user.id })
      const token = generateAccessToken(user._id, user.roles)
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.username,
          roles: user.roles,
          isBlocked: user.isBlocked,
          balance: user.balance,
        },
      })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: 'Ошибка аутентификации' })
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find()
      return res.json(users)
    } catch (e) {}
  }
}

module.exports = new authController()
