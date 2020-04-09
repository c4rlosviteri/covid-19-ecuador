import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chart from "chart.js";

import { cases } from "../data/cases";
import { theme } from "../App";
import i18next from "../i18next";

const Title = styled.h2`
  color: ${(props) => props.theme.gray};
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

function CasesChart({ language }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: i18next.t("confirmedCases", { lng: language }),
            yAxisID: "B",
            data: cases.map((item) => item[1]),
            backgroundColor: ["transparent"],
            borderColor: theme.yellow,
            type: "line",
          },
          {
            label: i18next.t("dailyConfirmedCases", { lng: language }),
            yAxisID: "A",
            data: cases.map((item, index, array) => {
              if (index === 0) return item[1];
              return item[1] - array[index - 1][1];
            }),
            backgroundColor: theme.blue,
          },
          {
            label: i18next.t("dailyDeaths", { lng: language }),
            yAxisID: "A",
            data: cases.map((item, index, array) => {
              if (index === 0) return item[2];
              return item[2] - array[index - 1][2];
            }),
            backgroundColor: theme.red,
          },
        ],
        labels: cases.map(item => item[0]),
      },
      options: {
        scales: {
          yAxes: [
            {
              id: "A",
              type: "linear",
              position: "left",
            },
            {
              id: "B",
              type: "linear",
              position: "right",
            },
          ],
        },
      },
    });
  }, [language]);

  return (
    <>
      <Title>{i18next.t("trend", { lng: language })}</Title>
      <canvas width="400" height="400" ref={canvasRef} />
    </>
  );
}

export default CasesChart;
