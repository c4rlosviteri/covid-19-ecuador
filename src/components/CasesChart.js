import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";

import cases from "../data/cases";

const Title = styled.h2`
  color: ${props => props.theme.gray};
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

function CasesChart() {
  return (
    <>
      <Title>Tendencia</Title>
      <Chart
        chartType="Line"
        data={cases}
        height={360}
        loader={<div>Cargando…</div>}
      />
    </>
  );
}

export default CasesChart;
