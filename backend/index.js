const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const cors = require('cors')
const {userRouter} = require("./routes/user.routes")
const {postRouter} = require("./routes/post.routes")


const app = express();

app.use(cors())
app.use(express.json())

// user route
app.use("/users", userRouter)

//post route
app.use("/post",postRouter)


app.listen(process.env.PORT,async()=>{
    try{

        await connection
        console.log("server is running")
        console.log("connected to db")
    }catch(error){
        console.log(error.message)
    }
})