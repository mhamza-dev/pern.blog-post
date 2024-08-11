const express = require('express')
const { verifyUserToken } = require("../controllers/userController");
const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
  getPostByCategoryId,
  getUserPosts,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.get("/category/:id", getPostByCategoryId);
router.get("/user/:id", getUserPosts);
router.post("/", verifyUserToken, createPost)
router.delete("/:id", verifyUserToken, deletePost);
router.put("/:id", verifyUserToken, updatePost);

module.exports = router