import React from 'react'
import shipping from '../assets/shipping.jpeg'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
  border: 10px solid #cc0000;
  background-color: #000b58;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Intro = styled.p`
  flex: 2;
  min-width: 300px;
  font-size: 1.7rem;
  color: #fff;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Section = styled.div`
  margin-bottom: 40px;
  text-align: center;
  color: #fff;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left: 20px;
  line-height: 1.8;
  color: #fff;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f82f23;
`;


const WorldwideShipping = () => {
    return (
        <Container>
            <Title>
            📦 Worldwide Shipping from Prescott Valley
            </Title>
            <HeroSection>
                <ImageWrapper>
                    <img src={shipping} alt="Shipping Box" />
                </ImageWrapper>
                <Intro>
                Whether you're sending a single item or managing regular shipments, 
                Ship Prescott Valley makes global delivery fast and stress-free. 
                Our expert team will pack, label, and ship your packages via top carriers—right from our local office.
                </Intro>
            </HeroSection>
            
            <Section>
                <h2>We Can Ship:</h2>
                <List>
                    <li>Documents & Letters</li>
                    <li>Online sales & eBay packages</li>
                    <li>Gifts for friends & family!</li>
                    <li>Artwork and fragile antiques</li>
                    <li>Returns & international orders</li>
                </List>
            </Section>

            <Section>
                <h2>We Work with Trusted Carriers:</h2>
                <List>
                    <li>UPS</li>
                    <li>FedEx</li>
                    <li>USPS</li>
                    <li>DHL</li>
                </List>
            </Section>

            <CTA>
                Ready to ship? Stop by or call us today for a quote! 📱
            </CTA>
        </Container>
    )
}

export default WorldwideShipping;