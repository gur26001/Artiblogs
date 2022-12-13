const express = require('express');
const db = require('./helpers/connect');
const routes = require('./routes/post.js');
const cors = require('cors')
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const app = express();
app.use(express.json()); 
require('dotenv').config();

// MIDDLEWARES
app.use(cors());


// CONNECTION TO DB
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
    db();
})
// INDEX ROUTES




// POST ROUTES
app.use('/post',postRoutes)
// USERS ROUTES

app.use('/user',userRoutes);





app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})