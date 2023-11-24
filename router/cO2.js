const express = require("express");
const router = express.Router();
const costSchema = require("../model/cO2");

router.get("/cO2", async (req, res) => {
  try {
    const data = await costSchema.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
