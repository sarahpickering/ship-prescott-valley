import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #000b58;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #003366;
  margin: 30px 0 20px;
  border-bottom: 2px solid #003366;
  padding-bottom: 5px;
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
`;

const Question = styled.button`
  background-color: #003366;
  color: white;
  padding: 16px 20px;
  width: 100%;
  text-align: left;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #002855;
  }
`;

const Arrow = styled.span`
    display: inline-block;
    transition: transform 0.3s ease;
    font-size: 1.2rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const Answer = styled.div`
  background-color: #f4f4f4;
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 0 0 6px 6px;
  border: 1px solid #ccc;
  border-top: none;
`;


const FAQSection = ({ title, questions }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAnswer = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    }
    return (
        <div>
          <SectionTitle>{title}</SectionTitle>
          {questions.map((item, index) => (
            <FAQItem key={index}>
              <Question onClick={() => toggleAnswer(index)}>
                {item.q}
                <Arrow $isOpen={activeIndex === index}>▶</Arrow>
              </Question>
              {activeIndex === index && <Answer>{item.a}</Answer>}
            </FAQItem>
          ))}
        </div>
      )
    }
    

const FAQ = () => {
    
    const mailboxFAQs = [
        {
            q: "How much does a mailbox rental cost?",
            a: "Mailbox prices start at $32/month depending on size and service level."
          },
          {
            q: "Can I use your address as my business address?",
            a: "Yes! We offer mailbox services suitable for business use including registered agent services."
          },
          {
            q: "Do I need to be local to rent a mailbox?",
            a: "No — we also offer virtual mailboxes and mail forwarding anywhere in the U.S."
          },
          {
            q: "What is a virtual mailbox?",
            a: "A virtual mailbox with Ship Prescott Valley gives you a real street address where we receive your mail on your behalf and forward it to you anywhere in the world."
          }
    ]
    const shippingFAQs = [
        {
            q: "Do you ship internationally?",
            a: "Yes, we offer worldwide shipping through trusted carriers including UPS, FedEx, and DHL."
          },
          {
            q: "Can I bring in my own packaging?",
            a: "Absolutely — or we can pack it for you professionally on-site."
          },
          {
            q: "What shipping options do you provide?",
            a: "We offer express, ground, and international shipping with tracking and insurance options."
          }
    ]
    const notaryFAQs = [
        {
            q: "Do I need an appointment for notary services?",
            a: "No appointment needed — just bring your unsigned documents and a valid photo ID."
          },
          {
            q: "What types of documents can you notarize?",
            a: "Real estate forms, court documents, medical waivers, school forms, and more."
          },
          {
            q: "How much does notarization cost?",
            a: "We charge just $10 per signature for notary services."
          }
    ]

    return (
        <Container>
            <Title>
                Frequently Asked Questions:
            </Title>
            <FAQSection title="📬 Mailbox Rental" questions={mailboxFAQs} />
            <FAQSection title="📦 Shipping" questions={shippingFAQs} />
            <FAQSection title="📝 Notary & Other Services" questions={notaryFAQs} />
        </Container>
    )
}

export default FAQ