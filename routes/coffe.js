const express = require("express");
const { coffeCreate , coffeDelete,coffeDetail,coffeList} = require("../controllers/coffeControllers")

const router = express.Router();

router.post("/",coffeCreate)
router.get("/",coffeList)
router.get("/:coffeId",coffeDetail);
router.delete("/:coffeId",coffeDelete)
module.exports = router