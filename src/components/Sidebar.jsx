import { IconDash, IconUsers, IconClipboard, IconShield } from './Icons.jsx';
import { s } from '../style.js';

const BASE_NAV = { display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: '9px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: 'rgba(236,230,216,0.6)' };
const ACTIVE_NAV = { ...BASE_NAV, background: 'rgba(245,221,144,0.1)', color: '#f5dd90' };

const ITENS = [
  { key: 'dashboard', label: 'Painel Geral', Icon: IconDash },
  { key: 'colaboradores', label: 'Colaboradores & Advogados', Icon: IconUsers },
  { key: 'tarefas', label: 'Andamento Processual', Icon: IconClipboard },
  { key: 'permissoes', label: 'Permissões', Icon: IconShield },
];

export default function Sidebar({ screen, setScreen }) {
  return (
    <aside style={s('width:264px;flex-shrink:0;background:#0a0a0a;border-right:1px solid rgba(199,199,199,0.14);display:flex;flex-direction:column;justify-content:space-between;padding:20px 14px;position:sticky;top:0;height:100vh;animation:sidebarSlide 0.5s cubic-bezier(0.16,1,0.3,1) both;')}>
      <div>
        <div style={s('padding:6px 10px 20px;')}>
          <div style={s('font-size:15px;font-weight:700;letter-spacing:0.01em;')}>Andamento Processual</div>
          <div style={s('font-size:9.5px;color:rgba(236,230,216,0.5);font-weight:600;letter-spacing:0.05em;margin-top:3px;')}>SISTEMA DE ACOMPANHAMENTO</div>
        </div>
        <div style={s('font-size:10.5px;font-weight:700;color:rgba(236,230,216,0.4);text-transform:uppercase;letter-spacing:0.06em;padding:0 10px;margin-bottom:8px;')}>Navegação</div>
        <div style={s('display:flex;flex-direction:column;gap:4px;')}>
          {ITENS.map(({ key, label, Icon }) => (
            <div key={key} className="nav-item" style={screen === key ? ACTIVE_NAV : BASE_NAV} onClick={() => setScreen(key)}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={s('border-top:1px solid rgba(199,199,199,0.14);padding-top:14px;display:flex;flex-direction:column;gap:8px;')}>
        <div style={s('background:rgba(245,221,144,0.1);border:1px solid rgba(245,221,144,0.3);color:#f5dd90;font-size:10.5px;font-weight:700;text-align:center;padding:6px 10px;border-radius:999px;')}>5 Polos Regionais Ativos</div>
        <div style={s('font-size:9.5px;color:rgba(236,230,216,0.35);text-align:center;')}>Cobrador &amp; Advogado dinâmicos</div>
      </div>
    </aside>
  );
}
