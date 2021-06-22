const express = require("express");
const {
  coffeCreate,
  coffeDelete,
  coffeDetail,
  coffeList,
  coffeUpdate,
  fetchCoffe,
} = require("../controllers/coffeControllers");
const router = express.Router();

router.param("coffeId", async (req, res, next, coffeId) => {
  const coffe = await fetchCoffe(coffeId, next);
  if (coffe) {
    req.coffe = coffe;
    next();
  } else {
    next({ message: "Coffe Not Found", status: 404 });
  }
});
router.post("/", coffeCreate);
router.get("/", coffeList);
router.get("/:coffeId", coffeDetail);
router.delete("/:coffeId", coffeDelete);
router.put("/:coffeId", coffeUpdate);
module.exports = router;
