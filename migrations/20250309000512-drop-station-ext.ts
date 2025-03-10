import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      await queryInterface.dropTable('station_exts');
    } catch (error) {
      this.logger.error('Error dropping the station_exts table:', error);
    }
  },

  async down(queryInterface: QueryInterface) {
    try {
      await queryInterface.createTable('station_exts', {
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
        ext_station_id: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ext_station_code: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        station_catalog_id: {
          type: DataTypes.UUID,
        },
        address: {
          type: DataTypes.TEXT,
        },
        basin_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        sub_basin_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        river: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        amphur_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        tambon_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        province_name: {
          type: DataTypes.STRING,
          allowNull: true,
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
      });
    } catch (error) {
      this.logger.error('Error creating the station_exts table:', error);
    }
  },
};
