import React from "react";
// import WeatherCard from "../components/weather/WeatherCard";
import SmallWeatherCard from "../components/weather/SmallWeatherCard";
import { CurrentWeatherCard, TodayHighlightCard } from "../components/playground/WeatherComponents";
import WeatherCard from '../components/playground/WeatherCard'
import weatherData from "../components/playground/mockData";
import ProjectCard from "../components/ProjectCard";
import ProjectShowcase from "../components/portfolio/ProjectShowcase";
import VocabTesterCard from "../components/playground/VocabTesterCard";
import OrbitingStars from "../components/playground/OrbitingStars";
import GlitchText from "../components/playground/GlitchText";
import InteractiveText from "../components/playground/InteractiveText";
import ReactiveText from "../components/playground/ReactiveText";
import ReactiveTextV2 from "../components/playground/ReactiveTextV2";
import RainbowButton from "../components/playground/RainbowButton";

const Playground = () => {

    const Lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore facere quisquam alias nostrum. Similique voluptates iusto atque dolorem ea assumenda mollitia consequuntur voluptatibus tenetur, officia voluptatem quisquam optio. Consectetur!`
    return (
        <div className="min-h-screen">
            {/* <ProjectCard /> */}
            {/* <ProjectShowcase /> */}
            {/* <VocabTesterCard /> */}
            <OrbitingStars />
            {/* <GlitchText text={Lorem} /> */}
            {/* <InteractiveText text={Lorem} /> */}
            <ReactiveText>
                {Lorem}
            </ReactiveText>
            <RainbowButton>

            </RainbowButton>
            {/* <ReactiveTextV2>{Lorem}</ReactiveTextV2> */}
        </div>
    )
}

export default Playground