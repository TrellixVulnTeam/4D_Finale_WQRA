const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const transactionController = require('./transactionController')

const router = new Router()

router.get('', authMiddleware, transactionController.showTransactions)

module.exports = router
