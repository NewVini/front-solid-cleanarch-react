import Styles from './login-header-styles.scss'
import React, { memo } from 'react'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <h1>Vini - Enquetes para programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
