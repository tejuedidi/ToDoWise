require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();

// connect database
connectDB();

app.use(express.json());
app.get("/", (req, res) => res.send("Server up and running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});