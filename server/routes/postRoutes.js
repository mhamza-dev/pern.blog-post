const express = require('express')
const { verifyUserToken } = require("../controllers/userController");
const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", verifyUserToken, getAllPosts);
router.get("/:id", verifyUserToken, getPostById);
router.post("/", verifyUserToken, createPost)
router.delete("/:id", verifyUserToken, deletePost);
router.put("/:id", verifyUserToken, updatePost);

module.exports = router