import React from "react";
import styled from "styled-components";

const Container = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    color:#363530;
    font-family: 'Public Sans', sans-serif;
    scroll-behavior: smooth; 
    position: relative;

    ::after{
        content: '';
        width: 80%;
        height: 2px;
        border-bottom: 3px black double;
        position: absolute;
        bottom: -5%;
    }
`;

const TitleBox = styled.div `
    width: 38%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
    padding-right: 1rem;
    border-right: double 3px #f2e983;
`

const Title = styled.h2`
    font-family: 'Led Bus';
    font-size: 4.7rem;
    font-weight: 400;
    text-align: center;
    text-shadow: 2px 2px 2px #f2e983;
`

const ParagraphBox = styled.div `
    width: 45%;
    font-size: 1.2rem;
    line-height: 1.7rem;
`
const Paragraph = styled.p `

`


const About = () => {
    return (
        <Container name='sobre' >
            <TitleBox>
                <Title>O festival online Parada Fotográfica</Title>
            </TitleBox>
            <ParagraphBox>
                <Paragraph><b>N</b>asce da percepção da urgência de se pensar na produção fotográfica da cidade do Rio de Janeiro, saindo do eixo centro/zona-sul, buscando expor trabalhos de fotógrafes que furem as muralhas e tramas sociais e assim possibilitando a emergência de narrativas antes invisibilizadas e silenciadas da cultura carioca. Neste mesmo empenho, o festival fomentará o acesso ao ensino de fotografia durante sua programação para a formação de novos fotografes e a criação de redes de artistas, pensadores e criadores periféricos.</Paragraph>
            </ParagraphBox>
        </Container>
    )
}

export default About