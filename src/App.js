/* eslint-disable no-unused-vars */
import {createGlobalStyle} from 'styled-components'
import ledFont from './assets/fonts/LedsitexSt.ttf'
import Header from './components/Header';
import About from './components/About';
import Artists from './components/Artists';
import Artists2 from './components/Artists2';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle `
    
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
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      {/* <Artists /> */}
      <Artists2 />
      <Footer />
    </>
  );
}

export default App;
