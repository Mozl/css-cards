import styled from 'styled-components';

const Cube = styled.div`
  perspective: 100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .first {
    transform: translate3d(-87px, -12px, 20px);
    z-index: 4;
  }

  .second {
    transform: translate3d(-86px, -48px, 10px);
    z-index: 3;
  }

  .third {
    transform: translate3d(-87px, -71px, 5px);
    z-index: 2;
  }

  .fourth {
    transform: translate3d(-86px, -126px, -10px);
    z-index: 1;
  }
`;

export default Cube;
