"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          type: "Programming Languages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Software Development",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Cloud Computing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { type: "DevOps", createdAt: new Date(), updatedAt: new Date() },
        {
          type: "Artificial Intelligence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
