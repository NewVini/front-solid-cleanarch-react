import React from 'react'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <h1>Vini - Enquetes para programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" id="" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" id="" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button type="submit" className={Styles.submit}>Entrar</button>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Login
