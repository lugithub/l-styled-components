import React, { useState } from 'react';

//this line enables babel-plugin-styled-components
import styled, {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components/macro';

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
    main: 'palevioletred'
  }
};

export default function App() {
  const [theme, setTheme] = useState({
    main: 'mediumseagreen'
  });
  return (
    <>
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
