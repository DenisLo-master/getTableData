import styled from 'styled-components';
import { TableFeature } from './components'

const StyledTableWrapper = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  position: relative;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <div>
        <StyledTableWrapper>
          <h1>Список продукции</h1>
          <TableFeature />
        </StyledTableWrapper>
      </div>
    </>
  )
}

export default App
