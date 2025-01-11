const express = require("express");
const { createShema, getAllData ,getDataByName ,updateDataByName} = require("../controller/contollerd")

const router = express.Router();

// Route for creating a user
router.post("/", createShema);

// Route for fetching all users
router.get("/", getAllData);

router.get("/:referalCode",getDataByName)
router.put("/:referalCode",updateDataByName)

module.exports = router;
