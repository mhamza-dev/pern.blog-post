"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const replies = [];
    const numberOfComments = 50; // Assuming you have 50 comments
    const numberOfUsers = 3; // Assuming you have 10 users
    const numberOfReplies = 150; // Number of replies you want to generate

    for (let i = 0; i < numberOfReplies; i++) {
      replies.push({
        content: faker.lorem.sentence(),
        commentId: Math.floor(Math.random() * numberOfComments) + 1,
        userId: Math.floor(Math.random() * numberOfUsers) + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Replies", replies, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Replies", null, {});
  },
};
