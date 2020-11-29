import React from 'react';

import { Container, GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>My Application</h1>
      </Container>
    </>
  );
};

export default App;
