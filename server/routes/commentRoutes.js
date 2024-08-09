const express = require('express')
const router = express.Router()
const { verifyUserToken } = require("../controllers/userController");
const {
  listComments,
  listCommentsByPostId,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.post("/", verifyUserToken, createComment);
router.get("/", verifyUserToken, listComments);
router.get("/:id", verifyUserToken, getCommentById);
router.get("/posts/:id", verifyUserToken, listCommentsByPostId);
router.delete("/:id", verifyUserToken, deleteComment);
router.put("/:id", verifyUserToken, updateComment);

module.exports = router