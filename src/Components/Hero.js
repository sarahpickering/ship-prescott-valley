import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/hero-image.PNG'

const HeroContainer = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    
    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(2, 22, 53, 0.6); /* dark blue overlay */
    z-index: 1;
  }
  `

const HeroText = styled.div`
position: relative;
z-index: 2;
max-width: 800px;
padding: 20px;

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.5rem;
}
`;

const HeroSection = () => {
return (
  <HeroContainer>
    <HeroText>
      <h1>YOUR ONE STOP SHOP</h1>
      <p>FOR MAILBOX RENTAL, SHIPPING & MORE</p>
    </HeroText>
  </HeroContainer>
);
};

export default HeroSection;