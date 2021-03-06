import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { FormStatus, Input, Footer, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: ''
  })
  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, errorState } }>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" id="" />
          <Input type="password" name="password" placeholder="Digite sua senha" id="" />
          <button data-testid="submit" disabled type="submit" className={Styles.submit}>Entrar</button>
          <span className={Styles.link}>Cadastrar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
