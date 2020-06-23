import axios from 'axios'

const BASE_URL = 'https://www.alphavantage.co'
const API_URL_DATA = BASE_URL + '/query?function=TIME_SERIES_DAILY&apikey=6NQ84CAJ1T1RHQC4'
const API_URL_SYMBOLS = BASE_URL + '/query?function=SYMBOL_SEARCH&apikey=6NQ84CAJ1T1RHQC4'

class DataService {
  getData (symbol) {
    return axios.get(API_URL_DATA + '&symbol=' + symbol)
  }

  autoComplete (keyword) {
    return axios.get(API_URL_SYMBOLS + '&keywords=' + keyword)
  }
}

export default new DataService()
