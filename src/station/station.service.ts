import { Injectable } from '@nestjs/common';
import { StationCreateInput } from './dto/station-create.input';
import { StationUpdateInput } from './dto/station-update.input';
import { InjectModel } from '@nestjs/sequelize';
import { Station } from './entities/station.entity';

@Injectable()
export class StationService {
  constructor(@InjectModel(Station) private stationModel: typeof Station) {}
  create(stationCreateInput: StationCreateInput) {
    return 'This action adds a new station';
  }

  findAll(): Promise<Station[]> {
    return this.stationModel.findAll();
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
