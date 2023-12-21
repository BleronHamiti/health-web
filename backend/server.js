const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable CORS for all responses
app.use(cors());

// Define a GET route for /api/test
app.get("/api/test", (req, res) => {
  // Send back a JSON response
  res.json({ message: "Test API is working" });
});

// Other routes and middleware
app.get("/", (req, res) => res.send("Backend is running!"));

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
