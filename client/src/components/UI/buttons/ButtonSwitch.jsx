import React from 'react'

const ButtonSwith = ({ name, ...props }) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {name}
    </button>
  )
}

export default ButtonSwith
