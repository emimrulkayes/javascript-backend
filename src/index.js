const express       = require('express');
const app           = express();
const {Sequelize}   = require('sequelize');
const db            = new Sequelize("postgres://postgres:postgres@localhost:5432/postgres");
const Memo          = require('./models/memo')(db);

require('dotenv').config();
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/memos', async (req, res) => {
    const myMemos = Memo.findAll();
    console.log(myMemos);
    res.end();
})

app.get('/healthcheck', async function(request, response) {
    let db_connected = false;
    try {
        await db.authenticate();
        db_connected = true;
    } catch (error) {
        db_connected = false;
    }

    response.json({
        all_systems: 'up',
        db_connected: db_connected
    });
});

// Start the server
app.listen( PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
