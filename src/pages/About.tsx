import styled from "styled-components";

const StyledSection = styled.section`
  text-align: center;
  grid-column: span 2;
  & h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default function About() {
  return (
    <StyledSection>
      <h1>About this app</h1>
      <p>
        This app uses the awesome (and free!){" "}
        <a href="https://openweathermap.org/">OpenWeather</a> API.
      </p>
    </StyledSection>
  );
}
