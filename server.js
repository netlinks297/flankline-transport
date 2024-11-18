// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is a simple about page.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>Contact us at contact@example.com.</p>');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
