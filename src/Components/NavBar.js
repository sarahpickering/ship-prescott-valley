import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLinks = styled.nav`
    display: flex;
    justify-content: center;
    gap: 20px;
    background-color: #ffffff;
    padding: 10px;
    color: #021635;
    font-weight: 500;
    text-decoration: none`

    const NavLink = styled(Link)`
        color: #021635;
        text-decoration: none;
        font-size: 18px;
        padding: 10px 15px;
        
        &:hover {
            background-color: #ffffff;
            border-radius: 5px;
        }`

        const NavBar = () => {
            return (
                <NavLinks>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/mailboxrental">Mailbox Rental</NavLink>
                    <NavLink to="/notary">Notary Services</NavLink>
                    <NavLink to="/shipping">Worldwide Shipping</NavLink>
                    <NavLink to="/business">Business Solutions</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                </NavLinks>
            )
        }

        export default NavBar