'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: "userId", // The foreign key in the Post model
        as: "user", // The alias to use when accessing the user
      });
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING , validate: {isEmail: true}},
      password: DataTypes.STRING,
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};