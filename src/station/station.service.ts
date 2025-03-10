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
    return this.stations.findAll<Station>();
  }

  findOne(station_id: string) {
    return this.stations.findByPk(station_id);
  }

  update(id: string, stationUpdateInput: StationUpdateInput) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
