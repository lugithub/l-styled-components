import React from 'react';
import styled from 'styled-components/macro';
import MyButton, { YButton } from './MyButton';

function overRide() {
  return `
  `;
}

const X = MyButton(overRide);
const Y = YButton(`
  
`);

const StyledParent = overRide => styled.p`
  button {
    margin: 8px;
  }

  ${overRide}
`;

const Parent = overRide => () => {
  const Super = StyledParent(overRide);
  return (
    <Super>
      <Y>you</Y>
      <X>my</X>
    </Super>
  );
};

export default Parent;
