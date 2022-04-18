const nodemailer = require('nodemailer');
//const config = require('./mail.config');
const mailConfig = {
    host: 'ssl0.ovh.net',
    port: 465,
    auth: {
        user: 'no-reply@steps.tn',
        pass: 'anR3UF2!A@HnAVGkrXpKz4yWp',
    },
}
const transporter = nodemailer.createTransport({ ...mailConfig });

module.exports = transporter;
