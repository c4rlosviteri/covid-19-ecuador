const cities = [
  {
    city: "Guayaquil",
    province: "Guayas",
    id: "guayaquil",
    latlng: [-2.2067, -79.8884],
    confirmed: 526
  },
  {
    city: "Samborondón",
    province: "Guayas",
    id: "samborondon",
    latlng: [-2.0908, -79.8779],
    confirmed: 91
  },
  {
    city: "Quito",
    province: "Pichincha",
    id: "quito",
    latlng: [-0.1893, -78.4813],
    confirmed: 63
  },
  {
    city: "Daule",
    province: "Guayas",
    id: "daule",
    latlng: [-1.8629, -79.978],
    confirmed: 59
  },
  {
    city: "Durán",
    province: "Guayas",
    id: "duran",
    latlng: [-2.1701, -79.822],
    confirmed: 37
  },
  {
    city: "Milagro",
    province: "Guayas",
    id: "milagro",
    latlng: [-2.1373, -79.5918],
    confirmed: 33
  },
  {
    city: "Cuenca",
    province: "Azuay",
    id: "cuenca",
    latlng: [-2.8956, -78.9900],
    confirmed: 22
  },
  {
    city: "Manta",
    province: "Manabí",
    id: "manta",
    latlng: [-0.9703, -80.7042],
    confirmed: 20
  },
  {
    city: "Babahoyo",
    province: "Los Ríos",
    id: "babahoyo",
    latlng: [-1.8003, -79.524],
    confirmed: 20
  },
  {
    city: "Guaranda",
    province: "Bolivar",
    id: "guaranda",
    latlng: [-1.5908, -78.9990],
    confirmed: 7
  },
  {
    city: "Santo Domingo",
    province: "Santo Domingo",
    id: "santo-domingo",
    latlng: [-0.2504, -79.1714],
    confirmed: 7
  },
  {
    city: "Colta",
    province: "Chimborazo",
    id: "colta",
    latlng: [-1.7365, -78.7613],
    confirmed: 6
  },
  {
    city: "Lago Agrio",
    province: "Sucumbíos",
    id: "lago-agrio",
    latlng: [0.0796, -76.8878],
    confirmed: 5
  },
  {
    city: "Empalme",
    province: "Guayas",
    id: "empalme",
    latlng: [-1.0427, -79.6378],
    confirmed: 5
  },
  {
    city: "Azogues",
    province: "Cañar",
    id: "Azogues",
    latlng: [-2.7403, -78.8460],
    confirmed: 4
  },
  {
    city: "Ibarra",
    province: "Imbabura",
    id: "ibarra",
    latlng: [0.3468, -78.1254],
    confirmed: 4
  },
  {
    city: "Portoviejo",
    province: "Manabí",
    id: "protoviejo",
    latlng: [-1.0524, -80.4624],
    confirmed: 4
  },
  {
    city: "Santa Rosa",
    province: "El Oro",
    id: "santa-rosa",
    latlng: [-3.4573, -79.9647],
    confirmed: 4
  },
  {
    city: "Santa Lucía",
    province: "Guayas",
    id: "santa-lucia",
    latlng: [-1.7146, -79.9841],
    confirmed: 4
  },
  {
    city: "Salitre",
    province: "Guayas",
    id: "salitre",
    latlng: [-1.8300, -79.8165],
    confirmed: 3
  },
  {
    city: "Quevedo",
    province: "Los Ríos",
    id: "quevedo",
    latlng: [-1.0250, -79.4632],
    confirmed: 3
  },
  {
    city: "Pedro Carbo",
    province: "Guayas",
    id: "pedro-carbo",
    latlng: [-1.8166, -80.2347],
    confirmed: 3
  },
  {
    city: "Esmeraldas",
    province: "Esmeraldas",
    id: "esmeraldas",
    latlng: [0.9666, -79.6512],
    confirmed: 3
  },
  {
    city: "Yaguachi",
    province: "Guayas",
    id: "yaguachi",
    latlng: [-2.0956, -79.6932],
    confirmed: 3
  },
  {
    city: "Palora",
    province: "Morona Santiago",
    id: "palora",
    latlng: [-1.7019, -77.9658],
    confirmed: 2
  },
  {
    city: "Ventanas",
    province: "Los Ríos",
    id: "ventanas",
    latlng: [-1.4479, -79.4620],
    confirmed: 2
  },
  {
    city: "Santa Elena",
    province: "Santa Elena",
    id: "santa-elena",
    latlng: [-2.2273, -80.8596],
    confirmed: 2
  },
  {
    city: "Loja",
    province: "Loja",
    id: "loja",
    latlng: [-4.0031, -79.2085],
    confirmed: 2
  },
  {
    city: "Calvas",
    province: "Loja",
    id: "calvas",
    latlng: [-4.3272, -79.5567],
    confirmed: 2
  },
  {
    city: "Riobamba",
    province: "Chimborazo",
    id: "riobamba",
    latlng: [-1.67314, -78.6486],
    confirmed: 2
  },
  {
    city: "Huaquillas",
    province: "El Oro",
    id: "huaquillas",
    latlng: [-3.4782, -80.2202],
    confirmed: 2
  },
  {
    city: "La Libertad",
    province: "Santa Elena",
    id: "la-libertad",
    latlng: [-2.2313, -80.9000],
    confirmed: 2
  },
  {
    city: "Sucúa",
    province: "Morona Santiago",
    id: "sucua",
    latlng: [-2.4558, -78.1702],
    confirmed: 2
  },
  {
    city: "Rumiñahui",
    province: "Pichincha",
    id: "rumiñahui",
    latlng: [-0.3334, -78.4419],
    confirmed: 2
  },
  {
    city: "Machala",
    province: "El Oro",
    id: "machala",
    latlng: [-3.2596, -79.9581],
    confirmed: 2
  },
  {
    city: "Arenillas",
    province: "El Oro",
    id: "arenillas",
    latlng: [-3.5552, -80.0683],
    confirmed: 1
  },
  {
    city: "Cuyabeno",
    province: "Sucumbíos",
    id: "cuyabeno",
    latlng: [-0.3577, -76.4357],
    confirmed: 1
  },
  {
    city: "Gualaquiza",
    province: "Morona Santiago",
    id: "gualaquiza",
    latlng: [-3.4029, -78.5782],
    confirmed: 1
  },
  {
    city: "Urdaneta",
    province: "Los Ríos",
    id: "urdaneta",
    latlng: [-1.5724, -79.4727],
    confirmed: 1
  },
  {
    city: "Macará",
    province: "Loja",
    id: "macara",
    latlng: [-4.3772, -79.9419],
    confirmed: 1
  },
  {
    city: "Montecristi",
    province: "Manabí",
    id: "montecristi",
    latlng: [-1.0446, -80.6591],
    confirmed: 1
  },
  {
    city: "Macas",
    province: "Morona Santiago",
    id: "macas",
    latlng: [-2.3062, -78.1191],
    confirmed: 1
  },
  {
    city: "Alfredo Baquerizo Moreno",
    province: "Guayas",
    id: "alfredo-baquerizo-moreno",
    latlng: [-1.8921, -79.5565],
    confirmed: 1
  },
  {
    city: "Naranjal",
    province: "Guayas",
    id: "naranjal",
    latlng: [-2.6746, -79.6171],
    confirmed: 1
  },
  {
    city: "Colimes",
    province: "Guayas",
    id: "colimes",
    latlng: [-1.5469, -80.0103],
    confirmed: 1
  },
  {
    city: "Buena Fé",
    province: "Los Ríos",
    id: "buena-fe",
    latlng: [-0.8888, -79.4894],
    confirmed: 1
  },
  {
    city: "Mocache",
    province: "Los Ríos",
    id: "mocache",
    latlng: [-1.1839, -79.5124],
    confirmed: 1
  },
  {
    city: "Jipijapa",
    province: "Manabí",
    id: "jipijapa",
    latlng: [-1.3518, -80.5823],
    confirmed: 1
  },
  {
    city: "Sucre",
    province: "Manabí",
    id: "sucre",
    latlng: [-1.2789, -80.4188],
    confirmed: 1
  },
  {
    city: "Santa Isabel",
    province: "Azuay",
    id: "santa-isabel",
    latlng: [-3.2755, -79.3150],
    confirmed: 1
  },
  {
    city: "Chillanes",
    province: "Bolívar",
    id: "chillanes",
    latlng: [-1.9426, -79.0668],
    confirmed: 1
  },
  {
    city: "Chimbo",
    province: "Bolívar",
    id: "chimbo",
    latlng: [-1.6838, -79.0254],
    confirmed: 1
  },
  {
    city: "Balzar",
    province: "Guayas",
    id: "balzar",
    latlng: [-1.3641, -79.9023],
    confirmed: 1
  },
  {
    city: "Playas",
    province: "Guayas",
    id: "playas",
    latlng: [-2.6326, -80.3893],
    confirmed: 1
  },
  {
    city: "Cumandá",
    province: "Chimborazo",
    id: "cumanda",
    latlng: [-2.2052, -79.1377],
    confirmed: 1
  },
  {
    city: "Cañar",
    province: "Cañar",
    id: "canar",
    latlng: [-2.5600, -78.9374],
    confirmed: 1
  },
  {
    city: "La Maná",
    province: "Cotopaxi",
    id: "la-mana",
    latlng: [-0.9416, -79.2314],
    confirmed: 1
  },
  {
    city: "Ambato",
    province: "Tungurahua",
    id: "ambato",
    latlng: [-1.2562, -78.6240],
    confirmed: 1
  }
];

export default cities;
