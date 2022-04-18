const db = require('../models');
const User=db.User

const userController = {
    getAll: async (req, res) => {
      
        try {
            const users = await User.findAll() 
            return res.status(200).send(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
          const user = await User.findByPk(req.params.id);
          return res.status(200).send(user);
        } catch (error) {
          return res.status(500).send(error);
        }
      },
    
};

module.exports = userController;
