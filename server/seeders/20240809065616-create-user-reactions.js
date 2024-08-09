"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userReactions = [];
    const numberOfReactions = 100; // Number of user reactions you want to generate
    const reactionTypes = ["post", "comment", "reply"];

    for (let i = 0; i < numberOfReactions; i++) {
      const resourceType = faker.helpers.arrayElement(reactionTypes);
      let resourceId;

      switch (resourceType) {
        case "post":
          resourceId = Math.floor(Math.random() * 30) + 1;
          break;
        case "comment":
          resourceId = Math.floor(Math.random() * 50) + 1;
          break;
        case "reply":
          resourceId = Math.floor(Math.random() * 150) + 1;
          break;
        default:
          resourceId = null;
      }

      userReactions.push({
        reourceType: resourceType,
        reourceId: resourceId,
        reactionId: Math.floor(Math.random() * 6) + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("UserReactions", userReactions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("UserReactions", null, {});
  },
};
