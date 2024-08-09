"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = [];
    for (let i = 0; i < 50; i++) {
      comments.push({
        content: faker.lorem.sentence(),
        postId: Math.floor(Math.random() * 30) + 1, // Assuming you have 30 posts
        userId: Math.floor(Math.random() * 3) + 1, // Assuming you have 3 users
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Comments", comments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
