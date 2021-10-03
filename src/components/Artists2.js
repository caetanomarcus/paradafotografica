import React from "react";
import styled from "styled-components";
import artists from "../data/artists";

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

    @media (max-width: 768px) {
        font-size:1.5rem;
    }
`;

const CardBox = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
		padding: 1rem;
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
        width: 90%;
    }
`

const CardTitle = styled.h2 `
	width: 40%;
	font-size: 1.3rem;
	font-weight: 400;
	text-shadow: #f2e983 2px 2px 2px;
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
	background: white;

	
`

const CardAvatar = styled.img `
    width: ${props => props.zoon? '200px': '100px'};
		height: ${props => props.zoon? '200px': null};
    /* margin-top: 1rem; */
		transition: 1s;
`

const Artists2 = ({openModal, setModal, openArtist, setOpenArtist}) => {

  const handleClick = (item) => {
    setOpenArtist(item)

    setModal(true)
  }

    return (
        <Container name='artists' >
            <Title>Artistas</Title>
            <CardBox>
               {artists.map(item => (
                    <Card onClick={ () => handleClick(item)} >
                        <CardTitle>{item.nome}</CardTitle>
                        <CardAvatarContainer>
													<CardAvatar src={item.avatar} zoon={ item.id === 3} />
												</CardAvatarContainer>
                    </Card>
               ))}
            </CardBox>
        </Container>
    )
}

export default Artists2;