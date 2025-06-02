import React from 'react'
import passport from '../assets/passport.jpeg'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 40px 20px;
    background-color: #fff;
`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: #222;
    margin-bottom: 20px
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    color: #444;
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
    color: #555;
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

    )
}

export default BusinessSolutions;