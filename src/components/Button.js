import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 28px;
  border: 2px solid #000;
  position: relative;
  font-size: 20px;
  border-radius: 50%;
  background: none;
  color: #000;
  cursor: pointer;
  outline: none;
  transition: all 0.1s;

  .hover {
    background: tomato;
    color: white;
  }
`;

export default Button;
