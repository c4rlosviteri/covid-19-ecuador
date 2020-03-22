import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  FaBiohazard,
  FaCalendarAlt,
  FaChartLine,
  FaClock,
  FaNotesMedical,
  FaMicroscope,
  FaSkullCrossbones,
  FaTimes,
  FaUserCheck
} from "react-icons/fa";

import CasesChart from "./CasesChart";
import { cases, other } from "../data/cases";
import cities from "../data/cities";

const SideBar = styled.section`
  background-color: ${props => props.theme.white};
  height: 100vh;
  overflow-y: auto;
  padding: 1.25rem;

  @media (max-width: 990px) {
    ${props => (props.open ? "" : "transform: translateX(-100%);")}
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 500ms ease;
    z-index: 314159;
  }
`;

const OpenStats = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => props.theme.white};
  border: 0;
  border-radius: 3px;
  box-shadow: 0 2px 4px ${props => props.theme.shadow};
  color: ${props => props.theme.black};
  display: flex;
  font-weight: 700;
  height: 44px;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 1rem;
  text-transform: uppercase;
  top: 1rem;
  z-index: 314159;

  svg {
    margin-left: 0.5rem;
  }

  @media (min-width: 990px) {
    display: none;
  }
`;

const CloseStats = styled(OpenStats)`
  box-shadow: none;
  border: 1px solid ${props => props.theme.lightGray};

  svg {
    margin-left: 0;
  }
`;

const MainTitle = styled.h1`
  color: ${props => props.theme.black};
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
  text-align: center;
`;

const Confirmed = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.75rem;
  text-align: center;

  h2 {
    color: ${props => props.theme.gray};
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
  }

  strong {
    color: ${props => props.theme.red};
    font-size: 3.5rem;
    font-weight: 700;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  column-gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.75rem;
`;

const GridItem = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr repeat(2, min-content);
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
    align-items: center;
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    justify-content: center;
  }

  svg {
    margin-right: 0.5rem;
    opacity: 0.5;
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



  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(6) {
    h2 {
      font-size: 0.75rem;
    }

    strong {
      font-size: 1.55rem;
    }
  }

  &:nth-of-type(4) {
    strong {
      color: ${props => props.theme.blue};
    }
  }

  &:nth-of-type(5) {
    strong {
      color: ${props => props.theme.yellow};
    }
  }

  &:nth-of-type(6) {
    strong {
      color: ${props => props.theme.purple};
    }
  }
`;

const CitiesList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {

    @media (max-width: 990px) {
      padding-bottom: 0.625rem;
      padding-top: 0.625rem;
    }
  }

  li + li {

    @media (max-width: 990px) {
      border-top: 1px solid ${props => props.theme.lightGray};
    }

    @media (min-width: 990px) {
      margin-top: 0.5rem;
    }
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

    :hover {
      cursor: pointer;
    }

    @media (max-width: 990px) {
      border: 0;
      padding: 0;
      pointer-events: none;
    }
  }
`;

const Separator = styled.hr`
  background-color: ${props => props.theme.lightGray};
  border: 0;
  color: ${props => props.theme.lightGray};
  height: 1px;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
`;

const LastUpdate = styled.p`
  align-items: center;
  color: ${props => props.theme.gray};
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
  text-align: center;

  span {
    align-items: center;
    display: flex;
  }

  svg {
    margin-left: 4px;
    margin-right: 4px;
  }

  span:first-child {
    margin-bottom: 0.5rem;
  }
`;

function Cities({ selectedIndex, setSelectedIndex }) {
  return (
    <>
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
    </>
  );
}

function Stats({ selectedIndex, setSelectedIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalConfirmed = useMemo(
    () =>
      cities
        .map(({ confirmed }) => confirmed)
        .reduce((acc, current) => acc + current),
    []
  );

  const totalActive = cases[cases.length - 1][2];

  const totalRecovered = cases[cases.length - 1][4];

  const totalDeaths = cases[cases.length - 1][3];

  return (
    <>
      <OpenStats onClick={() => setIsOpen(true)}>
        Mostrar Datos
        <FaChartLine aria-hidden="true" />
      </OpenStats>
      <SideBar open={isOpen}>
        <CloseStats aria-label="Cerrar" onClick={() => setIsOpen(false)}>
          <FaTimes aria-hidden="true" size="1.5rem" />
        </CloseStats>
        <MainTitle>
          COVID-19 Ecuador{" "}
          <span aria-label="Bandera de Ecuador" role="img">
            🇪🇨
          </span>
        </MainTitle>
        <LastUpdate>
          <span>Última actualización COE Nacional</span>
          <span>
            <FaCalendarAlt aria-hidden="true" /> 2020-03-21 - 17:00{" "}
            <FaClock aria-hidden="true" />
          </span>
        </LastUpdate>
        <Confirmed>
          <h2>Total de casos confirmados</h2>
          <strong>{totalConfirmed}</strong>
        </Confirmed>
        <StatsGrid>
          <GridItem>
            <h2>Activos</h2>
            <strong>
              <FaBiohazard aria-hidden="true" size={24} /> {totalActive}
            </strong>
            <span>{((totalActive * 100) / totalConfirmed).toFixed(2)}%</span>
          </GridItem>
          <GridItem>
            <h2>Recuperados</h2>
            <strong>
              <FaNotesMedical aria-hidden="true" size={24} /> {totalRecovered}
            </strong>
            <span>{((totalRecovered * 100) / totalConfirmed).toFixed(2)}%</span>
          </GridItem>
          <GridItem>
            <h2>Fallecidos</h2>
            <strong>
              <FaSkullCrossbones aria-hidden="true" size={24} /> {totalDeaths}
            </strong>
            <span>{((totalDeaths * 100) / totalConfirmed).toFixed(2)}%</span>
          </GridItem>
          <GridItem>
            <h2>Descartados</h2>
            <strong>
              <FaUserCheck aria-hidden="true" size={24} /> {other.discarded}
            </strong>
          </GridItem>
          <GridItem>
            <h2>Sospechosos</h2>
            <strong>
              <FaMicroscope aria-hidden="true" size={24} /> {other.suspicious}
            </strong>
          </GridItem>
          <GridItem>
            <h2>Cerco epidemiológico</h2>
            <strong>
              <FaChartLine aria-hidden="true" size={24} />{" "}
              {other.epidemiologicalFence}
            </strong>
          </GridItem>
        </StatsGrid>
        <Cities
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Separator />
        <CasesChart />
      </SideBar>
    </>
  );
}

export default Stats;
