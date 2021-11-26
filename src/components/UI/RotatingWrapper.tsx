import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const RotatingWrapper = styled.div`
  margin: 0;
  padding: 0;
  max-width: fit-content;
  max-height: fit-content;
  &:after {
    transform-origin: center;
  }
  display: inline-block;
  animation: ${rotate} 4s linear infinite;
  position: relative;
`;

export default RotatingWrapper;
