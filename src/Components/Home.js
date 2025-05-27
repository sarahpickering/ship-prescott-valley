import React from 'react';
import Header from './Header'
import HeroSection from './Hero';
import Services from './Services'
import styled from 'styled-components';
//import { SectionContainer, SectionTitle, SectionText } from './Styles/globalStyle';



function Home() {
    return (
        <>
        <HeroSection />
        <Services />
        </>
    )
}

export default Home 