import { Test, TestingModule } from '@nestjs/testing';
import { TranferService } from './tranfer.service';

describe('TranferService', () => {
  let service: TranferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranferService],
    }).compile();

    service = module.get<TranferService>(TranferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
