import React, { useEffect, useMemo, useState } from "react";
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
  FaUserCheck,
  FaSearch,
  FaVial,
  FaChevronDown
} from "react-icons/fa";

import CasesChart from "./CasesChart";
import { cases, other } from "../data/cases";
import citiesData from "../data/cities";

const provinces = citiesData.reduce((acc, item) => {
  if (!acc[item.province]) {
    acc[item.province] = [];
  }

  acc[item.province].push(item);

  return acc;
}, {});

const sortedProvinces = Object.keys(provinces)
  .sort()
  .reduce(
    (acc, key) => ({
      ...acc,
      [key]: provinces[key]
    }),
    {}
  );

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
    transition: transform 500ms;
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
      font-size: 1.5rem;
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
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;

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

const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  label {
    color: ${props => props.theme.gray};
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.375rem;
    text-transform: uppercase;
  }

  input {
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 3px;
    padding: 0.75rem 3rem 0.75rem 0.75rem;
    width: 100%;
  }

  .search-icon,
  .clear-icon {
    position: absolute;
    right: 0.75rem;
    transform: translateY(-50%);
    top: 2.875rem;
  }

  .search-icon {
    display: ${props => (props.query ? "none" : "block")};
    pointer-events: none;
  }

  .clear-icon {
    display: ${props => (props.query ? "block" : "none")};

    :hover {
      cursor: pointer;
    }
  }

  svg {
    color: ${props => props.theme.blue};
  }
`;

const ProvinceButton = styled.button`
  ${props =>
    props.isOpen ? `box-shadow: 0 2px 4px ${props.theme.shadow};` : ""}
  appearance: none;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  transition: 300ms;
  width: 100%;

  :hover {
    cursor: pointer;
  }

  strong:last-child {
    align-items: center;
    display: flex;

    svg {
      ${props => (props.isOpen ? "transform: scaleY(-1);" : "")}
      margin-left: 0.5rem;
      transition: transform 300ms;
    }
  }

  & + & {
    align-items: center;
    margin-top: 0.5rem;
  }
`;

function Province({ cities, name, selectedId, setSelectedId }) {
  const confirmedByProvince = cities
    .map(({ confirmed }) => confirmed)
    .reduce((acc, current) => acc + current, 0);

  const [isOpen, setIsOpen] = useState(false);

  const citiesListId = `${name}-cities`;

  return (
    <>
      <ProvinceButton
        aria-expanded={isOpen}
        aria-controls={citiesListId}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>{name}</strong>
        <strong>
          {confirmedByProvince}{" "}
          <span className="visually-hidden">Confirmados</span>
          <FaChevronDown aria-hidden="true" />
        </strong>
      </ProvinceButton>
      {isOpen && (
        <CitiesList id={citiesListId}>
          {cities.map(({ id, city, confirmed }) => (
            <li key={id}>
              <button
                onClick={() => setSelectedId(selectedId === id ? null : id)}
              >
                <span>{city}</span>
                <strong>
                  {confirmed}{" "}
                  <span className="visually-hidden">Confirmados</span>
                </strong>
              </button>
            </li>
          ))}
        </CitiesList>
      )}
    </>
  );
}

function Provinces({ filteredProvinces, selectedId, setSelectedId }) {
  const entries = Object.entries(filteredProvinces);

  return entries.length > 0 ? (
    entries.map(([province, cities]) => (
      <Province
        cities={cities}
        key={province}
        name={province}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    ))
  ) : (
    <CitiesList>
      <li>No hay resultados…</li>
    </CitiesList>
  );
}

function Stats({ selectedId, setSelectedId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const filteredProvinces = useProvincesSearch(debouncedQuery);

  const totalConfirmed = citiesData
    .map(({ confirmed }) => confirmed)
    .reduce((acc, current) => acc + current);

  const totalRecovered = cases[cases.length - 1][3];

  const totalDeaths = cases[cases.length - 1][2];

  const totalActive = totalConfirmed - (totalRecovered + totalDeaths);

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
            <FaCalendarAlt aria-hidden="true" /> 2020-03-30 - 17:00{" "}
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
              <FaUserCheck aria-hidden="true" size={20} /> {other.discarded}
            </strong>
          </GridItem>
          <GridItem>
            <h2>Sospechosos</h2>
            <strong>
              <FaMicroscope aria-hidden="true" size={20} /> {other.suspicious}
            </strong>
          </GridItem>
          <GridItem>
            <h2>Muestras</h2>
            <strong>
              <FaVial aria-hidden="true" size={20} /> {other.laboratorySamples}
            </strong>
          </GridItem>
        </StatsGrid>
        <Separator />
        <InputContainer query={query}>
          <label htmlFor="search">Buscar provincia</label>
          <input
            id="search"
            type="text"
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar…"
            value={query}
          />
          <FaSearch aria-hidden="true" className="search-icon" size={24} />
          <FaTimes
            aria-hidden="true"
            className="clear-icon"
            onClick={() => setQuery("")}
            role="button"
            size={24}
          />
        </InputContainer>
        <Provinces
          filteredProvinces={filteredProvinces}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Separator />
        <CasesChart />
      </SideBar>
    </>
  );
}

const removeDiacritics = string =>
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const normalizeString = string => removeDiacritics(string).toLowerCase();

function useProvincesSearch(query) {
  const [filteredProvinces, setFilteredProvinces] = useState(sortedProvinces);

  useMemo(() => {
    const matches = Object.keys(sortedProvinces)
      .filter(key =>
        normalizeString(key).includes(normalizeString(query).trim())
      )
      .reduce((obj, key) => {
        obj[key] = sortedProvinces[key];

        return obj;
      }, {});

    setFilteredProvinces(matches);
  }, [query]);

  return filteredProvinces;
}

function useDebounce(query, delay = 600) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, query]);

  return debouncedQuery;
}

export default Stats;
