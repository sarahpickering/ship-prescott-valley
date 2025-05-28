import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.header`
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    `;

const Footer = () => {
    return (
      <FooterContainer>
        © 2025 Ship Prescott Valley. All rights reserved. | 
        Website design by Sarah Pickering.
      </FooterContainer>
    );
  };

export default Footer;