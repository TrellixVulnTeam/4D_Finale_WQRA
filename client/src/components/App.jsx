import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './UI/navbar/Navbar.jsx'
import './App.css'
import Footer from './UI/footer/Footer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../actions/user.js'
import { useEffect } from 'react'
import News from './news/News.jsx'
import { getNews } from '../actions/news.js'

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

  // console.log(news)
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
        {/*  */}
        {news.length != 0 ? (
          <div>
            {news[0].items.map((item) => (
              <News title={item.title} content={item.content} link={item.link} key={item.title} />
            ))}
            {/* <News title={news[0].items[0].title} content={news[0].items[0].content} /> */}
          </div>
        ) : (
          <div>Загружается</div>
        )}

        {/* <Routes>
          <Route path="/" element={<Navigate to="/stocks" />}></Route>
          <Route />
          <Route path="/stocks" element={<StockList title="Каталог акций" />} /> */}
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
          {isAuth && (
            <Routes>
              {/* <Route path="/" element={<Navigate to="/stocks" />}></Route> */}
        {/* <Route />
              <Route path="/stocks" element={<StockList title="Каталог акций" />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wallet" element={<WalletList/>}/>
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
          )}  */}
        <Footer />
      </div>
    </BrowserRouter>
    // </SearchContext.Provider>
  )
}

export default App
