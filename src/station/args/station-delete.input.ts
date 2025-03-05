import { StationCreateInput } from './station-create.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class StationDeleteInput extends PartialType(StationCreateInput) {
  @Field()
  id: string;
}
