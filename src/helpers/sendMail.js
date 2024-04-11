"use strict"
const { text } = require('express')
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// node i nodemailer
// sendMail(to:string, subject:string, message:string):

const nodemailer = require('nodemailer')

module.exports = function (to, subject, message) {

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
const mailSettings = {
    service: 'Gmail',
    user: 'kaanasutay10@gmail.com',
    pass: 'cpnv ojeq pjep sgka' // https://myaccount.google.com/u/1/apppasswords
}

// Mail Subject/Content:
const emailContent = {
    from: mailSettings.user,
    to: to, // 'kaanasutay10@gmail.com
    subject: subject,
    text: message,
    html: message  // '<b>Hello</b> How are you?'

}

// Connect to mailServer:
const transporter = nodemailer.createTransport({
    service: mailSettings.service,
    auth: {
        user: mailSettings.user,
        pass: mailSettings.pass
    }
})

// SendMail:
transporter.sendMail(emailContent, (error, info) => {
    error ? console.log(error) : console.log(info)
})
  
}