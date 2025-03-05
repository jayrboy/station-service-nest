import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationResolver } from './station.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { stationsProviders } from './station.providers';

@Module({
  imports: [DatabaseModule],
  providers: [StationResolver, StationService, ...stationsProviders],
})
export class StationModule {}
