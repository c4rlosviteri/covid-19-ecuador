import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import {
  Map as LeafletMap,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";
import styled from "styled-components";

import { theme } from "../App";
import cities from "../data/cities";

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
`;

const Confirmed = styled.h4`
  color: ${props => props.theme.red};
  display: grid;
  font-weight: 700;
  grid-template-columns: auto max-content;
  gap: 1.5rem;
  margin: 0;

  strong {
    color: ${props => props.theme.gray};
    font-weight: 700;
  }
`;

function PointMarker({ center, children, isSelected, radius }) {
  const markerRef = useRef(null);

  useEffect(() => {
    if (isSelected) {
      markerRef.current.leafletElement.openPopup();
    } else {
      markerRef.current.leafletElement.closePopup();
    }
  }, [isSelected]);

  return (
    <CircleMarker
      center={center}
      color={theme.darkRed}
      fillColor={theme.darkRed}
      fillOpacity={0.4}
      radius={radius}
      ref={markerRef}
    >
      <Popup>{children}</Popup>
    </CircleMarker>
  );
}

function Map({ selectedId }) {
  const isTablet = useMediaQuery("(min-width: 700px)");
  const getZoom = () => {
    if (isTablet) {
      return 7;
    } else {
      return 6;
    }
  };

  const maxConfirmed = cities
    .map(({ confirmed }) => confirmed)
    .reduce((acc, current) => (acc > current ? acc : current));

  const minConfirmed = cities
    .map(({ confirmed }) => confirmed)
    .reduce((acc, current) => (acc < current ? acc : current));

  const getRadius = useCallback(
    confirmed => {
      const maxRadius = 20;
      const minRadius = 5;

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

  return (
    <LeafletMap center={[-1.5395, -78.23037]} zoom={getZoom()}>
      <TileLayer updateWhenZooming url="//{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {cities.map(({ confirmed, city, id, latlng, province }) => (
        <PointMarker
          center={latlng}
          key={id}
          isSelected={id === selectedId}
          radius={getRadius(confirmed)}
        >
          <Cases aria-hidden={id !== selectedId} role="alert">
            <City>
              {city}, {province}
            </City>
            <Confirmed>
              <span>Confirmados</span>
              <strong>{confirmed}</strong>
            </Confirmed>
          </Cases>
        </PointMarker>
      ))}
    </LeafletMap>
  );
}

function useMediaQuery(mediaQueryString) {
  const [matches, setMatches] = useState(
    () => matchMedia(mediaQueryString).matches
  );

  useLayoutEffect(() => {
    const mql = matchMedia(mediaQueryString);
    const listener = e => setMatches(e.matches);

    mql.addListener(listener);

    return () => mql.removeListener(listener);
  }, [mediaQueryString]);

  return matches;
}

export default Map;
