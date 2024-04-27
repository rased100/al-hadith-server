const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

// route
app.get("/", (req, res) => {
  res.send("Hello from al-hadith");
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
