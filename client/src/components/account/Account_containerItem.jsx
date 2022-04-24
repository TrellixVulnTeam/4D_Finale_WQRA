import React from 'react'
import { setUser } from '../../reducers/userReducer'
import './account_containerItem.css'
import { store } from '../../reducers/index'

const Account_containerItem = (props) => {
  const user = store.getState(setUser).user.currentUser
  const UserPhone = '8(999)123-45-67'
  const UserDate = '12.12.1990'
  return (
    <div className="account_container">
      <div className='field'>
        <div className="account_inf">User name</div>
        <div className="account_userInf">{user.email}</div>
      </div>

      <div className='field'>
        <div className="account_inf">Номер телефона</div>
        <div className="account_userInf">{UserPhone}</div>
      </div>

      <div className='field'>
        <div className="account_inf">Дата рождения</div>
        <div className="account_userInf">{UserDate}</div>
      </div>
    </div>
  )
}

export default Account_containerItem
