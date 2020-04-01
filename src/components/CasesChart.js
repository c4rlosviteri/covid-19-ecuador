import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chart from "chart.js";

import { cases, labels } from "../data/cases";
import { theme } from "../App";

const Title = styled.h2`
  color: ${props => props.theme.gray};
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

function CasesChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Total De Casos Confirmados",
            yAxisID: "B",
            data: cases.map(item => item[0]),
            backgroundColor: ["transparent"],
            borderColor: theme.yellow,
            type: "line"
          },
          {
            label: "Casos Confirmados Por Día",
            yAxisID: "A",
            data: cases.map((item, index, array) => {
              if (index === 0) return item[0];
              return item[0] - array[index - 1][0];
            }),
            backgroundColor: theme.blue
          },
          {
            label: "Muertes Por Día",
            yAxisID: "A",
            data: cases.map((item, index, array) => {
              if (index === 0) return item[1];
              return item[1] - array[index - 1][1];
            }),
            backgroundColor: theme.red
          }
        ],
        labels
      },
      options: {
        scales: {
          yAxes: [
            {
              id: "A",
              type: "linear",
              position: "left"
            },
            {
              id: "B",
              type: "linear",
              position: "right"
            }
          ]
        }
      }
    });
  }, []);

  return (
    <>
      <Title>Tendencia</Title>
      <canvas width="400" height="400" ref={canvasRef} />
    </>
  );
}

export default CasesChart;
