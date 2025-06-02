import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import HeroSection from './Components/Hero';
import Home from './Components/Home'
import InfoStrip from './Components/InfoStrip';
import MailboxRental from './Components/MailboxRental';
import Notary from './Components/Notary'
import Footer from './Components/Footer';

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import WorldwideShipping from './Components/WorldwideShipping';


const GlobalStyle = createGlobalStyle`
  body, h1, nav, a {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
`;

// Define main content container
const MainContent = styled.div`
  padding-bottom: 100px;
  padding: 20px;
`;

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/mailbox-rental" element={<MailboxRental />} />
            <Route path="/notary" element={<Notary />} />
            <Route path="/shipping" element={<WorldwideShipping />} />
            <Route path ="/business" element={<BusinessSolutions />} />
          </Routes>
        </MainContent>
        <InfoStrip />
        <Footer />
    </Router>
  )
}

export default App;
