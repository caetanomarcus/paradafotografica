/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ledFont from './assets/fonts/LedsitexSt.ttf'
import Header from './components/Header';
import About from './components/About';
import Artists from './components/Artists';
import Artists2 from './components/Artists2';
import Footer from './components/Footer';
import ArtistModal from './components/ArtistModal';
import DisplayedPictures from './components/DisplayedPictures';
import Programation from './components/Programation';


const Container = styled.div`
  height: 100%;
  filter: ${props => props.isBlur && 'blur(5px)'};
  overflow: ${props => props.isBlur && 'hidden'};


`

const GlobalStyle = createGlobalStyle`
    
    @font-face {
        font-family: 'Led Bus';
        src: local('Led Bus'), local('LedBus'),
        url(${ledFont}) format('trueType')
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    }

  body {


  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #363530;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .active {
    border-bottom: 1px black solid;
  }
    }
  
`

function App() {
  const [openModal, setModal] = useState(false);
  const [openArtist, setOpenArtist] = useState({});
  const [isBlur, setBlur] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState();


  return (
    <Fragment>
      <Container isBlur={isBlur}>
        <GlobalStyle />
        <Header
          setModal={setModal}
        />
        <About />
        {/* <Artists /> */}
        {(
          <Artists2
          openModal={openModal}
          setModal={setModal}
          openArtist={openArtist}
          setOpenArtist={setOpenArtist}
          isBlur={isBlur}
          setBlur={setBlur}
          displayedIndex={displayedIndex}
          setDisplayedIndex={setDisplayedIndex}
          />
        )}
        {/* {openModal && (
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
        )} */}
        <Programation />
        <Footer />
      </Container>
      {isBlur && (
        <DisplayedPictures
          openArtist={openArtist}
          isBlur={isBlur}
          setBlur={setBlur}
          displayedIndex={displayedIndex}
          setModal={setModal}
        />
      )}
  
    </Fragment>
  );
}

export default App;
