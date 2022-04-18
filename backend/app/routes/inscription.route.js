const router = require("express").Router();

const {
    getAll,
  confirm,
  deleteOne,
  get
} = require("../controllers/inscription.controller");


router.get("/all", getAll);
router.put("/confirm/:id", confirm);
router.delete("/:id", deleteOne);
router.get("/:id", get);

module.exports = router;
