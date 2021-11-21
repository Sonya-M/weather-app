import NavHeader from "../Navigation/NavHeader";

import styled from "styled-components";

const Container = styled.main`
  margin: 1rem 2rem;
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
