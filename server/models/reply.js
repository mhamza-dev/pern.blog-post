'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reply.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      })
      Reply.belongsTo(models.Comment, {
        foreignKey: "commentId",
        as: "comment",
      });
    }
  }
  Reply.init({
    content: {type: DataTypes.STRING, validate: {notEmpty: true}},
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};