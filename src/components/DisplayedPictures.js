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
    margin: 0 auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    z-index: 30;
    overflow: auto;

    
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

const CloseBtn = styled.img  `
    position: absolute;
    top: 10%;
    right: 1rem;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 480px){
        right: 9%;
        top: 5%;
    }
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
                {openArtist?.photographies?.map( item => <Picture bg={item}> </Picture>)}
            </CarouselSlide>
            <CloseBtn src={close} onClick={handleClick} />
        </Container>
    )
}

export default DisplayedPictures