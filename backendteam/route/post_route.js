const express = require('express');
const router = express.Router();
const upload = require('../service/multer')

const {postPhoto, getPhotosByUser, deletePhotoByUser} = require('../controller/post_controller')
const {checkCookies} = require('../middleware/cookiesMiddleware')

router.post('/postPhoto', upload.single('image'), postPhoto)
router.get('/getAllPhotoByUser', checkCookies, getPhotosByUser)
router.delete('/deletePhoto/:id', deletePhotoByUser)

module.exports = router