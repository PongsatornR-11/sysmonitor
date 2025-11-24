
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaLink, FaGithub } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiVite, SiSocketdotio, SiSystem76 } from 'react-icons/si';

const TechIcon = ({ icon, label }) => (
  <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const ProjectShowcase = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Web Project Showcase</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of the MERN stack application I built.
        </p>
      </header>

      {/* Project Overview & Links */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Project Overview</h3>
            <p className="mb-4">
              This project is a real-time system monitoring dashboard that provides live insights into CPU, memory, disk, and network usage. It's designed to be a powerful tool for developers and system administrators.
            </p>
            <h4 className="text-xl font-semibold mb-2">My Role:</h4>
            <p className="mb-4">Full-Stack Developer</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time data updates with WebSockets</li>
                <li>Interactive charts and graphs</li>
                <li>Responsive design for all devices</li>
                <li>Theming with light and dark modes</li>
              </ul>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">
                <FaLink className="mr-2" /> Live Demo
              </a>
              <a href="#" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform transform hover:scale-105">
                <FaGithub className="mr-2" /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><FaServer className="mr-3 text-blue-500" />Back-end</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">API Summary</h4>
            <p>
              The back-end is a Node.js application using Express.js to provide a RESTful API. It uses `systeminformation` to gather system data and `Socket.io` to push real-time updates to the client.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Database Diagram</h4>
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center border-2 border-dashed border-gray-400 dark:border-gray-600">
              <FaDatabase className="text-4xl text-gray-500" />
              <span className="ml-4 text-gray-500">NoSQL - Real-time data, no persistent storage</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              <TechIcon icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
              <TechIcon icon={<SiExpress />} label="Express.js" />
              <TechIcon icon={<SiSocketdotio className="text-black" />} label="Socket.io" />
              <TechIcon icon={<SiSystem76 className="text-blue-400" />} label="systeminformation" />
            </div>
          </div>
        </div>
      </div>

      {/* Frontend Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><FaReact className="mr-3 text-blue-400" />Front-end</h3>
        <div className="md:col-span-2 mb-6">
            <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              <TechIcon icon={<FaReact className="text-blue-400" />} label="React" />
              <TechIcon icon={<SiVite className="text-purple-500" />} label="Vite" />
              <TechIcon icon={<SiTailwindcss className="text-teal-400" />} label="Tailwind CSS" />
              <TechIcon icon={<FaCode />} label="Recharts" />
            </div>
          </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-center">Page Screenshots</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400 dark:border-gray-600 hover:border-blue-500 transition-all">
                <span className="text-gray-500">Page {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
        <p>
          One challenge was efficiently handling real-time data updates without overwhelming the client. I implemented a solution using `use-debounce` to control the frequency of updates and `Zustand` for efficient state management, ensuring a smooth user experience even with high-frequency data streams.
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcase;
