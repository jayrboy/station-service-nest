import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) =>
    queryInterface.createTable('station_metas', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      short_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      created_by: {
        type: DataTypes.STRING,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.STRING,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('station_metas'),
};
