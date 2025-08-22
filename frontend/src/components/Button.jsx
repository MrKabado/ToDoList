import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, type, text, icon, divClassName, btnClassName, onClick}) => {
  return (
    <div className={divClassName}>
      {to ? 
      (
        <Link to={to} className={btnClassName}>
          {text}
          {icon}
        </Link>
      ) 
      :    
      (
        <button type={type} className={btnClassName} onClick={onClick}>
          {text}
          {icon}
        </button>
      )
      }
    </div>
  )
}

export default Button
