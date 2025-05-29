import React from 'react'

const Button = ({type, name, className, onClick}) => {
  return (
    <button onClick={onClick} type={type} className={`${className}`}>{name}</button>
  )
}

export default Button