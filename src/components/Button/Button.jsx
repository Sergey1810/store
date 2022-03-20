import classNames from 'classnames'
import React from 'react'
import './Button.css'

export const Button = ({children,onClick,type,size='s'}) => {
    const btnClass = classNames ({
        'btn':true,
        'btn--secondary':type ==='secondary',
        'btn--primary':type ==='primary',
        'btn--small':size ==='s',
        'btn--medium':size ==='m',
    })
  return (
    <button className = {btnClass} onClick = {onClick}>
     {children}
    </button>
  )
}

