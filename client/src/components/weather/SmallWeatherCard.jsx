import React from 'react'
import { CloudSunRain } from 'lucide-react';

const SmallWeatherCard = () => {
    return (
        <div className='border flex flex-col w-fit p-2 rounded-xl m-2'>
            <CloudSunRain className='mx-auto h-10 w-10' />
            <div className='text-sm mt-2'>
                <p>2025-04-28</p>
                <p>32°C</p>
                <p>Weather Condition</p>
            </div>
        </div>
    )
}

export default SmallWeatherCard