const express = require('express');
const router = express.Router();

const AuthenticationException = require('./AuthenticationException');
//const ForbiddenException = require('../error/ForbiddenException');
const bcrypt = require('bcrypt');



const jwt = require("jsonwebtoken");
const db = require('../models');
const User=db.User

router.post('/',  async (req, res, next) => {
  const { user_id, password } = req.body;
  const user = await User.findByPk(user_id);
  if (!user) {
    return next(new AuthenticationException());
  }
 
  if (user.password !== req.body.passsword ) {
    return next(new AuthenticationException());
  }
  const SECRET = "shifhhfjkzwudhiihoh1234";
      const token = jwt.sign({ user_id}, SECRET, {
        expiresIn: "60s",
      });
  res.send({
    user_id: user_id,
    token,
  });
});

 router.post('/logout', async (req, res) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.substring(7);
    res.clearCookie('token')
    console.log(token)
    //await TokenService.deleteToken(token);
  }
  res.send();
}); 

module.exports = router;
