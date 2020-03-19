import React, { useCallback, useEffect, useMemo, useRef } from "react";
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

function Map({ selectedIndex }) {
  const maxConfirmed = useMemo(
    () =>
      cities
        .map(({ confirmed }) => confirmed)
        .reduce((acc, current) => (acc > current ? acc : current)),
    []
  );

  const minConfirmed = useMemo(
    () =>
      cities
        .map(({ confirmed }) => confirmed)
        .reduce((acc, current) => (acc < current ? acc : current)),
    []
  );

  const getRadius = useCallback(
    confirmed => {
      const maxRadius = 30;
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
    <LeafletMap center={[-1.5395, -78.23037]} zoom={7}>
      <TileLayer updateWhenZooming url="//{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {cities.map(({ confirmed, city, id, latlng, province }, index) => (
        <PointMarker
          center={latlng}
          key={id}
          isSelected={index === selectedIndex}
          radius={getRadius(confirmed)}
        >
          <Cases aria-hidden={index !== selectedIndex} role="alert">
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

export default Map;
