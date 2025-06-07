import React from 'react'
import mailboxrentals from '../assets/mailboxrentals.jpg'
import styled from 'styled-components'

const Container = styled.div`
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
    background-color: #000B58;
    border: 10px solid #cc0000;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align:center;
    margin-bottom: 20px;
;`

const Intro = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
`;

const BenefitsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto 40px;
    max-width: 700px;
`;

const Benefit = styled.li`
    font-size: 1rem;
    margin-bottom: 20px;
    padding-left: 1.5rem;
    position: relative;
    color: #fff;

    &::before {
        content: "✔";
        position: absolute;
        left: 0;
        color: #fff;
    }
`;

const CTA = styled.div`
    text-align: center;
    margin-top: 30px;

    a {
        display: inline-block;
        background-color: #fff;
        color: #000B58;
        padding: 12px 24px;
        font-size: 1rem;
        border-radius: 5px;
        border: 5px solid #cc0000;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color:rgb(17, 127, 191);
        }
    }
`;

const ImageSection = styled.div`
    text-align: center;
    margin: 50px 0;

    img {
        width: 80%;
        max-width: 500px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
`;

const PricingSection = styled.div`
    margin: 50px 0;
    text-align: center;
`;

const PricingTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
    color: #cc0000;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto 40px;

  /* @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  } */
`;

const PriceCard = styled.div`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;

    h3 {
        margin-bottom: 10px;
        font-size: 1.2rem;
        color: #000b58;
    }

    p {
        font-size: 1rem;
        color: #444;
    }
`;

const VirtualOption = styled.p`
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  margin: 30px 0;
`;

const MailboxRental = () => {
    return (
        <Container>
            <Title>Ship Prescott Valley Mailbox Rental Services</Title>
            <Intro>
                Need a secure and private mailbox? Our Prescott Valley mailbox rental services
                offer the convenience and professionalism you deserve. Whether you're a local
                resident, business traveler, or seasonal visitor, our private mailboxes provide 
                a real street address and flexible access.
            </Intro>
            <BenefitsList>
                <Benefit>Real street address (not a P.O. Box)</Benefit>
                <Benefit>Mail and package receiving from all carriers</Benefit>
                <Benefit>Mail forwarding services available</Benefit>
                <Benefit>Secure and private access</Benefit>
                <Benefit>Short and long-term rental options (with 6-month minimum requirement)</Benefit>
                <Benefit>Freight shipments accepted</Benefit>
                <Benefit>Virtual Mailbox Option - Call for more info!</Benefit>
            </BenefitsList>

            <ImageSection>
                <img src={mailboxrentals} alt="Private Mailboxes" />
            </ImageSection>

            <PricingSection>
                <PricingTitle>Mailbox Sizes & Pricing (Monthly)</PricingTitle>
                <PricingGrid>
                    <PriceCard>
                        <h3>Small</h3>
                        <p>$32/month</p>
                    </PriceCard>
                    <PriceCard>
                        <h3>Medium</h3>
                        <p>$45/month</p>
                    </PriceCard>
                    <PriceCard>
                        <h3>Large</h3>
                        <p>$55/month</p>
                    </PriceCard>
                    <PriceCard>
                        <h3>XL Business</h3>
                        <p>$65/month</p>
                    </PriceCard>
                </PricingGrid>
            </PricingSection>

            <VirtualOption>
            🌍 Not local to Prescott Valley? We also offer virtual mailbox options and <br />
                can forward your mail to any address—even if you're out of state.
            </VirtualOption>

            <CTA>
                <a href="/contact">Reserve Your Mailbox Today</a>
            </CTA>
        </Container>
    )
}

export default MailboxRental;