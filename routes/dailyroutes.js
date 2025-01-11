const express = require("express");
const { dailyCreate, getdailytask ,updateDailyTasks,getDataByName } = require("../controller/dailycontrol")

const router = express.Router();

// Route for creating a user
router.post("/dailypost", dailyCreate);

// Route for fetching all users
router.get("/dailypost", getdailytask);

router.put("/:dailyid",updateDailyTasks)
router.get("/:dailyid",getDataByName)

module.exports = router;
