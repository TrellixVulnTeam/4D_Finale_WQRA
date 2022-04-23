import React, { useEffect, useState } from 'react'
import './stocklist.css'
import News from '../news/News.jsx'
import { getNews } from '../../actions/news.js'

const StockList = (props) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    getAllNews()
    setInterval(() => {
      getAllNews()
    }, 120000)
  }, [])

  const resources = [
    'http://static.feed.rbc.ru/rbc/logical/footer/news.rss',
    'https://ria.ru/export/rss2/archive/index.xml',
  ]
  async function getAllNews() {
    const data = await Promise.all(
      resources.map(async (item, index) => {
        let response = await getNews(item)
        console.log(response)
        const data = response.items
        const items = await data.map((item) => {
          return {
            title: item.title,
            content: item.content,
            link: item.link,
            pubDate: item.pubDate,
          }
        })
        return { title: response.title, link: response.link, items }
      })
    )
    // console.log('shrump', data)
    setNews(data)
  }

  return (
    <div>
      {news.length != 0 ? (
        <div>
          {news[0].items.map((item) => (
            <News title={item.title} content={item.content} link={item.link} key={item.link} />
          ))}
          {news[1].items.map((item) => (
            <News title={item.title} content={item.content} link={item.link} key={item.link} />
          ))}
        </div>
      ) : (
        <div>Загружается</div>
      )}
    </div>
  )
}

export default StockList
