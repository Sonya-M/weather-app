import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0;
  padding: 1rem 1rem;
  /* background: #015791; */
  background: var(--heading-color);
  width: 100vw;
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
    justify-content: space-around;
    align-items: center;
    /* gap: 2rem; */
  }
  @media screen and (min-width: 400px) {
    & ul {
      gap: 4rem;
    }
  }
  & a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    color: #f30606;
    text-shadow: 2px 2px 2px black;
    text-transform: uppercase;
  }
  & a:hover {
    background-color: unset;
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
