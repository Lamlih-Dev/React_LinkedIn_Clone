import React from 'react'
import "./SidebarBottom.css"

const SidebarBottom = () => {
  return (
    <div className='sidebar-bottom'>
      <div className="top-side">
        <a href="#">Groupes</a>
        <div className="events">
          <a href="#">Events</a>
          <span>+</span>
        </div>
        <a href="#">Followed Hashtags</a>
      </div>
      <div className="bottom-side">
        <p>Discover more</p>
      </div>
    </div>
  )
}

export default SidebarBottom