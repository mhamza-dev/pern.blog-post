'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserReaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserReaction.belongsTo(models.Reaction, {
        foreignKey: "reactionId",
        as: "reaction"
      })
    }
  }
  UserReaction.init({
    reourceType: DataTypes.STRING,
    reourceId: DataTypes.INTEGER,
    reactionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserReaction',
  });
  return UserReaction;
};