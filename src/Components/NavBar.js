import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLinks = styled.nav`
    display: flex;
    gap: 20px;
    align-items: center;
    text-decoration: none;
    
    @media (max-width: 1024px) {
        gap: 15px;
  }

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 8px;
        width: 100%;
        align-items: center;
  }`

const NavLink = styled(Link)`
    color: #000b58;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 10px;
        
    &:hover {
        background-color: #ffffff;
        order-radius: 5px;
     }
     
    @media (max-width: 1024px) {
        font-size: 16px;
        padding: 4px 8px;
  }

    @media (max-width: 767px) {
        font-size: 14px;
        padding: 3px 6px;
        width: 100%;
        text-align: center;
  }`

const NavBar = () => {
    return (
        <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mailbox-rental">Mailbox Rental</NavLink>
            <NavLink to="/notary">Notary Services</NavLink>
            <NavLink to="/shipping">Worldwide Shipping</NavLink>
            <NavLink to="/business">Business Solutions</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
        </NavLinks>
            )
        }

 export default NavBar