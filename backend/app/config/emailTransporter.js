const nodemailer = require('nodemailer');
const config = require('./mail.config');
const mailConfig = config.mail;
const transporter = nodemailer.createTransport({ ...mailConfig });

module.exports = transporter;
