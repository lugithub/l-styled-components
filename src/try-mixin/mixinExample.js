import styled from 'styled-components';
import complexMixin from './complexMixin';

const StyledComp = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.complex ? complexMixin : 'color: blue;')};
`;

export default StyledComp;
