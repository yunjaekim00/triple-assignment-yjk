import { keyframes } from "styled-components";

const translateUp = keyframes`
  0% {
    transform: translateY(18px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export default translateUp;
