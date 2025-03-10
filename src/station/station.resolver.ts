import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StationService } from './station.service';
import { StationCreateInput } from './args/station-create.input';
import { StationUpdateInput } from './args/station-update.input';
import { StationQueryInput } from './args/station-query.input';

@Resolver('Station')
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Mutation('StationCreate')
  create(@Args('value') stationCreateInput: StationCreateInput) {
    return this.stationService.create(stationCreateInput);
  }

  @Query('StationList')
  findAll() {
    return this.stationService.findAll();
  }

  @Query('Station')
  findOne(@Args('query') stationQueryInput: StationQueryInput) {
    return this.stationService.findOne(stationQueryInput.station_id);
  }

  @Mutation('StationUpdate')
  update(@Args('StationUpdateInput') stationUpdateInput: StationUpdateInput) {
    return this.stationService.update(
      stationUpdateInput.id,
      stationUpdateInput,
    );
  }

  @Mutation('StationDelete')
  remove(@Args('id') id: number) {
    return this.stationService.remove(id);
  }
}
