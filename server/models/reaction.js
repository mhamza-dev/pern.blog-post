'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reaction.hasOne(models.UserReaction, {
        foreignKey: "reactionId",
        as: "reaction"
      })
    }
  }
  Reaction.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reaction',
  });
  return Reaction;
};