const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

// Serve static files from the "TheGoodBad" directory
app.use('/TheGoodBad', express.static(path.join(__dirname, 'TheGoodBad')));

// Serve static files from the "NumberGen" directory
app.use('/NumberGen', express.static(path.join(__dirname, 'NumberGen')));

// Serve the main page or redirect as needed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
