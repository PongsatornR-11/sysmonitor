import React, { useState } from 'react'
import { Shield, Code, FolderKey, HardDriveDownload, Terminal, CloudDownload } from 'lucide-react';

const ServicesHub = ({ className }) => {

    const [input, setInput] = useState('')
    const [status, setStatus] = useState(null)

    const correctPassword = import.meta.env.VITE_APP_PASSWORD
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === correctPassword) {
            setStatus(true)
        } else {
            setStatus(false)
        }
        setInput('')
    }

    const services = [
        {
            url: 'https://code.mypiserviceshub.com/',
            name: 'Code - server',
            icon: <Code className=' h-[100%]' />
        },
        {
            url: 'https://file.mypiserviceshub.com/',
            name: 'File - Browser',
            icon: <FolderKey className=' h-[100%]' />
        },
        {
            url: 'https://vault.mypiserviceshub.com/',
            name: 'Open Media Vault',
            icon: <HardDriveDownload className=' h-[100%]' />
        },
        {
            url: 'https://ssh.mypiserviceshub.com/',
            name: 'SSH - Online',
            icon: <Terminal className=' h-[100%]' />
        },
        {
            url: 'https://bittorrent.mypiserviceshub.com/',
            name: 'q Bittorrent',
            icon: <CloudDownload className=' h-[100%]' />
        },
        {
            url: 'https://adguard.mypiserviceshub.com/',
            name: 'Ad Guard Home',
            icon: <Shield className=' h-[100%]' />
        }
    ]
    return (
        <div className={`${className} m-6 p-4 border-2 rounded-2xl w-fit`}>
            <h1 className='p-2 mb-2 text-lg font-bold'>My Pi Services</h1>
            {status == true
                ?
                (<div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {services.map((service) => (
                            <a target='_blank' href={service.url} className=' flex justify-between gap-2 border rounded-md py-1 px-2 hover:scale-105 duration-200'>
                                {service.icon}
                                <span className='flex h-[100%] items-center mx-auto'> {service.name}</span>
                            </a>
                        ))}
                    </div>
                    <button type='button' className='border text-sm p-2 rounded-md cursor-pointer hover:scale-105 duration-200 mt-4' onClick={() => { setStatus(null) }}> Hide service </button>
                </div>)
                :
                status == null
                    ?
                    <form onSubmit={handleSubmit}>
                        <input
                            type='password'
                            placeholder='Enter password ...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='border p-2 rounded-md m-2'
                        />
                        <button
                            type='submit'
                            className='p-2 border rounded-md m-2 cursor-pointer hover:scale-105 duration-200'
                        >
                            Submit
                        </button>
                    </form>
                    :
                    <div className='flex justify-center gap-2 items-center'>
                        <div className='text-red-500'>Incorrect password...</div>
                        <button className='border p-1 rounded-md cursor-pointer hover:scale-105 duration-200' type='button' onClick={() => { setStatus(null) }}>again?</button>
                    </div>
            }
        </div>
    )
}

export default ServicesHub