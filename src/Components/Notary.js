import React from 'react'
import notary2 from '../assets/notary2.png'

import styled from 'styled-components'


const Container = styled.div`
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
    background-color: #fff;
    border: 10px solid #000b58;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #000b58;
    text-align:center;
    margin-bottom: 20px;
`;

const Intro = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    text-align: center;
    margin-bottom: 40px;
`;


const MoreInfo = styled.p`
  font-size: 1.1rem;
  color: #444;
  text-align: center;
  margin: 30px 0;
`;

const SubtitleWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const SubTitle = styled.h3`
  font-weight: 900;
  font-size: 1.6rem;
  color: #222;
  margin-bottom: 15px;
  letter-spacing: 1.5px;
  border-bottom: 3px solid #000b58;
  display: inline-block;
  padding-bottom: 6px;
`;

const Notary = () => {
    return (
        <Container>
            {/* <Photo>
                <img src={notary2} alt="Notary Main" />
            </Photo>
            <Content> */}
            <Title>Notary Services - Signatures Only $10</Title>
            <Intro>
            📝 Professional, reliable notary services available to meet your needs.
            </Intro>

            <SubtitleWrapper>
            <SubTitle>Our Notary Services Cover: </SubTitle>
            </SubtitleWrapper>

            <MoreInfo>Real estate paperwork, school forms, court documents, medical waivers, <br />contracts, 
            permission slips, banking paperwork, and much more.</MoreInfo>

            <SubtitleWrapper>
            <SubTitle>What You Need to Bring: </SubTitle>
            </SubtitleWrapper>

            <MoreInfo>
            Please bring your documents unsigned—no signatures beforehand—<br />and a valid 
            photo ID for each person requiring notarization. 
            </MoreInfo>

            <SubtitleWrapper>
            <SubTitle>What Is Document Notarization? </SubTitle>
            </SubtitleWrapper>
          
            <MoreInfo>
            Notarization means your documents are officially certified by a notary public.<br /> 
            The notary’s role is to confirm the identity of everyone signing, witness the signing process, <br />
            and apply an official stamp or seal to your documents. <br /><br />*Notaries do not provide legal advice 
            or interpret the content of your documents.*
            </MoreInfo>
            {/* </Content> */}
        </Container>
       
    )

}

export default Notary;
