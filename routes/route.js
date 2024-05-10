const { validateTemple, Temple } = require("../models/temple");

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const { error } = validateTemple(data);

    if (error) {
      return res.status(400).send({
        message: error.details[0].message,
      });
    }

    const saveData = await Temple.create(data);

    return res.status(201).send({
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

router.get("/", async (req, res) => {
  try {
    const fetch = await Temple.find().sort({ id: 1 });


    if (fetch.length === 0) {
      return res.status(204).send({
        message: "No temples in Database, please create one.",
      });
    }

    return res.status(200).send({
      message: "Temples fetched successfully",
      data: fetch,
    });
  } catch (error) {
    console.log("error", error);
    return res.send({
      status: 500,
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const fetch = await Temple.findOne({ id: id });

    if (!fetch) {
      return res.status(404).send({
        message: "No temple Found!",
      });
    }

    return res.status(200).send({
      message: "Temple fetched successfully",
      data: fetch,
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
