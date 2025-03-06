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

  async findAll(): Promise<Station[]> {
    return await this.stations.findAll<Station>();
  }

  async findOne(id: string): Promise<Station> {
    return await this.stations.findByPk(id);
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

  async remove(id: string) {
    const station = await this.stations.findByPk(id);

    if (!station) {
      throw new Error('Station not found');
    }

    await station.destroy();
    return station;
  }
}
