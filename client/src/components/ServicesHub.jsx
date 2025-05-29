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
    return (
        <div className={`${className} m-6 p-4 border-2 rounded-2xl w-fit mb-8`}>
            <h1 className='p-2 mb-2 text-xl font-bold'>My Pi Services</h1>
            {status == true
                ?
                (<div>
                    <div class="grid grid-cols-4 gap-4">
                        <a target='_blank' href='https://code.mypiserviceshub.com/' className=' flex justify-evenly border rounded-md p-2 hover:scale-105 duration-200'>
                            <Code className=' h-[100%]' />
                            <span className='flex h-[100%] items-center'> Code - server</span>
                        </a>
                        <a target='_blank' href='https://file.mypiserviceshub.com/' className=' flex justify-evenly border rounded-md p-2 hover:scale-105 duration-200'>
                            <FolderKey className=' h-[100%]' />
                            <span className='flex h-[100%]  items-center'>File - Browser</span>
                        </a>
                        <a target='_blank' href='https://vault.mypiserviceshub.com/' className=' flex justify-evenly border rounded-md p-2 hover:scale-105 duration-200'>
                            <HardDriveDownload className=' h-[100%]' />
                            <span className='flex h-[100%]  items-center'>Open Media Vault</span>
                        </a>
                        <a target='_blank' href='https://ssh.mypiserviceshub.com/' className=' flex justify-evenly border rounded-md p-2 hover:scale-105 duration-200'>
                            <Terminal className=' h-[100%]' />
                            <span className='flex h-[100%]  items-center'>SSH - Online</span>
                        </a>
                        <a target='_blank' href='http://192.168.1.109:8080/' className=' flex justify-evenly border rounded-md p-2 hover:scale-105 duration-200'>
                            <CloudDownload className=' h-[100%]' />
                            <span className='flex h-[100%] items-center'>q Bittorrent (local)</span>
                        </a>
                        <a target='_blank' href='http://192.168.1.109:5353/' className=' flex justify-evenly border rounded-md p-2 hover:scale-105 duration-200'>
                            <Shield className=' h-[100%]' />
                            <span className='flex h-[100%] items-center'>Ad Guard Home (local)</span>
                        </a>
                    </div>
                    <button type='button' className='border p-1 rounded-md cursor-pointer hover:scale-105 duration-200 mt-4' onClick={() => { setStatus(null) }}> Hide services </button>
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