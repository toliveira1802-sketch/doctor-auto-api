import { Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { IasService } from './ias.service';

@Controller('api/ias')
export class IasController {
  constructor(private readonly iasService: IasService) {}

  @Get()
  listarTodas() {
    return this.iasService.listarTodas();
  }

  @Get('relatorio')
  obterRelatorio() {
    return this.iasService.obterRelatorio();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.iasService.buscarPorId(id);
  }

  @Post(':id/executar')
  executarIA(@Param('id') id: string) {
    return this.iasService.executarIA(id);
  }

  @Patch(':id/status')
  alternarStatus(@Param('id') id: string) {
    return this.iasService.alternarStatus(id);
  }
}
