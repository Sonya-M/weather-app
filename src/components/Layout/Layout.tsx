import NavHeader from "./NavHeader";

import styled from "styled-components";

const Container = styled.main`
  margin: 0;
  padding: 0 1rem;
  display: grid;
  justify-content: center;

  max-width: 100%;

  @media (min-width: 400px) {
    margin: 1rem;
  }
  @media (min-width: 900px) {
    margin: 1rem 5rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const Layout: React.FC<{}> = (props) => {
  return (
    <>
      <NavHeader />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
