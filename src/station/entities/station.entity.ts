import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Utility } from 'rpro-utility';

const { Enumerations } = Utility;
const { STATUS } = Enumerations;
const Statuses = Object.values(STATUS);

@Table({ tableName: 'stations' }) // Sequelize ORM
export class Station extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.STRING })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({ type: DataType.STRING })
  code: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  pictures: string[];

  @Column({ type: DataType.FLOAT })
  latitude: number;

  @Column({ type: DataType.FLOAT })
  longitude: number;

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
