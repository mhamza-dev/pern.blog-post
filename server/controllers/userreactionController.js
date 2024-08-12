const { UserReaction } = require("../models");

const listUserReactions = async (_req, resp) => {
  try {
    const userReactions = await UserReaction.findAll({
      order: [["createdAt", "DESC"]],
    });
    resp.status(200).json(userReactions);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const listUserReactionsByResource = async (req, resp) => {
  try {
    const userReactions = await UserReaction.findAll({
      where: {
        resourceId: req.params.resourceId,
        resourceType: req.params.resourceType,
      },
      include: [{ model: Reaction, as: "reaction" }],
      order: [["createdAt", "DESC"]],
    });
    resp.status(200).json(userReactions);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const getUserReactionById = async (req, resp) => {
  try {
    const userReaction = await UserReaction.findOne(req.params.id);
    resp.status(200).json(userReaction);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const createUserReaction = async (req, resp) => {
  try {
    const userReaction = await UserReaction.create(req.body);
    resp.status(200).json(userReaction);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const updateUserReaction = async (req, resp) => {
  try {
    await UserReaction.update(req.body, { where: { id: req.params.id } });
    resp.status(200).json("UserReaction updated successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const deleteUserReaction = async (req, resp) => {
  try {
    await UserReaction.destroy({ where: { id: req.params.id } });
    resp.status(200).json("UserReaction deleted successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

module.exports = {
  listUserReactions,
  listUserReactionsByResource,
  getUserReactionById,
  createUserReaction,
  updateUserReaction,
  deleteUserReaction,
};
