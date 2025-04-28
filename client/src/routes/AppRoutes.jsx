import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//import pages
import Home from '../pages/Home'
import CpuStatus from '../pages/CpuStatus'
import Network from '../pages/Network'
import Disk from '../pages/Disk'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'cpu',
        element: <CpuStatus/>
    },
    {
        path: 'network',
        element: <Network/>
    },
    {
        path: 'disk',
        element: <Disk/>
    }
])

const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRoutes