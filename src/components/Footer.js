import React from 'react';
import styled from 'styled-components';

const Container = styled.footer `
    width: 100%;
    min-height: 100vh;
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

const Head = styled.div `
    display: flex;
    margin-top: 9rem;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MiddleBox = styled.div `

`

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

    @media (max-width: 480px) {
        /* margin-left: .5rem; */
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        margin-left: 1.5rem;
    }

`

const Title = styled.h3 `
    color: #615f54;
    font-family: 'Public Sans', sans-serif;

    @media (max-width: 480px) {
        text-align: left;
    }
    
    `

const Description = styled.p `
    width: 90%;
    color: #615f54;
    font-family: 'Public Sans', sans-serif;
    font-size: .875rem;
    line-height: 1.4rem;

    @media (max-width: 768px) {
       font-size: .85rem;
       margin-top: 1rem;
    }

    
`;

const Curadoria = styled.div `
    margin-top: 5rem;
    margin-right: 16rem;
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    padding: 8px;

    @media (max-width: 480px) {
        margin: 0;
        margin-left: 2rem;
        margin-top: 5rem;
        padding: 0;
        width: 300px;
    }
  
`;

const CuradoriaTitle = styled.h3 `
    color: #615f54;
    font-family: 'Public Sans', sans-serif;
    margin-bottom: .875rem;
`

const Curadoras = styled.p `
    color: #615f54;
    font-family: 'Public Sans', sans-serif;
    font-size: .875rem;
    line-height: 1.4rem;
`


const Footer = () => {

    return(
        <Container name='footer'>
            <WhiteContainer></WhiteContainer>
            <Head>
                <ProjectDescription>
                    <Title>Projeto Ventilação </Title>
                    <Description>Ventilação é um projeto da Coordenação de Exposições de Artes da UERJ (COEXPA) nascido da necessidade de construção de uma memória da contemporaneidade. Através de seu sopro poético, visa criar pontes, compartilhar saberes, produzir a escuta e a atenção para a arte e a cultura dos diversos núcleos que compõem a sociedade.</Description>
                </ProjectDescription>
                <Curadoria>
                    <CuradoriaTitle>Curadoria:</CuradoriaTitle>
                    <Curadoras>Andréa Almeida</Curadoras>
                    <Curadoras>Camila Rodrigues </Curadoras>
                    <Curadoras>Flávia Viana</Curadoras>
                    <Curadoras>Hevelin Costa</Curadoras>
                    <Curadoras>Natália Maresti</Curadoras>
                    <Curadoras>Patricia Chiavazzoli</Curadoras>
                </Curadoria>
            </Head>
            <MiddleBox>

            </MiddleBox>
         
        </Container>
    )
}

export default Footer