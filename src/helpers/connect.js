const mongoose = require('mongoose')

async function db(){

    try{
        await mongoose
                .connect(process.env.MONGODB_URL)
                .then(() => {
                    console.log(`DB connected to ${process.env.MONGODB_URL}`);
                })
    }catch(error){
        console.log(error);
    }
}

module.exports = db;