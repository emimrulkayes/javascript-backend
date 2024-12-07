const express = require('express');
const app = express();
const port = 8000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(process.env.PORT ?? port, () => {
    console.log(`Server is running on port ${process.env.PORT ?? port}`);
});
