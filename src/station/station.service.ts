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

  create(stationCreateInput: StationCreateInput): Promise<Station> {
    return this.stations.create(stationCreateInput);
  }

  findAll(): Promise<Station[]> {
    return this.stations.findAll<Station>();
  }

  findOne(station_id: string): Promise<Station> {
    return this.stations.findByPk(station_id);
  }

  async update(
    id: string,
    stationUpdateInput: StationUpdateInput,
  ): Promise<Station> {
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

  async remove(station_id: string): Promise<boolean> {
    const station = await this.stations.findByPk(station_id);

    if (!station) {
      throw new Error('Station not found');
    }

    await station.destroy();
    return true;
  }
}
