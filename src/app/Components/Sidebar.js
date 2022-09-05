import React from 'react'
import './CSS/Sidebar.css'
function Sidebar() {
   const recentItem = (topic) => (
    <div className="sidebar__recentItem"> 
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
    </div>
   )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <h2 className=''>Shimil T</h2>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className='sidebar__statNumber' >250</p>
          
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className='sidebar__statNumber'>200</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('programming')}
        {recentItem('wed developer')}
        {recentItem('design')}
        {recentItem('figma')}
        {recentItem('software developer')}
      </div>

    </div>
  )
}

export default Sidebar;