import { createGlobalStyle } from 'styled-components';
import { TableFeature } from './components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: black; /* черный цвет текста */
    background-color: #cb2020; /* белый цвет фона */
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <TableFeature />
      </div>
    </>
  )
}

export default App
