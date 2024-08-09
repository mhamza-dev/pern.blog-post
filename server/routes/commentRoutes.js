const express = require('express')
const router = express.Router()
const {
  listComments,
  listCommentsByPostId,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/categoryController");

router.post("/", createComment);
router.get("/", listComments);
router.get("/:id", getCommentById);
router.get("/posts/:id", listCommentsByPostId);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

module.exports = router