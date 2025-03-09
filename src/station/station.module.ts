import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationResolver } from './station.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Station } from './entities/station.entity';
import { stationsProviders } from './station.provider';

@Module({
  imports: [SequelizeModule.forFeature([Station])], // ✅ เพิ่ม SequelizeModule.forFeature
  providers: [StationResolver, StationService, ...stationsProviders],
  exports: [StationService],
})
export class StationModule {}
