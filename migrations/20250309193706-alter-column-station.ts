import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    // Add the 'about' column to the 'stations' table
    await queryInterface.addColumn('stations', 'layouts', {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      defaultValue: [],
    });
  },

  async down(queryInterface: QueryInterface) {
    // Revert the migration by removing the 'layouts' column
    await queryInterface.removeColumn('stations', 'layouts');
  },
};
