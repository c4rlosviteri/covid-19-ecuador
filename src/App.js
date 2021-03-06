import React, { useState } from "react";
import ReactGA from "react-ga";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Map from "./components/Map";
import Stats from "./components/Stats";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.gray};
    font-family: 'Source Sans Pro';
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
  }

  *:focus:not(:focus-visible) {
    outline: none;
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
  white: "#ffffff",
};

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview("/covid19ecuador");

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [language, setLanguage] = useState("es");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Stats
          language={language}
          setLanguage={setLanguage}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
        <Map
          language={language}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
