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
    justify-content: flex-start;
    position: relative;
    color: white;
    text-align: left;
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
max-width: 680px;
text-align: left;
color: #ffffff;
padding-left: 40px;
z-index: 2;
position: relative;

h1 {
  font-size: 5rem;
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
      <h1>
        YOUR<br />
        ONE <br />
        STOP <br />
        SHOP
        </h1>
      <p>
        In Prescott Valley<br />
        For Mailbox Rentals,<br />
         Shipping, <br />
        & MORE!</p>
    </HeroText>
  </HeroContainer>
);
};

export default HeroSection;