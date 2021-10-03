import React from "react";
import styled from "styled-components";
import artists from "../data/artists";
import ArtistModal from "./ArtistModal";
import { animateScroll as scroll} from 'react-scroll'

const Container = styled.main `
    font-family: 'Public Sans', sans-serif;
    color:#363530;
    width: 100%;
    /* height: calc(100vh - 180px); */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;
    background: white;

    @media (max-width: 480px) {
        padding: 0;
        
    }
`;
const Title = styled.h2 `
    font-family: 'Led Bus';
    font-size: 5rem;
    font-weight: 400;
    text-shadow: 2px 2px 2px #f2e983;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        font-size:2.5rem;
    }
`;

const CardBox = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
		padding: 1rem;

    @media (max-width: 480px) {
     
    }
`;

const Card = styled.div `
   	margin: 3rem 1.5rem;
    width: 20%;
    padding: 8px;
    display: flex;
		justify-content: center;
    align-items: center;
    background: white;
		border: solid 1px #f0e9e9;
    /* background: #1c1b1b; */
    border-radius: 2px;
    font-family: 'Led Bus';
    transition: .4s;
		cursor: pointer;

    :hover{
      border: solid 1px #363530;
    
    }

    :hover h2 {
      font-weight: 700;
    }

    @media (max-width: 768px) {
        width: 30%;
        border: none;
      }
      
      @media (max-width: 480px) {
        margin: .5rem 1rem;
        
    }
`

const CardTitle = styled.h2 `
	width: 40%;
	font-size: 1.3rem;
	font-weight: 400;
	text-shadow: #f2e983 2px 2px 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardAvatarContainer = styled.div `
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: .6rem;
	border-radius: 50%;
	box-shadow: 4px 6px 15px -3px #000000;
	overflow: hidden;


  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
    margin: 0;
    border-radius: 8px;
    background-color: #141414;
    position: relative;
    
  }
	
`

const CardAvatar = styled.img `
    width: ${props => props.zoon? '200px': '100px'};
		height: ${props => props.zoon? '200px': null};
    /* margin-top: 1rem; */
		transition: 1s;

    @media (max-width: 768px) {
    width: 150px;
    height: 100px;
    border: solid #141414 1px;
  }
`;

const ClickBtn = styled.button `
  border: white 1px solid;
  border-radius: 3px;
  outline: none;
  position: absolute;
  bottom: 8px;
  background: transparent;
  color: #dfe7f5;
  padding: 2px;
  font-family: 'Public Sans', sans-serif;
  font-size: .7rem;
`

const Artists2 = ({openModal, 
  setModal, 
  setArtist,
  openArtist, 
  setOpenArtist, 
  isBlur, 
  setBlur, 
  displayedIndex, 
  setDisplayedIndex}) => {

  const handleClick = (item) => {
    setOpenArtist(item)

    setModal(true)

    scroll.scrollMore(400)
  }

    return (
        <Container name='artists' >
            <Title>Artistas</Title>
            <CardBox>
               {artists.map(item => (
                    <Card offset={150} onClick={ () => handleClick(item)} >
                        <CardTitle>{item.nome}</CardTitle>
                        <CardAvatarContainer>
													<CardAvatar src={item.avatar} zoon={ item.id === 3} />
                          <ClickBtn>ver expo</ClickBtn>
												</CardAvatarContainer>
                    </Card>
               ))}
            </CardBox>
            {openModal && (
              <ArtistModal 
              openModal={openModal}
              setModal={setModal}
              openArtist={openArtist}
              setOpenArtist={setOpenArtist}
              isBlur={isBlur}
              setBlur={setBlur}
              displayedIndex={displayedIndex}
              setDisplayedIndex={setDisplayedIndex}
            />
            ) }
        </Container>
    )
}

export default Artists2;