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
        <a>
          <button 
            type={type} 
            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 ${btnClassName}`} 
            onClick={onClick}
          >
            {text}
            {icon}
          </button>
        </a>
      )
      }
    </div>
  )
}

export default Button
