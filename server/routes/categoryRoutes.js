const express = require('express')
const router = express.Router()
const {
  createCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.post("/", createCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

module.exports = router