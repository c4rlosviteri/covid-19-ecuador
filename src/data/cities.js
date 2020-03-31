const cities = [
  {
    city: "Guayaquil",
    province: "Guayas",
    id: "guayaquil",
    latlng: [-2.2067, -79.8884],
    confirmed: 1084
  },
  {
    city: "Samborondón",
    province: "Guayas",
    id: "samborondon",
    latlng: [-2.0908, -79.8779],
    confirmed: 145
  },
  {
    city: "Quito",
    province: "Pichincha",
    id: "quito",
    latlng: [-0.1893, -78.4813],
    confirmed: 197
  },
  {
    city: "Daule",
    province: "Guayas",
    id: "daule",
    latlng: [-1.8629, -79.978],
    confirmed: 116
  },
  {
    city: "Durán",
    province: "Guayas",
    id: "duran",
    latlng: [-2.1701, -79.822],
    confirmed: 77
  },
  {
    city: "Milagro",
    province: "Guayas",
    id: "milagro",
    latlng: [-2.1373, -79.5918],
    confirmed: 53
  },
  {
    city: "Cuenca",
    province: "Azuay",
    id: "cuenca",
    latlng: [-2.8956, -78.9900],
    confirmed: 67
  },
  {
    city: "Babahoyo",
    province: "Los Ríos",
    id: "babahoyo",
    latlng: [-1.8003, -79.524],
    confirmed: 43
  },
  {
    city: "Manta",
    province: "Manabí",
    id: "manta",
    latlng: [-0.9703, -80.7042],
    confirmed: 27
  },
  {
    city: "Lago Agrio",
    province: "Sucumbíos",
    id: "lago-agrio",
    latlng: [0.0796, -76.8878],
    confirmed: 24
  },
  {
    city: "Quevedo",
    province: "Los Ríos",
    id: "quevedo",
    latlng: [-1.0250, -79.4632],
    confirmed: 22
  },
  {
    city: "Portoviejo",
    province: "Manabí",
    id: "protoviejo",
    latlng: [-1.0524, -80.4624],
    confirmed: 19
  },
  {
    city: "Azogues",
    province: "Cañar",
    id: "Azogues",
    latlng: [-2.7403, -78.8460],
    confirmed: 14
  },
  {
    city: "Guaranda",
    province: "Bolívar",
    id: "guaranda",
    latlng: [-1.5908, -78.9990],
    confirmed: 10
  },
  {
    city: "Santa Rosa",
    province: "El Oro",
    id: "santa-rosa",
    latlng: [-3.4573, -79.9647],
    confirmed: 10
  },
  {
    city: "Santo Domingo",
    province: "Santo Domingo",
    id: "santo-domingo",
    latlng: [-0.2504, -79.1714],
    confirmed: 15
  },
  {
    city: "La Concordia",
    province: "Santo Domingo",
    id: "la-concordia",
    latlng: [0.0062, -79.3921],
    confirmed: 3
  },
  {
    city: "Salitre",
    province: "Guayas",
    id: "salitre",
    latlng: [-1.8300, -79.8165],
    confirmed: 19
  },
  {
    city: "Ibarra",
    province: "Imbabura",
    id: "ibarra",
    latlng: [0.3468, -78.1254],
    confirmed: 9
  },
  {
    city: "Machala",
    province: "El Oro",
    id: "machala",
    latlng: [-3.2596, -79.9581],
    confirmed: 10
  },
  {
    city: "Colta",
    province: "Chimborazo",
    id: "colta",
    latlng: [-1.7365, -78.7613],
    confirmed: 6
  },
  {
    city: "Rumiñahui",
    province: "Pichincha",
    id: "ruminahui",
    latlng: [-0.3334, -78.4419],
    confirmed: 11
  },
  {
    city: "Santa Lucía",
    province: "Guayas",
    id: "santa-lucia",
    latlng: [-1.7146, -79.9841],
    confirmed: 9
  },
  {
    city: "Pedro Carbo",
    province: "Guayas",
    id: "pedro-carbo",
    latlng: [-1.8166, -80.2347],
    confirmed: 13
  },
  {
    city: "Empalme",
    province: "Guayas",
    id: "empalme",
    latlng: [-1.0427, -79.6378],
    confirmed: 5
  },
  {
    city: "Ventanas",
    province: "Los Ríos",
    id: "ventanas",
    latlng: [-1.4479, -79.4620],
    confirmed: 6
  },
  {
    city: "Yaguachi",
    province: "Guayas",
    id: "yaguachi",
    latlng: [-2.0956, -79.6932],
    confirmed: 10
  },
  {
    city: "Esmeraldas",
    province: "Esmeraldas",
    id: "esmeraldas",
    latlng: [0.9666, -79.6512],
    confirmed: 7
  },
  {
    city: "Quinindé",
    province: "Esmeraldas",
    id: "quininde",
    latlng: [0.3262, -79.4659],
    confirmed: 1
  },
  {
    city: "Rioverde",
    province: "Esmeraldas",
    id: "rioverde",
    latlng: [1.0588, -79.4039],
    confirmed: 1
  },
  {
    city: "Atacames",
    province: "Esmeraldas",
    id: "atacames",
    latlng: [0.8675, -79.8467],
    confirmed: 1
  },
  {
    city: "Loja",
    province: "Loja",
    id: "loja",
    latlng: [-4.0031, -79.2085],
    confirmed: 16
  },
  {
    city: "Riobamba",
    province: "Chimborazo",
    id: "riobamba",
    latlng: [-1.67314, -78.6486],
    confirmed: 8
  },
  {
    city: "Santa Elena",
    province: "Santa Elena",
    id: "santa-elena",
    latlng: [-2.2273, -80.8596],
    confirmed: 5
  },
  {
    city: "La Libertad",
    province: "Santa Elena",
    id: "la-libertad",
    latlng: [-2.2313, -80.9000],
    confirmed: 8
  },
  {
    city: "Salinas",
    province: "Santa Elena",
    id: "salinas",
    latlng: [-2.2104, -80.9618],
    confirmed: 4
  },
  {
    city: "Palora",
    province: "Morona Santiago",
    id: "palora",
    latlng: [-1.7019, -77.9658],
    confirmed: 4
  },
  {
    city: "Calvas",
    province: "Loja",
    id: "calvas",
    latlng: [-4.3272, -79.5567],
    confirmed: 3
  },
  {
    city: "Huaquillas",
    province: "El Oro",
    id: "huaquillas",
    latlng: [-3.4782, -80.2202],
    confirmed: 3
  },
  {
    city: "Santa Isabel",
    province: "Azuay",
    id: "santa-isabel",
    latlng: [-3.2755, -79.3150],
    confirmed: 3
  },
  {
    city: "El Tambo",
    province: "Cañar",
    id: "el-tambo",
    latlng: [-2.5114, -78.9281],
    confirmed: 4
  },
  {
    city: "Biblián",
    province: "Cañar",
    id: "biblian",
    latlng: [-2.7124, -78.8900],
    confirmed: 3
  },
  {
    city: "Ambato",
    province: "Tungurahua",
    id: "ambato",
    latlng: [-1.2562, -78.6240],
    confirmed: 8
  },
  {
    city: "San Pedro de Pelileo",
    province: "Tungurahua",
    id: "san-pedro-de-pelileo",
    latlng: [-1.3286, -78.5402],
    confirmed: 1
  },
  {
    city: "Sucúa",
    province: "Morona Santiago",
    id: "sucua",
    latlng: [-2.4558, -78.1702],
    confirmed: 2
  },
  {
    city: "Gualaceo",
    province: "Azuay",
    id: "gualaceo",
    latlng: [-2.8891, -78.7763],
    confirmed: 3
  },
  {
    city: "Paute",
    province: "Azuay",
    id: "paute",
    latlng: [-2.7965, -78.7671],
    confirmed: 3
  },
  {
    city: "Sigsig",
    province: "Azuay",
    id: "sigsig",
    latlng: [-3.0511, -78.7942],
    confirmed: 1
  },
  {
    city: "La Troncal",
    province: "Cañar",
    id: "la-troncal",
    latlng: [-2.4236, -79.3426],
    confirmed: 15
  },
  {
    city: "Suscal",
    province: "Cañar",
    id: "sucal",
    latlng: [-2.4360, -79.0517],
    confirmed: 1
  },
  {
    city: "San Cristobal",
    province: "Galápagos",
    id: "san-cristobal",
    latlng: [-0.9045, -89.6080],
    confirmed: 2
  },
  {
    city: "Chillanes",
    province: "Bolívar",
    id: "chillanes",
    latlng: [-1.9426, -79.0668],
    confirmed: 2
  },
  {
    city: "Echeandia",
    province: "Bolívar",
    id: "echeandia",
    latlng: [-1.4318, -79.2795],
    confirmed: 2
  },
  {
    city: "Vinces",
    province: "Los Ríos",
    id: "vinces",
    latlng: [-1.5598, -79.7529],
    confirmed: 2
  },
  {
    city: "Quinsaloma",
    province: "Los Ríos",
    id: "quinsaloma",
    latlng: [-1.2064, -79.3132],
    confirmed: 1
  },
  {
    city: "Cuyabeno",
    province: "Sucumbíos",
    id: "cuyabeno",
    latlng: [-0.3577, -76.4357],
    confirmed: 3
  },
  {
    city: "Urdaneta",
    province: "Los Ríos",
    id: "urdaneta",
    latlng: [-1.5724, -79.4727],
    confirmed: 2
  },
  {
    city: "Arenillas",
    province: "El Oro",
    id: "arenillas",
    latlng: [-3.5552, -80.0683],
    confirmed: 2
  },
  {
    city: "Atahualpa",
    province: "El Oro",
    id: "atahualpa",
    latlng: [-3.5899, -79.6637],
    confirmed: 1
  },
  {
    city: "Pasaje",
    province: "El Oro",
    id: "pasaje",
    latlng: [-3.3297, -79.8055],
    confirmed: 2
  },
  {
    city: "El Guabo",
    province: "El Oro",
    id: "el-guabo",
    latlng: [-3.2426, -79.8312],
    confirmed: 2
  },
  {
    city: "Zaruma",
    province: "El Oro",
    id: "zaruma",
    latlng: [-3.6914, -79.6110],
    confirmed: 1
  },
  {
    city: "Piñas",
    province: "El Oro",
    id: "pinas",
    latlng: [-3.6808, -79.6824],
    confirmed: 2
  },
  {
    city: "Portovelo",
    province: "El Oro",
    id: "portovelo",
    latlng: [-3.7161, -79.6174],
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
    city: "Taisha",
    province: "Morona Santiago",
    id: "taisha",
    latlng: [-2.3406, -77.4593],
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
    city: "Catamayo",
    province: "Loja",
    id: "catamayo",
    latlng: [-3.9877, -79.3564],
    confirmed: 1
  },
  {
    city: "Chaguarpamba",
    province: "Loja",
    id: "chaguarpamba",
    latlng: [-3.8784, -79.6449],
    confirmed: 1
  },
  {
    city: "Montecristi",
    province: "Manabí",
    id: "montecristi",
    latlng: [-1.0446, -80.6591],
    confirmed: 2
  },
  {
    city: "Bolivar",
    province: "Manabí",
    id: "bolivar",
    latlng: [-0.8464, -80.1649],
    confirmed: 1
  },
  {
    city: "Morona",
    province: "Morona Santiago",
    id: "morona",
    latlng: [-2.3062, -78.1191],
    confirmed: 2
  },
  {
    city: "Tena",
    province: "Napo",
    id: "tena",
    latlng: [-0.9970, -77.8131],
    confirmed: 1
  },
  {
    city: "Alfredo Baquerizo Moreno",
    province: "Guayas",
    id: "alfredo-baquerizo-moreno",
    latlng: [-1.8921, -79.5565],
    confirmed: 3
  },
  {
    city: "Naranjal",
    province: "Guayas",
    id: "naranjal",
    latlng: [-2.6746, -79.6171],
    confirmed: 6
  },
  {
    city: "El Trinfo",
    province: "Guayas",
    id: "el-triunfo",
    latlng: [-2.3315, -79.4009],
    confirmed: 2
  },
  {
    city: "Colimes",
    province: "Guayas",
    id: "colimes",
    latlng: [-1.5469, -80.0103],
    confirmed: 1
  },
  {
    city: "Naranjito",
    province: "Guayas",
    id: "naranjito",
    latlng: [-2.1695, -79.4636],
    confirmed: 2
  },
  {
    city: "Lomas De Sargentillo",
    province: "Guayas",
    id: "lomas-de-sargentillo",
    latlng: [-1.8759, -80.0880],
    confirmed: 2
  },
  {
    city: "Nobol",
    province: "Guayas",
    id: "nobol",
    latlng: [-1.9150, -80.0118],
    confirmed: 1
  },
  {
    city: "Gral. Antonio Elizalde",
    province: "Guayas",
    id: "gral-antonio-elizalde",
    latlng: [-2.1756, -79.1981],
    confirmed: 1
  },
  {
    city: "Isidro Ayora",
    province: "Guayas",
    id: "isidro-ayora",
    latlng: [-1.8814, -80.1444],
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
    city: "Montalvo",
    province: "Los Ríos",
    id: "montalvo",
    latlng: [-1.7884, -79.2872],
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
    city: "Jaramijó",
    province: "Manabí",
    id: "jaramijo",
    latlng: [-0.9582, -80.6366],
    confirmed: 1
  },
  {
    city: "El Carmen",
    province: "Manabí",
    id: "el-carmen",
    latlng: [-0.2722, -79.4638],
    confirmed: 1
  },
  {
    city: "Santa Ana",
    province: "Manabí",
    id: "santa-ana",
    latlng: [-1.2071, -80.3712],
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
    confirmed: 5
  },
  {
    city: "Playas",
    province: "Guayas",
    id: "playas",
    latlng: [-2.6326, -80.3893],
    confirmed: 8
  },
  {
    city: "Cumandá",
    province: "Chimborazo",
    id: "cumanda",
    latlng: [-2.2052, -79.1377],
    confirmed: 1
  },
  {
    city: "Guano",
    province: "Chimborazo",
    id: "guano",
    latlng: [-1.6069, -78.6303],
    confirmed: 1
  },
  {
    city: "Chambo",
    province: "Chimborazo",
    id: "chambo",
    latlng: [-1.7314, -78.5964],
    confirmed: 1
  },
  {
    city: "Cañar",
    province: "Cañar",
    id: "canar",
    latlng: [-2.5600, -78.9374],
    confirmed: 2
  },
  {
    city: "La Maná",
    province: "Cotopaxi",
    id: "la-mana",
    latlng: [-0.9416, -79.2314],
    confirmed: 1
  },
  {
    city: "Salcedo",
    province: "Cotopaxi",
    id: "salcedo",
    latlng: [-1.0404, -78.5907],
    confirmed: 2
  },
  {
    city: "Saquisilí",
    province: "Cotopaxi",
    id: "saquisili",
    latlng: [-0.8370, -78.6688],
    confirmed: 1
  },
  {
    city: "Latacunga",
    province: "Cotopaxi",
    id: "latacunga",
    latlng: [-0.9350, -78.6191],
    confirmed: 4
  },
  {
    city: "Santa Cruz",
    province: "Galápagos",
    id: "santa-cruz",
    latlng: [-0.6401, -90.3389],
    confirmed: 2
  },
  {
    city: "Isabela",
    province: "Galápagos",
    id: "isabela",
    latlng: [-0.702861, -91.022209],
    confirmed: 1
  },
  {
    city: "Tulcán",
    province: "Carchi",
    id: "tulcan",
    latlng: [0.8116, -77.7174],
    confirmed: 3
  },
  {
    city: "Montúfar",
    province: "Carchi",
    id: "montufar",
    latlng: [0.5970, -77.8297],
    confirmed: 1
  },
  {
    city: "San Pedro de Huaca",
    province: "Carchi",
    id: "san-pedro-de-huaca",
    latlng: [0.6322, -77.7259],
    confirmed: 1
  },
  {
    city: "Mira",
    province: "Carchi",
    id: "mira",
    latlng: [0.5497, -78.0409],
    confirmed: 1
  },
  {
    city: "Otavalo",
    province: "Imbabura",
    id: "otavalo",
    latlng: [0.2335, -78.2616],
    confirmed: 1
  },
  {
    city: "Pastaza",
    province: "Pastaza",
    id: "pastaza",
    latlng: [-1.4740, -78.0020],
    confirmed: 4
  },
  {
    city: "Mera",
    province: "Pastaza",
    id: "mera",
    latlng: [-1.4608, -78.1113],
    confirmed: 1
  },
  {
    city: "Pedro Vicente Maldonado",
    province: "Pichincha",
    id: "pedro-vicente-maldonado",
    latlng: [0.0862, -79.0523],
    confirmed: 2
  },
  {
    city: "Mejía",
    province: "Pichincha",
    id: "mejia",
    latlng: [-0.5124, -78.5656],
    confirmed: 1
  },
  {
    city: "Yantzaza",
    province: "Zamora Chinchipe",
    id: "yantzaza",
    latlng: [-3.8269, -78.7609],
    confirmed: 1
  },
  {
    city: "Zamora",
    province: "Zamora Chinchipe",
    id: "zamora",
    latlng: [-4.0629, -78.9491],
    confirmed: 1
  },
  {
    city: "Orellana",
    province: "Orellana",
    id: "orellana",
    latlng: [-0.7083, -77.1555],
    confirmed: 1
  }
];

export default cities;
