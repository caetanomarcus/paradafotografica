import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import back from '../assets/images/back.png'


const Container = styled.div `
    font-family: 'Public Sans', sans-serif;
    padding-top: 180px;

    transform: scale(.5);
`;

const TitleContainer = styled.div `
    display: flex;
    justify-content: center;
    position: relative;
`;

const BackBtn = styled.img `
    width: 30px;
    height: 30px;
    position: fixed;
    right: 5%;
    top: 20%;
    cursor: pointer;

`

const TitleArtist = styled.h2 `
    font-family: 'Led Bus';
    font-size: 5rem;
    font-weight: 400;
    text-shadow: 2px 2px 2px #f2e983;
    text-align: center;
    margin-bottom: 3rem;
`;

const PhotosContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ::after {
        content: '';
        width: 80%;
        height: 5px;
        border-top: 2px solid #363530;
        border-bottom: 2px solid #363530;
        margin-top: 4rem;
    }
`;

const Photos = styled.img `
    box-shadow: 4px 6px 15px -3px #000000;
    margin: .6rem 2rem;
    max-width: 10vw;
    border: double 4px black;
    border-radius: 2px;
    cursor: pointer;
`;

const InfoArtistBox = styled.div `
    /* width: 85%; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 0;
    margin-left: auto;
    padding: 1rem;
    padding-top: 4rem;
`;

const ArtistNameBox = styled.div `
    transform: rotate(-90deg);
    
`;

const ArtistName = styled.h3 `
    font-family: 'Led Bus';
   
`;


const DescriptionBox = styled.div `
    width: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5rem;
    margin-left: 3rem;
    padding-right: 4rem;
    border-right: double 3px #f2e983;

    @media (max-width: 480px) {
        width: 90%;
        border-right: none;
        border-bottom: double 3px #f2e983;
    }
`;

const Description = styled.p `
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    text-shadow: 2px 2px 2px #f2e983;
    line-height: 1.3rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;


const AvatarBox = styled.div `
    width: 45%;
    font-size: 1.2rem;
    line-height: 1.7rem;

    @media (max-width: 480px) {
        width: 90%;
    }
`
const Avatar = styled.img `
    width: 400px;
    border-radius: 3%;
`;




const ArtistModal = ({openModal, 
    setModal, 
    openArtist, 
    setOpenArtist, 
    setBlur, 
    displayedIndex, 
    setDisplayedIndex}) => {

    const [artist, setArtist] = useState(openArtist);

    useEffect(() => {
        setArtist(openArtist)
    }, [openArtist])

    const handleClickBack = () => {
        console.log(openModal);
        setModal(false);
    }

    const openPictures = (index) => {
        setBlur(true);
        setDisplayedIndex(index);
    }

    return (
        <Container id='artistModal'>
            <TitleContainer>
                <TitleArtist>{artist.nome}</TitleArtist>
                <BackBtn src={back} alt="back" onClick={handleClickBack} />
            </TitleContainer>
            <PhotosContainer>
                {artist.photographies.map( (item, index )=> {
                    return (
                        <Photos src={item} onClick={() => openPictures(index)} />
                    )
                })}
            </PhotosContainer>
            <InfoArtistBox>
                <ArtistNameBox>
                    <ArtistName>{artist.nome}</ArtistName>
                </ArtistNameBox>
                <DescriptionBox>
                    <Description>{artist.presentation}</Description>
                </DescriptionBox>
                <AvatarBox>
                    <Avatar src={artist.avatar} />
                </AvatarBox>
            </InfoArtistBox>
        </Container>
    )
}

export default ArtistModal