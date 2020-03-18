import React, { useState } from "react";
import ReactGA from "react-ga";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Map from "./components/Map";
import Stats from "./components/Stats";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans';
  }

  * {
    box-sizing: border-box;
  }

  .leaflet-container {
    height: 100vh;
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
    grid-template-columns: 360px 1fr;
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
  red: "#c02739",
  white: "#ffffff"
};

ReactGA.initialize("UA-115305699-2");
ReactGA.pageview(window.location.href);

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Stats selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Map selectedIndex={selectedIndex} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
