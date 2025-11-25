"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"
import logo from "../../../public/images/HarmonyLog.png"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

   const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
    // Close mobile menu after clicking a link
  }




  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/dashboard">
            <img src={logo || "/placeholder.svg"} alt="" />
          </Link>
        </div>

        <div className="header-actions">
          <Link to="/" className="docs-link" onClick={() => scrollToSection("home-section")}
>
            Home
          </Link>
          <Link to="/" className="docs-link"  onClick={() => scrollToSection("about-section")}>
            About Us
          </Link>
          <Link to="/" className="docs-link" onClick={() => scrollToSection("how-it-works-section")}>
            How it works
          </Link>
          <Link to="/" className="docs-link"  onClick={() => scrollToSection("values-section")}>
            Values
          </Link>
          <button className="notification-button" onClick={() => scrollToSection("join-section")}>
             Join
          </button>
         
        </div>

        <button className="mobile-menu-toggle" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu">
           <Link to="/" className="docs-link"   onClick={() => scrollToSection("home-section")}>
            Home
          </Link>
          <Link to="/" className="docs-link" onClick={() => scrollToSection("about-section")}>
            About Us
          </Link>
          <Link to="/" className="docs-link" onClick={() => scrollToSection("how-it-works-section")}>
            How it works
          </Link>
          <Link to="/" className="docs-link" onClick={() => scrollToSection("values-section")}>
            Values
          </Link>
          <button className="notification-button" onClick={() => scrollToSection("join-section")}>
             Join
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
