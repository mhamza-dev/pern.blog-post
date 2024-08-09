const { Reply } = require("../models");

const listReplies = async (_req, resp) => {
  try {
    const replies = await Reply.findAll();
    resp.status(200).json(replies);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const listRepliesByCommentId = async (req, resp) => {
  try {
    const replies = await Reply.findAll({
      where: { commentId: req.params.commentId },
    });
    resp.status(200).json(replies);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const listRepliesByUserId = async (req, resp) => {
  try {
    const replies = await Reply.findAll({
      where: { userId: req.params.userId },
    });
    resp.status(200).json(replies);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const getReplyById = async (req, resp) => {
  try {
    const reply = await Reply.findOne(req.params.id);
    resp.status(200).json(reply);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const createReply = async (req, resp) => {
  try {
    const reply = await Reply.create(req.body);
    resp.status(200).json(reply);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const updateReply = async (req, resp) => {
  try {
    await Reply.update(req.body, { where: { id: req.params.id } });
    resp.status(200).json("Reply updated successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const deleteReply = async (req, resp) => {
  try {
    await Reply.destroy({ where: { id: req.params.id } });
    resp.status(200).json("Reply deleted successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

module.exports = {
  listReplies,
  listRepliesByCommentId,
  listRepliesByUserId,
  getReplyById,
  createReply,
  updateReply,
  deleteReply,
};
