import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('station_blacklists', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING,
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

  down: (queryInterface) => queryInterface.dropTable('station_blacklists'),
};
