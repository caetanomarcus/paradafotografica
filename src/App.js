import {createGlobalStyle} from 'styled-components'
import ledFont from './assets/fonts/LedsitexSt.ttf'
import Header from './components/Header';
import Introdution from './components/Introdution';

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
      /* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #363530;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    }
  
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Introdution />
    </>
  );
}

export default App;
