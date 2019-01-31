import React from 'react';

// use the line below instead
// import styled from 'styled-components';

//this line enables babel-plugin-styled-components
import styled from 'styled-components/macro';

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section `
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
  <Wrapper> 
    <Title>
      Hello World!
    </Title>
  </Wrapper>);
}

export default App;
