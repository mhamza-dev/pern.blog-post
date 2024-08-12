const { Comment } = require("../models")

const listComments = async (_req, resp) => {
  try {
    const comments = await Comment.findAll({
      order: [["createdAt", "DESC"]],
    });
    resp.status(200).json(comments);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const listCommentsByPostId = async (req, resp) => {
  try {
    const comments = await Comment.findAll({
      where: { postId: req.params.id },
      order: [["createdAt", "DESC"]],
    });
    resp.status(200).json(comments);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const getCommentById = async (req, resp) => {
  try {
    const comment = await Comment.findOne(req.params.id);
    resp.status(200).json(comment);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const createComment = async (req, resp) => {
    try {
        const comment = await Comment.create(req.body)
        resp.status(200).json(comment)
    } catch (error) {
        resp.status(500).json({ error: error })
    }
}

const updateComment = async (req, resp) => {
  try {
    await Comment.update(req.body, {where: {id: req.params.id}});
    resp.status(200).json("Comment updated successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const deleteComment = async (req, resp) => {
  try {
    await Comment.destroy({where: { id: req.params.id }});
    resp.status(200).json("Comment deleted successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

module.exports = {
  listComments,
  listCommentsByPostId,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
};