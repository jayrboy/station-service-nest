import { QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const flag = { phone: 'mockup' };

export = {
  async up(queryInterface: QueryInterface) {
    let mocks = [];
    const stationN = 10;
    for (let index = 0; index < stationN; index += 1) {
      mocks = [
        ...mocks,
        {
          id: uuidv4(),
          name: `MockStation${index}`,
          ...flag,
          updated_at: new Date(),
          created_at: new Date(),
        },
      ];
    }
    await queryInterface.bulkInsert('stations', mocks, {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('stations', flag, {});
  },
};
