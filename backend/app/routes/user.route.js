const router = require("express").Router();

const {
    getAll,
     get
} = require("../controllers/user.controller");


router.get("/all", getAll);
router.get("/:id", get);



module.exports = router;
