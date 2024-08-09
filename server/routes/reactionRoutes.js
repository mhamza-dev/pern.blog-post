const express = require('express')
const router = express.Router()
const {
  listReactions,
  getReactionById,
  createReaction,
  updateReaction,
  deleteReaction,
} = require("../controllers/reactionController");

router.post("/", createReaction);
router.get("/", listReactions);
router.get("/:id", getReactionById);
router.delete("/:id", deleteReaction);
router.put("/:id", updateReaction);

module.exports = router