# TODO - Correção para rodar o servidor (Back-End)

## Informações coletadas

- `Back-End/server.js` usa `import express` (ESM) e ao mesmo tempo `require('pg')` (CommonJS). Isso conflita com o `Back-End/package.json`, que está em modo ESM (`"type": "module"`).
- O `server.js` **não inicia** um servidor com `app.listen(...)`.
- O `server.js` tem uma linha final inválida: `module.exports - pool;` (deveria ser `export`/`module.exports = ...` conforme o módulo).

## Plano (passo a passo)

1. Atualizar `Back-End/server.js` para ESM puro (usar `import { Pool } from 'pg'`).
2. Adicionar `app.use(express.json())` e um endpoint `GET /health`.
3. Adicionar `app.listen(PORT, ...)`.
4. Exportar `pool` corretamente (ex: `export { pool }`).
5. Rodar novamente `node server.js` no diretório `Back-End` para validar.
