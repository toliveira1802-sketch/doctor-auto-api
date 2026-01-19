import { Injectable } from '@nestjs/common';

interface IA {
  id: string;
  nome: string;
  emoji: string;
  descricao: string;
  status: 'ativa' | 'inativa';
  ultimaExecucao?: string;
}

interface Relatorio {
  ia: string;
  emoji: string;
  tarefa: string;
  resultado: string;
  timestamp: string;
}

@Injectable()
export class IasService {
  private ias: IA[] = [
    { id: '1', nome: 'BIA', emoji: '👑', descricao: 'Líder e Coordenadora', status: 'ativa' },
    { id: '2', nome: 'Anna Laura', emoji: '💰', descricao: 'Calculadora de Vendas', status: 'ativa' },
    { id: '3', nome: 'Vigilante', emoji: '👀', descricao: 'Monitor de Leads', status: 'ativa' },
    { id: '4', nome: 'Reativador', emoji: '🔄', descricao: 'Recuperação de Clientes', status: 'ativa' },
    { id: '5', nome: 'Qualificador', emoji: '✅', descricao: 'Análise de Leads', status: 'ativa' },
    { id: '6', nome: 'Agendador', emoji: '📅', descricao: 'Gestão de Agendamentos', status: 'ativa' },
    { id: '7', nome: 'Pós-Venda', emoji: '🎁', descricao: 'Follow-up de Clientes', status: 'ativa' },
    { id: '8', nome: 'Orçamentista', emoji: '📊', descricao: 'Geração de Orçamentos', status: 'ativa' },
    { id: '9', nome: 'Financeiro', emoji: '💳', descricao: 'Controle Financeiro', status: 'ativa' },
    { id: '10', nome: 'Marketing', emoji: '📢', descricao: 'Campanhas Automatizadas', status: 'ativa' },
    { id: '11', nome: 'Estoque', emoji: '📦', descricao: 'Gestão de Peças', status: 'ativa' },
    { id: '12', nome: 'Mecânico Virtual', emoji: '🔧', descricao: 'Diagnóstico Técnico', status: 'ativa' },
    { id: '13', nome: 'Satisfação', emoji: '⭐', descricao: 'Pesquisas NPS', status: 'ativa' },
    { id: '14', nome: 'Relatórios', emoji: '📈', descricao: 'Analytics e KPIs', status: 'ativa' },
    { id: '15', nome: 'Integrador', emoji: '🔗', descricao: 'Sincronização de Sistemas', status: 'ativa' },
  ];

  private relatorios: Relatorio[] = [
    {
      ia: 'BIA',
      emoji: '👑',
      tarefa: 'Coordenar equipe de IAs',
      resultado: '15 IAs operacionais, 100% de uptime',
      timestamp: new Date().toISOString(),
    },
    {
      ia: 'Anna Laura',
      emoji: '💰',
      tarefa: 'Calcular margem de lucro',
      resultado: 'R$ 45.000 em vendas hoje',
      timestamp: new Date().toISOString(),
    },
    {
      ia: 'Vigilante',
      emoji: '👀',
      tarefa: 'Monitorar leads inativos',
      resultado: '23 leads identificados para reativação',
      timestamp: new Date().toISOString(),
    },
    {
      ia: 'Reativador',
      emoji: '🔄',
      tarefa: 'Reativar clientes inativos',
      resultado: '12 clientes contatados, 5 agendamentos',
      timestamp: new Date().toISOString(),
    },
    {
      ia: 'Qualificador',
      emoji: '✅',
      tarefa: 'Qualificar novos leads',
      resultado: '18 leads qualificados, 12 aprovados',
      timestamp: new Date().toISOString(),
    },
  ];

  listarTodas() {
    return {
      total: this.ias.length,
      ativas: this.ias.filter(ia => ia.status === 'ativa').length,
      ias: this.ias,
    };
  }

  buscarPorId(id: string) {
    const ia = this.ias.find(i => i.id === id);
    if (!ia) {
      throw new Error('IA não encontrada');
    }
    return ia;
  }

  obterRelatorio() {
    return {
      timestamp: new Date().toISOString(),
      total_ias: this.ias.length,
      ias_ativas: this.ias.filter(ia => ia.status === 'ativa').length,
      relatorios: this.relatorios,
    };
  }

  async executarIA(id: string) {
    const ia = this.buscarPorId(id);
    
    // Simular execução
    const resultado = {
      ia: ia.nome,
      emoji: ia.emoji,
      status: 'executado',
      timestamp: new Date().toISOString(),
      mensagem: `${ia.nome} executada com sucesso!`,
    };

    // Adicionar ao relatório
    this.relatorios.unshift({
      ia: ia.nome,
      emoji: ia.emoji,
      tarefa: `Execução manual via dashboard`,
      resultado: `${ia.descricao} - Executado com sucesso`,
      timestamp: new Date().toISOString(),
    });

    // Manter apenas últimos 50 relatórios
    if (this.relatorios.length > 50) {
      this.relatorios = this.relatorios.slice(0, 50);
    }

    return resultado;
  }

  alternarStatus(id: string) {
    const ia = this.buscarPorId(id);
    ia.status = ia.status === 'ativa' ? 'inativa' : 'ativa';
    return ia;
  }
}
