import React, { useState } from 'react';
//this line enables babel-plugin-styled-components
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro';

import PanelGroup from './PanelGroup';
import Parent from './components/Parent';
import Home from './components/Home';
import Bsv4App from './try-bootstrap-styled-v4/Bsv4App';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

const Dog = Parent(`color: yellow`);
const Cat = Parent(`color: blue`);
const Fish = Parent(``);

export default function App() {
  const [theme, setTheme] = useState({
    main: 'mediumseagreen',
  });
  return (
    <>
      <Bsv4App />
      <Home />
      <div style={{ color: 'green' }}>
        <Dog />
        <Cat />
        <Fish />
      </div>
      <PanelGroup />
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            setTheme({ main: 'yellow' });
          }}
        >
          Themed
        </Button>
      </ThemeProvider>
    </>
  );
}
