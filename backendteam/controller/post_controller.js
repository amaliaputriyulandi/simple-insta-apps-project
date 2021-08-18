const method = {}
const {User, Post} = require('../database/model')
const fs = require('fs')
const cloudinary = require('../service/cloudinary')

method.postPhoto = async (req, res) => {
    try{
        const {userId} = req.body

        //token
        // const token = req.token
        // const userId = token._id
        
        //cookies
        // const dtUser = req.user
        // const userId = dtUser.user_id
        
        const findPhoto = await Post.find({user_id: userId})
        const file = req.file

        if(file === undefined){
            res.send({
                statusCode: 400,
                statusText: "Failed",
                message: " You must to upload file",
            })
        }else {
            const uploader = async (path) => await cloudinary.uploads(path, 'Photos')

            const {path} = file
            const newPath = await uploader(path)
            const image = newPath.url
            fs.unlinkSync(path)

            const createPost = new Post({
                user_id: userId,
                image: image
            })
            const savePost = await createPost.save()
            res.send({
                statusCode: 200,
                statusText: "success",
                message: " Your request for Create Post successfully",
                data: {
                    user_id: userId,
                    image: image
                }
            })
        }

    }catch(error){
        res.status(500).send(error);
    }
}

method.getPhotosByUser = async (req, res) => {
    try{
        //const {userId} = req.body

        //token
        // const token = req.token
        // const userId = token._id
        
        //cookies
        const dtUser = req.user
        const userId = dtUser.user_id
        const findPhoto = await Post.find({user_id: userId})

        res.send({
            statusCode: 200,
            statusText: "success",
            message: " Your request for Get All Photo by User successfully",
            data: findPhoto
        })

    }catch(error){
        res.status(500).send(error);
    }
}

method.deletePhotoByUser = async (req, res) => {
    try{
        const {userId} = req.body

        //pakai token
        // const token = req.token
        // const userId = token._id
        
        // pakai cookies
        // const dtUser = req.user
        // const userId = dtUser.user_id

        const checkDt = await Post.findOne({ _id: req.params.id, user_id: userId });
        if(checkDt){
            await Post.deleteOne({ _id: req.params.id, user_id: userId });
            res.status(200).send({
                statusCode: 200,
                statusText: "success",
                message: " Photo Was Deleted Succesfully ",
              });
        }else{
            res.status(400).send({ message: "id does not exist" });
        }

    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = method