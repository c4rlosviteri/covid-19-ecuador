import React, { useMemo } from "react";
import styled from "styled-components";

import CasesChart from "./CasesChart";
import cities from "../data/cities";

const SideBar = styled.section`
  background-color: ${props => props.theme.white};
  height: 100vh;
  overflow-y: auto;
  padding: 1.5rem;
`;

const MainTitle = styled.h1`
  color: ${props => props.theme.black};
  font-size: 1.25rem;
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: center;
`;

const Confirmed = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  text-align: center;

  h2 {
    color: ${props => props.theme.gray};
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
  }

  strong {
    color: ${props => props.theme.red};
    font-size: 3rem;
    font-weight: 600;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
`;

const GridItem = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  justify-content: center;
  text-align: center;

  h2 {
    color: ${props => props.theme.gray};
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
  }

  strong {
    font-size: 1.75rem;
    font-weight: 600;
  }

  span {
    color: ${props => props.theme.gray};
  }

  &:nth-of-type(1) {
    strong {
      color: ${props => props.theme.orange};
    }
  }

  &:nth-of-type(2) {
    strong {
      color: ${props => props.theme.green};
    }
  }

  &:nth-of-type(3) {
    strong {
      color: ${props => props.theme.black};
    }
  }
`;

const CitiesList = styled.ul`
  list-style: none;
  padding-left: 0;

  li + li {
    margin-top: 0.5rem;
  }

  button {
    appearance: none;
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    width: 100%;
  }
`;

const Separator = styled.hr`
  background-color: ${props => props.theme.lightGray};
  border: 0;
  color: #f00;
  height: 1px;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
`;

function Stats({ selectedIndex, setSelectedIndex }) {
  const totalConfirmed = useMemo(
    () =>
      cities
        .map(({ confirmed }) => confirmed)
        .reduce((acc, current) => acc + current),
    []
  );

  const totalActive = useMemo(
    () =>
      cities
        .map(({ active }) => active)
        .reduce((acc, current) => acc + current),
    []
  );

  const totalRecovered = useMemo(
    () =>
      cities
        .map(({ recovered }) => recovered)
        .reduce((acc, current) => acc + current),
    []
  );

  const totalDeaths = useMemo(
    () =>
      cities
        .map(({ deaths }) => deaths)
        .reduce((acc, current) => acc + current),
    []
  );

  return (
    <SideBar>
      <MainTitle>COVID-19 Ecuador</MainTitle>
      <Confirmed>
        <h2>Total de casos confirmados</h2>
        <strong>{totalConfirmed}</strong>
      </Confirmed>
      <StatsGrid>
        <GridItem>
          <h2>Activos</h2>
          <strong>{totalActive}</strong>
          <span>{((totalActive * 100) / totalConfirmed).toFixed(2)}%</span>
        </GridItem>
        <GridItem>
          <h2>Recuperados</h2>
          <strong>{totalRecovered}</strong>
          <span>{((totalRecovered * 100) / totalConfirmed).toFixed(2)}%</span>
        </GridItem>
        <GridItem>
          <h2>Muertos</h2>
          <strong>{totalDeaths}</strong>
          <span>{((totalDeaths * 100) / totalConfirmed).toFixed(2)}%</span>
        </GridItem>
      </StatsGrid>
      <Separator />
      <CitiesList>
        {cities.map(({ confirmed, city, id, province }, index) => (
          <li>
            <button
              key={id}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? -1 : index)
              }
            >
              <span>
                {city}, {province}
              </span>
              <strong>
                {confirmed} <span className="visually-hidden">Confirmados</span>
              </strong>
            </button>
          </li>
        ))}
      </CitiesList>
      <Separator />
      <CasesChart />
    </SideBar>
  );
}

export default Stats;
