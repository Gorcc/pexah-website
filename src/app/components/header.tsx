"use client"

import React, { useState } from 'react'
import { User, Menu, X } from 'lucide-react'
import "./header.scss"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className='header-container'>
        <div className="header-left logo">Pexah</div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`header-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="" className='header-right-item dropdown'>Who we serve <span className="dropdown-icon">▼</span></a>
            <a href="" className='header-right-item dropdown'>Guide <span className="dropdown-icon">▼</span></a>
            <a href="" className='header-right-item'>Integrate</a>
            <a href="" className='header-right-item'>Referrals</a>
            <a href="" className='header-right-item'>About us</a>
            <button className='login-btn'>
                <User size={16} />
                Log in
            </button>
            <button className='get-started-btn'>Get started</button>
        </div>
    </div>
  )
}

export default Header