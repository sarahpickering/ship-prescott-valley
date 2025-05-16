import React from 'react'
import styled from 'styled-components'
import logo from '../assets/IMG_3721.PNG'
import NavBar from './NavBar'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 40px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    `;

    const Logo = styled.img`
    height: 250px;
    width: auto;
    margin-right: 40px;
    `;



const Header = () => {
    return (
      <HeaderContainer>
        <Logo src={logo} alt="Ship Prescott Valley logo" />
        <NavBar />
      </HeaderContainer>
    );
  };

export default Header;