import axios from 'axios'
const serverAddress = 'https://afternoon-gorge-59782.herokuapp.com'
// const serverAddress = 'http://localhost:5000'

export const getNews = async (link) => {
  try {
    const res = await axios.get(`${serverAddress}/news?link=${link}`)
    return res.data
  } catch (e) {
    console.log(e)
  }
}
