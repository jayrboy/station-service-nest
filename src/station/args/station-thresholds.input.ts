export class StationThresholdsInput {
  name: string;
  type?: string;
  sensor_type?: string;
  position?: [];
  warning: string;
  critical: string;
  notify: boolean;
}
