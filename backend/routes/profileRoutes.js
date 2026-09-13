const express = require("express");

const {
    saveProfile
} = require("../controllers/profileController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    saveProfile
);

module.exports = router;