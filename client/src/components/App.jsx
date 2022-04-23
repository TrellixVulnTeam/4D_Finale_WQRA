import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './UI/navbar/Navbar.jsx'
import './App.css'
import Footer from './UI/footer/Footer.jsx'
import StockList from './content/StockList.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../actions/user.js'
import { useEffect } from 'react'
import Account from "./account/Account"
import { SearchContext } from '../context/index.js'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  console.log(search)

  useEffect(() => {
    dispatch(auth())
  }, [])

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
              <Route path="/" element={<Navigate to="/stocks" />}></Route>
              <Route />
              <Route path="/stocks" element={<StockList title="Каталог акций" />} />

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
              <Route />
              <Route path="/stocks" element={<StockList title="Каталог акций" />} />
              <Route path="/account" element={<Account />} />
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
