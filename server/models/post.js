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
      Post.hasMany(models.Comment, {
        foreignKey: "postId", // The foreign key in the Comment model
        as: "comments", // The alias to use when accessing the comments
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
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
