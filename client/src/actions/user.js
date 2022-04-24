import axios from 'axios'
import { setUser } from '../reducers/userReducer'
const serverAddress = 'https://afternoon-gorge-59782.herokuapp.com'
// const serverAddress = 'http://localhost:5000'

export const registration = async (username, password) => {
  try {
    const response = await axios.post(`${serverAddress}/auth/registration`, {
      username,
      password,
    })
    return response.data.message
  } catch (e) {
    console.log(e)
    alert(e.response.data.message)
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${serverAddress}/auth/login`, {
        username,
        password,
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('stonksToken', response.data.token)
    } catch (e) {}
  }
}

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${serverAddress}/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('stonksToken')}` },
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('stonksToken', response.data.token)
    } catch (e) {
      localStorage.removeItem('stonksToken')
    }
  }
}

export const getUsers = async () => {
  try {
    const response = await axios.get(`${serverAddress}/auth/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('stonksToken')}` },
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}
