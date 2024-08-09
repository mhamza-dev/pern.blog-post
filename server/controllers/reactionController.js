import { Reaction } from "../models";

const listReactions = async (_req, resp) => {
  try {
    const reactions = await Reaction.findAll();
    resp.status(200).json(reactions);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const getReactionById = async (req, resp) => {
  try {
    const reaction = await Reaction.findOne(req.params.id);
    resp.status(200).json(reaction);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const createReaction = async (req, resp) => {
  try {
    const reaction = await Reaction.create(req.body);
    resp.status(200).json(reaction);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const updateReaction = async (req, resp) => {
  try {
    await Reaction.update(req.body, { where: { id: req.params.id } });
    resp.status(200).json("Reaction updated successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

const deleteReaction = async (req, resp) => {
  try {
    await Reaction.destroy({ where: { id: req.params.id } });
    resp.status(200).json("Reaction deleted successfully");
  } catch (error) {
    resp.status(500).json({ error: error });
  }
};

module.exports = {
  listReactions,
  getReactionById,
  createReaction,
  updateReaction,
  deleteReaction,
};
