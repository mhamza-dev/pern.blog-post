const express = require('express')
const router = express.Router()
const {
  listReplies,
  listRepliesByCommentId,
  listRepliesByUserId,
  getReplyById,
  createReply,
  updateReply,
  deleteReply,
} = require("../controllers/replyController");

router.post("/", createReply);
router.get("/", listReplies);
router.get("/:id", getReplyById);
router.get("/comments/:commentId", listRepliesByCommentId);
router.get("/users/:userId", listRepliesByUserId);
router.delete("/:id", deleteReply);
router.put("/:id", updateReply);

module.exports = router