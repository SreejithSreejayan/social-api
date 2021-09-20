const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("you are now at posts");
});

module.exports = router;

// Create new post
// Update an existing post
// Delete a post
// Get Post
// Follow
