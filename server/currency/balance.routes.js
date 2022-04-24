const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const balanceController = require('./balanceController')

const router = new Router()

router.post('', authMiddleware, balanceController.replenish)
router.get('', authMiddleware, balanceController.getBalance)
router.post('/convert', authMiddleware, balanceController.convert)
router.delete('/', authMiddleware, balanceController.withdraw)
module.exports = router
