const connectDB = require('./database/db')
const express = require('express')
const studentRoute = require('./routes/studentRoute.js')
const PORT = 8080;
const app = express()


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(studentRoute)


connectDB()

app.listen(PORT, (req, res)=>{
    console.log('server started successully')
})
