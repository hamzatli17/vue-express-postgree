const db = require("../models");
const inscription = db.inscriptions;
const EmailService = require("../email/EmailService");
const EmailException = require('../email/EmailException');
const jwt = require("jsonwebtoken");
const inscriptionController = {
  getAll: async (req, res) => {
    try {
      const inscriptions = await inscription.findAll();
      return res.status(200).send(inscriptions);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  get: async (req, res) => {
    try {
      const inscript = await inscription.findByPk(req.params.id);
      return res.status(200).send(inscript);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      await inscription.destroy({ where: { id:req.params.id}});
      return res.status(200).end();
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  validate: async (req, res) => {
    
    try {
      const inscrip = await inscription.findByPk(req.params.id);
      inscrip.validated = true;
      inscrip.save();
      try {
        await EmailService.sendActivation(inscrip.email);
       
      } catch (err) {
      
        throw new EmailException();
      }
      res.status(201).send(inscrip);

    } catch (error) {
      const status = error.status ? error.status : 400;
      res.status(status).end();
    }
  },
  validateToken: async (req, res) => {
    try {


      const {id} =req.params;
      const inscrip = await inscription.findByPk(req.params.id);
    
      const SECRET = "shifhhfjkzwudhiihoh1234";
      const token = jwt.sign({ id }, SECRET, {
        expiresIn: "60s",
      });
      console.log( token )
      inscrip.baerer_token = token;
      inscrip.save();
      console.log( inscrip.baerer_token )
      try {
        await EmailService.sendActivation(inscrip.email, token);
       
      } catch (err) {
      
        throw new EmailException();
      }
      res.status(201).send(inscrip);

    } catch (error) {
      const status = error.status ? error.status : 400;
      res.status(status).end();
    }
  },
};

module.exports = inscriptionController;
