import React from 'react'

const HeaderItem = ({ customLinkClass, icon, title, notifications }) => {

  const activeStatus = (e) => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      if(link.classList.contains("active")){
        link.classList.remove("active");
      }
    });
    e.currentTarget.classList.add("active")
  }

  return (
    <a className={customLinkClass ? customLinkClass : "nav-link"} href="#" onClick={activeStatus}>
        {notifications &&  <span className='notifications'>{notifications}</span>}
        {icon && icon}
        {title && <span className='nav-title'>{title}</span>}
    </a>
  )
}

export default HeaderItem