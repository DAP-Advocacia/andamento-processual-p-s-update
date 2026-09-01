import { useEffect, useState } from 'react';
import { s } from '../style.js';
import { IconX } from './Icons.jsx';
import { iniciais, BTN_PAG, BTN_PAG_OFF } from '../data.js';
import { buscarUsuariosEquipeCobranca } from '../services/equipeCobrancaApi.js';

const PAGE_SIZE = 8;

export default function PickerUsuarios({ modo, onSelecionar, onFechar }) {
  const [busca, setBusca] = useState('');
  const [pagina, setPagina] = useState(1);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    let cancelado = false;
    buscarUsuariosEquipeCobranca().then((reais) => {
      if (!cancelado) setUsuarios(reais);
    });
    return () => { cancelado = true; };
  }, []);

  const norm = busca.trim().toLowerCase();
  const filtrados = usuarios.filter((u) => !norm || u.nome.toLowerCase().includes(norm));
  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / PAGE_SIZE));
  const atual = Math.min(pagina, totalPaginas);
  const lista = filtrados.slice((atual - 1) * PAGE_SIZE, (atual - 1) * PAGE_SIZE + PAGE_SIZE);

  return (
    <div style={s('position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:70;padding:20px;')}>
      <div style={s('background:#111111;border:1px solid rgba(199,199,199,0.2);border-radius:14px;width:440px;max-height:85vh;display:flex;flex-direction:column;')}>
        <div style={s('display:flex;justify-content:space-between;align-items:center;padding:20px 20px 0;')}>
          <span style={s('font-size:15px;font-weight:700;')}>{modo === 'permissao' ? 'Adicionar usuário às Permissões' : 'Selecionar Cobrador no Bitrix24'}</span>
          <button className="close-btn" onClick={onFechar} style={s('background:transparent;border:none;color:rgba(236,230,216,0.5);cursor:pointer;padding:4px;')}><IconX /></button>
        </div>
        <div style={s('padding:16px 20px;')}>
          <input type="text" placeholder="Buscar por nome..." value={busca} onChange={(e) => { setBusca(e.target.value); setPagina(1); }} style={s('width:100%;background:#161616;border:1px solid rgba(199,199,199,0.25);border-radius:8px;padding:10px 12px;color:#ECE6D8;font-family:inherit;font-size:13px;')} />
        </div>
        <div style={s('flex:1;overflow-y:auto;padding:0 20px;display:flex;flex-direction:column;gap:6px;')}>
          {lista.map((u) => (
            <button key={u.id} className="picker-item" onClick={() => onSelecionar(u)} style={s('display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(199,199,199,0.12);border-radius:8px;padding:9px 12px;cursor:pointer;text-align:left;font-family:inherit;color:#ECE6D8;font-size:13px;')}>
              <span style={s('width:26px;height:26px;border-radius:50%;background:rgba(245,221,144,0.12);color:#f5dd90;display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:800;flex-shrink:0;')}>{iniciais(u.nome)}</span>
              {u.nome}
            </button>
          ))}
        </div>
        <div style={s('display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-top:1px solid rgba(199,199,199,0.12);')}>
          <span style={s('font-size:11px;color:rgba(236,230,216,0.4);')}>Página {atual} de {totalPaginas}</span>
          <div style={s('display:flex;gap:8px;')}>
            <button onClick={() => setPagina(Math.max(1, atual - 1))} style={atual <= 1 ? BTN_PAG_OFF : BTN_PAG}>Anterior</button>
            <button onClick={() => setPagina(Math.min(totalPaginas, atual + 1))} style={atual >= totalPaginas ? BTN_PAG_OFF : BTN_PAG}>Próxima</button>
          </div>
        </div>
      </div>
    </div>
  );
}
