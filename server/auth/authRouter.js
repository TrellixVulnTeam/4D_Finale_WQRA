const Router = require('express')
const { check } = require('express-validator')
const controller = require('./authController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')
const router = new Router()

router.post(
  '/registration',
  [
    check('username', 'Имя пользователя должно быть от 6 до 16 символов').isLength({ min: 6, max: 16 }),
    check('password', 'Пароль должен быть от 8 до 128 символов').isLength({ min: 8, max: 128 }),
  ],
  controller.registration
)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['admin']), controller.getUsers)
router.get('/auth', authMiddleware, controller.auth)

module.exports = router
