import React from "react";
// import WeatherCard from "../components/weather/WeatherCard";
import SmallWeatherCard from "../components/weather/SmallWeatherCard";
import { CurrentWeatherCard, TodayHighlightCard } from "../components/playground/WeatherComponents";
import WeatherCard from '../components/playground/WeatherCard'
import weatherData from "../components/playground/mockData";

const Playground = () => {

    return (
        <div className="border min-h-screen">
            <WeatherCard data={weatherData}/>
        </div>
    )
}

export default Playground