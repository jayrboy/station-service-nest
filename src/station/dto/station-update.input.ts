import { StationCreateInput } from './station-create.input';
import { PartialType } from '@nestjs/mapped-types';

export class StationUpdateInput extends PartialType(StationCreateInput) {
  id: string;
}
