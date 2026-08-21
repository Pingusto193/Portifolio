# Flinx — BP Promotora de Crédito / Rinha SENAI 2026 FullStack

Aplicação web Full Stack criada como projeto educacional para simular uma carteira digital. O sistema reúne gerenciamento de conta, transferências entre usuários, investimentos simulados, extrato, análise de gastos e uma sequência de constância em uma única interface.

> **Aviso importante:** este projeto é uma demonstração escolar. Saldos, rendimentos e transferências são apenas simulações armazenadas localmente; a aplicação não oferece serviços financeiros reais, não movimenta dinheiro e não se conecta a bancos ou meios de pagamento.

## 1. Nome do projeto

O produto apresentado pela interface se chama **Flinx — Carteira e Investimentos**. Ele foi desenvolvido para a atividade **BP — Promotora de Crédito / Rinha SENAI 2026 FullStack**.

## 2. Descrição e objetivo

O objetivo é demonstrar a integração entre uma SPA em React, uma API HTTP em Node.js/Express e um banco SQLite acessado pelo Prisma. A aplicação permite praticar autenticação, persistência e modelagem de dados, rotas protegidas, operações transacionais, upload de arquivos, visualização de informações e organização de frontend e backend.

## 3. Funcionalidades principais

- Cadastro, login, consulta da sessão e logout;
- saldo inicial fictício de boas-vindas para novas contas;
- painel com saldo, extrato recente, sequência do usuário e ranking de amigos;
- extrato paginado de transferências e movimentações de investimento;
- transferências simuladas entre usuários por código pessoal;
- cadastro e listagem de amigos por código pessoal;
- investimentos simulados de renda fixa ou variável;
- depósitos, retiradas e histórico de evolução do investimento;
- consulta de gastos recentes e agregação por dia, semana, mês ou ano;
- edição de nome, biografia, telefone, e-mail e senha;
- upload de avatar e regeneração do código pessoal;
- páginas protegidas no frontend para os recursos que exigem autenticação.

## 4. Tecnologias utilizadas

### Backend e dados

- Node.js com módulos ES;
- Express 5;
- Prisma 7 e Prisma Client;
- SQLite por meio de `@prisma/adapter-libsql` e `@libsql/client`;
- JSON Web Token (`jsonwebtoken`) para a sessão;
- `bcryptjs` para hash e comparação de senhas;
- `cookie-parser` para leitura do cookie de autenticação;
- Multer para upload de avatar;
- `dotenv` para carregar as variáveis do arquivo `.env`;
- Nodemon durante o desenvolvimento.

### Frontend

- React 19 e React DOM;
- React Router 7;
- Recharts para os gráficos;
- Vite 8 para desenvolvimento e build.

## 5. Pré-requisitos

- Node.js 24 ou superior (recomendado, pois o backend importa diretamente o Prisma Client gerado em TypeScript);
- npm;
- terminal com acesso de escrita à pasta do projeto.

O SQLite é local e não exige a instalação de um servidor de banco de dados separado.

## 6. Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/Pingusto193/RinhaSenai2026FullStack.git
cd RinhaSenai2026FullStack
```

Instale as dependências do backend e do frontend usando os arquivos de lock:

```bash
npm ci
cd frontend
npm ci
cd ..
```

Depois, configure o ambiente e prepare o banco conforme as próximas seções.

## 7. Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto. Os nomes realmente lidos pelo backend são:

```dotenv
# Obrigatória. Substitua por uma chave longa, aleatória e exclusiva do ambiente.
JWT_SECRET=substitua-por-uma-chave-segura

# Opcional. Quando ausente, o servidor usa a porta 3000.
PORT=3000
```

Não publique o valor de `JWT_SECRET`. O arquivo `.env` já está listado no `.gitignore`. Para gerar uma chave local aleatória, uma opção é:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Não há variável `DATABASE_URL` na implementação atual. Tanto `prisma.config.ts` quanto `src/db.js` apontam diretamente para o arquivo local `file:./data.db`.

## 8. Configuração do Prisma

Na raiz do projeto, execute o atalho que gera o Prisma Client e aplica o schema ao SQLite:

```bash
npm run db:setup
```

Se, em uma instalação totalmente nova, o schema engine informar que `data.db` ainda não existe, crie apenas o arquivo SQLite vazio e repita o comando:

```bash
node -e "const fs=require('node:fs'); fs.closeSync(fs.openSync('data.db','a'))"
npm run db:setup
```

Os passos também podem ser executados separadamente:

```bash
npm run db:generate
npm run db:push
```

- `db:generate` executa `prisma generate` e cria o client em `generated/prisma/`;
- `db:push` executa `prisma db push` e sincroniza `prisma/schema.prisma` com `data.db`;
- `generated/prisma/` e `data.db` são artefatos locais ignorados pelo Git.

O projeto não contém uma pasta de migrations; a configuração atual usa `prisma db push`.

## 9. Como executar

### Desenvolvimento

Depois de instalar as dependências, configurar o `.env` e preparar o Prisma, abra dois terminais.

No primeiro, inicie a API com recarregamento automático:

```bash
npm run dev
```

No segundo, inicie o frontend:

```bash
cd frontend
npm run dev
```

O Vite informa a URL local no terminal, normalmente `http://localhost:5173`. Durante o desenvolvimento, ele encaminha `/api` e `/uploads` para o backend em `http://localhost:3000`.

### Produção local

Gere os arquivos estáticos do frontend:

```bash
cd frontend
npm run build
cd ..
```

Em seguida, inicie o backend:

```bash
npm start
```

O comando executa `node server.js`. Nesse modo, o Express serve `frontend/dist`, os avatares em `/uploads` e a API em `/api`. Com a configuração padrão, a aplicação fica disponível em `http://localhost:3000`.

## 10. Estrutura e arquitetura

```text
.
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── api/
│   │   │   ├── account.js
│   │   │   ├── auth.js
│   │   │   ├── client.js
│   │   │   ├── dashboard.js
│   │   │   ├── expenses.js
│   │   │   ├── friends.js
│   │   │   ├── investments.js
│   │   │   └── transfers.js
│   │   ├── components/
│   │   │   ├── BalanceHeader.jsx
│   │   │   ├── BrandMark.jsx
│   │   │   ├── DirectionIcon.jsx
│   │   │   ├── EyeIcon.jsx
│   │   │   ├── HideableBalance.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PeriodFilter.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Account.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Expenses.jsx
│   │   │   ├── Friends.jsx
│   │   │   ├── Invest.jsx
│   │   │   ├── InvestChart.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Ledger.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Transfer.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── prisma/
│   └── schema.prisma
├── src/
│   ├── lib/
│   │   ├── accrual.js
│   │   ├── dateKey.js
│   │   ├── jwt.js
│   │   ├── password.js
│   │   ├── personalCode.js
│   │   └── streak.js
│   ├── middleware/
│   │   └── requireAuth.js
│   ├── routes/
│   │   ├── account.js
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   ├── expenses.js
│   │   ├── friends.js
│   │   ├── investments.js
│   │   └── transfers.js
│   └── db.js
├── uploads/
│   └── avatars/
│       └── .gitkeep
├── .gitignore
├── package.json
├── package-lock.json
├── prisma.config.ts
├── server.js
└── README.md
```

### Responsabilidade das camadas

- `server.js` configura o Express, os middlewares, os arquivos estáticos e os prefixos das rotas;
- `src/routes/` implementa os endpoints por domínio;
- `src/middleware/requireAuth.js` valida o JWT recebido no cookie `token`;
- `src/lib/` contém autenticação, senhas, códigos pessoais, datas, rendimentos simulados e sequência;
- `src/db.js` instancia o Prisma Client com o adaptador SQLite/libSQL;
- `prisma/schema.prisma` define `User`, `Transfer`, `Investment`, `InvestmentMovement`, `InvestmentSnapshot`, `Streak` e `Friendship`;
- `frontend/src/api/` centraliza as chamadas HTTP feitas pela interface;
- `frontend/src/context/` mantém o estado de autenticação;
- `frontend/src/components/` reúne elementos reutilizáveis;
- `frontend/src/pages/` contém as telas associadas às rotas da SPA.

## 11. Resumo das rotas da API

Todas as rotas abaixo usam o prefixo `/api`. Exceto cadastro, login e logout, elas exigem o cookie de autenticação; `/auth/me` aplica essa proteção diretamente e os demais grupos usam o middleware em todo o roteador.

| Método e rota | Finalidade |
| --- | --- |
| `POST /auth/register` | Cadastra uma conta e inicia a sessão. |
| `POST /auth/login` | Autentica por e-mail e senha. |
| `POST /auth/logout` | Limpa o cookie da sessão. |
| `GET /auth/me` | Retorna os dados públicos do usuário autenticado. |
| `GET /account` | Retorna perfil, código pessoal e sequência. |
| `PATCH /account` | Atualiza nome e/ou biografia. |
| `POST /account/avatar` | Envia o campo multipart `avatar`. |
| `POST /account/password` | Altera a senha após validar a senha atual. |
| `POST /account/email` | Altera o e-mail após validar a senha atual. |
| `POST /account/phone` | Atualiza o telefone. |
| `POST /account/personal-code/regenerate` | Gera um novo código pessoal único. |
| `GET /friends` | Lista os amigos do usuário. |
| `POST /friends` | Adiciona um usuário pelo `personalCode`. |
| `GET /dashboard` | Retorna saldo, sequência, extrato recente e ranking. |
| `GET /dashboard/ledger?page=&limit=` | Retorna o extrato paginado. |
| `GET /transfers/sent?limit=` | Lista transferências enviadas recentemente. |
| `POST /transfers` | Faz uma transferência simulada por código pessoal. |
| `GET /investments` | Consulta o investimento e aplica o rendimento simulado pendente. |
| `POST /investments/type` | Seleciona o tipo `FIXED` ou `VARIABLE`. |
| `POST /investments/deposit` | Move saldo fictício para o investimento. |
| `POST /investments/withdraw` | Retira valor do investimento para o saldo fictício. |
| `GET /investments/history?period=` | Retorna snapshots do período (`day`, `week`, `month` ou `year`). |
| `GET /expenses/recent?limit=` | Lista gastos recentes com transferências enviadas. |
| `GET /expenses/aggregate?period=` | Agrega esses gastos por dia, semana, mês ou ano. |

Os valores monetários trafegam como inteiros em centavos, nos campos terminados em `Cents`.

## 12. Observações de segurança

Controles existentes no código:

- senhas são armazenadas como hash bcrypt, com 10 rodadas de salt;
- o JWT expira em 30 dias e é enviado no cookie `token` com `httpOnly` e `sameSite: 'lax'`;
- as rotas privadas verificam a sessão por meio de `requireAuth`;
- cadastro, perfil e operações financeiras simuladas possuem validações básicas de entrada;
- transferências, depósitos e retiradas atualizam os registros dentro de transações do Prisma;
- avatares são limitados a 3 MiB e aos MIME types PNG, JPEG e WebP;
- `.env`, banco local, client gerado e avatares enviados não são versionados.

Por ser um projeto educacional, ele ainda não deve ser exposto como serviço financeiro ou aplicação pública de produção. Antes de uma implantação real seriam necessários, entre outros pontos, HTTPS, cookie com `secure` em produção, proteção CSRF, limitação de requisições, cabeçalhos de segurança, validação mais rigorosa dos uploads, monitoramento, testes automatizados, gestão externa de segredos e uma revisão de segurança completa. Não use dados pessoais, senhas ou valores reais neste sistema.

## 13. Repositório

Código-fonte informado para a atividade: [github.com/Pingusto193/RinhaSenai2026FullStack](https://github.com/Pingusto193/RinhaSenai2026FullStack)
