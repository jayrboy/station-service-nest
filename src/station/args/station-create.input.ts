import { InputType, Field } from '@nestjs/graphql';
// import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class StationCreateInput {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  // @IsNotEmpty({ message: 'Name is required' })
  // @IsString()
  // @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  code: string;

  @Field()
  source_group: string;

  @Field()
  station_catalog_id: string;
}
