require('dotenv').config({path:'../.env'})
const express = require('express');
const connectDB = require('./dbConnection');
const priceRoutes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use('/api/prices', priceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
