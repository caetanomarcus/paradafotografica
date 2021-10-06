import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

import close from '../assets/images/close.png'
import nextIcon from '../assets/images/right-arrow.png'

const Container = styled.div `
    width: 100%;
    height: fit-content;
    background: transparent;
    position: fixed;
    top: 0;
    padding: 5px;
    display: flex;
    justify-content: center;
    z-index: 30;
    overflow: auto;

    @media (max-width: 480px){
        
        align-items: center;
    }
    
`;

const Picture = styled.div `
  background-image: url(${props => props.bg});
  margin: 0 auto;
  width: 95vw;
  height: 95vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CloseBox = styled.div `
    position: absolute;
    top: 10%;
    right: 1rem;
    /* background: rgba(255,255,255, .5); */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px){
        right: 9%;
        top: 5%;
    }
`

const CloseBtn = styled.img  `
    /* position: absolute;
    top: 10%;
    right: 1rem; */
    width: 40px;
    border-radius: 50%;
    cursor: pointer;

    
`;

const NextBtn = styled.button`
	position: relative;
	width: 4rem;
	height: 4rem;
	border: none;
	background-color: transparent;
	cursor: pointer;
	outline: none;

	${({ prev }) => `
		::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			height: 100%;
			background: url(${nextIcon}) no-repeat center;
			background-size: 3rem;
			transform: translate(-50%, -50%) ${prev ? 'rotate(180deg)' : ''};
		}

        @media (max-width: 480px) {
            ::before {
                background-size: 1rem;
            }
         
}
	`}

    @media (max-width: 480px) {
        width: 1.5rem;
        height: 1.5rem;
         
    }
`;

const CarouselSlide = styled(Carousel) `

.paging-dot {
		display: none;
	}
`;

const NameAndPhotoBox = styled.div `
    margin: 5px 0;
`

const ArtName = styled.p `
    font-size: .6rem;
    font-weight: 400;
    text-align: center;
    text-shadow: 1px 1px 1px #f2e983;
`

const DisplayedPictures = ({openArtist, setBlur, displayedIndex, setModal}) => {


    const handleClick = () => {
        setBlur(false);
        
    }

    return (
        <Container>
            <CarouselSlide
            wrapAround={true}
            transitionMode={'scroll3d'}
            slideIndex={displayedIndex}
            speed={1000}
            opacityScale={0}
            scrollMode={'remainder'}
            getControlsContainerStyles={(key) => {
                switch (key) {
                    case 'CenterLeft':
                        return {
                            // bottom: '0',
                            // left: '0'
                        }
                    case 'CenterRight':
                        return {
                            // bottom: '0',
                            // right: '0'
                        }
                    default:
                        return
                }
            }}
            renderCenterLeftControls={({ previousSlide }) => (
                <NextBtn prev onClick={previousSlide} />
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <NextBtn onClick={nextSlide} />
            )}
            >
                {openArtist?.photographies?.map( (item, index) => (
                <NameAndPhotoBox>
                    <Picture key={index} bg={item.photo}> </Picture>
                    <ArtName>{item.name}</ArtName>
                </NameAndPhotoBox>
                ))}
            </CarouselSlide>
            <CloseBox>
                <CloseBtn src={close} onClick={handleClick} />
            </CloseBox>
        </Container>
    )
}

export default DisplayedPictures