import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0;
  padding: 1rem 1rem;
  background: #e47b03;
`;

const StyledNav = styled.nav`
  & .active {
    color: white;
  }
  & ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
  & a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    color: darkred;

    text-transform: uppercase;
  }
`;

export default function NavHeader() {
  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}
