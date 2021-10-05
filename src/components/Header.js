/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import styled from 'styled-components';
import { Link} from 'react-scroll'

// Images
import bg from '../assets/images/bg.jpg'
import bgMobile from '../assets/images/bgMobile.jpg';
import frontArrow from '../assets/images/anterior.png';
import backArrow from '../assets/images/anterior2.png'


// Styles
const Container = styled.header `
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Public Sans', sans-serif;
    color: #363530;
    scroll-behavior: smooth; 
    position: relative;

    @media (max-width: 768px){
        background-image: url(${bgMobile});
        color: #141414;
        background-size: cover;
        background-attachment: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

`;

const TopBox = styled.div `
    width: 100%;
    height: 90px;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    background: ${props => props.navBar? '#fff': 'rgba(255,255,255, .5)'};
    z-index: 10;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 12px;
        position: absolute ;
        
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
    width: 40%;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;


    @media (max-width: 768px){
        display: none;
    }
`;

const MenuItems = styled.li `
    width: 2rem;
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    font-style: italic;

    :hover{
        font-weight: 700;
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
        position: static;
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

const Header = ({setModal}) => {
   const [navBar, setNavBar] = useState(false);

   const changeBackground = () => {
       if(window.scrollY > 700){
        setNavBar(true)
       } else {
           setNavBar(false)
       }
   }

   window.addEventListener('scroll', changeBackground)
    
    return (
        <Container>
            <TopBox navBar={navBar} >
                <LeftText>O Departamento Cultural da Pró-Reitoria de Extensão e Cultura da Universidade do Estado do Rio de Janeiro apresenta o festival</LeftText>
                <Menu>
                    <MenuItems>
                    <Link
                    activeClass="active" 
                    to="sobre" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    isDynamic ={true}
                    duration={500}>
                    sobre
                    </Link>
                    </MenuItems>

                    <MenuItems>
                    <Link
                    activeClass="active" 
                    to="artists" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    isDynamic ={true}
                    duration={500}>
                    artistas
                    </Link>
                    </MenuItems>
                    <MenuItems>
                    <Link
                    activeClass="active" 
                    to="programation" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    isDynamic ={true}
                    duration={500}>
                    programação
                    </Link>
                    </MenuItems>
                </Menu>
            </TopBox>
            <MiddleBox>
                    <Title>PARADA FOTOGRÁFICA</Title>
                    <SubTitle>CARTOGRAFIAS INSURGENTES</SubTitle>
               
            </MiddleBox>

        </Container>
    )
}

export default Header;