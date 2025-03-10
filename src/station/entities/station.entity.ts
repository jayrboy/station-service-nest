import {
  Table,
  Column,
  Model,
  DataType,
  // ForeignKey,
} from 'sequelize-typescript';
import { Utility } from 'rpro-utility';

const { Enumerations } = Utility;
const { STATUS } = Enumerations;

const Statuses = Object.values(STATUS);

@Table({ tableName: 'stations' })
export class Station extends Model<Station> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  code: string;

  @Column({
    field: 'ext_station_id',
    type: DataType.STRING,
  })
  extStationId: string;

  @Column({
    field: 'ext_station_code',
    type: DataType.STRING,
  })
  extStationCode: string;

  // @ForeignKey(() => StationCatalog)
  @Column({
    field: 'station_catalog_id',
    type: DataType.UUID,
  })
  stationCatalogId: string;

  // @ForeignKey(() => StationMeta)
  @Column({
    field: 'station_meta_code',
    type: DataType.STRING,
  })
  stationMetaCode: string;

  @Column({
    type: DataType.TEXT,
  })
  address: string;

  @Column({
    field: 'basin_name',
    type: DataType.STRING,
  })
  basinName: string;

  @Column({
    field: 'sub_basin_name',
    type: DataType.STRING,
  })
  subBasinName: string;

  @Column({
    field: 'river',
    type: DataType.STRING,
  })
  river: string;

  @Column({
    field: 'amphur_name',
    type: DataType.STRING,
  })
  amphurName: string;

  @Column({
    field: 'tambon_name',
    type: DataType.STRING,
  })
  tambonName: string;

  @Column({
    field: 'province_name',
    type: DataType.STRING,
  })
  provinceName: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.DOUBLE,
  })
  latitude: number;

  @Column({
    type: DataType.DOUBLE,
  })
  longitude: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  pictures: string[];

  @Column({
    field: 'bank_fr_height',
    type: DataType.FLOAT,
  })
  bankFrHeight: number;

  @Column({
    field: 'bank_fl_height',
    type: DataType.FLOAT,
  })
  bankFlHeight: number;

  @Column({
    field: 'bank_br_height',
    type: DataType.FLOAT,
  })
  bankBrHeight: number;

  @Column({
    field: 'bank_bl_height',
    type: DataType.FLOAT,
  })
  bankBlHeight: number;

  @Column({
    field: 'bank_r_height',
    type: DataType.FLOAT,
  })
  bankRHeight: number;

  @Column({
    field: 'bank_l_height',
    type: DataType.FLOAT,
  })
  bankLHeight: number;

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    defaultValue: [],
  })
  thresholds: any[];

  @Column({
    field: 'floating_switch_level',
    type: DataType.FLOAT,
  })
  floatingSwitchLevel: number;

  @Column({
    type: DataType.ENUM(...(Object.values(Statuses) as string[])),
    allowNull: false,
    defaultValue: STATUS.ACTIVE,
  })
  status: keyof typeof Statuses;

  @Column({
    field: 'layout_picture',
    type: DataType.STRING,
  })
  layoutPicture: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  tags: string[];

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    defaultValue: [],
  })
  info: any[];

  @Column({
    field: 'created_at',
    defaultValue: new Date(),
  })
  createdAt: Date;

  @Column({
    field: 'created_by',
    type: DataType.STRING,
  })
  createdBy: Date;

  @Column({
    field: 'updated_at',
    defaultValue: new Date(),
  })
  updatedAt: Date;

  @Column({
    field: 'updated_by',
    type: DataType.STRING,
  })
  updatedBy: Date;

  @Column({
    field: 'owner_name',
    type: DataType.STRING,
  })
  ownerName: string;

  @Column({
    field: 'project_name',
    type: DataType.STRING,
  })
  projectName: string;

  @Column({
    field: 'source_group',
    type: DataType.STRING,
  })
  sourceGroup: string;

  @Column({
    field: 'alias_code',
    type: DataType.STRING,
  })
  aliasCode: string;

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    defaultValue: [],
  })
  layouts: any[];
}
