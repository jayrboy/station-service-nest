import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('station_characteristics', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      station_id: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      points: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      info: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'ACTIVE',
      },
      survey_timestamp: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      survey_by: {
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

  down: (queryInterface: QueryInterface) =>
    queryInterface.dropTable('station_characteristics'),
};
