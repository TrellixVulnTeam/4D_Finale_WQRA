const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./auth/authRouter')
const newsRouter = require('./news/newsRouter')
const rolesRouter = require('./roles/rolesRouter')
const balanceRouter = require('./currency/balance.routes')
const transactionRouter = require('./transactions/transaction.routes')
const corsMiddleware = require('./middleware/cors.middleware')
const PORT = process.env.PORT || config.get('serverPort')

const app = express()

app.use(corsMiddleware)
app.use(express.json())
app.use('/auth', authRouter)
app.use('/news', newsRouter)
app.use('/roles', rolesRouter)
app.use('/balance', balanceRouter)
app.use('/transactions', transactionRouter)
const start = async () => {
  try {
    await mongoose.connect(config.get('dbURL'))
    app.listen(PORT, () => {
      console.log('started on ', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
