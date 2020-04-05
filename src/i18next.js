import i18next from "i18next";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "es",
  resources: {
    en: {
      translation: {
        showData: "Show Data",
        lastUpdate: "Last National COE Update",
        confirmedCases: "Total Confirmed Cases",
        activeCases: "Active",
        hospitalDischarge: "Hospital Discharge",
        deaths: "Deaths",
        discarted: "Discarted",
        suspicious: "Suspicious",
        samples: "Lab Samples",
        searchProvince: "Search Province",
        search: "Search…",
        trend: "Trend",
        dailyConfirmedCases: "Daily Confirmed Cases",
        dailyDeaths: "Daily Deaths",
        confirmed: "Confirmed",
        noResults: "No Results…",
        selectLanguage: "Seleccionar Lenguaje:"
      },
    },
    es: {
      translation: {
        showData: "Mostrar datos",
        lastUpdate: "Última actualización COE Nacional",
        confirmedCases: "Total de casos confirmados",
        activeCases: "Activos",
        hospitalDischarge: "Alta clínica",
        deaths: "Fallecidos",
        discarted: "Descartados",
        suspicious: "Sospechosos",
        samples: "Muestras",
        searchProvince: "Buscar provincia",
        search: "Buscar…",
        trend: "Tendencia",
        dailyConfirmedCases: "Casos confirmados por día",
        dailyDeaths: "Muertes por día",
        confirmed: "confirmed",
        noResults: "No hay resultados…",
        selectLanguage: "Select Language:"
      },
    },
  },
});

export default i18next;
