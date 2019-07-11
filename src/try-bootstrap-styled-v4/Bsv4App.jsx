import React, { useState } from 'react';

import {
  Card,
  CardBlock,
  H3,
  Small,
  A,
  Strong,
  Badge,
  Code,
  Button,
  Alert,
} from '@bootstrap-styled/v4';
import { BootstrapProvider } from '@bootstrap-styled/provider';

const initialState = {
  counter: 1336,
};

/**
 * @public
 * @description The <BootstrapProvider> accept theme and can inject global css utilities
 * @param {object} props - instance props
 * @param {string} props.title - A title
 * @param {string} props.name - A name
 * @param {object} props.theme - A theme object, see https://bootstrap-styled.github.io for more details
 * @returns {component} - bootstrap application example
 */
const App = ({ title, name, theme }) => {
  const [counter, setCounter] = useState(initialState.counter);

  return (
    <BootstrapProvider theme={theme}>
      <Card>
        <CardBlock>
          <H3 className="d-inline">
            Hello <Small>{title}</Small> <Strong>{name}</Strong>, <A>you</A>,
            can add <Code>1</Code> to
          </H3>{' '}
          <Badge color="danger" pill>
            <H3>{counter}</H3>
          </Badge>{' '}
          <Strong>by</Strong> pressing,
          <Button onClick={() => setCounter(counter + 1)}>here</Button>. This
          <Code>
            <Strong>module</Strong>
          </Code>{' '}
          is a basic example with a custom Bootstrap Styled theme.
          {counter >= 1337 && (
            <Alert color="success" className="mt-2" uncontrolled>
              {counter === 1337 ? 'Congrats' : "We won't tell anyone"}, now
              click on
              <Code>
                <Strong>VIEW CODE</Strong>
              </Code>{' '}
              button to learn how it work
            </Alert>
          )}
          {counter > 1500 && (
            <Alert color="warning" className="mt-2">
              Do you know the{' '}
              <Code>
                <Strong>Code snippet</Strong>
              </Code>{' '}
              can be edited in live?
            </Alert>
          )}
        </CardBlock>
      </Card>
    </BootstrapProvider>
  );
};

// Create the example

export default function Bsv4App() {
  return (
    <App
      title="young"
      name="padawan"
      theme={{
        '$font-family-base': 'Helvetica',
        '$body-color': '#EA638C',
        '$btn-primary-bg': '#190E4F',
        '$btn-border-radius': '.035rem',
        '$brand-danger': '#002A22',
        '$badge-color': '#2ed167',
        '$badge-pill-border-radius': '.5rem',
        '$alert-border-radius': '.35rem',
        '$alert-success-text': '#EA638C',
        '$alert-success-bg': '#03012C',
        '$link-color': '#CCC',
      }}
    />
  );
}
