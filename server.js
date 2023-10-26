const express = require("express");
const app = express();
const PORT = 3000; // You can use any port number you prefer

// Serve static files (like HTML, CSS, and JavaScript) from a public folder
app.use(express.static("public"));

// Handle the callback route after authentication
app.get("/auth/callback", (req, res) => {
  // Handle the authentication callback logic here
  // You can process the query parameters, obtain OAuth tokens, and perform further actions

  // For example, redirect users to a dashboard page after successful authentication
  res.redirect("/dashboard");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
