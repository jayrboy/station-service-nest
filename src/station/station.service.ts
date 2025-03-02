import { Injectable } from '@nestjs/common';
import { StationCreateInput } from './dto/station-create.input';
import { StationUpdateInput } from './dto/station-update.input';

@Injectable()
export class StationService {
  create(stationCreateInput: StationCreateInput) {
    return 'This action adds a new station';
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'Station 1',
        latitude: 0,
        longitude: 0,
      },
      {
        id: 2,
        name: 'Station 2',
        latitude: 0,
        longitude: 0,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  update(id: string, stationUpdateInput: StationUpdateInput) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
