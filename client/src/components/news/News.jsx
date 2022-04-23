import React from 'react'

const News = (props) => {

    return(
        <div className='wrapper'>
            <div className='title'>{props.title}</div>
            <div className='content'>{props.content}</div>
            <NavLink to={props.link} className="source">{props.link}</NavLink>
        </div>
    )
}

export default News