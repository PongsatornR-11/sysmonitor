// src/components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ data }) => {
    const { location, current } = data;

    return (
        <div className="max-w-xl border mx-auto shadow-lg rounded-lg p-6 mt-10 ">
            <div className="">
                <h1 className="text-2xl font-bold text-center mb-2">
                    Weather in {location.name}, {location.country}
                </h1>
                <p className="text-center  mb-4">Updated Time: {location.localtime}</p>
            </div>

            <div className="flex items-center justify-center gap-4">
                <img src={`https:${current.condition.icon}`} alt={current.condition.text} />
                <div>
                    <h2 className="text-xl font-semibold">{current.temp_c}°C</h2>
                    <p >Feels like {current.feelslike_c}°C</p>
                    <p >{current.condition.text}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <p><strong>Humidity:</strong> {current.humidity}%</p>
                <p><strong>Wind:</strong> {current.wind_kph} kph ({current.wind_dir})</p>
                <p><strong>Pressure:</strong> {current.pressure_mb} mb</p>
                <p><strong>Visibility:</strong> {current.vis_km} km</p>
                <p><strong>UV Index:</strong> {current.uv}</p>
            </div>

            <div className="mt-6 ">
                <h3 className="text-lg font-semibold mb-2">Air Quality</h3>
                <ul className="text-sm space-y-1">
                    <li><strong>PM2.5:</strong> {current.air_quality.pm2_5}</li>
                    <li><strong>PM10:</strong> {current.air_quality.pm10}</li>
                    <li><strong>CO:</strong> {current.air_quality.co}</li>
                    <li><strong>O₃:</strong> {current.air_quality.o3}</li>
                    <li><strong>US EPA Index:</strong> {current.air_quality["us-epa-index"]}</li>
                </ul>
            </div>
        </div>
    );
};

export default WeatherCard;
