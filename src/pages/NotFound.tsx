import { Link } from "react-router-dom";
import styled from "styled-components";

const CenteredLink = styled.span`
  font-size: 1.2rem;
  text-align: center;
  & a {
    text-decoration-color: orangered;
  }
`;

export default function NotFound() {
  return (
    <>
      <h3>Sorry, the page you are looking for does not exist</h3>
      <CenteredLink>
        <Link to="/">Home</Link>
      </CenteredLink>
    </>
  );
}
