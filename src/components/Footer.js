import React from 'react';
import styled from 'styled-components';

const Container = styled.footer `
    width: 100%;
    height: 100vh;
    background-color: #141414;

    @media (max-width: 768px) {
       display: flex;
       flex-direction: column;

    }
`;

const WhiteContainer = styled.div `
    height: 90px;
    width: 100%;
    background-color: #fff;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ProjectDescription = styled.div `
    width: 450px;
    height: 60%;
    margin-top: 5rem;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover h3{
        color: #e6edf7;
    }

    :hover p{
        color: #e6edf7;
    }

    @media (max-width: 768px) {
        margin-left: .5rem;
        flex-direction: column;
        width: 100%;
        margin: 0;
    }

`

const Title = styled.h3 `
    color: #615f54;
    font-family: 'Public Sans', sans-serif;
    
    `

const Description = styled.p `
    width: 90%;
    color: #615f54;
    font-family: 'Public Sans', sans-serif;
    font-size: .875rem;
    line-height: 1.4rem;

    @media (max-width: 768px) {
       font-size: .85rem;
    }

    
`


const Footer = () => {

    return(
        <Container>
            <WhiteContainer></WhiteContainer>
            <ProjectDescription>
                <Title>Projeto Ventilação </Title>
                <Description>Ventilação é um projeto da Coordenação de Exposições de Artes da UERJ (COEXPA) nascido da necessidade de construção de uma memória da contemporaneidade. Através de seu sopro poético, visa criar pontes, compartilhar saberes, produzir a escuta e a atenção para a arte e a cultura dos diversos núcleos que compõem a sociedade.</Description>
            </ProjectDescription>
         
        </Container>
    )
}

export default Footer