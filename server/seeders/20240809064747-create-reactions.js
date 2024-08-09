"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reactions = [
      { type: "Like", createdAt: new Date(), updatedAt: new Date() },
      { type: "Love", createdAt: new Date(), updatedAt: new Date() },
      { type: "Haha", createdAt: new Date(), updatedAt: new Date() },
      { type: "Wow", createdAt: new Date(), updatedAt: new Date() },
      { type: "Sad", createdAt: new Date(), updatedAt: new Date() },
      { type: "Angry", createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert("Reactions", reactions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Reactions", null, {});
  },
};
