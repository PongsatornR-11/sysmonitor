import React from "react";
import WeatherCard from "../components/weather/WeatherCard";
import SmallWeatherCard from "../components/weather/SmallWeatherCard";
import { CurrentWeatherCard, TodayHighlightCard } from "../components/playground/WeatherComponents";


const Playground = () => {

    return (
        <div className="border min-h-screen">
            <div className="p-2">
                Playground page try your component here!
            </div>
            <hr />

            <p>Weather Card</p>

            <WeatherCard />

            <div className="border m-2">

                <p>Small Weather Card</p>
                <div className="flex gap-2 justify-evenly">
                    <SmallWeatherCard />
                    <SmallWeatherCard />
                    <SmallWeatherCard />
                    <SmallWeatherCard />
                    <SmallWeatherCard />
                </div>
            </div>



            <div className="border m-2">
                <CurrentWeatherCard/>
                <TodayHighlightCard/>
            </div>
        </div>
    )
}

export default Playground