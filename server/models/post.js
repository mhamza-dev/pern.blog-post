"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: "userId", // The foreign key in the Post model
        as: "user", // The alias to use when accessing the user
      });
      Post.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
