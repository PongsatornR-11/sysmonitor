import React from "react";
// import WeatherCard from "../components/weather/WeatherCard";
import SmallWeatherCard from "../components/weather/SmallWeatherCard";
import { CurrentWeatherCard, TodayHighlightCard } from "../components/playground/WeatherComponents";
import WeatherCard from '../components/playground/WeatherCard'
import weatherData from "../components/playground/mockData";
import ProjectCard from "../components/ProjectCard";

const Playground = () => {

    return (
        <div className="border min-h-screen">
            {/* <WeatherCard data={weatherData}/> */}

            <ProjectCard />
        </div>
    )
}

export default Playground