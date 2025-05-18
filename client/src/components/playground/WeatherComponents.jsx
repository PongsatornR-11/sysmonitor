import React from 'react'
import { MapPin, CloudSunRain, Wind, Droplet, Sunrise, Sunset } from 'lucide-react';

export const CurrentWeatherCard = () => {
    return (
        <div className='w-[400px] border m-4 p-2 rounded-2xl'>
            <div className='flex justify-between px-1 m-1'>
                <div className='flex border rounded-xl p-1 items-center'>
                    < MapPin className='px-1' />
                    <div className='px-1'>
                        <p>Bangkok, Thailand</p>
                    </div>
                </div>
                <select name="unit" className='border rounded-full'>
                    <option value="">°C</option>
                    <option value="">°F</option>
                </select>
            </div>
            <div className='flex justify-between'>
                <div className='ml-1'>
                    <p className='text-2xl'>Sunday</p>
                    <p className='text-sm'>04 May,2025</p>
                </div>
                <CloudSunRain className='h-36 w-30' />
                <div className='flex flex-col p-2 justify-between'>
                    <div>
                        <p className='text-2xl'>28°C</p>
                        <p >/ 35°C</p>
                    </div>
                    <div>
                        <p className='font-bold'>Heavy Rain</p>
                        <p className='text-sm'>Feels like 31 °C</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const TodayHighlightCard = () => {
    return (
        <div className='border rounded-2xl'>
            <div className='p-2'>
                <h1>Today's Highlight</h1>
                <div className='flex flex-col grid-rows-2 border p-2 gap-2'>
                    <div className='flex gap-2'>

                        <div className='border rounded-xl w-1/4'>
                            <div className='flex gap-2 justify-end p-2'>
                                <Wind />
                                <p>Wind Status</p>
                            </div>
                            <div className='flex justify-end'>
                                <p className='font-bold '>7.90</p>
                                <p>km/h</p>
                            </div>
                            <div className='justify-end'>
                                <p>9:00 AM</p>
                            </div>
                        </div>
                        <div className='border rounded-xl w-1/4'>
                            <div className='flex gap-2'>
                                <Droplet />
                                <p>Humidity</p>
                            </div>
                            <div className='flex'>
                                <p className='font-bold '>55</p>
                                <p>%</p>
                            </div>
                            <div>
                                <p>Humidity is good</p>
                            </div>
                        </div>
                        <div className='border rounded-xl w-2/4'>
                            <Sunrise />
                            <div>
                                <p>Sunrise</p>
                                <p>4:30 AM</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-2'>

                        <div className='border rounded-xl w-1/4'>
                            <div className='flex gap-2'>
                                <Wind />
                                <p>Wind Status</p>
                            </div>
                            <div className='flex'>
                                <p className='font-bold '>7.90</p>
                                <p>km/h</p>
                            </div>
                            <div>
                                <p>9:00 AM</p>
                            </div>
                        </div>
                        <div className='border rounded-xl w-1/4'>
                            <div className='flex gap-2'>
                                <Droplet />
                                <p>Humidity</p>
                            </div>
                            <div className='flex'>
                                <p className='font-bold '>55</p>
                                <p>%</p>
                            </div>
                            <div>
                                <p>Humidity is good</p>
                            </div>
                        </div>
                        <div className='border rounded-xl w-2/4'>
                            <Sunset />
                            <div>
                                <p>Sunrise</p>
                                <p>4:30 AM</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}