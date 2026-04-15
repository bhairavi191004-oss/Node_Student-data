const express = require("express")
const { registerstudent, getallstudent, updatestudent, deletestudent } = require("../controllers/student.controllers")
const router = express.Router()

router.post("/registerdata", registerstudent)
router.get("/getalldata", getallstudent)
router.put("/updatedata", updatestudent)
router.delete("/deletedata", deletestudent)

module.exports = router