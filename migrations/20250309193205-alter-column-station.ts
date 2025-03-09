import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      await queryInterface.addColumn('stations', 'alias_code', {
        type: DataTypes.STRING,
        allowNull: true,
      });
    } catch (error) {
      console.log(
        'Error adding alias_code column to the stations table:',
        error,
      );
    }
  },

  async down(queryInterface) {
    try {
      await queryInterface.removeColumn('stations', 'alias_code');
    } catch (error) {
      console.log(
        'Error removing alias_code column from the stations table:',
        error,
      );
    }
  },
};
