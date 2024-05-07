const Temple = require("../models/temple");

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const saveData = await Temple.create(data);

    return res.send({
      message: "New temple created.",
      data: saveData,
    });
  } catch (error) {
    console.log("error", error);
    return res.send({
      status: 500,
      message: error.message,
    });
  }
});

module.exports = router;
