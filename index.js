"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Call static uploadFile:
app.use('/img', express.static('./upload'))

// Check Authentication:
app.use(require('./src/middlewares/authentication'))

// Run Logger:
app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- *
// Sending Mail (nodemailer):

const nodemailer = require('nodemailer')

// Create Test (Fake) Account:

// nodemailer.createTestAccount().then((email) => console.log(email))
/*
{
  user: 'lpvamvjr6k4cdzi7@ethereal.email',
  pass: 'RfcqfdMZWgNpKEh54a',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email'
}
*/

// // Connection to mailServer:
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // false | 'tls' | 'ssl'
//     auth: {
//         user: 'lpvamvjr6k4cdzi7@ethereal.email',
//         pass: 'RfcqfdMZWgNpKEh54a'
//     }
// })

// // SendMail:
// transporter.sendMail({
//     from: 'lpvamvjr6k4cdzi7@ethereal.email',
//     to: 'kaanasutay10@gmail.com', // 'abc@gmail.com, def@mail.com' // require
//     subject: 'hello', // require
//     text: 'Hello There your success..', 
//     html: '<b>Hello There </b>' // require
// }, (error, successInfo) => {
//     if (error) console.log(error)
//     else console.log(successInfo)
// })

// GoogleMail (gmail):
// Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
// const mailSettings = {
//     service: 'Gmail',
//     user: 'kaanasutay10@gmail.com',
//     pass: 'cpnv ojeq pjep sgka' // https://myaccount.google.com/u/1/apppasswords
// }

// // Mail Subject/Content:
// const emailContent = {
//     from: mailSettings.user,
//     to: 'kaanasutay10@gmail.com',
//     subject: 'Hello',
//     html: '<b>Hello</b> How are you?'

// }

// // Connect to mailServer:
// const transporter = nodemailer.createTransport({
//     service: mailSettings.service,
//     auth: {
//         user: mailSettings.user,
//         pass: mailSettings.pass
//     }
// })

// // SendMail:
// transporter.sendMail(emailContent, (error, info) => {
//     error ? console.log(error) : console.log(info)
// })

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to RENT A CAR API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})

// Routes:
app.use(require('./src/routes'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()