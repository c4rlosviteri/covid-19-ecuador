import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";

import cases from "../data/cases";

const Container = styled.div`

  @media (min-width: 990px) {
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 3px;
    bottom: 1.5rem;
    height: 320px;
    padding: 1.5rem;
    position: absolute;
    right: 1.5rem;
    z-index: 314159;
    width: 500px;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.gray};
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 990px) {
    font-size: 1.25rem;
  }
`;

function CasesChart() {
  return (
    <Container>
      <Title>Tendencia</Title>
      <Chart
        chartType="Line"
        data={cases}
        loader={<div>Cargando…</div>}
      />
    </Container>
  );
}

export default CasesChart;
