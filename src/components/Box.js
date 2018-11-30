import styled, { css, keyframes } from 'styled-components';

export const slideRight = () => keyframes`
  from {
    transform: translate3d(-87px, -12px, 20px);
    opacity: 1;
  }

  to {
    transform: translate3d(76px,57px,20px);
    opacity: 0;
  }
`;

export const slideLeft = () => keyframes`
  from {
    transform: translate3d(-87px, -12px, 20px);
    opacity: 1;
  }

  to {
    transform: translate3d(-247px,57px,20px);
    opacity: 0;
  }
`;

const fallRight = () => css`
  transform: rotate(45deg) translate3d(20%, -70%, 40px) !important;
`;

const fallLeft = () => css`
  transform: translate3d(-170%, -50%, 40px) rotate(-45deg) !important;
`;

const Box = styled.div`
  display: block;
  position: absolute;
  width: 180px;
  height: 180px;
  top: 17%;
  left: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background: ${props => props.colour};
  cursor: pointer;
  transition: all 0.3s;
`;

export default Box;
