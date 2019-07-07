import styled from 'styled-components/macro';

const MyButton = overRides => styled.button`
  color: inherit;
  padding: 2em;

  ${overRides()}
`;

export const YButton = overRides => styled.button`
  color: inherit;
  padding: 2em;

  ${overRides}
`;

export default MyButton;
