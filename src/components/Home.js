import React from 'react';
import styled from 'styled-components/macro';
import Intro from './Intro';
import MyLink from './MyLink';

const StyledHome = styled.div`
  .link1 {
    color: red;
    margin: 1em;
  }

  .link2 {
    color: green;
    margin: 1em;
  }
`;

const Home = () => (
  <StyledHome>
    <Intro>
      eqwrqwrqrq
      <MyLink className="link1">link 1</MyLink>qwerwqerqw
      <MyLink className="link2">link 2</MyLink>wergrwew
      <MyLink>link 3</MyLink>wergrwew
    </Intro>
  </StyledHome>
);

export default Home;
