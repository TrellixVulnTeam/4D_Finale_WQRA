const axios = require('axios')
const config = require('config')

class currencyService {
  async getCurrencyExchangeRate(fromCurrency, toCurrency) {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}${config.get(
          'apiKey'
        )}`
      )
      const exchangeRate = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
      return exchangeRate
    } catch (e) {
      console.log(e)
      return { message: 'Could not get exchange rate' }
    }
  }
}

module.exports = new currencyService()
