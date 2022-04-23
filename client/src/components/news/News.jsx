import React from 'react'
import { NavLink } from 'react-router-dom'

const News = (props) => {
  return (
    <div className="wrapper">
      <div className="title">
        <b>{props.title}</b>
      </div>
      <div className="content">{props.content}</div>
      <NavLink to={props.link} className="source">
        {props.link}
      </NavLink>
    </div>
  )
}

export default News
