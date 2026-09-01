import { s } from '../style.js';
import { IconPlus, IconX } from './Icons.jsx';
import { PERM_COLS, iniciais } from '../data.js';

export default function Permissoes({ usuarios, onToggle, onRemover, onAdicionar }) {
  return (
    <div style={s('max-width:1360px;animation:fadeSlideIn 0.4s ease both;margin:0 auto;')}>
      <div style={s('margin-bottom:20px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;')}>
        <div>
          <div style={s('font-size:22px;font-weight:700;')}>Permissões</div>
          <div style={s('font-size:13px;color:rgba(236,230,216,0.5);margin-top:4px;')}>Controle o que cada usuário do Bitrix24 pode visualizar no sistema.</div>
        </div>
        <button className="btn-gold" onClick={onAdicionar} style={s('display:flex;align-items:center;gap:8px;background:#846419;color:#f5eec9;border:1px solid #846419;border-radius:8px;padding:10px 16px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;')}>
          <IconPlus />
          Adicionar Usuário
        </button>
      </div>

      <div style={s('background:rgba(245,221,144,0.06);border:1px solid rgba(245,221,144,0.25);border-radius:10px;padding:12px 16px;margin-bottom:18px;font-size:12px;color:rgba(236,230,216,0.7);line-height:1.5;')}>
        Nota de implementação: quando integrado ao Bitrix24, o Painel Geral e as tabelas de tarefas serão segmentados por sessão — cada Cobrador ou Advogado verá apenas as métricas da própria equipe/polo. Visibilidade total de todas as equipes ficará restrita a Caio Marques e Handerson Salles.
      </div>

      <div style={s('background:#111111;border:1px solid rgba(199,199,199,0.16);border-radius:12px;overflow:hidden;')}>
        <table style={s('width:100%;border-collapse:collapse;font-size:13px;')}>
          <thead>
            <tr style={s('background:rgba(255,255,255,0.03);')}>
              <th style={s('text-align:left;padding:12px 16px;font-weight:700;font-size:11.5px;color:rgba(236,230,216,0.6);border-bottom:1px solid rgba(199,199,199,0.16);')}>Usuário</th>
              {PERM_COLS.map((c) => (
                <th key={c.key} style={s('text-align:center;padding:12px 16px;font-weight:700;font-size:11px;color:rgba(236,230,216,0.6);border-bottom:1px solid rgba(199,199,199,0.16);')}>{c.label}</th>
              ))}
              <th style={s('width:40px;border-bottom:1px solid rgba(199,199,199,0.16);')}></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.nome} style={s('border-bottom:1px solid rgba(199,199,199,0.08);')}>
                <td style={s('padding:12px 16px;')}>
                  <div style={s('display:flex;align-items:center;gap:10px;')}>
                    <div style={s('width:30px;height:30px;border-radius:50%;background:rgba(245,221,144,0.14);color:#f5dd90;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;')}>{iniciais(u.nome)}</div>
                    <span style={s('font-weight:600;')}>{u.nome}</span>
                  </div>
                </td>
                {PERM_COLS.map((c) => {
                  const ativo = !!u.permissoes[c.key];
                  return (
                    <td key={c.key} style={s('padding:12px 16px;text-align:center;')}>
                      <button onClick={() => onToggle(u.nome, c.key)} style={{ width: '38px', height: '22px', borderRadius: '999px', position: 'relative', border: 'none', cursor: 'pointer', padding: 0, background: ativo ? '#846419' : 'rgba(199,199,199,0.25)' }}>
                        <span style={{ position: 'absolute', top: '2px', left: '2px', width: '18px', height: '18px', borderRadius: '50%', background: '#ECE6D8', transition: 'transform 0.15s', transform: ativo ? 'translateX(16px)' : 'translateX(0)' }} />
                      </button>
                    </td>
                  );
                })}
                <td style={s('padding:12px 16px;text-align:center;')}>
                  <button className="rm-btn" onClick={() => onRemover(u.nome)} title="Remover" style={s('background:transparent;border:none;color:rgba(236,230,216,0.4);cursor:pointer;padding:4px;')}>
                    <IconX size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
