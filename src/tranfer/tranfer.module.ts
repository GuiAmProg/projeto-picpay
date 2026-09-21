import { Module } from '@nestjs/common';
import { TranferService } from './tranfer.service';
import { TranferController } from './tranfer.controller';

@Module({
  controllers: [TranferController],
  providers: [TranferService],
})
export class TranferModule {}
