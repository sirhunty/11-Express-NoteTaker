const express = require("express");
const api = require("./routes/api");
const html = require("./routes/html");

// Initializes app and creates a port at 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the body parsing, static, and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);

// Starts server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));