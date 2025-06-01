import React from 'react';
import styled from 'styled-components';

const AddressStrip = styled.div`
    background-color: white;
    color: black;
    text-align: center;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    `;

    const InfoStrip = () => {
        return (
            <AddressStrip>
                📍 7421 E. Addis Ave, Unit B, Prescott Valley, AZ 86314 |  📞 PHONE NUMBER HERE
            </AddressStrip>
        )
    }

    export default InfoStrip;