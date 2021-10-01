import {createGlobalStyle} from 'styled-components'
import ledFont from './assets/fonts/LedsitexSt.ttf'
import Header from './components/Header';

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
      /* font-family: 'Led Bus'; */
    }
  
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
