import React from 'react'

const ProjectCard = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="relative group w-[600px]">
                <img
                    src="./foster-lake.jpg" // Replace with your actual image path
                    alt="Halcyon Theme"
                    className="w-full h-auto filter grayscale group-hover:filter-none transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                    <h1 className="text-2xl font-bold mb-2">Featured Project</h1>
                    <h2 className="text-xl mb-1">Halcyon Theme</h2>
                    <p className="text-sm">A minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.</p>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard