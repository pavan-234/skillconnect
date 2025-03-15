const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ Ensure the correct path

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated!" });
});

module.exports = router;
