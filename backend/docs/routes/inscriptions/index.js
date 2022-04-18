const getAllUsers = require("./get-inscriptions");
const getUser = require("./get-inscription");
const del = require("./delete");
const confirm = require("./confirm");


module.exports = {
  
    "/api/inscriptions/{id}": {
        ...getUser,
        ...del,
        ...confirm
        
    },
    "/api/inscriptions/all": {
        ...getAllUsers,
    },
};
