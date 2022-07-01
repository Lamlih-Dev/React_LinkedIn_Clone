import React from 'react'
import './Sidebar.css'
import SidebarTop from './sidebar-top/SidebarTop'
import SidebarBottom from './sidebar-bottom/SidebarBottom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarTop />
        <SidebarBottom />
    </div>
  )
}

export default Sidebar