# Portfólio escolar de Cleyton

Site estático em HTML, CSS e JavaScript puro. Não exige instalação de dependências nem compilação. O Netlify publica a pasta `portfolio-cleyton.netlify.app`, conforme `netlify.toml`. O `index.html` da raiz redireciona para ela.

## Abrir localmente

Abra o `index.html` da raiz no navegador. Pelo PowerShell, na pasta do projeto:

```powershell
Start-Process .\index.html
```

Entre em **Matérias**, escolha Natureza, Matemática, Linguagens ou Humanas e selecione **3º Trimestre**. Também é possível servir a pasta com qualquer servidor HTTP estático. Nos links de cada matéria, `?trimestre=3` abre diretamente o novo trimestre; o padrão de abertura continua sendo o 2º trimestre.

## Estrutura das atividades

- `Atividades.js`: dados e cartões originais do 1º trimestre, preservados.
- `Atividades2T.js`: dados do 2º trimestre e componentes compartilhados de cartões, abas, evidências e ampliação de imagens.
- `Atividades3T.js`: nove atividades do 3º trimestre e seu painel, usando os mesmos componentes.
- `Atividades.CSS`: identidade visual das atividades, abas e responsividade.
- `Natureza.HTML`, `Matematica.HTML`, `Portugues.HTML`, `Humanas.HTML`: carregam os três scripts. Técnico continua com os dois trimestres anteriores.
- `Assets_2T/` e `Foto_atividades/`: recursos anteriores. `Assets_3T/`: recursos locais do novo trimestre.

Os dados dos dois primeiros trimestres não foram alterados. Os links externos abrem em nova guia com `noopener noreferrer`. O vídeo da extração permanece somente como link do Drive; não é baixado nem incorporado. As orientações do Classroom podem exigir login e acesso à turma. Nenhuma permissão de arquivo foi modificada.

## Materiais ainda necessários

- **Biologia — Ciclos biogeoquímicos:** painel ou apresentação final. A orientação e a referência do professor estão identificadas separadamente.
- **Matemática — Ciclo trigonométrico:** apresentação final. O cartão mantém apenas o link da orientação.
- **Redação — Imagine / ENEM:** captura da redação sobre leitura crítica, descrita no pedido como tendo nota 720. Ela não está no projeto nem nos anexos recebidos. O cartão reserva o espaço e não reproduz o texto da redação nem usa a nota como substituição.
- **Brasil dos anos de 1950 e Guerra Fria — 1960 a 1980:** capas ou imagens das respectivas apresentações. Os links fornecidos foram mantidos; a consulta automática não disponibilizou imagens verificáveis desses trabalhos.

Para adicionar a captura da redação, copie o arquivo para `portfolio-cleyton.netlify.app/Assets_3T/linguagens/` e informe seu caminho no campo `imagem` do cartão em `Atividades3T.js`, com `imagemAlt`, `legenda` e, se houver miniatura separada, `imagemOriginal`. Remova `imagemPendente`, atualize `status` e `aviso`, e retire `pendente` quando o registro estiver disponível. A ampliação usa a mesma caixa de diálogo das demais evidências. Nunca aponte para um arquivo que ainda não existe.

## Imagem disponível e verificação de links

A imagem de Aurora do Brasil foi recuperada da prévia pública do documento fornecido pelo estudante. `Assets_3T/humanas/aurora-capa.jpg` é uma miniatura de 800 × 420; `aurora-original.png` preserva a prévia de 1200 × 630 para ampliação. Não foram usadas imagens de atividades anteriores como se fossem produções do 3º trimestre.

Os documentos e a apresentação de referência do Google usam `/preview` no mesmo ID fornecido, para abrir a visualização. Os links do Canva, Drive, Classroom, Netlify e GitHub preservam os destinos fornecidos. Uma resposta HTTP bem-sucedida de um serviço não garante que todo visitante tenha acesso ao trabalho: páginas de login e proteções contra consultas automáticas podem limitar a verificação.

Na verificação de 14/11/2026, o site da narrativa Secos e Molhados retornou HTTP 401 e uma página de login; essa restrição está indicada no cartão, que também oferece o repositório acessível no GitHub. As orientações do Classroom, a apresentação do professor de Biologia e a imagem molecular do Drive redirecionaram para login. Os documentos de Química e Aurora do Brasil, o link do vídeo e os três links do Canva responderam HTTP 200; o Canva não expôs capas dos trabalhos na consulta. Nenhum acesso ou permissão foi alterado.

## Verificações realizadas

- Sintaxe dos scripts com `node --check` e revisão de whitespace com `git diff --check`.
- Comparação dos dados e do HTML renderizado dos trimestres anteriores com a versão original, incluindo Técnico.
- Testes em Chrome das quatro áreas: seleção de abas por teclado, setas, Home/End, links diretos e parâmetro inválido.
- Layout em larguras de 320, 375, 760 e 1440 px, sem transbordamento horizontal ou texto das abas cortado.
- Carregamento da miniatura, abertura da imagem original, fechamento por botão/Escape e retorno do foco.
- Links externos com abertura segura em nova guia, ausência de vídeo incorporado no novo trimestre e animações sem erros de JavaScript.

As verificações passaram. Node foi usado apenas para a validação; o site continua sem dependências e pode ser aberto diretamente no navegador.
