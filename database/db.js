const mongoose = require('mongoose')

const connectDB = ()=>{
    return mongoose.connect('mongodb+srv://olatunbosuncars:ayobami91@restapi.cfbdvvn.mongodb.net/')
    .then(()=>{
        console.log('databse connected successfully')
    }).catch(
        (err)=>{console.log(err.message)}
    )
}

module.exports = connectDB