# Andamento Processual — React 19

Protótipo funcional exportado do design, pronto para rodar.

## Rodar

\`\`\`bash
npm i
npm run dev
\`\`\`

Abre em http://localhost:5173

## Build

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Stack

- React 19.1
- Vite 6 (\`@vitejs/plugin-react\`)
- Zero dependências de UI — estilos inline + \`src/index.css\`
- Fonte Fira Code via Google Fonts (\`index.html\`)

## Estrutura

\`\`\`
src/
  main.jsx                  bootstrap React
  App.jsx                   estado global, roteamento de telas, modais
  data.js                   dados mock, constantes de cor/polo, helpers
  style.js                  helper s() — converte string CSS em objeto de estilo
  index.css                 reset, keyframes, estados :hover
  components/
    Sidebar.jsx
    Dashboard.jsx           painel geral + cards por polo
    Colaboradores.jsx       tabela cobrador ↔ advogado ↔ dígito CPF
    Tarefas.jsx             lista de tarefas com filtros e paginação
    Permissoes.jsx          matriz de permissões por usuário
    ModalColaborador.jsx    criar/editar cobrador
    ModalPolo.jsx           tarefas de um polo
    PickerUsuarios.jsx      busca de usuários Bitrix24
    Icons.jsx               ícones SVG inline
\`\`\`

## Pontos de integração com o Bitrix24

Tudo abaixo está mockado em \`src/data.js\` e é o que precisa virar chamada real:

| Mock | Substituir por |
| --- | --- |
| \`BITRIX_USERS_MOCK\` | \`user.get\` / \`user.search\` |
| \`TAREFAS_FICTICIAS\` | \`tasks.task.list\` |
| \`POLO_CARDS_BASE\`, \`RESUMO_TAREFAS_BASE\` | agregações no backend |
| \`localStorage\` (\`STORAGE_KEY\`) | persistência das regras de roteamento no backend |

**Segmentação por sessão (não implementada):** o Painel Geral e as tabelas de tarefas devem ser filtrados pelo usuário logado — cada Cobrador/Advogado vê apenas o próprio polo. Visibilidade total restrita a Caio Marques e Handerson Salles.

## Nota sobre o design

Este projeto reproduz o protótipo (preto/dourado, Fira Code, estilos inline). Se o destino for o repositório \`andamento-processual-acompanhamento\`, que usa Mantine 9 + Tailwind 4 + Roboto, a lógica e a estrutura de componentes daqui são aproveitáveis diretamente, mas os valores visuais devem ser trocados pelos tokens do tema Mantine em vez de copiados como hex.
