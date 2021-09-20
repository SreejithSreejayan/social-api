const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update your accoung!");
  }
});
// Delete user
router.delete("/:id", async (req, res) => {});
// Get a user
router.get("/:id", async (req, res) => {});
// Follow user
router.put("/:id/follow", async (req, res) => {});
// Unfollow user
router.put("/:id/unfollow", async (req, res) => {});

module.exports = router;
