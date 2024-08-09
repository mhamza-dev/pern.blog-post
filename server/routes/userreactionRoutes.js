const express = require('express')
const router = express.Router()
const { verifyUserToken } = require("../controllers/userController");
const {
  listUserReactions,
  listUserReactionsByResource,
  getUserReactionById,
  createUserReaction,
  updateUserReaction,
  deleteUserReaction,
} = require("../controllers/userreactionController");

router.post("/", verifyUserToken, createUserReaction);
router.get("/", verifyUserToken, listUserReactions);
router.get("/:resourceId/:resourceType", verifyUserToken, listUserReactionsByResource);
router.get("/:id", verifyUserToken, getUserReactionById);
router.delete("/:id", verifyUserToken, deleteUserReaction);
router.put("/:id", verifyUserToken, updateUserReaction);

module.exports = router