import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IasModule } from './ias/ias.module';

@Module({
  imports: [IasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
