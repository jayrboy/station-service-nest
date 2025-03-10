import { Injectable, Inject } from '@nestjs/common';
import { StationCreateInput } from './args/station-create.input';
import { StationUpdateInput } from './args/station-update.input';
import { Station } from './entities/station.entity';

@Injectable()
export class StationService {
  constructor(
    @Inject('STATIONS')
    private stations: typeof Station,
  ) {}

  create(stationCreateInput: StationCreateInput) {
    return 'This action adds a new station';
  }

  findAll(): Promise<Station[]> {
    return this.stations.findAll();
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
