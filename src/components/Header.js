import React from 'react';
import styled, {keyframes} from 'styled-components';
import bg from '../assets/images/bg.jpg'
import bgMobile from '../assets/images/bgMobile.jpg';
import frontArrow from '../assets/images/anterior.png';
import backArrow from '../assets/images/anterior2.png'

// Animations 

const titleAnimation = keyframes`
    0% { transform: translate(50%, -50%); }
  100% { transform: translate(-150%, -50%); }

  
`
const titleAnimationCel = keyframes `
    0% {left: 100%}
  100% {left: 0}
`
// const isMobile = window.innerWidth <= 480;

// Styles
const Container = styled.header `
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Public Sans', sans-serif;
    color: #FFF500;

    @media (max-width: 480px){
        background-image: url(${bgMobile});
    }

`;

const TopBox = styled.div `
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 12px;
    }
`;

const LeftText = styled.h3 `
    font-weight: 700;
    font-size: 1.1rem;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        font-size: 14px;
    }
`;

const Menu = styled.ul `
    display: flex;
    width: 45%;
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
    font-size: 1.2rem;
    cursor: pointer;
`;

const MiddleBox = styled.div `
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: 768px){
        height: 75vh;
    }
    
`;

const TitleContainer = styled.div `
    position: relative;
    overflow: hidden;
    height: 45%;
    width: 100%;
`;

const SubTitleContainer = styled.div `
    position: relative;
    overflow: hidden;
    height: 30%;
    width: 100%;
`

const Title = styled.h1 `
    font-family: 'Led Bus';
    font-size: 8.75rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150%;
    transform: translate(-50%);
    animation-name: ${titleAnimation} ;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @media (max-width: 768px){
        font-size: 4.5rem;
        width: 230%;
        animation-name: ${titleAnimationCel};
    }
`;

const SubTitle = styled.h2 `
    font-family: 'Led Bus';
    font-size: 8.76rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150%;
    transform: translate(-50%, -50%);
    animation-name: ${titleAnimation} ;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @media (max-width: 768px){
        font-size: 4.5rem;
        width: 230%;
        animation-name: ${titleAnimationCel};
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
                    <MenuItems>SOBRE</MenuItems>
                    <MenuItems>ARTISTAS</MenuItems>
                    <MenuItems>CURADORIA</MenuItems>
                    <MenuItems>PROGRAMAÇÃO</MenuItems>
                </Menu>
            </TopBox>
            <MiddleBox>
                <TitleContainer>
                    <Title>PARADA FOTOGRÁFICA</Title>
                </TitleContainer>
                <SubTitleContainer>
                    <SubTitle>CARTOGRAFIAS INSURGENTES</SubTitle>
                </SubTitleContainer>
            </MiddleBox>
            <BottomBox>
                <ArrowOne src={frontArrow} />
                <ArrowTwo src={backArrow} />
            </BottomBox>

        </Container>
    )
}

export default Header;