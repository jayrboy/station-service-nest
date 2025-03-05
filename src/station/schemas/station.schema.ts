import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Station {
  @Field()
  id?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  ext_station_id?: string;

  @Field({ nullable: true })
  ext_station_code?: string;

  @Field()
  station_catalog_id: string;

  @Field({ nullable: true })
  station_meta_code?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  basin_name?: string;

  @Field({ nullable: true })
  sub_basin_name?: string;

  @Field({ nullable: true })
  river?: string;

  @Field({ nullable: true })
  amphur_name?: string;

  @Field({ nullable: true })
  tambon_name?: string;

  @Field({ nullable: true })
  province_name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => [String], { defaultValue: [] })
  pictures: string[];

  @Field(() => Float, { nullable: true })
  bank_fr_height?: number;

  @Field(() => Float, { nullable: true })
  bank_fl_height?: number;

  @Field(() => Float, { nullable: true })
  bank_br_height?: number;

  @Field(() => Float, { nullable: true })
  bank_bl_height?: number;

  @Field(() => Float, { nullable: true })
  bank_r_height?: number;

  @Field(() => Float, { nullable: true })
  bank_l_height?: number;

  @Field(() => [String], { defaultValue: [] })
  tags: string[];

  @Field(() => [String], { defaultValue: [] })
  thresholds: string[];

  @Field(() => Float, { nullable: true })
  floating_switch_level?: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  layout_picture?: string;

  @Field(() => [String], { defaultValue: [] })
  info: string[];

  @Field({ nullable: true })
  owner_name?: string;

  @Field({ nullable: true })
  project_name?: string;

  @Field({ nullable: true })
  source_group?: string;

  @Field({ nullable: true })
  alias_code?: string;

  @Field(() => [String], { defaultValue: [] })
  layouts: string[];
}
