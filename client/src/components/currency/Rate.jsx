import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./rate.css"
// const serverAddress = 'https://gentle-sea-62964.herokuapp.com'
// const serverAddress = 'http://localhost:5000'

const Rate = (props) => {
  return (
    <div className='rate'>
      <div className='curr'>{props.currency}</div>
      <div>{props.value}</div>
    </div>
  )
}

export default Rate
