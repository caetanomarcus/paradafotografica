import React from "react";
import styled from "styled-components";

const Container = styled.div `

`;

const Title = styled.h2 `
    font-family: 'Led Bus';
    font-size: 5rem;
    font-weight: 400;
    text-shadow: 2px 2px 2px #f2e983;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        font-size:2.5rem;
    }
`;

const Curadoria = () => {
    return (
        <Container>
            <Title>Curadoria</Title>
        </Container>
    )
}

export default Curadoria