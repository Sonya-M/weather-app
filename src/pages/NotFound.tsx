import { Link } from "react-router-dom";
import styled from "styled-components";
import FullWidthSection from "../components/UI/FullWidthSection";
import StyledMessage from "../components/UI/StyledMessage";

const CenteredLink = styled.span`
  text-align: center;

  & a {
    text-decoration-color: orangered;
    font-size: 1.3rem;
  }
`;

export default function NotFound() {
  return (
    <FullWidthSection>
      <StyledMessage>
        <h3>Sorry, the page you are looking for does not exist</h3>
        <CenteredLink>
          <Link to="/">Home</Link>
        </CenteredLink>
      </StyledMessage>
    </FullWidthSection>
  );
}
