const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const cors = require('cors')
const {userRouter} = require("./routes/user.routes")

const app = express();

app.use(cors())
app.use(express.json())

app.use("/users", userRouter)


app.listen(process.env.PORT,async()=>{
    try{

        await connection
        console.log("server is running")
        console.log("connected to db")
    }catch(error){
        console.log(error.message)
    }
})