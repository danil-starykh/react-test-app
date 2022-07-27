import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
      const { isAuth, setIsAuth } = useContext(AuthContext);

      const login = (event) => {
            event.preventDefault();
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
      }

      return (
            <>
                  <h1 style={{ marginBottom: '10px' }}>Войти в аккаунт</h1>
                  <form onSubmit={login}>
                        <MyInput type="text" placeholder='Введите логин'/>
                        <MyInput type="password" placeholder='Введите пароль'/>
                        <MyButton style={{ marginTop: '10px' }}>Войти</MyButton>
                  </form>
            </>
      )
}

export default Login