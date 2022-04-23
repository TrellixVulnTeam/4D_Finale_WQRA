const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./auth/authRouter')
const PORT = process.env.PORT || config.get('serverPort')

const app = express()

app.use(express.json())
app.use('/auth', authRouter)
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
