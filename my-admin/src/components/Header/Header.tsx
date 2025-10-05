"use client"

import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"
import {  Bell, LogOut } from "react-feather"
import { useAuth } from "../../context/AuthContext"
import "./Header.scss"
import logo from "../../assets/HarmonyLog.png"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/dashboard">
            <img src={logo || "/placeholder.svg"} alt="Lendsqr" />
          </Link>
        </div>

        <div className="header-actions">
          <Link to="/docs" className="docs-link">
            Home
          </Link>
          <Link to="/docs" className="docs-link">
            About Us
          </Link>
          <Link to="/docs" className="docs-link">
            How it works
          </Link>
          <Link to="/docs" className="docs-link">
            Values
          </Link>
          <button className="notification-button">
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
          <Link to="/docs" className="mobile-menu-item">
            Docs
          </Link>
          <div className="mobile-menu-item notification">
            <Bell size={20} />
            <span>Notifications</span>
          </div>
          <div className="mobile-menu-item profile">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <span>{user?.name || "User"}</span>
          </div>
           <div className="mobile-menu-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
