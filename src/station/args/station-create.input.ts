import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StationCreateInput {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  code: string;

  @Field()
  source_group: string;

  @Field()
  station_catalog_id: string;
}
