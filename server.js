const express = require('express'); // used for routing requests to the server
const mongoose = require('mongoose'); // used to create schemas/data models to model application data
const bodyParser = require('body-parser'); // middleware used to parse incoming requests to the server
const path = require('path'); // provides utilities for working with file and directory paths
require('dotenv').config(); // a module that loads environment variables from a .env file into process.env
const morgan = require('morgan'); // middleware for logging requests to the server
const expressJwt = require('express-jwt'); // Middleware that validates JsonWebTokens and sets req.user. This module lets you authenticate HTTP requests using JWT tokens in your Node.js applications. JWTs are typically used to protect API endpoints, and are often issued using OpenID Connect.
const app = express(); 
const PORT = process.env.PORT || 8000;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/otfitness';

app.use(morgan('dev'));
app.use(bodyParser.json());

// fixes paths when deployed
app.use(express.static(path.join(__dirname, "client", "build")))

// connect to db
mongoose.Promise = global.Promise; // tells mongoose to use the native promise object
mongoose.connect(db,
    {useMongoClient: true}, // helps get rid of depricated warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// routes
app.use("/api", expressJwt({secret: process.env.SECRET})); // make the app use the express-jwt authentication middleware for anything starting with "/api"
app.use("/api/workout", require("./routes/workout"));
app.use("/api/profile", require("./routes/profile"));

app.use("/auth", require("./routes/auth"));

// fixes paths when deployed
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => console.log(`[+] Starting server on port ${PORT}`));