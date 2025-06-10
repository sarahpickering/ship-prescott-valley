import React from 'react';
import { Link } from 'react-router-dom';
import mailboxrentals from '../assets/mailboxrentals.jpg';
import shipping from '../assets/shipping.png';
import notary from '../assets/notary.png';
import businesssolutions from '../assets/businesssolutions.png';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  background: #000b58;
  padding: 60px 20px;
  color: white;
  text-align: center;
  overflow-x: hidden;

    @media (max-width: 1024px) {
        padding: 40px 15px;
    }

    @media (max-width: 767px) {
        padding: 30px 10px;
    }
`;

const ServicesTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  align-items: stretch;
  margin: 0 auto;
  max-width: 100%;

  @media (max-width: 1024px) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0 5px;
  }
`;

const ServicesCard = styled.div`
  background: white;
  color: #000b58;
  border-radius: 10px;
  border: 6px solid #cc0000;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden; /* Clip oversized images */

  @media (max-width: 1024px) {
    max-width: 200px;
    padding: 15px;
    border-width: 4px;
  }

  @media (max-width: 767px) {
    max-width: calc(100% - 10px);
    padding: 10px;
    border-width: 3px;
    margin: 0 auto;
  }
`;

const ServicesImage = styled.img`
    width: 100%;
    aspect-ratio: auto;
    border-radius: 8px;
    margin-bottom: 15px;

  @media (max-width: 1024px) {
    max-height: 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    max-height: 150px; 
    margin-bottom: 8px;
  }
`;

const ServicesDescription = styled.p`
  font-size: 16px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

const ServicesButton = styled(Link)`
  display: block;
  margin-top: auto;
  padding: 10px 20px;
  background-color: #000b58;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  width: auto;

  &:hover {
    background-color: #1e2a78;
  }

  @media (max-width: 1024px) {
    padding: 8px 15px;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 12px;
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
            <h2>Mailbox Rental</h2>
            <h3>From $32/Month</h3>
            <ServicesDescription>
              Ship Prescott Valley offers affordable, safe and secure mailboxes for both personal
              and business use starting at just $32/month. Enjoy the convenience of text message
              alerts when a new delivery comes in. Virtual Mailboxes Available!
            </ServicesDescription>
          </ContentWrapper>
          <ServicesButton to="/mailbox-rental">Sign Up</ServicesButton>
        </ServicesCard>

        <ServicesCard>
          <ServicesImage src={shipping} alt="Worldwide Shipping" />
          <ContentWrapper>
            <h2>Worldwide Shipping</h2>
            <ServicesDescription>
              We offer the best available rates from all three major global shipping companies,
              including FedEx, UPS, and USPS. We aggregate the best available rates from all
              shipping companies to ensure you receive the best rate.
            </ServicesDescription>
          </ContentWrapper>
          <ServicesButton to="/shipping">Learn More</ServicesButton>
        </ServicesCard>

        <ServicesCard>
          <ServicesImage src={notary} alt="Notary Services" />
          <ContentWrapper>
            <h2>Notary Services</h2>
            <ServicesDescription>
              $10 notary anytime Monday-Saturday 9am-6pm, no appointment needed! Walk-ins are
              always welcome and we offer fast, friendly service. <br />
              From real estate documents to power of attorney forms and affidavits, we can notarize
              a wide variety of documents and help answer any basic questions you may have about the
              process.
            </ServicesDescription>
          </ContentWrapper>
          <ServicesButton to="/notary">Learn More</ServicesButton>
        </ServicesCard>

        <ServicesCard>
          <ServicesImage src={businesssolutions} alt="Business Solutions" />
          <ContentWrapper>
            <h2>Business Solutions</h2>
            <ServicesDescription>
              We offer Registered Agent Services, Business Address setup, Mail Acceptance, Secure
              Shredding, Printing, and more. We support startups, freelancers, and established
              businesses alike. <br />
              Our services are designed to streamline your operations, protect your privacy, and
              give your business a professional presence — all under one roof.
            </ServicesDescription>
          </ContentWrapper>
          <ServicesButton to="/business">Learn More</ServicesButton>
        </ServicesCard>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;