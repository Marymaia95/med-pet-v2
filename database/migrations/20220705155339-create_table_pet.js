'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'pet',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
        },
        RGA: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull:true
        },
        raca: {
          type: Sequelize.DataTypes.STRING(45),
        },
        tipoAnimal:{
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        },
        cliente_id:{
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model:{
              tableName: "clientes"
            },
            key:"id"
          }
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pet')
  }
};
