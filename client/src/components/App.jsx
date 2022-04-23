import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './UI/navbar/Navbar.jsx'
import './App.css'
import Footer from './UI/footer/Footer.jsx'
// import StockList from './content/StockList.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../actions/user.js'
import { useEffect } from 'react'
import { getNews } from '../actions/news.js'
// import parser from '../utils/parser.js'
// import Parser from 'rss-parser'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const [news, setNews] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth())
    getAllNews()
  }, [])

  const resources = [
    'http://static.feed.rbc.ru/rbc/logical/footer/news.rss',
    'https://ria.ru/export/rss2/archive/index.xml',
  ]

  const getAllNews = async () => {
    const data = await Promise.all(
      resources.map(async (item, index) => {
        let response = await getNews(item)
        const title = response.title
        const link = response.link
        const data = response.items
        const items = await data.map((item, index) => {
          return {
            // number: index + 1,
            title: item.title,
            content: item.content,
          }
        })
        console.log(title)
        console.log(link)
        console.log(items)
        return { title, link, items }
      })
    )
    console.log(data)
    return data
  }

  news = [
    {
      items: [
        {
          title: 'В Госдепе отказались отвечать на вопрос о визите Блинкена в Киев',
          content:
            'Госдепартамент США отказался комментировать заявле…ретарь США Энтони Блинкен посетит Киев 24 апреля.',
        },
        {
          title: 'Зеленский сообщил о визите Блинкена и Остина в Киев',
          content:
            'Глава Госдепа США Энтони Блинкен и глава Миноборон…о возможности их визита сообщало издание Politico',
        },
      ],
      title: 'www.rbc.ru',
      link: 'https://www.rbc.ru',
    },
  ]

  return (
    // <SearchContext.Provider
    //   value={{
    //     search,
    //     setSearch,
    //   }}
    // >
    <BrowserRouter>
      <div className="app">
        <Navbar />
        {news &&
          news.forEach((element) => {
            element.items.map((element) => <div key={element.title}> {element.content} </div>)
          })}
        {/* {!isAuth && (
            <Routes> */}
        {/* <Route path="/" element={<Navigate to="/stocks" />}></Route>
              <Route />
              <Route path="/stocks" element={<StockList title="Каталог акций" />} /> */}
        {/* 
              <Route
                path="*"
                element={
                  <div className="page404__container">
                    <p className="page404_num">404</p>
                    <p className="page404">There's nothing here!</p>
                  </div>
                }
              />
            </Routes>
          )}
          {isAuth && ( */}
        {/* <Routes> */}
        {/* <Route path="/" element={<Navigate to="/stocks" />}></Route> */}
        {/* <Route /> */}
        {/* <Route path="/stocks" element={<StockList title="Каталог акций" />} /> */}
        {/* <Route path="/account" element={<Account />} />
              <Route
                path="*"
                element={
                  <div className="page404__container">
                    <p className="page404_num">404</p>
                    <p className="page404">There's nothing here!</p>
                  </div>
                }
              />
            </Routes>
          )} */}
        <Footer />
      </div>
    </BrowserRouter>
    // </SearchContext.Provider>
  )
}

export default App
