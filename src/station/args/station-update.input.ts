import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StationUpdateInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  basin_name?: string;

  @Field({ nullable: true })
  sub_basin_name?: string;

  @Field({ nullable: true })
  source_group?: string;
}
