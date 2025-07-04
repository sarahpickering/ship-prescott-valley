import React from 'react'
import passport from '../assets/passport.jpeg'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 40px 20px;
    background-color: #000b58;
    border: 10px solid #cc0000;
`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 20px
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 40px;
`

const FlexSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`
const TextContent = styled.div`
    flex: 1;
    min-width: 290px;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
    color: #fff;
`

const ListItem = styled.li`
    font-size: 1.1rem;
    margin-bottom: 15px;
    position: relative;
    padding-left: 24px;

    &::before {
        content: '✅';
    position: absolute;
    left: 0;
    top: 0;
    }
`
const Paragraph = styled.p`
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 30px;

`
const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;


const BusinessSolutions = () => {
    return (
        <Container>
            <Title>Streamline Your Business</Title>
            <Subtitle>Solutions for Small Businesses in Prescott Valley</Subtitle>
            <FlexSection>
            <TextContent>
                <List>
                    <ListItem>Registered Agent Services</ListItem>
                    <ListItem>Business Address & Mail Acceptance</ListItem>
                    <ListItem>Secure Shredding ($1/lb via Assured Document Destruction)</ListItem>
                    <ListItem>Professional Printing Services</ListItem>
                    <ListItem>Banner & Sign Printing</ListItem>
                    <ListItem>Fax Services</ListItem>
                    <ListItem>Passport Photos</ListItem>
                    <ListItem>Fingerprinting</ListItem>
                    <ListItem>Bulk Document Shredding</ListItem>
                </List>
                <Paragraph>
                    Contact us today or visit us in-store to find out how Ship Prescott Valley can help your business run more efficiently.
                </Paragraph>
            </TextContent>

                <ImageWrapper>
                    <img src={passport} alt="Business solutions at Ship Prescott Valley" />
                </ImageWrapper>
            </FlexSection>

        </Container>
    )
}

export default BusinessSolutions;