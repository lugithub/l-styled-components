import { css } from 'styled-components';

const complexMixin = css`
  padding: 2em;
  color: ${props => (props.whiteColor ? 'white' : 'black')};
`;

export default complexMixin;
