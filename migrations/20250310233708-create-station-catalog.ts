import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('station_catalogs', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_types: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      device_rules: {
        type: DataTypes.JSONB,
        defaultValue: [],
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ACTIVE',
      },
      pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      icon: {
        type: DataTypes.STRING,
      },
      plc_template_id: {
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
    queryInterface.dropTable('station_catalogs'),
};
