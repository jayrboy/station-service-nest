import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationResolver } from './station.resolver';
import { stationsProviders } from './station.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StationResolver, StationService, ...stationsProviders],
  exports: [StationService],
})
export class StationModule {}
