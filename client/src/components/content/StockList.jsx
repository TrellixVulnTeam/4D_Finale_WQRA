import React, { useEffect, useState } from 'react'
import './stocklist.css'
import News from '../news/News.jsx'
import { getNews } from '../../actions/news.js'
import CheckBox from '../UI/checkBox/CheckBox'

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
    <div className="main_page">
      <div className="title">{props.title}</div>
      <div className="wrapper">
      <div className="container1">
        <div className="filter__status">
          <div style={{ fontSize: '30px' }}>Категории</div>
          <div className="status__checkbox">
            <div className="check1">
              <CheckBox className="checkbox" />
              <div>Политика</div>
            </div>
            <div className="check2">
              <CheckBox className="checkbox" />
              <div>Ценные бумаги</div>
            </div>
            <div className="check3">
              <CheckBox className="checkbox" />
              <div>Валютный рынок</div>
            </div>
          </div>
        </div>
        <div className="filter__button">
          <div className="button button__normal">Найти</div>
        </div>
      </div>

      <div className='container2'>
        {/* <div> */}
          {news.length != 0 ? (
            <div className='list'>
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
        {/* </div> */}
      </div>

      <div className='container3'>
        <div className="form">
         <div className="login">
           <div>Логин</div>
           <input></input>
         </div>
         <div className="password">
           <div>Пароль</div>
           <input></input>
         </div>
         <div className="give_roles">
           <div>Назначить роли</div>
           <div className="status__checkbox">
             <div className="check1">
               <CheckBox className="checkbox" />
               <div>Читатель</div>
             </div>
             <div className="check2">
               <CheckBox className="checkbox" />
               <div>Клиент</div>
             </div>
             <div className="check3">
               <CheckBox className="checkbox" />
               <div>Администратор</div>
             </div>
           </div>
         </div>
         <div className="filter__button">
           <div className="button button__normal">Создать</div>
         </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default StockList
