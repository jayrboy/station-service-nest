import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StationService } from './station.service';
import { Station } from './schemas/station.schema';
import { StationCreateInput } from './args/station-create.input';
import { StationUpdateInput } from './args/station-update.input';

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
  Station(@Args('value') id: string) {
    return this.stationService.findOne(id);
  }

  @Mutation(() => Station)
  StationUpdate(@Args('value') stationUpdateInput: StationUpdateInput) {
    return this.stationService.update(
      stationUpdateInput.id,
      stationUpdateInput,
    );
  }

  @Mutation(() => Station)
  StationDelete(@Args('value') id: string) {
    return this.stationService.remove(id);
  }
}
