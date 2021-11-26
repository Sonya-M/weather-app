import styled from "styled-components";
import StyledMessage from "./StyledMessage";
import { BiConfused } from "react-icons/bi";

const COLOR = "rgb(196, 4, 4)";

const IconDiv = styled.div`
  margin-bottom: 1rem;
`;

const ErrorMessage: React.FC = (props) => {
  return (
    <StyledMessage color={COLOR}>
      <IconDiv>
        <BiConfused size="5rem" color="" />
      </IconDiv>
      {props.children}
    </StyledMessage>
  );
};

export default ErrorMessage;
