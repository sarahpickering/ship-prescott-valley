import React from 'react'
import logo from '../assets/IMG_3721.PNG'

const Header = () => {
    return (
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '200px' }} />
      </header>
    )
  }

export default Header;