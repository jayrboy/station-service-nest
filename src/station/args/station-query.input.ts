import { StationCreateInput } from './station-create.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class StationQueryInput extends PartialType(StationCreateInput) {
  @Field()
  id: string;
}
