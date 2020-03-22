import React, { useState } from "react";
import ReactGA from "react-ga";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { FaPhone } from "react-icons/fa";

import Map from "./components/Map";
import Stats from "./components/Stats";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.gray};
    font-family: 'Source Sans Pro';
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
  }

  .leaflet-container {
    height: 100vh;
    margin: 0 auto;
    width: 100%;
  }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    white-space: nowrap;
    width: 1px;
  }

  @media (min-width: 990px) {
    overflow-y: hidden;
  }
`;

const Container = styled.main`
  position: relative;

  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 25rem 1fr;
  }
`;

const Symptoms = styled.a`
  align-items: center;
  appearance: none;
  background-color: ${props => props.theme.white};
  border: 0;
  border-radius: 3px;
  bottom: 1rem;
  box-shadow: 0 2px 4px ${props => props.theme.shadow};
  color: ${props => props.theme.black};
  display: flex;
  font-weight: 700;
  height: 44px;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 314159;

  svg {
    margin-right: 0.5rem;
  }
`;

export const theme = {
  black: "#313131",
  blue: "#00a8cc",
  darkRed: "#c81912",
  gray: "#6c6c6c",
  green: "#21bf73",
  lightGray: "#e0e0e0",
  orange: "#ffa34d",
  purple: "#8b2f97",
  red: "#c02739",
  shadow: "rgba(0, 0, 0, 0.3)",
  yellow: "#ffd369",
  white: "#ffffff"
};

ReactGA.initialize("UA-115305699-2");
ReactGA.pageview("/covid19ecuador");

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Stats
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Map selectedIndex={selectedIndex} />
        <Symptoms href="tel:171">
          <FaPhone /> ¿Tienes sintomas?
        </Symptoms>
      </Container>
    </ThemeProvider>
  );
}

export default App;
