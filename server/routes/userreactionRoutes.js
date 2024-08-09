const express = require('express')
const router = express.Router()
const {
  listUserReactions,
  listUserReactionsByResource,
  getUserReactionById,
  createUserReaction,
  updateUserReaction,
  deleteUserReaction,
} = require("../controllers/userreactionController");

router.post("/", createUserReaction);
router.get("/", listUserReactions);
router.get("/:resourceId/:resourceType", listUserReactionsByResource);
router.get("/:id", getUserReactionById);
router.delete("/:id", deleteUserReaction);
router.put("/:id", updateUserReaction);

module.exports = router