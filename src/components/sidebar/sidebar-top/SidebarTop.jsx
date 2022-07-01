import React from 'react'
import Avatar from '../../../images/avatar.jpg'
import Cover from '../../../images/cover.jfif'
import TryPremium from '../../../images/tryPremium.svg'
import Items from '../../../images/items.svg'
import "./SidebarTop.css"

const SidebarTop = () => {
  return (
    <div className='sidebar-top'>
        <div className="header">
            <img className='sidebar-top-cover' src={Cover} alt="" />
            <img className='sidebar-top-avatar' src={Avatar} alt="" />
            <h3>
                <a href="#">Ahmed Lamlih</a>
            </h3>
            <p>Front-end Web Developer</p>
        </div>
        <div className="stats">
            <div className="stat">
                <p>Who's viewed your profile</p>
                <p className='stat-number'>78</p>
            </div>
            <div className="stat">
                <p>Impression of your post</p>
                <p className='stat-number'>436</p>
            </div>
        </div>
        <div className="premium">
            <p>Access exclusive tools &amp; insights</p>
            <div className="try-premium">
                <img src={TryPremium} alt="icon" width="17px" height="17px" />
                <p>Try Premium for free</p>
            </div>
        </div>
        <div className="items">
            <img src={Items} alt="icon" />
            <p>My items</p>
        </div>
    </div>
  )
}

export default SidebarTop