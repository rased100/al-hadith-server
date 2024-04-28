const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = process.env.PORT || 5001;

// Enable CORS for all origins
app.use(cors());

// SQLite database connection
const database = new sqlite3.Database("./hadith_db.db", (error) => {
  if (error) {
    console.error("Error connecting to database:", error.message);
  } else {
    console.log("Connected to the database.");
  }
});

// home route
app.get("/", (req, res) => {
  res.send("Hello from al-hadith");
});

// books
app.get("/books", (req, res) => {
  database.all("SELECT * FROM books", (error, rows) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(rows);
  });
});
// chapter
app.get("/chapter", (req, res) => {
  database.all("SELECT * FROM chapter", (error, rows) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
