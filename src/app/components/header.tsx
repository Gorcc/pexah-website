import React from 'react'
import { User } from 'lucide-react'
import "./header.scss"

const header = () => {
  return (
    <div className='header-container'>
        <div className="header-left logo">Pexah</div>
        <div className="header-right">
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

export default header