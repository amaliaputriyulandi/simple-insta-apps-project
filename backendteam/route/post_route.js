const express = require('express');
const router = express.Router();
const upload = require('../service/multer')

const {postPhoto, getPhotosByUser, deletePhotoByUser} = require('../controller/post_controller')
const {checkToken} = require('../middleware/tokenAuth')

router.post('/postPhoto', upload.single('image'), checkToken, postPhoto)
router.get('/getAllPhotoByUser',  checkToken, getPhotosByUser)
router.delete('/deletePhoto/:id', checkToken, deletePhotoByUser)

module.exports = router