const express = require("express")

const { auth } = require("../middleware/Auth")

const { PostModel } = require("../model/post.model")
const postRouter = express.Router()

postRouter.use(auth)
// posts

postRouter.get("/posts/add", async (req, res) => {
    try {
        let newpost = new PostModel(req.body);
        await newpost.save();
        res.status(200).json({msg:"post added"})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//get
postRouter.get("/posts", auth,async (req, res) => {
    try {
      
        res.status(200).json("All posts")

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//posts/update

postRouter.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findById({ _id: id })
        const userID = post.userID

        if (userID === req.body.userID) {
            const payload = req.body
            const data = await PostModel.find({ _id: id })
            await PostModel.findByIdAndUpdate({ _Id: id }, payload)
            res.status(200).json({ msg: "The logged in user can update his/her posts", data })

        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete 

postRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findById({ _id: id })
        const userID = post.userID

        if (userID === req.body.userID) {
            const data = await PostModel.find({ _id: id })
            await PostModel.findByIdAndDelete({ _id: id })
            res.status(200).json({ msg: "The logged in user can delete his/her posts" })
        } else {
            console.log("hello")
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = {postRouter}