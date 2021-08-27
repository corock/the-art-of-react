/** @see https://stackoverflow.com/questions/48183785/type-checking-styled-components-props-in-stateless-component */
import styled from 'styled-components';
import palette from '../../libs/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

// Button이 받아 오는 props를 모두 StyledButton에 전달
const Button = (props) => <StyledButton {...props} />;

export default Button;
