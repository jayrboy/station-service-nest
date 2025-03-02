import { Test, TestingModule } from '@nestjs/testing';
import { StationResolver } from './station.resolver';
import { StationService } from './station.service';

describe('StationResolver', () => {
  let resolver: StationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationResolver, StationService],
    }).compile();

    resolver = module.get<StationResolver>(StationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
