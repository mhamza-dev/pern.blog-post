"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const hashedPassword1 = await bcrypt.hash("password123", saltRounds);
    const hashedPassword2 = await bcrypt.hash("password456", saltRounds);
    const hashedPassword3 = await bcrypt.hash("password789", saltRounds);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "john.doe@example.com",
          password: hashedPassword1,
          username: "john_doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jane.smith@example.com",
          password: hashedPassword2,
          username: "jane_smith",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "alice.johnson@example.com",
          password: hashedPassword3,
          username: "alice_johnson",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
