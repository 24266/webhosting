// Initialize and add the map
function initMap() {
    const blueLineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: "#9C8761",
        fillOpacity: 0.6,
        strokeColor: "#9C8761",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        labelOrigin: new google.maps.Point(0, 2.8),
    };
    const redLineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: "#002A47",
        fillOpacity: 1,
        strokeColor: "#002A47",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        labelOrigin: new google.maps.Point(0, 2.8),
    };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 48.0196, lng: 66.9237},
        zoom: 5,
        mapId: "685d7e01260de14c",
        disableDefaultUI: false,
    });

    // array1 coordinates
    let array1 = [
        {lat: 43.2220, lng: 76.8512}, // "Almaty",
        {lat: 51.1605, lng: 71.4704}, // "Nur-Sultan",
        {lat: 47.0945, lng: 51.9238}, // "Atyrau",
        {lat: 51.2278, lng: 51.3865}, // "Uralsk",
        {lat: 41.0082, lng: 28.9784}, // "Istanbul",
        {lat: 36.8969, lng: 30.7133}, //  "Antalya",
        {lat: 50.1109, lng: 8.6821}, //  "Frankfurt",
        {lat: 37.5665, lng: 126.9780}, //  "Seoul",
        {lat: 7.8804, lng: 98.3923}, // "Phuket",
        {lat: 52.3676, lng: 4.9041}, //  "Amsterdam",
        {lat: 4.1755, lng: 73.5093}, // "Malé",
        {lat: 51.4700, lng: 0.4543}, // "London Heathrow",
        {lat: 13.7563, lng: 100.5018}, // "Bangkok",
        {lat: 42.4304, lng: 19.2594}, // "Podgorica",
        {lat: 35.3387, lng: 25.1442}, //  "Heraklion",
        {lat: 30.5723, lng: 104.0665}, //  "Chengdu",
        // {lat: 21.4858, lng: 39.1925}, //  "Jeddah",
        {lat: 42.8746, lng: 74.5698}, //  "Bishkek",
        {lat: 25.2048, lng: 55.2708}, //  "Dubai",
        {lat: 41.2995, lng: 69.2401}, //  "Tashkent",
        {lat: 28.7041, lng: 77.1025}, //  "Delhi",
        {lat: 41.7151, lng: 44.8271}, //  "Tbilisi",
        {lat: 38.5598, lng: 68.7870}, //  "Dushanbe",
        {lat: 40.4093, lng: 49.8671}, //  "Baku",
        {lat: 41.6168, lng: 41.6367}, // "Batumi",
        {lat: 43.6588, lng: 51.1975}, //  "Aktau",
        {lat: 42.3417, lng: 69.5901}, // "Shymkent",
        {lat: 50.2839, lng: 57.1670}, //  "Aktobe",
        {lat: 49.9749, lng: 82.6017}, // "Ust-Kamenogorsk",
        {lat: 44.8488, lng: 65.4823}, //  "Kyzylorda",
        {lat: 53.2198, lng: 63.6354}, //  "Kostanay",
        {lat: 27.9654, lng: 34.3618}, //  "Sharm El Sheikh",
        {lat: 37.0344, lng: 27.4305}, // "Bodrum",
        // {lat: 15.2993, lng: 74.1240}, // "Goa",

    ]

    // array2 titles
    let array2 = [
        "Almaty",
        "Nur-Sultan",
        "Atyrau",
        "Uralsk",
        "Istanbul",
        "Antalya",
        "Frankfurt",
        "Seoul",
        "Phuket",
        "Amsterdam",
        "Malé",
        "London Heathrow",
        "Bangkok",
        "Podgorica",
        "Heraklion",
        "Chengdu",
        // "Jeddah",
        "Bishkek",
        "Dubai",
        "Tashkent",
        "Delhi",
        "Tbilisi",
        "Dushanbe",
        "Baku",
        "Batumi",
        "Aktau",
        "Shymkent",
        "Aktobe",
        "Ust-Kamenogorsk",
        "Kyzylorda",
        "Kostanay",
        "Sharm El Sheikh",
        "Bodrum",
        // "Goa",
    ]

    // infowindow with title
    let array3 = [
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Almaty ALA</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Nur-Sultan NQZ</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Atyrau GUW</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Uralsk URA</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Istanbul IST</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Antalya AYT</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Frankfurt FRA</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Seoul ICN</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Phuket HKT</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Amsterdam AMS</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Malé MLE</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">London Heathrow LHR</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Bangkok BKK</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Podgorica TGD</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Heraklion HER</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Chengdu CTU</p>',
        // '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Jeddah JED</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Bishkek FRU</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Dubai DXB</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Tashkent TAS</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Delhi DEL</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Tbilisi TBS</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Dushanbe DYU</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Baku GYD</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Batumi BUS</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Aktau SCO</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Shymkent CIT</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Aktobe AKX</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Ust-Kamenogorsk UKK</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Kyzylorda KZO</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Kostanay KSN</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Sharm El Sheikh SSH</p>',
        '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Bodrum BJV</p>',
        // '<p style="font-size:12px;font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Goa GOI</p>',

    ]

    // routes between cities
    /*
    * consequences of routes is below
    * "Almaty",
      "Nur-Sultan",
      "Atyrau",
      "Uralsk",
      "Istanbul",
      "Antalya",
      "Frankfurt",
      "Seoul",
      "Phuket",
      "Amsterdam",
      "Malé",
      "London Heathrow",
      "Bangkok",
      "Podgorica",
      "Heraklion",
      "Chengdu",
      "Jeddah",
      "Bishkek",
      "Dubai",
      "Tashkent",
      "Delhi",
      "Tbilisi",
      "Dushanbe",
      "Baku",
      "Batumi",
      "Nur-Sultan",
      "Aktau",
      "Atyrau",
      "Shymkent",
      "Uralsk",
      "Aktobe",
      "Ust-Kamenogorsk",
      "Kyzylorda",
      "Kostanay",
      "Sharm El Sheikh",
      "Bodrum",
      "Goa",
    * */
    let array4 = [
        [//Almaty
            {lat: 43.2220, lng: 76.8512}, {lat: 41.0082, lng: 28.9784},
            {lat: 43.2220, lng: 76.8512}, {lat: 36.8969, lng: 30.7133},
            {lat: 43.2220, lng: 76.8512}, {lat: 37.5665, lng: 126.9780},
            {lat: 43.2220, lng: 76.8512}, {lat: 7.8804, lng: 98.3923},
            {lat: 43.2220, lng: 76.8512}, {lat: 4.1755, lng: 73.5093},
            {lat: 43.2220, lng: 76.8512}, {lat: 51.4700, lng: 0.4543},
            {lat: 43.2220, lng: 76.8512}, {lat: 13.7563, lng: 100.5018},
            {lat: 43.2220, lng: 76.8512}, {lat: 42.4304, lng: 19.2594},
            {lat: 43.2220, lng: 76.8512}, {lat: 35.3387, lng: 25.1442},
            {lat: 43.2220, lng: 76.8512}, {lat: 30.5723, lng: 104.0665},
            {lat: 43.2220, lng: 76.8512}, {lat: 21.4858, lng: 39.1925},
            {lat: 43.2220, lng: 76.8512}, {lat: 42.8746, lng: 74.5698},
            {lat: 43.2220, lng: 76.8512}, {lat: 25.2048, lng: 55.2708},
            {lat: 43.2220, lng: 76.8512}, {lat: 41.2995, lng: 69.2401},
            {lat: 43.2220, lng: 76.8512}, {lat: 28.7041, lng: 77.1025},
            {lat: 43.2220, lng: 76.8512}, {lat: 41.7151, lng: 44.8271},
            // {lat: 43.2220, lng: 76.8512}, {lat: 38.5598, lng: 68.7870},
            {lat: 43.2220, lng: 76.8512}, {lat: 40.4093, lng: 49.8671},
            {lat: 43.2220, lng: 76.8512}, {lat: 41.6168, lng: 41.6367},
            {lat: 43.2220, lng: 76.8512}, {lat: 51.1605, lng: 71.4704},
            {lat: 43.2220, lng: 76.8512}, {lat: 43.6588, lng: 51.1975},
            {lat: 43.2220, lng: 76.8512}, {lat: 47.0945, lng: 51.9238},
            {lat: 43.2220, lng: 76.8512}, {lat: 42.3417, lng: 69.5901},
            {lat: 43.2220, lng: 76.8512}, {lat: 50.2839, lng: 57.1670},
            {lat: 43.2220, lng: 76.8512}, {lat: 44.8488, lng: 65.4823},
            {lat: 43.2220, lng: 76.8512}, {lat: 49.9749, lng: 82.6017},
            {lat: 43.2220, lng: 76.8512}, {lat: 51.2278, lng: 51.3865},
            {lat: 43.2220, lng: 76.8512}, {lat: 27.9654, lng: 34.3618},
            {lat: 43.2220, lng: 76.8512}, {lat: 37.0344, lng: 27.4305},
            // {lat: 43.2220, lng: 76.8512}, {lat: 15.2993, lng: 74.1240},
        ],
        [//Nur-Sultan
            {lat: 51.1605, lng: 71.4704}, {lat: 36.8969, lng: 30.7133},
            {lat: 51.1605, lng: 71.4704}, {lat: 50.1109, lng: 8.6821},
            {lat: 51.1605, lng: 71.4704}, {lat: 41.0082, lng: 28.9784},
            {lat: 51.1605, lng: 71.4704}, {lat: 42.4304, lng: 19.2594},
            {lat: 51.1605, lng: 71.4704}, {lat: 25.2048, lng: 55.2708},
            {lat: 51.1605, lng: 71.4704}, {lat: 41.2995, lng: 69.2401},
            {lat: 51.1605, lng: 71.4704}, {lat: 41.7151, lng: 44.8271},
            {lat: 51.1605, lng: 71.4704}, {lat: 47.0945, lng: 51.9238},
            {lat: 51.1605, lng: 71.4704}, {lat: 43.6588, lng: 51.1975},
            {lat: 51.1605, lng: 71.4704}, {lat: 51.2278, lng: 51.3865},
            {lat: 51.1605, lng: 71.4704}, {lat: 42.3417, lng: 69.5901},
            {lat: 51.1605, lng: 71.4704}, {lat: 49.9749, lng: 82.6017},
            {lat: 51.1605, lng: 71.4704}, {lat: 50.2839, lng: 57.1670},
            {lat: 51.1605, lng: 71.4704}, {lat: 53.2198, lng: 63.6354},
            {lat: 51.1605, lng: 71.4704}, {lat: 27.9654, lng: 34.3618},
            {lat: 51.1605, lng: 71.4704}, {lat: 37.0344, lng: 27.4305},


        ],
        [//Atyrau
            {lat: 47.0945, lng: 51.9238}, {lat: 52.3676, lng: 4.9041},
            {lat: 47.0945, lng: 51.9238}, {lat: 41.0082, lng: 28.9784},
        ],
        [//Uralsk
            {lat: 51.2278, lng: 51.3865}, {lat: 50.1109, lng: 8.6821},
        ],
        [
            //Istanbul
            {lat: 41.0082, lng: 28.9784}, {lat: 43.2220, lng: 76.8512},
            {lat: 41.0082, lng: 28.9784}, {lat: 51.1605, lng: 71.4704},
            {lat: 41.0082, lng: 28.9784}, {lat: 47.0945, lng: 51.9238},
        ],
        [//Antalya
            {lat: 36.8969, lng: 30.7133}, {lat: 43.2220, lng: 76.8512},
            {lat: 36.8969, lng: 30.7133}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Frankfurt
            {lat: 50.1109, lng: 8.6821}, {lat: 51.1605, lng: 71.4704},
            {lat: 50.1109, lng: 8.6821}, {lat: 51.2278, lng: 51.3865},
        ],
        [//Seoul
            {lat: 37.5665, lng: 126.9780}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Phuket
            {lat: 7.8804, lng: 98.3923}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Amsterdam
            {lat: 52.3676, lng: 4.9041}, {lat: 47.0945, lng: 51.9238},
        ],
        [//Malé
            {lat: 4.1755, lng: 73.5093}, {lat: 43.2220, lng: 76.8512},
        ],
        [//London Heathrow
            {lat: 51.4700, lng: 0.4543}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Bangkok
            {lat: 13.7563, lng: 100.5018}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Podgorica
            {lat: 42.4304, lng: 19.2594}, {lat: 43.2220, lng: 76.8512},
            {lat: 42.4304, lng: 19.2594}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Heraklion
            {lat: 35.3387, lng: 25.1442}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Chengdu
            {lat: 30.5723, lng: 104.0665}, {lat: 43.2220, lng: 76.8512},
        ],
        // [//Jeddah
        //     {lat: 21.4858, lng: 39.1925}, {lat: 43.2220, lng: 76.8512},
        // ],
        [//Bishkek
            {lat: 42.8746, lng: 74.5698}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Dubai
            {lat: 25.2048, lng: 55.2708}, {lat: 43.2220, lng: 76.8512},
            {lat: 25.2048, lng: 55.2708}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Tashkent
            {lat: 41.2995, lng: 69.2401}, {lat: 43.2220, lng: 76.8512},
            {lat: 41.2995, lng: 69.2401}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Delhi
            {lat: 28.7041, lng: 77.1025}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Tbilisi
            {lat: 41.7151, lng: 44.8271}, {lat: 43.2220, lng: 76.8512},
            {lat: 41.7151, lng: 44.8271}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Dushanbe
            {lat: 38.5598, lng: 68.7870}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Baku
            {lat: 40.4093, lng: 49.8671}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Batumi
            {lat: 41.6168, lng: 41.6367}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Aktau
            {lat: 43.6588, lng: 51.1975}, {lat: 43.2220, lng: 76.8512},
            {lat: 43.6588, lng: 51.1975}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Shymkent
            {lat: 42.3417, lng: 69.5901}, {lat: 43.2220, lng: 76.8512},
            {lat: 42.3417, lng: 69.5901}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Aktobe
            {lat: 50.2839, lng: 57.1670}, {lat: 43.2220, lng: 76.8512},
            {lat: 50.2839, lng: 57.1670}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Ust-Kamenogorsk
            {lat: 49.9749, lng: 82.6017}, {lat: 51.1605, lng: 71.4704},
            {lat: 49.9749, lng: 82.6017}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Kyzylorda
            {lat: 44.8488, lng: 65.4823}, {lat: 43.2220, lng: 76.8512},
        ],
        [//Kostanay
            {lat: 53.2198, lng: 63.6354}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Sharm El Sheikh
            {lat: 27.9654, lng: 34.3618}, {lat: 43.2220, lng: 76.8512},
            {lat: 27.9654, lng: 34.3618}, {lat: 51.1605, lng: 71.4704},
        ],
        [//Bodrum
            {lat: 37.0344, lng: 27.4305}, {lat: 43.2220, lng: 76.8512},
            {lat: 37.0344, lng: 27.4305}, {lat: 51.1605, lng: 71.4704},
        ],
        // [//Goa
        //     {lat: 15.2993, lng: 74.1240}, {lat: 43.2220, lng: 76.8512},
        // ],

    ]

    for (let i = 0; i < array1.length; i++) {

        // The markers
        const marker = new google.maps.Marker({
            position: array1[i],
            map: map,
            icon: blueLineSymbol,
            title: array2[i],
            label: {
                text: array2[i],
                fontWeight: "bold",
                fontSize: "15px",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#6C6C6C",
            },
        });
        const contentString = `<p>${array3[i]}</p>`;
        const infoWindow = new google.maps.InfoWindow({
            content: contentString,
        });

        const route = new google.maps.Polyline({
            path: array4[i],
            geodesic: true,
            strokeColor: "#002A47",
            strokeOpacity: 0.5,
            strokeWeight: 1,
        });
        marker.addListener("mouseover", () => {
            route.setMap(map);
        });
        marker.addListener("mouseout", () => {
            route.setMap(null);
        });
        marker.addListener("mouseover", () => {
            infoWindow.open(map, marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close(map, marker);
        });
        marker.addListener("mouseover", () => {
            marker.setIcon(redLineSymbol);
        });
        marker.addListener("mouseout", () => {
            marker.setIcon(blueLineSymbol);
        });
    }

}

window.initMap = initMap;
