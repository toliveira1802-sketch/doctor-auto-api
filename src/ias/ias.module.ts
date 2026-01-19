import { Module } from '@nestjs/common';
import { IasController } from './ias.controller';
import { IasService } from './ias.service';

@Module({
  controllers: [IasController],
  providers: [IasService]
})
export class IasModule {}
