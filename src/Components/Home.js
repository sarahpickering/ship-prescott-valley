import React from 'react';
import Header from './Header'
import HeroSection from './Hero';
import Services from './Services'
import Footer from './Footer'
import styled from 'styled-components';
//import { SectionContainer, SectionTitle, SectionText } from './Styles/globalStyle';



function Home() {
    return (
        <>
        <HeroSection />
        <Services />
        <Footer />
        </>
    )
}

export default Home 