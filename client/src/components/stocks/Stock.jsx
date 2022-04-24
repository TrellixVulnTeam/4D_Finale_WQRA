import React, { useEffect, useState } from 'react'
import Less from '../../assets/Icons/DashCircle.svg'
import More from '../../assets/Icons/PlusCircle.svg'
import ArrowDown from '../../assets/Icons/angle_down.svg'
import ArrowUp from '../../assets/Icons/angle_up.svg'
import './stock.css'
import '../UI/buttons/buttons.css'
import Graph_panel from '../grahp-panel/Graph_panel'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../reducers/userReducer'
import axios from 'axios'
const serverAddress = 'https://gentle-sea-62964.herokuapp.com'
// const serverAddress = 'http://localhost:5000'

const Stock = ({ user, index }) => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (!props.stock.quantity) setslashString('')
  //   else setslashString(`/${props.stock.quantity}`)
  // }, [])

  const [counter, setCounter] = useState(1)
  const [slashString, setslashString] = useState('')
  const [GP, setGP] = useState(false)

  // const sellStock = (id, quantity) => {
  //   return async (dispatch) => {
  //     try {
  //       const response = await axios.delete(`${serverAddress}/api/auth/stock/?id=${id}&quantity=${quantity}`, {
  //         headers: { Authorization: `Bearer ${localStorage.getItem('stonksToken')}` },
  //       })
  //       dispatch(setUser(response.data.user))
  //       alert(response.data.message)
  //     } catch (e) {
  //       alert(e.response.data.message)
  //     }
  //   }
  // }

  return (
    <div>
      <div className="number">{index}</div>
      <div className="stock">
        <div className="stock__name">{user.username}</div>

        <div className="stock__date">{user.date}</div>

        <button
          onClick={() => {
            if (GP) setGP(false)
            else setGP(true)
          }}
          className="stock__arrow"
        >
          {GP && <img src={ArrowDown} alt="arrowDown_img" className="arrowDown_img" />}
          {!GP && <img src={ArrowUp} alt="arrowUp_img" className="arrowUp_img" />}
        </button>
      </div>
      {GP && <Graph_panel user={user} />}
    </div>
  )
}

export default Stock
