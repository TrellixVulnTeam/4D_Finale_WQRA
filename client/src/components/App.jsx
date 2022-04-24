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
import StockList from './content/StockList'
import Account from './account/Account'
import WalletList from './wallet/WalletList'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

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
        {!isAuth && (
          <Routes>
            <Route path="/" element={<Navigate to="/news" />} />
            <Route path="/news" element={<StockList title="Каталог акций" />} />
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
            <Route path="/" element={<Navigate to="/news" />} />
            <Route path="/news" element={<StockList title="Каталог акций" />} />
            <Route path="/account" element={<Account title1="Пользователи" title2="Новости" title3="Валюта" />} />
            <Route path="/wallet" element={<WalletList />} />
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
        <Footer />
      </div>
    </BrowserRouter>
    // </SearchContext.Provider>
  )
}

export default App
