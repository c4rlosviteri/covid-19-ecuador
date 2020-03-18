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
  font-family: "Open Sans";
  font-size: 1rem;
  gap: 0.25rem;
`;

const Confirmed = styled.h4`
  color: ${props => props.theme.red};
  display: grid;
  font-weight: 600;
  grid-template-columns: auto max-content;
  gap: 1.5rem;
  margin: 0;

  strong {
    color: ${props => props.theme.black};
    font-weight: 600;
  }
`;

const Active = styled(Confirmed)`
  color: ${props => props.theme.orange};
`;

const Recovered = styled(Confirmed)`
  color: ${props => props.theme.green};
`;

const Deaths = styled(Confirmed)`
  color: ${props => props.theme.gray};
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
  const maxActive = useMemo(
    () =>
      cities
        .map(({ confirmed }) => confirmed)
        .reduce((acc, current) => (acc > current ? acc : current)),
    []
  );

  const minActive = useMemo(
    () =>
      cities
        .map(({ confirmed }) => confirmed)
        .reduce((acc, current) => (acc < current ? acc : current)),
    []
  );

  const getRadius = useCallback(
    active => {
      const maxRadius = 30;
      const minRadius = 8;

      if (active === maxActive) {
        return maxRadius;
      } else if (active === minActive) {
        return minRadius;
      } else {
        return (active * 100) / maxActive + minRadius - minActive;
      }
    },
    [maxActive, minActive]
  );

  return (
    <LeafletMap
      center={[-1.539574, -78.23037]}
      maxZoom={10}
      minZoom={5}
      zoom={7}
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
      {cities.map(
        (
          { active, city, confirmed, deaths, id, latlng, province, recovered },
          index
        ) => (
          <PointMarker
            center={latlng}
            key={id}
            isSelected={index === selectedIndex}
            radius={getRadius(active)}
          >
            <Cases aria-hidden={index !== selectedIndex} role="alert">
              <City>
                {city}, {province}
              </City>
              <Confirmed>
                <span>Confirmados</span>
                <strong>{confirmed}</strong>
              </Confirmed>
              <Active>
                <span>Activos</span>
                <strong>{active}</strong>
              </Active>
              <Recovered>
                <span>Recuperados</span>
                <strong>{recovered}</strong>
              </Recovered>
              <Deaths>
                <span>Muertos</span>
                <strong>{deaths}</strong>
              </Deaths>
            </Cases>
          </PointMarker>
        )
      )}
    </LeafletMap>
  );
}

export default Map;
