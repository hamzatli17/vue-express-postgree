const router = require("express").Router();

const {
    getAll,
  validate,
  deleteOne,
  validateToken,
  get
} = require("../controllers/inscription.controller");


router.get("/all", getAll);
router.put("/validate/:id", validate);
router.put("/validateToken/:id", validateToken)
router.delete("/:id", deleteOne);
router.get("/:id", get);

module.exports = router;
