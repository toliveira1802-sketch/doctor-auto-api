import { Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { IasService, IA, Relatorio } from './ias.service';

@Controller('api/ias')
export class IasController {
  constructor(private readonly iasService: IasService) {}

  @Get()
  listarTodas(): { total: number; ativas: number; ias: IA[] } {
    return this.iasService.listarTodas();
  }

  @Get('relatorio')
  obterRelatorio(): { timestamp: string; total_ias: number; ias_ativas: number; relatorios: Relatorio[] } {
    return this.iasService.obterRelatorio();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): IA {
    return this.iasService.buscarPorId(id);
  }

  @Post(':id/executar')
  executarIA(@Param('id') id: string) {
    return this.iasService.executarIA(id);
  }

  @Patch(':id/status')
  alternarStatus(@Param('id') id: string): IA {
    return this.iasService.alternarStatus(id);
  }
}

