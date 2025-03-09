import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      await Promise.all([
        queryInterface.addColumn('stations', 'station_meta_code', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'owner_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
        queryInterface.addColumn('stations', 'project_name', {
          type: DataTypes.STRING,
          allowNull: true,
        }),
      ]);
    } catch (error) {
      console.log(
        'Error adding station meta columns to the stations table:',
        error,
      );
    }
  },

  async down(queryInterface) {
    try {
      await Promise.all([
        queryInterface.removeColumn('stations', 'station_meta_code'),
        queryInterface.removeColumn('stations', 'owner_name'),
        queryInterface.removeColumn('stations', 'project_name'),
      ]);
    } catch (error) {
      console.log(
        'Error removing station meta columns from the stations table:',
        error,
      );
    }
  },
};
