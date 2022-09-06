import React from 'react'
import "./CSS/HeaderOption.css"

function HeaderOption({Icon, title, onClick}) { 
  return (
    <div className='headerOption'>
        {Icon && <Icon onClick = {onClick} className="headerOption__icon" /> }

        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption;