// Import required modules
const express = require("express");
const router = require("./routes/route");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
// Create an instance of Express
const app = express();
const port = 3000;
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://devuser:devuser321@cluster0.3serfjy.mongodb.net/kkrtemple?retryWrites=true"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log("e", e));

app.use(express.json());
app.use(router);

const fuc = () => {
  console.log(`Server is running on port ${port}`);
};

// Start the server
app.listen(port, fuc);
