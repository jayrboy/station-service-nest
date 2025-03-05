import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StationService } from './station.service';
import { Station } from './schemas/station.schema';
import { StationCreateInput } from './args/station-create.input';
import { StationUpdateInput } from './args/station-update.input';
import { StationQueryInput } from './args/station-query.input';
import { StationDeleteInput } from './args/station-delete.input';

@Resolver(() => Station)
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Mutation(() => Station)
  StationCreate(@Args('value') stationCreateInput: StationCreateInput) {
    // console.log(stationCreateInput);
    return this.stationService.create(stationCreateInput);
  }

  @Query(() => [Station], { name: 'StationList' })
  StationList() {
    return this.stationService.findAll();
  }

  @Query(() => Station, { name: 'Station' })
  Station(@Args('query') stationQueryInput: StationQueryInput) {
    return this.stationService.findOne(stationQueryInput.id);
  }

  @Mutation(() => Station)
  async StationUpdate(@Args('value') stationUpdateInput: StationUpdateInput) {
    const station = await this.stationService.update(
      stationUpdateInput.id,
      stationUpdateInput,
    );
    if (!station) {
      throw new Error('Station not found or update failed');
    }
    return station;
  }

  @Mutation(() => Station)
  StationDelete(@Args('value') stationDeleteInput: StationDeleteInput) {
    return this.stationService.remove(stationDeleteInput.id);
  }
}
