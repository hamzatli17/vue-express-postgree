const db = require("../models");
const inscription = db.inscriptions;
const EmailService = require("../email/EmailService");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
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
  confirm: async (req, res) => {
    console.log("here11");
    try {
      const id = req.params;
      const inscrip = await inscription.findByPk(req.params.id);
      const SECRET = "shifhhfjkzwudhiihoh1234";
      const token = jwt.sign({ id }, SECRET, {
        expiresIn: "60s",
      });

      inscrip.validated = true;
      inscrip.baerer_token = token;
      inscrip.save();
      try {
        await EmailService.sendActivation(inscrip.email,  inscrip.baerer_token);
       
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
