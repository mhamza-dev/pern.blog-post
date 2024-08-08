'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Post, {
        foreignKey: "categoryId",
        as: "category"
      })
    }
  }
  Category.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};