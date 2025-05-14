import React from 'react'
import { Search, CloudSun, Waves, Wind } from 'lucide-react';

const WeatherCard = () => {
    return (
        <div className='w-fit flex flex-col border rounded-xl p-3 space-y-2 mx-auto'>
            {/* search section */}
            <div className='flex m-2 justify-center gap-3 py-2 px-3 items-center'>
                <input
                    type="text" placeholder='Enter City here...'
                    className='border rounded-2xl py-1 px-4'
                />
                <Search />
            </div>


            {/* current status */}
            <div className='my-4 flex flex-col justify-center'>
                    <CloudSun className='h-20 w-20 mx-auto my-2' />
                <div className='space-y-2'>
                    <p className='text-5xl'>22°C</p>
                    <p className='text-3xl'>Bangkok</p>
                </div>
            </div>


            {/* details */}
            <div className=' flex justify-evenly'>
                <div className=' flex items-center gap-2'>
                    <Waves />
                    <div >
                        <p className='text-xl'>53 %</p>
                        <p className='text-sm'>Humidity</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Wind />
                    <div >
                        <p className='text-xl'>5.66 km/h</p>
                        <p className='text-sm'>Wind Speed</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherCard