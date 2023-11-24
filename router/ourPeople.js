const express = require("express");
const router = express.Router();

const contractorSchema = require("../model/contractor");
const empAgeSchema = require("../model/empAge");
const newHireSchema = require("../model/newHire");
const newHireGenderSchema = require("../model/newHireGender");
const partTimeCountrySchema = require("../model/partTimeCountry");
const permanentOrTempSchema = require("../model/permanentOrTemp");
const rolesSchema = require("../model/roles");

// router.get("/water", async (req, res) => {});
router.get("/ourPeople", async (req, res) => {
  try {
    const contractorData = await contractorSchema.find();
    console.log("---------------------------");
    console.log(contractorData);

    const empData = await empAgeSchema.find();
    console.log("---------------------------");
    console.log(empData);

    const newHireData = await newHireSchema.find();
    console.log("---------------------------");
    console.log(newHireData);

    const newHireGenderData = await newHireGenderSchema.find();
    console.log("---------------------------");
    console.log(newHireGenderData);

    const partTimeCountryData = await partTimeCountrySchema.find();
    console.log("---------------------------");
    console.log(partTimeCountryData);

    const permanentOrTempData = await permanentOrTempSchema.find();
    console.log("---------------------------");
    console.log(permanentOrTempData);

    const roleData = await rolesSchema.find();
    console.log("---------------------------");
    console.log(roleData);

    const responseData = {
      contractorData: contractorData,
      empData: empData,
      newHireData: newHireData,
      newHireGenderData: newHireGenderData,
      partTimeCountryData: partTimeCountryData,
      permanentOrTempData: permanentOrTempData,
      roleData: roleData,
    };

    //console.log(responseData);
    res.json(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
