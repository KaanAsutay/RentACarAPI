"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// user:
router.use('/users', require('./user'))
// car:
router.use('/cars', require('./car'))
// document:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router