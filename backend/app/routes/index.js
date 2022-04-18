const express = require("express");
const router = express.Router();



const userRoutes = require("./user.route");
const inscriptionRoutes = require("./inscription.route");
const AuthentificationRoutes = require("./AuthenticationRouter");
router.use("/api/user/", userRoutes);
router.use("/api/inscriptions/", inscriptionRoutes);
router.use("/api/auth/", AuthentificationRoutes);

router.get("/api", (req, res) => {
    res.send({
        success: true,
    });
});

module.exports = router;
