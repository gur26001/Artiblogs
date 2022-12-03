const express = require('express');
const db = require('./helpers/connect');
const routes = require('./routes/index,js');
const cors = require('cors')
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
    db();
    routes(app);
})