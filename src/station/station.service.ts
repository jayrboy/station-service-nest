import { Injectable } from '@nestjs/common';
import { StationCreateInput } from './args/station-create.input';
import { StationUpdateInput } from './args/station-update.input';

@Injectable()
export class StationService {
  create(stationCreateInput: StationCreateInput) {
    return stationCreateInput;
  }

  findAll() {
    return [
      {
        id: '1',
        name: 'nesttest001',
        source_group: 'RPRO',
        alias_code: null,
        code: 'nesttest001',
      },
      {
        id: '2',
        name: 'nesttest002',
        source_group: 'RPRO',
        alias_code: null,
        code: 'nesttest002',
      },
    ];
  }

  findOne(id: string) {
    return {
      id,
      name: 'nesttest002',
      source_group: 'RPRO',
      alias_code: null,
      code: 'nesttest002',
    };
  }

  update(id: string, stationUpdateInput: StationUpdateInput) {
    return `This action updates a #${id} station`;
  }

  remove(id: string) {
    return `This action removes a #${id} station`;
  }
}
