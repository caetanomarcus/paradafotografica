import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

import close from '../assets/images/close.png'

const Container = styled.div `
    width: 100%;
    height: fit-content;
    background: white;
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
  width: 100vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CloseBtn = styled.img  `
    position: absolute;
    top: 10%;
    right: 1rem;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
`;

const DisplayedPictures = ({openArtist, setBlur, displayedIndex, setModal}) => {


    const handleClick = () => {
        setBlur(false);
        
    }

    return (
        <Container>
            <Carousel
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
            >
                {openArtist?.photographies?.map( item => <Picture bg={item}> </Picture>)}
            </Carousel>
            <CloseBtn src={close} onClick={handleClick} />
        </Container>
    )
}

export default DisplayedPictures