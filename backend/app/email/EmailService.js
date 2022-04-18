const nodemailer = require('nodemailer');
const transporter = require('../config/emailTransporter');

const sendActivation = async (email, token) => {
  const info = await transporter.sendMail({
    from: 'My App <info@my-app.com>',
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
  console.log(envoyer)
    console.log('url: ' + nodemailer.getTestMessageUrl(info));
  
};



module.exports = { sendActivation};
