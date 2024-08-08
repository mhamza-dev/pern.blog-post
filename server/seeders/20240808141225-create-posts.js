"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const posts = [];

    for (let i = 0; i < 30; i++) {
      posts.push({
        title: faker.lorem.sentence(), // Generates a random sentence
        body: faker.lorem.paragraphs(), // Generates random paragraphs
        userId: Math.floor(Math.random() * 3) + 1, // Assuming user IDs range from 1 to 3
        categoryId: Math.floor(Math.random() * 5) + 1, // Assuming category IDs range from 1 to 5
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Posts", posts, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
