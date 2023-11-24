const express = require("express");
const router = express.Router();

const wDischargeTypeSchema = require("../model/waterDischargeType");

const wDischargeYearSchema = require("../model/waterDischargeYear");

const wInputTypeSchema = require("../model/waterInputType");

const wInputYearSchema = require("../model/waterInputYear");

// router.get("/water", async (req, res) => {});
router.get("/water", async (req, res) => {
  try {
    const dType = await wDischargeTypeSchema.find();
    const dYear = await wDischargeYearSchema.find();
    const iType = await wInputTypeSchema.find();
    const iYear = await wInputYearSchema.find();

    const responseData = {
      dischargeType: dType,
      dischargeYear: dYear,
      inputType: iType,
      inputYear: iYear,
    };

    console.log(responseData);
    res.json(dType);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
