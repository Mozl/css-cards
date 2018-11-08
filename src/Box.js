import styled, { keyframes } from 'styled-components';

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
    transform: translate3d(-20px,57px,20px);
    opacity: 1;
  }

  to {
    transform: translate3d(-247px,57px,20px);
    opacity: 0;
  }
`;

const Box = styled.div`
  animation: ${({ accepted, rejected }) =>
    accepted
      ? `${slideRight} 5s linear`
      : rejected
        ? `${slideLeft} 5s linear`
        : null};

  display: block;
  position: absolute;
  width: 180px;
  height: 180px;
  top: 17%;
  left: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background: ${props => props.colour}
  cursor: pointer;
  transition: all 0.3s;
`;

export default Box;
