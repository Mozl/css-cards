import styled, { css, keyframes } from 'styled-components';

export const slideRight = () => keyframes`
  from {
    transform: translate3d(-20px,57px,20px);
    opacity: 1;
  }

  to {
    transform: translate3d(100px,57px,20px);
    opacity: 0;
  }
`;

export const slideLeft = () => keyframes`
  from {
    transform: translate3d(-20px,57px,20px);
    opacity: 1;
  }

  to {
    transform: translate3d(-100px,57px,20px);
    opacity: 0;
  }
`;

const animationRight = props =>
  css`
    ${slideRight};
  `;
const animationLeft = props =>
  css`
    ${slideLeft};
  `;

export const Box = styled.div`
  animation: ${({ accepted }) =>
    accepted ? `${slideRight} 5s linear` : `${slideLeft} 5s linear`};

  display: block;
  position: absolute;
  width: 180px;
  height: 180px;
  top: 17%;
  left: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background: ${props => props.colour}
  cursor: pointer;

  transform-origin: 50% 50%;
  transition: all 0.5s;
`;

export default Box;

// accepted is passed to Box
// when tick is clicked, prop accepted is true
// when accepted is true the first box should move to side and fade out
// Faded box replaces last box in div
// other boxes shift up one position
