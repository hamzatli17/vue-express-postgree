const getAllUsers = require("./get-users");
const getUser = require("./get-user");

module.exports = {
  
    "/api/user/{id}": {
        ...getUser,
        
    },
    "/api/user/all": {
        ...getAllUsers,
    },
};
