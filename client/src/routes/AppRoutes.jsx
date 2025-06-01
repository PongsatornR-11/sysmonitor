import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../layouts/Layout'

//import pages
import Home from '../pages/Home'
import CpuStatus from '../pages/CpuStatus'
import Network from '../pages/Network'
import Disk from '../pages/Disk'
import Memory from '../pages/Memory'
import Os from '../pages/Os'
import Playground from '../pages/Playground'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'cpu', element: <CpuStatus /> },
            { path: 'network', element: <Network /> },
            { path: 'disk', element: <Disk /> },
            { path: 'memory', element: <Memory /> },
            { path: 'OS', element: <Os /> },
        ]
    },
    {
        path: '/playground',
        element: <Playground />
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