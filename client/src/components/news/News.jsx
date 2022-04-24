import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link } from 'react-router-dom'
import "./news.css"

const News = (props) => {
  return (
    <div className="card">
      <div className="press">
        <b>{props.title}</b>
      </div>
      <div className="content">{props.content}</div>
      <div className='source'>Источник:
      <NavLink to ={props.link}  >
        {props.link}
      </NavLink>
      </div>
    </div>
  )
}

export default News
