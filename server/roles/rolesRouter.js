const Router = require('express')
const router = new Router()
const roleMiddleware = require('../middleware/roleMiddleware')
const User = require('../models/User')

router.post('/add', roleMiddleware(['admin']), async (req, res) => {
  try {
    const { username, roles } = req.body
    let user = await User.findOne({ username })
    if (!user) return res.status(403).json({ message: 'Пользователь не найден' })
    console.log(user)
    user.roles = roles
    console.log(user)
    await user.save()
    return res.json(user)
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'Ошибка сервера' })
  }
})

module.exports = router
