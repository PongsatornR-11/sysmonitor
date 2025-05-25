// src/data.js
const weatherData = {
    location: {
        name: "Bangkok",
        region: "Krung Thep",
        country: "Thailand",
        localtime: "2025-05-06 19:46"
    },
    current: {
        temp_c: 32.2,
        feelslike_c: 37.5,
        condition: {
            text: "Partly Cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png"
        },
        wind_kph: 21.2,
        wind_dir: "S",
        humidity: 59,
        pressure_mb: 1005,
        vis_km: 10,
        uv: 0,
        air_quality: {
            pm2_5: 26.455,
            pm10: 27.01,
            co: 1394.9,
            o3: 176.0,
            "us-epa-index": 2
        }
    }
};

export default weatherData;
