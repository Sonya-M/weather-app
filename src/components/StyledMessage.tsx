import styled from "styled-components";

const StyledMessage = styled.div`
  margin: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: ${(props) => props.color || "inherit"};
`;

export default StyledMessage;
