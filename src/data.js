export const COR_STATUS = { concluida: '#5fc9a8', atrasada: '#e0796f', no_prazo: '#5b9bdb' };
export const STATUS_LABEL = { concluida: 'Concluída', atrasada: 'Atrasada', no_prazo: 'No prazo' };

export const PERM_COLS = [
  { key: 'painel', label: 'Painel Geral' },
  { key: 'colaboradores', label: 'Colaboradores & Advogados' },
  { key: 'tarefas', label: 'Andamento Processual' },
  { key: 'permissoes', label: 'Permissões' },
];

// Paleta fixa para os polos, indexada pela ordem em que o backend devolve
// `opcoes.polos` (GET /equipe-cobranca/mapa-polos) — o backend não manda cor.
const PALETA_POLO = ['#2f6fb0', '#a44fc0', '#158a6f', '#c96a12', '#d1685f', '#5b9bdb', '#8a6d3b', '#6a5acd', '#3b8a8a', '#b0562f'];

export function corDoPolo(codigo, polos) {
  const indice = polos.findIndex((p) => p.codigo === codigo);
  return PALETA_POLO[indice >= 0 ? indice % PALETA_POLO.length : 0];
}

export function iniciais(nome) {
  return nome.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
}

export function pillStyle(cor, active) {
  const base = { fontSize: '12px', fontWeight: 600, padding: '7px 14px', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit' };
  if (!cor) {
    return active
      ? { ...base, background: '#846419', color: '#f5eec9', border: '1px solid #846419', fontWeight: 700 }
      : { ...base, background: 'transparent', color: 'rgba(236,230,216,0.65)', border: '1px solid rgba(199,199,199,0.3)' };
  }
  return active
    ? { ...base, background: cor, color: '#ffffff', border: '1px solid ' + cor, fontWeight: 700 }
    : { ...base, background: cor + '1c', color: cor, border: '1px solid ' + cor + '40' };
}

export const BTN_PAG = { background: 'transparent', border: '1px solid rgba(199,199,199,0.3)', color: 'rgba(236,230,216,0.7)', borderRadius: '7px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' };
export const BTN_PAG_OFF = { ...BTN_PAG, opacity: 0.35, cursor: 'not-allowed' };
