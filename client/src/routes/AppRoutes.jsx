import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from '../pages/Home'
import CpuStatus from '../pages/CpuStatus'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'cpu',
        element: <CpuStatus/>
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