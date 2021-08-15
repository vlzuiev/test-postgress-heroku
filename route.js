const router = require("express").Router();
const Profiles = require("./mode");

router.get("/", async (req, res) => {
  const profiles = await Profiles.findAll();
  res.json(profiles);
});

module.exports = router;
