const { Post, User, Comment, Category } = require("../models");

const getAllPosts = async (_req, resp) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, as: "user" },
        { model: Comment, as: "comments" },
        { model: Category, as: "category" },
      ],
    });
    resp.status(200).json(posts);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

const getPostById = async (req, resp) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, as: "user" },
        { model: Comment, as: "comments" },
      ],
    });
    if (!post) return resp.status(404).json({ message: "Post not found" });
    resp.status(200).json(post);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
}

const createPost = async (req, resp) => {
  try {
    const post = await Post.create({...req.body, userId: req.user.data.id});
    resp.status(200).json(post);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
}

const deletePost = async (req, resp) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    resp.status(200).json("post has been deleted");
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, resp) => {
  try {
    await Post.update(req.body, {
      where: { id: req.params.id },
    });
    resp.status(200).json("post has been updated");
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

module.exports = { getAllPosts, getPostById, createPost, deletePost, updatePost };
