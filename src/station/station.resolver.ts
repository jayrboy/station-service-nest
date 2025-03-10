import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StationService } from './station.service';
import { StationCreateInput } from './args/station-create.input';
import { StationUpdateInput } from './args/station-update.input';
import { StationQueryInput } from './args/station-query.input';
import { StationDeleteInput } from './args/station-delete.input';

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
  update(@Args('value') stationUpdateInput: StationUpdateInput) {
    return this.stationService.update(
      stationUpdateInput.id,
      stationUpdateInput,
    );
  }

  @Mutation('StationDelete')
  remove(@Args('value') stationDeleteInput: StationDeleteInput) {
    return this.stationService.remove(stationDeleteInput.station_id);
  }
}
