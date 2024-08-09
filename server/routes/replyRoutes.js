const express = require('express')
const router = express.Router()
const { verifyUserToken } = require("../controllers/userController");
const {
  listReplies,
  listRepliesByCommentId,
  listRepliesByUserId,
  getReplyById,
  createReply,
  updateReply,
  deleteReply,
} = require("../controllers/replyController");

router.post("/", verifyUserToken, createReply);
router.get("/", verifyUserToken, listReplies);
router.get("/:id", verifyUserToken, getReplyById);
router.get("/comments/:commentId", verifyUserToken, listRepliesByCommentId);
router.get("/users/:userId", verifyUserToken, listRepliesByUserId);
router.delete("/:id", verifyUserToken, deleteReply);
router.put("/:id", verifyUserToken, updateReply);

module.exports = router