"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:

const permissions = require('../middlewares/permissions')
const car = require('../controllers/car')

/* ------------------------------------------------------- */
// UPLOAD FILES (multer middleware)
// npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

// const multer = require('multer')
// const upload = multer({ // middlewareFunction
//     storage: multer.diskStorage({
//         destination: './upload',
//         filename: function(req, file, returnCallback) {
//             // returnCallback(err, filename)
//             returnCallback(null, file.originalname)
//         }
//     })
// })

const upload = require('../middlewares/upload')

/* ------------------------------------------------------- */

// URL: /cars

router.route('/')
    .get(car.list)
    // .post(permissions.isAdmin, car.create)
    // .post(permissions.isAdmin, upload.single('images'), car.create) // req.file
    .post(permissions.isAdmin, upload.array('images'), car.create) // req.files // recommended.
    // .post(permissions.isAdmin, upload.any(), car.create) // req.files

router.route('/:id')
    .get(car.read)
    .put(permissions.isAdmin, upload.array('images'), car.update)
    .patch(permissions.isAdmin, upload.array('images'), car.update)
    .delete(permissions.isAdmin, car.delete)

/* ------------------------------------------------------- */
module.exports = router