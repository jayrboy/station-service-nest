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
    return stationCreateInput;
  }

  findAll(): Promise<Station[]> {
    return this.stations.findAll<Station>();
  }

  async findOne(id: string): Promise<Station> {
    return await this.stations.findByPk(id);
  }

  update(id: string, stationUpdateInput: StationUpdateInput) {
    return `This action updates a #${id} station`;
  }

  remove(id: string) {
    return `This action removes a #${id} station`;
  }
}
