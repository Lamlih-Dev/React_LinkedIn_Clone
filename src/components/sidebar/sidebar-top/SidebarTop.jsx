import React, { useEffect, useState } from 'react'
import Cover from '../../../images/cover.jfif'
import TryPremium from '../../../images/tryPremium.svg'
import Items from '../../../images/items.svg'
import "./SidebarTop.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'

const SidebarTop = () => {
    const user = useSelector(selectUser);

  return (
    <div className='sidebar-top'>
        <div className="header">
            <img className='sidebar-top-cover' src={Cover} alt="" />
            <img className='sidebar-top-avatar' src={user.photoURL} alt="" />
            <h3>
                <a href="#">{user.displayName}</a>
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