
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class StationListInput {
    point?: Nullable<StationPointInput>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
}

export class StationPointInput {
    ne: StationLatLongInput;
    nw: StationLatLongInput;
    se: StationLatLongInput;
    sw: StationLatLongInput;
}

export class StationQueryInput {
    station_id: string;
}

export class StationUpdateInput {
    id: string;
    name?: Nullable<string>;
    code?: Nullable<string>;
    ext_station_id?: Nullable<string>;
    ext_station_code?: Nullable<string>;
    address?: Nullable<string>;
    basin_name?: Nullable<string>;
    sub_basin_name?: Nullable<string>;
    river?: Nullable<string>;
    amphur_name?: Nullable<string>;
    tambon_name?: Nullable<string>;
    province_name?: Nullable<string>;
    phone?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    bank_fr_height?: Nullable<number>;
    bank_fl_height?: Nullable<number>;
    bank_br_height?: Nullable<number>;
    bank_bl_height?: Nullable<number>;
    bank_r_height?: Nullable<number>;
    bank_l_height?: Nullable<number>;
    thresholds?: Nullable<Nullable<StationThresholdsInput>[]>;
    floating_switch_level?: Nullable<number>;
    status?: Nullable<string>;
    layout_picture?: Nullable<string>;
    info?: Nullable<Nullable<StationInfoInput>[]>;
    source_group?: Nullable<string>;
    layouts?: Nullable<Nullable<StationInfoInput>[]>;
}

export class StationThresholdsInput {
    name?: Nullable<string>;
    type: string;
    sensor_type: string;
    position: string[];
    warning?: Nullable<string>;
    critical?: Nullable<string>;
    notify?: Nullable<boolean>;
}

export class StationInfoInput {
    key: string;
    value: string;
}

export class StationLatLongInput {
    latitude: number;
    longitude: number;
}

export class StationCreateInput {
    id: string;
    name: string;
    code?: Nullable<string>;
    station_catalog_id: string;
    ext_station_id?: Nullable<string>;
    ext_station_code?: Nullable<string>;
    address?: Nullable<string>;
    basin_name?: Nullable<string>;
    sub_basin_name?: Nullable<string>;
    river?: Nullable<string>;
    amphur_name?: Nullable<string>;
    tambon_name?: Nullable<string>;
    province_name?: Nullable<string>;
    phone?: Nullable<string>;
    image?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    bank_fr_height?: Nullable<number>;
    bank_fl_height?: Nullable<number>;
    bank_br_height?: Nullable<number>;
    bank_bl_height?: Nullable<number>;
    bank_r_height?: Nullable<number>;
    bank_l_height?: Nullable<number>;
    thresholds?: Nullable<Nullable<StationThresholdsInput>[]>;
    floating_switch_level?: Nullable<number>;
    info?: Nullable<Nullable<StationInfoInput>[]>;
    source_group: string;
}

export class StationDeleteInput {
    station_id: string;
}

export class StationOutput {
    id: string;
    name: string;
    code?: Nullable<string>;
    type?: Nullable<string>;
    sub_types?: Nullable<Nullable<string>[]>;
    station_catalog?: Nullable<StationStationCatalogOutput>;
    ext_station_id?: Nullable<string>;
    ext_station_code?: Nullable<string>;
    address?: Nullable<string>;
    basin_name?: Nullable<string>;
    sub_basin_name?: Nullable<string>;
    river?: Nullable<string>;
    amphur_name?: Nullable<string>;
    tambon_name?: Nullable<string>;
    province_name?: Nullable<string>;
    phone?: Nullable<string>;
    pictures: Nullable<string>[];
    tags?: Nullable<Nullable<string>[]>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    bank_fr_height?: Nullable<number>;
    bank_fl_height?: Nullable<number>;
    bank_br_height?: Nullable<number>;
    bank_bl_height?: Nullable<number>;
    bank_r_height?: Nullable<number>;
    bank_l_height?: Nullable<number>;
    thresholds?: Nullable<Nullable<StationThresholdsOutput>[]>;
    floating_switch_level?: Nullable<number>;
    layout_picture?: Nullable<string>;
    users?: Nullable<Nullable<StationUserOutput>[]>;
    devices?: Nullable<Nullable<StationDeviceOutput>[]>;
    info?: Nullable<Nullable<StationInfoOutput>[]>;
    cross_sections?: Nullable<Nullable<StationDataLoaderCrossSectionOutput>[]>;
    station_meta?: Nullable<StationMetaOutput>;
    owner_name?: Nullable<string>;
    project_name?: Nullable<string>;
    source_group?: Nullable<string>;
    alias_code?: Nullable<string>;
    layouts?: Nullable<Nullable<StationInfoOutput>[]>;
}

export class StationStationCatalogOutput {
    id: string;
    name?: Nullable<string>;
    type: string;
    sub_types?: Nullable<Nullable<string>[]>;
    device_rules?: Nullable<Nullable<StationStationCatalogDeviceRulesOutput>[]>;
    pictures?: Nullable<Nullable<string>[]>;
    icon?: Nullable<string>;
    plc_template_id?: Nullable<string>;
}

export class StationStationCatalogDeviceRulesOutput {
    type?: Nullable<string>;
    sub_type?: Nullable<string>;
    availability?: Nullable<string>;
    position?: Nullable<Nullable<string>[]>;
}

export class StationThresholdsOutput {
    name?: Nullable<string>;
    type: string;
    sensor_type?: Nullable<string>;
    position: string[];
    warning?: Nullable<JSON>;
    critical?: Nullable<JSON>;
    notify?: Nullable<boolean>;
}

export class StationUserOutput {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone?: Nullable<string>;
    picture?: Nullable<string>;
    employee_id?: Nullable<string>;
    group?: Nullable<string>;
}

export class StationDeviceOutput {
    id: string;
    name: string;
    serial: string;
    position?: Nullable<string>;
    comm_id?: Nullable<string>;
    x_coordinate?: Nullable<number>;
    y_coordinate?: Nullable<number>;
    pictures: Nullable<string>[];
    info?: Nullable<Nullable<StationInfoOutput>[]>;
    catalog?: Nullable<StationDeviceCatalogOutput>;
    status: string;
    device_relations?: Nullable<Nullable<StationDeviceRelationsOutput>[]>;
    views?: Nullable<string>;
}

export class StationInfoOutput {
    key: string;
    value: string;
}

export class StationDataLoaderCrossSectionOutput {
    id: string;
    position?: Nullable<string>;
    points: StationDistanceBottomLevelOutput[];
    info?: Nullable<Nullable<StationInfoOutput>[]>;
    survey_timestamp?: Nullable<number>;
    survey_by?: Nullable<string>;
}

export class StationMetaOutput {
    code?: Nullable<string>;
    name?: Nullable<string>;
    short_name?: Nullable<string>;
}

export class StationDeviceCatalogOutput {
    id: string;
    type: string;
    sub_type?: Nullable<string>;
    brand_name: string;
    model: string;
    version?: Nullable<string>;
    pictures: Nullable<string>[];
    sensors?: Nullable<StationSensorOutput[]>;
    info?: Nullable<StationCatalogInfoOutput[]>;
    maintenance_cycle?: Nullable<StationDeviceCatalogMaintenanceCycleOutput>;
    icon?: Nullable<string>;
}

export class StationDeviceRelationsOutput {
    id: string;
    device_ids: string[];
    relation_type: string;
}

export class StationDistanceBottomLevelOutput {
    distance: number;
    bottom_level: number;
}

export class StationSensorOutput {
    name: string;
    type: string;
    unit?: Nullable<string>;
    maximum?: Nullable<number>;
    minimum?: Nullable<number>;
    messages?: Nullable<Nullable<MessageObjectOutput>[]>;
    display_periods?: Nullable<number[]>;
    threshold_type?: Nullable<string>;
    report_method?: Nullable<string>;
}

export class StationCatalogInfoOutput {
    key: string;
    value: string;
    unit?: Nullable<string>;
}

export class StationDeviceCatalogMaintenanceCycleOutput {
    day_cycle: string;
    working_minute_cycle?: Nullable<number>;
}

export class MessageObjectOutput {
    key?: Nullable<string>;
    value?: Nullable<string>;
}

export abstract class IQuery {
    abstract StationList(query?: Nullable<StationListInput>): Nullable<StationOutput>[] | Promise<Nullable<StationOutput>[]>;

    abstract Station(query: StationQueryInput): Nullable<StationOutput> | Promise<Nullable<StationOutput>>;
}

export abstract class IMutation {
    abstract StationCreate(value: StationCreateInput): Nullable<StationOutput> | Promise<Nullable<StationOutput>>;

    abstract StationUpdate(value: StationUpdateInput): Nullable<StationOutput> | Promise<Nullable<StationOutput>>;

    abstract StationDelete(value: StationDeleteInput): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export type JSON = any;
type Nullable<T> = T | null;
