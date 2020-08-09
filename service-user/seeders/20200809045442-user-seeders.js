'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [{
                name: "Tegar Satya negara",
                profession: "Admin Micro",
                role: "admin",
                email: "tegarsatyanegara@gmail.com",
                password: await bcrypt.hash('rahasia1234', 10),
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: "TSN",
                profession: "Backend Developer",
                role: "student",
                email: "tsn@mail.com",
                password: await bcrypt.hash('rahasiaku123', 10),
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};