const express = require('express');

const app = express();

// Serve static files from ./dist
app.use(express.static('dist'));

// Hello world API endpoint
app.get('/api/hello-world', (req, res) => {
    res.json({ message: 'Hello World From Express!' })
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
})