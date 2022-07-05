import React from 'react'
import TopWidget from "./top-widget/TopWidget"
import BottomWidget from "./bottom-widget/BottomWidget"
import FullLogo from "../../images/full-logo.svg"
import "./Widgets.css"

const Widgets = () => {
  return (
    <div className='widgets'>
        <TopWidget />
        <div className="sticky">
          <BottomWidget />
          <div className="footer">
            <div>
              <a href="/">About</a>
              <a href="/">Accessibility</a>
              <a href="/">Help Center</a>
            </div>
            <div>
              <a href="/">Privacy &amp; Terms</a>
              <a href="/">Ad Choices</a>
            </div>
            <div>
              <a href="/">Advertising</a>
              <a href="/">Bussiness Services</a>
            </div>
            <div>
              <a href="/">Get the LinkedIn app</a>
              <a href="/">More</a>
            </div>
            <p className='copyrighy'>
              <img src={FullLogo} alt="logo" width="60px"/>
              LinkedIn Corporation © 2022
            </p>
          </div>
        </div>
    </div>
  )
}

export default Widgets