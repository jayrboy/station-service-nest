import { Station } from './entities/station.entity';

export const stationsProviders = [
  {
    provide: 'STATIONS',
    useValue: Station,
  },
];
