import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TranferModule } from './tranfer/tranfer.module';

@Module({
  imports: [UsersModule, TranferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
