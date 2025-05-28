import React from 'react';
import { Link } from 'react-router-dom';
import mailboxrentals from '../assets/mailboxrentals.jpg'
import shipping from '../assets/shipping.png'
import notary from '../assets/notary.png'
import businesssolutions from '../assets/businesssolutions.png'
import styled from 'styled-components';

const ServicesContainer = styled.section`
    background: #000B58;
    padding: 60px 20px;
    color: white;
    text-align: center;
`;

const ServicesTitle = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
    color: white;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;


const ServicesCard = styled.div`
    background: white;
    color: #000B58;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;     
    flex-basis: 250px; 
    height: 100%;
`;

const ServicesImage = styled.img`
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 8px;
    margin-bottom: 15px;
`;

const ServicesDescription = styled.p`
    font-size: 16px;
    text-align: center;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const ServicesButton = styled(Link)`
    display: block;
    margin-top: auto;
    padding: 10px 20px;
    background-color: #000b58;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    width: auto;

    &:hover {
        background-color: #1e2a78;
    }
`;

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle>Services We Offer</ServicesTitle>
            <ServicesGrid>

            <ServicesCard>
            <ServicesImage src={mailboxrentals} alt="Mailbox Rental" />
            <ContentWrapper>
                <h2>
                    Mailbox Rental
                </h2>
                <h3>
                    From $20/Month
                </h3>
                <ServicesDescription>
                    Ship Prescott Valley offers affordable, safe and secure mailboxes 
                    for both personal and business use starting at just $30/month. 
                    Enjoy the convenience of text 
                    message alerts when a new delivery comes in.
                </ServicesDescription>
                </ContentWrapper>
                <ServicesButton to="/mailbox-rentals">Sign Up</ServicesButton>
            </ServicesCard>

            <ServicesCard>
                <ServicesImage src={shipping} alt="Worldwide Shipping" />
                <ContentWrapper>
                <h2>
                    Worldwide Shipping
                </h2>
                <ServicesDescription>
                We offer the best available rates from all three major global shipping companies, 
                including FedEx, UPS, and USPS. We aggregate the best available rates from all 
                shipping companies to ensure you receive the best rate! <br />
                </ServicesDescription>
                </ContentWrapper>
                <ServicesButton to="/worldwide-shipping">Learn More</ServicesButton>
            </ServicesCard>

            <ServicesCard>
                <ServicesImage src={notary} alt="Notary Services" />
                <ContentWrapper>
                <h2>
                    Notary Services
                </h2>
                <ServicesDescription>
                $10 notary anytime Monday-Saturday 9am-6pm, no appointment needed! Walk-in ok!
                </ServicesDescription>
                </ContentWrapper>
                <ServicesButton to="/notary-services">Learn More</ServicesButton>

            </ServicesCard>

            <ServicesCard>
                <ServicesImage src={businesssolutions} alt="Business Solutions" />
                <ContentWrapper>
                <h2>
                    Business Solutions
                </h2>
                <ServicesDescription>
                We offer Registered Agent Services, Business Address, Mail Acceptance, Secure Shredding, Printing, and more.
                </ServicesDescription>
                </ContentWrapper>
                <ServicesButton to="/business-solutions">Learn More</ServicesButton>

            </ServicesCard>

            </ServicesGrid>
        </ServicesContainer>
    )
}

export default Services;