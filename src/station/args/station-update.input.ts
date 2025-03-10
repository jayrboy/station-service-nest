import { StationInfoInput } from './station-info.input';
import { StationThresholdsInput } from './station-thresholds.input';

export class StationUpdateInput {
  id?: string;
  name: string;
  code: string;
  ext_station_id: string;
  ext_station_code: string;
  address: string;
  basin_name: string;
  sub_basin_name: string;
  river: string;
  amphur_name: string;
  tambon_name: string;
  province_name: string;
  phone: string;
  tags: [];
  latitude: number;
  longitude: number;
  bank_fr_height: number;
  bank_fl_height: number;
  bank_br_height: number;
  bank_bl_height: number;
  bank_r_height: number;
  bank_l_height: number;
  thresholds: [StationThresholdsInput];
  floating_switch_level: number;
  status: string;
  layout_picture: string;
  info: [StationInfoInput];
  source_group: string;
  layouts: [StationInfoInput];
}
