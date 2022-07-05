import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Header.css"
import HeaderItem from './headerItem/HeaderItem'
import Logo from "../../images/logo.svg"
import Search from "../../images/search.svg"
import TryPremium from '../../images/tryPremium.svg'
import { logout, selectUser } from "../../features/userSlice"
import { auth } from "../../firebase"

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(()=>{
        const dropdown = document.getElementById("dropdown-menu");
        if(dropdown){
            dropdown.classList.remove("visible");
        }
    }, [])

    const showDropDownMeny = (e) =>{
        e.preventDefault();
        const dropdown = document.getElementById("dropdown-menu");
        dropdown?.classList.toggle("visible");
    }

    const logoutOfApp = () =>{
        dispatch(logout());
        auth.signOut();
    }

    return (
        <nav>
            <div className="container">
                <div class="mynavbar text-center">
                    <div className="left-side">
                        <div className='logo-search-container'>
                            <a class="navbar-brand" href="/">
                                <img src={Logo} alt="logo-icon" />
                            </a>
                            <form class="d-flex header-form" role="search">
                                <img src={Search} alt="search-icon" />
                                <input class="nav-search form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                        <div class="navbar-nav">
                            <HeaderItem 
                                customLinkClass="nav-link search"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path></svg>}
                                title="Search"
                            />
                            <HeaderItem 
                                customLinkClass="nav-link active"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path></svg>}
                                title="Home"
                            />
                            <HeaderItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path></svg>}
                                title="My Network"
                            />
                            <HeaderItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path></svg>}
                                title="Jobs"
                            />
                            <HeaderItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path></svg>}
                                title="Messaging"
                            />
                            <HeaderItem 
                                notifications="3"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path></svg>}
                                title="Notifications"
                            />
                            <a className="nav-link" onClick={showDropDownMeny} href="/">
                                <img src={user.photoURL} className="avatar" alt="avatar" width="24" height="24"/>
                                <div className="content">
                                    <span className='nav-title'>Me</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div id="dropdown-menu" className="dropdown-menu visible">
                                    <div className="dropdown-header">
                                        <div className="top-side">
                                            <img src={user.photoURL} className="avatar" alt="avatar" width="55" height="55"/>
                                            <div className="dropdown-header-infos">
                                                <h2>{user.displayName}</h2>
                                                <p>Front-end Web Developer</p>
                                            </div>
                                        </div>
                                        <a href='/'>View Profile</a>
                                    </div>
                                    <hr />
                                    <div className="dropdown-account">
                                        <h2>Account</h2>
                                        <div className="try-premium">
                                            <img src={TryPremium} alt="icon" width="17px" height="17px" />
                                            <p>Try Premium for free</p>
                                        </div>
                                        <p>Settings &amp; Privacy</p>
                                        <p>Help</p>
                                        <p>Language</p>
                                    </div>
                                    <hr />
                                    <div className="dropdown-manage">
                                        <h2>Manage</h2>
                                        <p>Post &amp; Activity</p>
                                        <p>Job Posting Account</p>
                                    </div>
                                    <hr />
                                    <p className='sign-out' onClick={logoutOfApp}>Sign Out</p>
                                </div>
                            </a>
                            <HeaderItem 
                                customLinkClass="nav-link show-right-menu"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path></svg>}
                            />
                        </div>
                    </div>
                    <div className="right-side">
                        <div class="navbar-nav">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                                </svg>
                                <div className="content">
                                    <span className='nav-title'>Work</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </a>
                            <a className="nav-link premium" href="#">
                                <span>Get Hired Faster, <br /> Try Premium Free</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header