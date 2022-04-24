import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './UI/navbar/Navbar.jsx'
import './App.css'
import Footer from './UI/footer/Footer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../actions/user.js'
import { useEffect } from 'react'
import StockList from './content/StockList'
import Account from './account/Account'
import { SearchContext } from '../context/index.js'
import WalletList from './wallet/WalletList'
import Currency from './currency/Currency.jsx'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  // console.log(news)
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      <BrowserRouter>
        <div className="app">
          <Navbar />
          {!isAuth && (
            <Routes>
              <Route path="/" element={<Navigate to="/news" />} />
              <Route path="/news" element={<StockList title="Новости" />} />
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
              <Route path="/news" element={<StockList title="Новости" />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wallet" element={<WalletList title1="Ваш баланс" title2="История операций"/>} />
              <Route path="/currency" element={<Currency />} />
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
    </SearchContext.Provider>
  )
}

export default App
