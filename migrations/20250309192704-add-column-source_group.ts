import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      await queryInterface.addColumn('stations', 'source_group', {
        type: DataTypes.STRING,
        allowNull: true,
      });
    } catch (error) {
      console.log(
        'Error adding source_group column to the stations table:',
        error,
      );
    }
  },

  async down(queryInterface) {
    try {
      await queryInterface.removeColumn('stations', 'source_group');
    } catch (error) {
      console.log(
        'Error removing source_group column from the stations table:',
        error,
      );
    }
  },
};
