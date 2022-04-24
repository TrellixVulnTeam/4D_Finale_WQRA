const { default: axios } = require('axios')
const Router = require('express')
const router = new Router()
let Parser = require('rss-parser')
let parser = new Parser()

router.get('/', async (req, res) => {
  try {
    const link = req.query.link
    let feed = await parser.parseURL(link)
    return res.json(feed)
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'Ошибка сервера' })
  }
})

module.exports = router
