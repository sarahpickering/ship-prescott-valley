import React from 'react';
import styled from 'styled-components';
import logo from '../assets/SPV.PNG';
import NavBar from './NavBar';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 0.05rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 100px; 

 
  @media (max-width: 1024px) {
    padding: 8px 15px;
    margin: 0.05rem 0.5rem;
    max-height: 80px;
  }

  
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 5px 10px;
    margin: 0.05rem 0.25rem;
    text-align: center;
    max-height: 150px; 
  }
`;


const Logo = styled.img`
  height: 80px; 
  width: auto;
  margin-right: 20px;

  @media (max-width: 1024px) {
    height: 60px; 
    margin-right: 15px;
  }

  @media (max-width: 767px) {
    height: 50px; 
    margin-right: 0;
    margin-bottom: 8px;
  }
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