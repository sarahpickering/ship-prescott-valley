import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
    background: rgba(2, 22, 53, 0.6);
    padding: 60px 20px;
    color: white;
    text-align: center;
`;

const ServicesTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 40px;
    color: white;
`;

const ServicesGrid = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`;

const ServicesCard = styled.div`
    background: white;
    color: rgba(2, 22, 53, 0.6);
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

const ServicesImage = styled.img`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
`;

const ServicesDescrption = styled.p`
    font-size: 16px;
`;

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle>Services We Offer</ServicesTitle>
            <ServicesGrid>
                <ServicesCard>
                    
                </ServicesCard>
            </ServicesGrid>
        </ServicesContainer>
    )
}

export default Services;