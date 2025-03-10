import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('station_users', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      station_id: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      group: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'OPERATOR',
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

  down: (queryInterface) => queryInterface.dropTable('station_users'),
};
