import React, { useState } from 'react';

//this line enables babel-plugin-styled-components
import styled, { createGlobalStyle } from 'styled-components/macro';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function calculateColor({ primary, tomato }) {
  if (primary) {
    return 'white';
  } else if (tomato) {
    return 'tomato';
  } else {
    return 'palevioletred';
  }
}
const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${calculateColor};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Story = styled.section`
  padding: 4em;
  background: papayawhip;
  color: black;
`;

const StyledCounter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Paragraph = styled.p`
  flex: 8 0 0;
  text-align: center;
`;
const CounterButton = styled.button`
  flex: 1 0 0;
  margin: 1rem;
`;

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <StyledCounter>
      <Paragraph>{count}</Paragraph>
      <CounterButton onClick={setCount.bind(null, count + 1)}>+</CounterButton>
      <CounterButton onClick={setCount.bind(null, count - 1)}>-</CounterButton>
    </StyledCounter>
  );
}

const Thing = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }

  //among children of Thing
  .something {
    background-color: orange;
  }

  //Thing
  &.something {
    background-color: yellow;
  }

  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
  button${Thing} {
    color: red;
  }
`;

const Input2 = styled.input.attrs(({ size }) => ({
  // we can define static props
  type: 'password',

  // or we can define dynamic ones
  margin: size || '1em',
  padding: size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default function App() {
  return (
    <Story>
      <GlobalStyle />
      <Input2 placeholder="A small text input" size="1em" />
      <Input2 placeholder="A bigger text input" size="2em" />
      <Title>Hello World!</Title>
      <Button>not primary</Button>
      <Button primary>primary</Button>
      <Button tomato as="a" href="">
        tomato
      </Button>
      <TomatoButton foo="bar">tomato</TomatoButton>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <Counter />
      <Thing className="something">
        <span className="something">Hello world!</span>
      </Thing>
    </Story>
  );
}
