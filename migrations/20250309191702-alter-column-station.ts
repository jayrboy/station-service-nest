import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      await Promise.all([
        queryInterface.addColumn('stations', 'ext_station_id', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'ext_station_code', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'basin_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'sub_basin_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'river', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'amphur_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'tambon_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'province_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
      ]);
    } catch (error) {
      console.log(
        'Error adding location columns to the stations table:',
        error,
      );
    }
  },

  async down(queryInterface) {
    try {
      await Promise.all([
        queryInterface.removeColumn('stations', 'ext_station_id'),
        queryInterface.removeColumn('stations', 'ext_station_code'),
        queryInterface.removeColumn('stations', 'basin_name'),
        queryInterface.removeColumn('stations', 'sub_basin_name'),
        queryInterface.removeColumn('stations', 'river'),
        queryInterface.removeColumn('stations', 'amphur_name'),
        queryInterface.removeColumn('stations', 'tambon_name'),
        queryInterface.removeColumn('stations', 'province_name'),
      ]);
    } catch (error) {
      console.log(
        'Error removing location columns from the stations table:',
        error,
      );
    }
  },
};
