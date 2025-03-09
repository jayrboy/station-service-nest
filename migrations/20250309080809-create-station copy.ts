import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('stations', {
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
      code: {
        type: DataTypes.STRING,
      },
      station_catalog_id: {
        type: DataTypes.UUID,
      },
      address: {
        type: DataTypes.TEXT,
      },
      phone: {
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.DOUBLE,
      },
      longitude: {
        type: DataTypes.DOUBLE,
      },
      pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      bank_fr_height: {
        type: DataTypes.FLOAT,
      },
      bank_fl_height: {
        type: DataTypes.FLOAT,
      },
      bank_br_height: {
        type: DataTypes.FLOAT,
      },
      bank_bl_height: {
        type: DataTypes.FLOAT,
      },
      bank_r_height: {
        type: DataTypes.FLOAT,
      },
      bank_l_height: {
        type: DataTypes.FLOAT,
      },
      thresholds: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      floating_switch_level: {
        type: DataTypes.FLOAT,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'ACTIVE',
      },
      layout_picture: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      info: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.STRING,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.STRING,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('stations');
  },
};
