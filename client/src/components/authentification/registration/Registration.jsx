import React from 'react'
import { useState } from 'react'
import './registration.css'
import Input from '../../UI/input/Input'
import { registration } from '../../../actions/user'
import '../../UI/input/input.css'
import ModalBoxDeposit from '../../UI/ModalBox/ModalBoxDeposit'
import { useDispatch } from 'react-redux'
import { login } from '../../../actions/user'

const Registration = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [modalBoxDeposit, setmodalBoxDeposit] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className="registration">
      <ModalBoxDeposit visible={modalBoxDeposit} setVisible={setmodalBoxDeposit}>
        <div className="reg_pop_up">
          <div>Не удалось зарегистрироваться. Проверьте корректность данных</div>
        </div>
      </ModalBoxDeposit>

      <div className="registration__header">Регистрация</div>

      <div className="registration__input_name">Имя пользователя</div>
      <div className="registration__input">
        <Input className="auth" value={username} setValue={setUsername} type="text" placeholder="Username" />{' '}
      </div>
      <div className="registration__input_name">Придумайте пароль</div>
      <div className="registration__input">
        <Input className="auth" value={password} setValue={setPassword} type="password" placeholder="********" />{' '}
      </div>
      <div className="registration__input_name">Повторите пароль</div>
      <div className="registration__input">
        <Input
          className="auth"
          value={repeatPassword}
          setValue={setRepeatPassword}
          type="password"
          placeholder="********"
        />
      </div>
      <button
        className="button button__normal registration__button"
        onClick={async () => {
          if (password === repeatPassword) {
            const res = await registration(username, password)

            if (res === 'Пользователь был успешно зарегистрирован') dispatch(login(username, password))

            props.sVisible(false)
          } else setmodalBoxDeposit(true)
        }}
      >
        Зарегистрироваться
      </button>
    </div>
  )
}

export default Registration
