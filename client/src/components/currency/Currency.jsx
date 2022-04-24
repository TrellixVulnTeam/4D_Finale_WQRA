import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rate from './Rate'
import "./currency.css"
// const serverAddress = 'https://gentle-sea-62964.herokuapp.com'
// const serverAddress = 'http://localhost:5000'

const Currency = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRates()
  }, [])

  async function getRates() {
    setIsLoading(true)
    const response = await axios.get(
      'http://data.fixer.io/api/latest?access_key=67f47ce4a2f709ad42d462eae9fc17c5&symbols=USD,RUB,CNY,CAD,MXN&format=1'
    )
    setData({
      base: response.data.base,
      currency: Object.keys(response.data.rates),
      value: Object.values(response.data.rates),
    })
    setIsLoading(false)
    return {
      base: data.base,
      currency: Object.keys(data.rates),
      value: Object.values(data.rates),
    }
  }

  return (
    <div>
      {isLoading === false ? (
        <div className="svodka_valut">
          <Rate currency={data.base} value="1"/>
          {data.currency.map((rate, index)  => (
            <Rate currency={data.currency[index]} value={Number(data.value[index])} key={rate} />
          ))}
        </div>
      ) : (
        <div>Загружается</div>
      )}
    </div>
  )
}

export default Currency
