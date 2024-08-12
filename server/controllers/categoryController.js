const { Category } = require("../models");

const createCategory = async (req, resp) => {
  try {
    const category = await Category.create(req.body);
    resp.status(200).json(category);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

const getAllCategory = async (_req, resp) => {
  try {
    const cateogries = await Category.findAll({
      order: [["createdAt", "DESC"]],
    });
    resp.status(200).json(cateogries);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, resp) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    resp.status(200).json("category has been deleted");
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, resp) => {
  try {
    await Category.update(req.body, {
      where: { id: req.params.id },
    });
    resp.status(200).json("category has been updated");
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
};
