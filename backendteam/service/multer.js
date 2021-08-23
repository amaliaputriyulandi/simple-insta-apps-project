const multer = require('multer')

//specify the satrage engine

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename:function(req, file, cb){
        const ori = file.originalname
        cb(null, new Date(). toISOString() + '-' + file.originalname)
    }
})

//file validation

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        //prevent to upload

        cb({message:'Unsupported File Format'},false)
    }
}

const upload = multer({
    storage:storage,
    limits:{fileSize:1024*1024*5},
    fileFilter:fileFilter
})

module.exports = upload;