import { QueryInterface } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize) =>
    queryInterface.createTable('station_chatbot_logs', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      message_id: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      payload: {
        type: Sequelize.JSONB,
      },
      response: {
        type: Sequelize.JSONB,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_by: {
        type: Sequelize.STRING,
      },
    }),

  down: (queryInterface: QueryInterface) =>
    queryInterface.dropTable('station_chatbot_logs'),
};
