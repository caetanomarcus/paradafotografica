import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bg.jpg'
import bgMobile from '../assets/images/bgMobile.jpg';
import frontArrow from '../assets/images/anterior.png';
import backArrow from '../assets/images/anterior2.png'

// Animations 

// const isMobile = window.innerWidth <= 480;

// Styles
const Container = styled.header `
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Public Sans', sans-serif;
    color: #363530;

    @media (max-width: 480px){
        background-image: url(${bgMobile});
        color: #fff;
    }

`;

const TopBox = styled.div `
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    background: rgba(255,255,255, .5);
    z-index: 10;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 12px;
    }
`;

const LeftText = styled.h3 `
    font-weight: 700;
    font-size: .875rem;
    width: 40%;
    
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        font-size: 14px;
    }
`;

const Menu = styled.ul `
    display: flex;
    width: 35%;
    min-width: 500px;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media (max-width: 768px){
        display: none;
    }
`;

const MenuItems = styled.li `
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    :hover{
        border-bottom: #f2e983 2px solid;
        color:#000;
    }
`;

const MiddleBox = styled.div `
    position: absolute;
    left: 10%;
    top: 35%;
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

    @media (max-width: 768px){
        height: 75vh;
    }
    
`;

const Title = styled.h1 `
    font-family: 'Led Bus';
    font-size: 2.75rem;
    text-align: center;
    text-shadow: #f2e983 2px 2px 2px;

    @media (max-width: 768px){
        font-size: 2.5rem;

    }
`;

const SubTitle = styled.h2 `
    font-family: 'Led Bus';
    font-size: 2rem;
    text-align: center;
    text-shadow: #f2e983 2px 2px 2px;


    @media (max-width: 768px){
        font-size: 1.5rem;
    }
`

const BottomBox = styled.div `
   /* position: relative; */
   display: none;
   width: 100%;
   
   @media (max-width: 480px) {
       display: block;
   }
`;

const ArrowOne = styled.img `
    width: 33px;
    position: absolute;
    bottom: 0;
    left: 45%;
    transform: rotate(90deg) translateX(-50%);
    
`

const ArrowTwo = styled.img `
    transform: rotate(90deg);
    display: none;
`

const Header = () => {

    
    return (
        <Container>
            <TopBox>
                <LeftText>O Departamento Cultural da Pró-Reitoria de Extensão e Cultura da Universidade do Estado do Rio de Janeiro apresenta o festival</LeftText>
                <Menu>
                    <MenuItems>sobre</MenuItems>
                    <MenuItems>artistas</MenuItems>
                    <MenuItems>curadoria</MenuItems>
                    <MenuItems>programação</MenuItems>
                </Menu>
            </TopBox>
            <MiddleBox>
                    <Title>PARADA FOTOGRÁFICA</Title>
                    <SubTitle>CARTOGRAFIAS INSURGENTES</SubTitle>
               
            </MiddleBox>
            <BottomBox>
                <ArrowOne src={frontArrow} />
                <ArrowTwo src={backArrow} />
            </BottomBox>

        </Container>
    )
}

export default Header;