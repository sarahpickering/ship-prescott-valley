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
  color: #222;
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

  &:hover {
    background-color: #002855;
  }
`;

const Answer = styled.div`
  background-color: #f4f4f4;
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 0 0 6px 6px;
  border: 1px solid #ccc;
  border-top: none;
`;



export default FAQ;