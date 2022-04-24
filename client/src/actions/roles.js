import axios from 'axios'
const serverAddress = 'https://afternoon-gorge-59782.herokuapp.com'
// const serverAddress = 'http://localhost:5000'

export const manageRoles = async (username, roles) => {
  try {
    const res = await axios.post(
      `${serverAddress}/roles/add`,
      { username, roles },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('stonksToken')}` },
      }
    )
    return res.data
  } catch (e) {
    console.log(e)
  }
}
