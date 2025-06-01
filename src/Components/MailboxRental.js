import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
    background-color: #fff;
`;

const Title = styled.h1`
    font-sieze: 2.5rem;
    color: 333;
    text-align:center;
    margin-bottom: 20px;
;`

const Intro = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
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
    color: #444;

    &::before {
        content: "✔";
        position: absolute;
        left: 0;
        color: #0077cc;
    }
`;

const CTA = styled.div`
    text-align: center;
    margin-top: 30px;

    a {
        display: inline-block;
        background-color: #0077cc;
        color: #fff;
        padding: 12px 24px;
        font-size: 1rem;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color: #005fa3;
        }
    }
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
                
            </BenefitsList>
        </Container>
    )
}

export default MailboxRental