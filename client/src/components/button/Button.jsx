import React from 'react'

const Button = ({type, name, className}) => {
  return (
    <button type={type} className={`${className} border p-2 mx-auto`}>{name}</button>
  )
}

export default Button