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
    return this.stations.create(stationCreateInput);
  }

  findAll(): Promise<Station[]> {
    return this.stations.findAll<Station>();
  }

  findOne(station_id: string) {
    return this.stations.findByPk(station_id);
  }

  async update(id: string, stationUpdateInput: StationUpdateInput) {
    const [affectedRows, [updatedStation]] = await this.stations.update(
      stationUpdateInput,
      {
        where: { id },
        returning: true,
      },
    );

    if (affectedRows === 0) return null;
    return updatedStation;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
