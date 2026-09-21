import { Test, TestingModule } from '@nestjs/testing';
import { TranferController } from './tranfer.controller';
import { TranferService } from './tranfer.service';

describe('TranferController', () => {
  let controller: TranferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranferController],
      providers: [TranferService],
    }).compile();

    controller = module.get<TranferController>(TranferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
