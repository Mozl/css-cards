import styled from 'styled-components';

export const Cube = styled.div`
  perspective: 100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .pers250 {
    perspective: 100px;
    perspective-origin: 50% -3%;
  }

  .first {
    transform: translate3d(-20px, 57px, 20px);
    z-index: 4;
  }

  .second {
    transform: translate3d(-10px, 26px, 10px);
    z-index: 3;
  }

  .third {
    transform: translate3d(-5px, 5px, 5px);
    z-index: 2;
  }

  .fourth {
    transform: translate3d(7px, -40px, -10px);
    z-index: 1;
  }
  /*
  .last-card {
    transform: translate3d(-50%, -50%, 10px);
    z-index: 1;
  }

  .card.hide {
    opacity: 0;
    visibility: hidden;
  }

  .card:not(:first-child) {
    opacity: 0.9;
  } */
`;

export default Cube;
