import React, { useEffect, useState } from 'react'
import './account.css'
import Account_containerItem from './Account_containerItem.jsx'
import CheckBox from '../UI/checkBox/CheckBox'
import Panel from '../panel/Panel'
import '../content/stocklist.css'
import Stock from '../stocks/Stock'
import { getUsers } from '../../actions/user'
import { store } from '../../reducers/index'
import { setUser } from '../../reducers/userReducer'
import { manageRoles } from '../../actions/roles'

const Account = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers()
  }, [])

  async function getAllUsers() {
    const data = await getUsers()
    console.log(data)
    setUsers(data)
  }

  async function giveRoles(username, roles) {
    const response = await manageRoles(username, roles)
  }

  const user = store.getState(setUser).user.currentUser

  return (
    <div className="account">
      {user.roles.includes('admin') ? (
        <div>
          <div className="title">{props.title}</div>
          <div className="wrapper">
            <div className="container1">
              <div className="filter__status">
                <div style={{ fontSize: '30px' }}>Статус</div>
                <div className="status__checkbox">
                  <div className="check1">
                    <CheckBox className="checkbox" />
                    <div>Разрешен</div>
                  </div>
                  <div className="check2">
                    <CheckBox className="checkbox" />
                    <div>Заблокирован</div>
                  </div>
                </div>
              </div>
              <div className="filter__roles">
                <div style={{ fontSize: '30px' }}>Роли</div>
                <div className="status__checkbox">
                  <div className="check1">
                    <CheckBox className="checkbox" />
                    <div>Читатель</div>
                  </div>
                  <div className="check2">
                    <CheckBox className="checkbox" />
                    <div>Клиент</div>
                  </div>
                  <div className="check3">
                    <CheckBox className="checkbox" />
                    <div>Администратор</div>
                  </div>
                </div>
              </div>
              <div className="filter__balance">
                <div style={{ fontSize: '30px' }}>Баланс</div>
                <div className="min_max">
                  <div className="input12">
                    <div>От</div>
                    <input className="checkbox" />
                  </div>
                  <div className="input12">
                    <div>До</div>
                    <input className="checkbox" />
                  </div>
                </div>
              </div>
              <div className="filter__button">
                <div className="button button__normal">Найти</div>
              </div>
            </div>

            <div className="container2">
              <div className="list">
                {/* <Sorting /> */}
                <Panel className="panel" />
                {/* {isStocksLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>Акции загружаются...</div>
              ) : (
                <></>
              )} */}
                {/* {stocks && stocks.map((stock) =>  */}
                {/* <Stock stock={users} buttonText="Купить" /> */}
                {users.length != 0 ? (
                  <div>
                    {users.map((user, index) => (
                      <Stock index={index} user={user} key={user.username} />
                    ))}
                  </div>
                ) : (
                  <div>Загружается</div>
                )}
              </div>
            </div>
            <div className="container3">
              <div className="form">
                <div className="login">
                  <div>Логин</div>
                  <input></input>
                </div>
                <div className="password">
                  <div>Пароль</div>
                  <input></input>
                </div>
                <div className="give_roles">
                  <div>Назначить роли</div>
                  <div className="status__checkbox">
                    <div className="check1">
                      <CheckBox className="checkbox" />
                      <div>Читатель</div>
                    </div>
                    <div className="check2">
                      <CheckBox className="checkbox" />
                      <div>Клиент</div>
                    </div>
                    <div className="check3">
                      <CheckBox type="admin" check="" className="checkbox" />
                      <div>Администратор</div>
                    </div>
                  </div>
                </div>
                <div className="filter__button">
                  <div className="button button__normal">Создать</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="header">Профиль</div>
          {/* <div className='container4'> */}
          <Account_containerItem />
        {/* </div> */}
        </div>
      )}
    </div>
  )
}

export default Account
