const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { readdirSync } = require('fs');
const fs = require('fs').promises;


const app = express();
const port = 3001;

// Enable CORS for all origins (you can configure this for specific domains)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(morgan('dev'))


readdirSync('./routes').map((c)=> app.use('/api', require('./routes/' + c)))



// app.get('/api/data', (req, res) => {

//     // Send a JSON response back to the client
//     res.json({ message: 'Data received successfully!' });
// });



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});