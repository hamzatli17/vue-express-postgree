const nodemailer = require('nodemailer');
//const transporter = require('../config/emailTransporter');

const sendActivation = async (email) => {
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    auth: {
        user: 'no-reply@steps.tn',
        pass: 'anR3UF2!A@HnAVGkrXpKz4yWp',
    },
    secure: true,
});

  console.log("hiii mail")
await transporter.sendMail({
    from: 'no-reply@steps.tn',
    to: email,
    subject: 'Account Activation',
    html: `
    <div>
      <b>Please click below link to activate your account</b>
    </div>
    <div>
   
    </div>
    `,
  
  });
 
   // console.log('url: ' + nodemailer.getTestMessageUrl(info));
    
};
const sendTokenActivate = async (email,token) => {
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    auth: {
        user: 'no-reply@steps.tn',
        pass: 'anR3UF2!A@HnAVGkrXpKz4yWp',
    },
    secure: true,
});

  console.log("hiii mail")
await transporter.sendMail({
    from: 'no-reply@steps.tn',
    to: email,
    subject: 'Account Activation',
    html: `
    <div>
      <b>Please click below link to activate your account</b>
      <b>{{token}}</b>
    </div>
    <div>
   
    </div>
    `,
  
  });
 
   // console.log('url: ' + nodemailer.getTestMessageUrl(info));
    
};


module.exports = { sendActivation,sendTokenActivate};
