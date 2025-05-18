# System Monitor

A real-time system monitoring application that provides detailed insights into CPU performance metrics including load, temperature, and individual core statistics.

## Features

- **Real-time CPU Monitoring**
  - Overall CPU load percentage
  - CPU temperature tracking
  - Individual core load monitoring
  - Historical data visualization

- **Interactive Charts**
  - Line charts for CPU metrics
  - Real-time updates (every 5 seconds)
  - Responsive design
  - Interactive tooltips and legends

- **User Interface**
  - Clean and modern design
  - Responsive layout
  - Easy-to-read metrics
  - Error handling and loading states

## Tech Stack

- **Frontend**
  - React.js
  - Recharts for data visualization
  - Tailwind CSS for styling

- **Backend**
  - Node.js
  - Express.js
  - System monitoring libraries

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- System monitoring tools (for backend)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sysmonitor
```

2. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Start the development servers:
```bash
# Start backend server
cd server
npm start

# Start frontend development server
cd client
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
sysmonitor/
├── client/                 # Frontend React application
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   ├── README.md
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── api/           # API integration
│   │   └── App.jsx        # Main application component
│   └── vite.config.js
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── routes/        # API routes
│   │   └── services/      # System monitoring services
│   └── package.json
└── README.md
```

## Usage

1. Launch the application
2. The dashboard will automatically start displaying CPU metrics
3. Charts will update every 5 seconds with new data
4. Hover over charts to see detailed metrics
5. Use the legend to toggle visibility of individual core metrics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Recharts for the charting library
- System monitoring libraries for backend data collection
- React and Node.js communities for their excellent documentation 