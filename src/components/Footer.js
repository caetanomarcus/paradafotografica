import React from 'react';
import styled from 'styled-components';

import barraDeLogo from '../assets/images/logos/barra_de_logos.png';

const Container = styled.footer `
    width: 100%;
    min-height: 100vh;
    background-color: #141414;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
       display: flex;
       flex-direction: column;

    }

    @media (max-width: 480px) {
        margin-top: 4rem;
    }
`;

// const WhiteContainer = styled.div `
//     height: 90px;
//     width: 100%;
//     background-color: #fff;

//     @media (max-width: 768px) {
//         display: none;
//     }
// `;

const Head = styled.div `
    display: flex;
    padding: 0 .5rem ;
    margin-top: 9rem;
    flex-wrap: wrap;
    justify-content: space-between;

    ::after {
        content: '';
        width:100%;
        height: 1px;
        border-bottom: double #615f54 3px;
        margin-top: 3rem;
    }
`;

const MiddleBox = styled.div `
    margin-bottom: 2rem;
    margin-top: 4rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }
`;

const BottomBox = styled.div `
    align-self: center;
    /* width: 80%; */
    padding: 1rem;

    @media (max-width: 480px){
        padding: 0;
        /* width: 90%; */
    }

`

const ProjectDescription = styled.div `
    width: 450px;
    height: 60%;
    margin-top: 5rem;
    padding-left: 3rem;
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

    :hover h3{
        color: #e6edf7;
    }

    :hover p{
        color: #e6edf7;
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
`;

const TeamBox = styled.div `
    margin-right: 1.1rem;
    margin-bottom: 3rem;

    :hover h4{
        color: #e6edf7;
    }

    :hover p{
        color: #e6edf7;
    }
`;

const TeamTitle = styled.h4 `
      color: #615f54;
    font-family: 'Public Sans', sans-serif;
    margin-bottom: .875rem;
`;

const Team = styled.p `
    color: #615f54;
    font-family: 'Public Sans', sans-serif;
    font-size: .875rem;
    line-height: 1.4rem;
    text-transform: capitalize;
`;

const LogoBox = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    /* @media (max-width: 480px) {
        width: 90%;
    } */
`

const Logo = styled.img `
    width: 80%;
    
/* 
    @media (max-width: 1024px) {
        width: 19%;
        margin: 0 .5rem;
        
    }
    
    @media (max-width: 480px) {
        width: 19%;
        margin: 0 .5rem;
        
    } */
`


const Footer = () => {

    return(
        <Container name='footer'>
            {/* <WhiteContainer></WhiteContainer> */}
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
                <TeamBox>
                    <TeamTitle>Reitor</TeamTitle>
                    <Team>Ricardo Lodi Ribeiro</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Vice-reitor</TeamTitle>
                    <Team>Mario Sergio Alves Carneiro</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Pró-reitora de Extensão e Cultura</TeamTitle>
                    <Team>Cláudia Gonçalves de Lima</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Diretor do Departamento Cultural</TeamTitle>
                    <Team>Adair Leonardo Rocha</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Coordenador de Exposições</TeamTitle>
                    <Team>Diogo Santos</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Comunicação Social</TeamTitle>
                    <Team>Ana Carolina Jacuá</Team>
                    <Team>Rosane A. Fernandez</Team>
                    <Team>Heloisa Mendes (bolsista)</Team>
                    <Team>Yasmin Vieira (bolsista)</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Programação Visual</TeamTitle>
                    <Team>Ana Cristina Almeida</Team>
                    <Team>Henrique Barone</Team>
                    <Team>Lucas Bevilaqua (Proatec)</Team>
                    <Team>Rejane Manhães</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Produção Cultural</TeamTitle>
                    <Team>Rafael Ferezin</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Administrativo</TeamTitle>
                    <Team>Leandro Almeida</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Audiovisual</TeamTitle>
                    <Team>Hevelin Costa (Proatec)</Team>
                    <Team>Pedro Araujo</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Arte-educação</TeamTitle>
                    <Team>Patricia Chiavazzoli</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Laboratório de Acessibilidade Cultural (LAC)</TeamTitle>
                    <Team>Débora Seger (Qualitec)</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Secretaria da Direção</TeamTitle>
                    <Team>Angélica Corrêa</Team>
                    <Team>Heloíza Barbosa de Lima</Team>
                </TeamBox>
                <TeamBox>
                    <TeamTitle>Bolsistas</TeamTitle>
                    <Team>Amanda Bandeira</Team>
                    <Team>Amanda Lopes</Team>
                    <Team>Andréa Almeida</Team>
                    <Team>Camila Rodrigues</Team>
                    <Team>Isaac Nicacio (PIBIC)</Team>
                    <Team>Karen Navega</Team>
                    <Team>Maria Luiza Pontes</Team>
                    <Team>Mariana Gon</Team>
                    <Team>Nana Maresti</Team>
                    <Team>Renan Santos (Extensão)</Team>
                    <Team>Veronica Folla</Team>
                </TeamBox>
                

            </MiddleBox>
            <BottomBox>
                <LogoBox>
                <Logo src={barraDeLogo} alt='logo coexpa'/>
                </LogoBox>
            </BottomBox>
        </Container>
    )
}

export default Footer