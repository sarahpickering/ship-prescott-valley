import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import InfoStrip from './Components/InfoStrip';
import Home from './Components/Home';

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import HeroSection from './Components/Hero';

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
  //const location = useLocation();

  return (
    <Router>
        <GlobalStyle />
        <Header />
        <MainContent>
          <HeroSection />
          <InfoStrip />
          <Home />
          </MainContent>
    </Router>
  )
}

export default App;
