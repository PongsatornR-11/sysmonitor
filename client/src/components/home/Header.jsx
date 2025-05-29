import { ChevronRight } from 'lucide-react'
import React from 'react'
import { FaRaspberryPi } from 'react-icons/fa'
import Blinking from '../utils/Blinking'

const Header = ({ className }) => {
    return (
        <div className={`${className} m-6 w-fit `}>
            <div className='flex items-center'>
                <FaRaspberryPi className="flex items-center text-4xl font-bold mr-3" />
                <h1 className="flex items-center text-2xl font-extrabold tracking-tight">Raspberry Pi Monitor</h1>

                <div className='ml-3 flex items-end'>
                    <ChevronRight className="text-2xl font-bold flex items-center" />
                </div>
                <div>
                    <Blinking time={500}>_</Blinking>
                </div>
            </div>
        </div>
    )
}

export default Header