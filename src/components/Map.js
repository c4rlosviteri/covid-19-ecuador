import React, { useCallback, useLayoutEffect, useState } from "react";
import MapGL, { Popup, Marker } from "react-map-gl";
import styled from "styled-components";

import { theme } from "../App";
import cities from "../data/cities";
import i18next from "../i18next";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const City = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

const Cases = styled.div`
  display: grid;
  font-family: "Source Sans Pro";
  font-size: 1rem;
  gap: 0.25rem;
  padding: 0.375rem;
`;

const Confirmed = styled.h4`
  color: ${(props) => props.theme.red};
  display: grid;
  font-weight: 700;
  grid-template-columns: auto max-content;
  gap: 1.5rem;
  margin: 0;

  strong {
    color: ${(props) => props.theme.gray};
    font-weight: 700;
  }
`;

function Pins({ setSelectedCity }) {
  const maxConfirmed = cities
    .map(({ confirmed }) => confirmed)
    .reduce((acc, current) => (acc > current ? acc : current));

  const minConfirmed = cities
    .map(({ confirmed }) => confirmed)
    .reduce((acc, current) => (acc < current ? acc : current));

  const getRadius = useCallback(
    (confirmed) => {
      const maxRadius = 16;
      const minRadius = 3;

      if (confirmed === maxConfirmed) {
        return maxRadius;
      } else if (confirmed === minConfirmed) {
        return minRadius;
      } else {
        return (confirmed * maxRadius) / maxConfirmed + minRadius;
      }
    },
    [maxConfirmed, minConfirmed]
  );

  return cities.map((item) => {
    const radius = getRadius(item.confirmed);

    return (
      <Marker
        key={item.id}
        longitude={item.latlng[1]}
        latitude={item.latlng[0]}
      >
        <svg
          height={radius * 2}
          viewBox={`0 0 ${radius * 2 + 2} ${radius * 2 + 2}`}
          style={{
            cursor: "pointer",
            transform: `translate(${-radius}px, ${-radius * 2}px)`,
          }}
          onClick={() => setSelectedCity(item)}
        >
          <circle
            cx={radius + 1}
            cy={radius + 1}
            r={radius}
            fill={theme.darkRed}
            fillOpacity="0.4"
            stroke={theme.darkRed}
            strokeWidth="1"
          />
        </svg>
      </Marker>
    );
  });
}

function Map({ selectedCity, setSelectedCity, language }) {
  const isTablet = useMediaQuery("(min-width: 700px)");
  const getZoom = () => {
    if (isTablet) return 6;
    return 5;
  };
  const [viewport, setViewport] = useState({
    latitude: -1.5395,
    longitude: -78.23037,
    zoom: getZoom(),
    bearing: 0,
    pitch: 0,
  });

  function renderPopup() {
    return (
      selectedCity && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={selectedCity.latlng[1]}
          latitude={selectedCity.latlng[0]}
          closeOnClick={false}
          onClose={() => setSelectedCity(null)}
        >
          <Cases>
            <City>
              {selectedCity.city}, {selectedCity.province}
            </City>
            <Confirmed>
              <span>{i18next.t("confirmed", { lng: language })}</span>
              <strong>{selectedCity.confirmed}</strong>
            </Confirmed>
          </Cases>
        </Popup>
      )
    );
  }

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100vh"
      mapStyle="mapbox://styles/andro1010/ck8fzxyyd39dd1imwsjqufzu7"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Pins setSelectedCity={setSelectedCity} />
      {renderPopup()}
    </MapGL>
  );
}

function useMediaQuery(mediaQueryString) {
  const [matches, setMatches] = useState(
    () => matchMedia(mediaQueryString).matches
  );

  useLayoutEffect(() => {
    const mql = matchMedia(mediaQueryString);
    const listener = (e) => setMatches(e.matches);

    mql.addListener(listener);

    return () => mql.removeListener(listener);
  }, [mediaQueryString]);

  return matches;
}

export default Map;
