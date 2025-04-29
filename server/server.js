const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { readdirSync } = require('fs');
const fs = require('fs').promises;

const app = express();
const port = 3001;

app.use(cors());
// Configure CORS with specific options
// app.use(cors({
//     origin: ['http://localhost:5173', 'https://sysmonitor.mypiserviceshub.com'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(morgan('dev'));

readdirSync('./routes').map((file) => 
    app.use('/api', require('./routes/' + file))
);

// app.get('/api/data', (req, res) => {

//     // Send a JSON response back to the client
//     res.json({ message: 'Data received successfully!' });
// });

// Listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
    console.log(`Server is accessible from external networks`);
});