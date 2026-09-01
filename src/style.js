// Converte uma string CSS ("padding:10px;color:red") em objeto de estilo React.
// Mantém a fidelidade 1:1 com o protótipo original sem reescrever centenas de objetos.
const cache = new Map();

export function s(css) {
  if (cache.has(css)) return cache.get(css);
  const out = {};
  css.split(';').forEach((part) => {
    const i = part.indexOf(':');
    if (i < 0) return;
    const key = part.slice(0, i).trim();
    const val = part.slice(i + 1).trim();
    if (!key || !val) return;
    out[key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  });
  cache.set(css, out);
  return out;
}
