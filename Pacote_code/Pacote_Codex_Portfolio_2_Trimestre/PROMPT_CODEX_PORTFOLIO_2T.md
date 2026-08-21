# PROMPT MESTRE PARA O CODEX — PORTFÓLIO SESI, 2º TRIMESTRE DE 2026

## 0. CONTEXTO E MISSÃO

Você está trabalhando no portfólio escolar de Cleyton, estudante da **3ª série do Ensino Médio do SESI**. Já existe um portfólio do **1º trimestre**. Sua missão é **acrescentar o 2º trimestre ao mesmo site/projeto**, preservando o conteúdo, a identidade visual, a navegação e o funcionamento do 1º trimestre.

**Não crie um site novo do zero se o projeto do 1º trimestre estiver disponível no workspace.** Primeiro inspecione a estrutura existente e siga o padrão visual já usado. Se os arquivos do 1º trimestre NÃO estiverem no workspace, pare e peça ao usuário esses arquivos. Não tente adivinhar o design anterior.

Este pacote contém os materiais enviados pelo estudante para o 2º trimestre, organizados por área. Use os arquivos como fonte de verdade. Não invente trabalhos, notas, habilidades, links, vídeos ou resultados que não estejam presentes.

O estudante informou que **os vídeos serão inseridos depois**. Portanto, quando uma atividade exigir vídeo, crie um espaço bem apresentado e facilmente substituível, com texto discreto como “Vídeo será inserido posteriormente”, sem quebrar a página. O arquivo do videomanifesto está no pacote, mas ainda assim não faça upload externo automaticamente nem dependa dele para o site funcionar.

---

## 1. REGRAS GERAIS DA ESCOLA

O portfólio é um documento oficial e deve representar a trajetória de aprendizagem, com organização, clareza e reflexão. O site precisa manter todos os trimestres no mesmo lugar. O 2º trimestre deve aparecer como continuação do 1º, não como substituição.

A estrutura geral exigida pela escola inclui:

- Apresentação pessoal — “Quem sou eu?” (já existente, preservar se houver);
- Currículo (já existente, preservar se houver);
- Subpáginas/áreas do conhecimento;
- Atividades organizadas por trimestre;
- Fotos, registros e evidências de aprendizagem;
- Atividades extras e certificados;
- Atividades indicadas pelos professores e atividades escolhidas pelo estudante.

Para cada atividade, sempre que aplicável, apresentar:

1. **Título da atividade**;
2. **Descrição** — o que foi feito, tema e objetivo;
3. **Justificativa** — por que a atividade é relevante para o portfólio e que aprendizagem evidencia;
4. **Habilidades/competências desenvolvidas**;
5. **Evidências** — imagens, PDF, link, repositório, código, cartilha, apresentação etc.

### Padrão de escrita

- Português formal e correto;
- Sem abreviações informais;
- Frases iniciadas com letra maiúscula;
- Boa divisão em parágrafos;
- Títulos consistentes;
- Textos objetivos, porém completos;
- Não usar linguagem ofensiva ou depreciativa;
- Não inventar uma reflexão pessoal específica que o estudante não tenha informado. Quando for necessário escrever uma crítica/reflexão, use formulações educacionais neutras e plausíveis, baseadas na própria tarefa, sem criar acontecimentos pessoais.

### Padrão visual

- Reaproveitar o estilo do 1º trimestre;
- Criar uma subseção clara “2º Trimestre” dentro de cada área;
- Não remover nada do 1º trimestre;
- Manter responsividade;
- Imagens com boa proporção, sem distorção;
- PDFs/apresentações podem ser mostrados por cards com botão de abrir/baixar ou galeria de imagens, conforme a arquitetura existente;
- Links externos devem abrir em nova aba e ter `rel="noopener noreferrer"` quando for HTML/React;
- Criar textos alternativos (`alt`) descritivos para imagens;
- Não depender de URLs temporárias;
- Usar caminhos relativos para os arquivos do pacote quando os assets forem incorporados ao projeto.

---

## 2. ESTRUTURA DE PASTAS DESTE PACOTE

Use os caminhos relativos abaixo para localizar as evidências:

- `02_PROGRAMACAO/BP_Promotora_de_Credito/`
- `03_IOT/01_Acender_LED/`
- `03_IOT/02_Semaforo/`
- `03_IOT/03_LED_com_Botao_Toggle/`
- `03_IOT/04_EXTRA_SmartClass_IoT/`
- `04_LINGUAGENS/01_Videomanifesto/`
- `04_LINGUAGENS/02_Ingles_What_kind_of_art/`
- `04_LINGUAGENS/03_Red1000/`
- `05_MATEMATICA/AV1_Estatistica/`
- `06_CIENCIAS_DA_NATUREZA/01_Mural_Interativo_Poluicao_do_Solo/`
- `06_CIENCIAS_DA_NATUREZA/02_Estequiometria_Industria_Acido_Sulfurico/`
- `06_CIENCIAS_DA_NATUREZA/03_Cartilha_Eletricidade_e_Corpo_Humano/`
- `06_CIENCIAS_DA_NATUREZA/04_OPCIONAL_Eletroquimica/`
- `07_CIENCIAS_HUMANAS/01_Temas_Contemporaneos_Call_of_Duty_Cold_War/`
- `07_CIENCIAS_HUMANAS/02_Cinema_e_Totalitarismo_Homem_de_Ferro/`
- `07_CIENCIAS_HUMANAS/03_Reorganizacao_do_Mundo_apos_1945/`
- `07_CIENCIAS_HUMANAS/04_MATERIAL_EXTRA_Dossie_Historico_Queda_da_Franca/`

---

# 3. PROGRAMAÇÃO DE APLICATIVOS E DESENVOLVIMENTO DE SISTEMAS

## Atividade — BP: Promotora de Crédito / Projeto Rinha SENAI 2026 FullStack

### Arquivos

Use:

- `02_PROGRAMACAO/BP_Promotora_de_Credito/Projeto_RinhaSenai2026FullStack_original.zip`
- `02_PROGRAMACAO/BP_Promotora_de_Credito/projeto_extraido/`

Link do repositório informado:

`https://github.com/Pingusto193/RinhaSenai2026FullStack`

### Exigência do professor

A atividade deve conter:

- Título;
- Breve descrição da proposta;
- Habilidades trabalhadas;
- Explicação do projeto desenvolvido como solução;
- Link do GitHub;
- README.md no GitHub com explicação e arquitetura dos arquivos.

### Habilidades oficiais

**H1 — Reconhecer requisitos de qualidade, integridade, usabilidade e segurança da informação.**

**H4 — Selecionar linguagem de programação de acordo com os requisitos.**

**H6 — Aplicar linguagem de programação por meio de APIs, bibliotecas e frameworks na construção de rotinas de software.**

### Texto sugerido para o portfólio

**Título:** BP — Promotora de Crédito: desenvolvimento de uma aplicação financeira Full Stack

**Descrição:**
O projeto foi desenvolvido como uma aplicação web Full Stack voltada a operações financeiras e gerenciamento de conta. O sistema possui uma interface construída em React e uma API em Node.js com Express, utilizando Prisma para acesso e modelagem dos dados. A solução reúne recursos de cadastro e autenticação, gerenciamento de conta, transferências, investimentos, consulta de movimentações e outras funcionalidades ligadas à organização financeira.

**Explicação da solução:**
A aplicação foi separada em frontend e backend. No frontend, React, React Router e Vite estruturam as páginas e a navegação. No backend, Express organiza as rotas da API e Prisma gerencia a comunicação com o banco de dados SQLite. O código do projeto também utiliza autenticação com JSON Web Token, hash de senha com bcryptjs, cookies e upload de avatar com Multer. O schema de dados contém entidades para usuários, transferências, investimentos, movimentações de investimento, snapshots, sequência de uso e amizades. As rotas do backend incluem autenticação, conta, amigos, painel, transferências, investimentos e despesas.

**Justificativa:**
Esta atividade evidencia a integração de diferentes conhecimentos de desenvolvimento de sistemas em um projeto funcional. Ela mostra a aplicação de requisitos de usabilidade e segurança, a escolha de tecnologias adequadas e o uso conjunto de bibliotecas, frameworks, API, banco de dados e interface web.

### README.md — tarefa obrigatória para o Codex

No projeto da Programação, criar ou melhorar um `README.md` na raiz. O README deve conter, no mínimo:

1. Nome do projeto;
2. Descrição/objetivo;
3. Funcionalidades principais;
4. Tecnologias utilizadas;
5. Pré-requisitos;
6. Instalação;
7. Configuração de variáveis de ambiente, sem expor segredos;
8. Comandos para gerar/configurar o Prisma;
9. Como executar backend e frontend;
10. Estrutura de pastas/arquitetura;
11. Resumo das principais rotas da API;
12. Observações de segurança;
13. Link do repositório.

A arquitetura deve refletir os arquivos reais do projeto. Não inventar pastas inexistentes.

---

# 4. INTERNET DAS COISAS

O professor exige, dentro de CADA atividade de IoT:

- Título;
- Descrição;
- Protótipo da montagem física;
- Código;
- Fotos da montagem física;
- Justificativa;
- Habilidades desenvolvidas.

Nenhum código oficial de habilidade foi fornecido para IoT. Portanto, usar uma seção textual chamada **“Habilidades desenvolvidas”**, sem inventar códigos Hxx.

## 4.1 Acender LED

### Arquivos

- `03_IOT/01_Acender_LED/prototipo_acender_led.png`
- `03_IOT/01_Acender_LED/acender_led.ino`

### Conteúdo para o site

**Descrição:**
Atividade introdutória de Arduino voltada ao controle de uma saída digital. O código configura o LED integrado da placa como saída e alterna seu estado entre ligado e desligado a cada um segundo, utilizando `digitalWrite()` e `delay()`.

**Justificativa:**
A atividade é importante por apresentar a base do controle digital em microcontroladores. Ela permite compreender como configurar pinos, alterar estados lógicos e controlar o tempo de execução de uma rotina.

**Habilidades desenvolvidas (sem código oficial informado):**
- Configuração de saídas digitais em Arduino;
- Uso de `pinMode`, `digitalWrite` e `delay`;
- Compreensão de estados HIGH e LOW;
- Interpretação e teste de uma montagem eletrônica simples;
- Relação entre código e comportamento físico do circuito.

Exibir o código integral em bloco de código, sem reescrever a lógica.

## 4.2 Semáforo

### Arquivos

- `03_IOT/02_Semaforo/prototipo_semaforo.png`
- `03_IOT/02_Semaforo/semaforo.ino`

### Conteúdo para o site

**Descrição:**
Foi desenvolvido um semáforo utilizando três LEDs ligados ao Arduino. O LED verde permanece ativo por um período, o amarelo realiza uma sequência oscilante e o vermelho é acionado em seguida, simulando a lógica de funcionamento de um semáforo.

**Justificativa:**
A atividade amplia o uso de saídas digitais ao trabalhar com múltiplos componentes, ordem de execução, temporização e repetição. O laço `for` utilizado no LED amarelo também introduz uma forma simples de automatizar repetições no código.

**Habilidades desenvolvidas:**
- Controle de múltiplas saídas digitais;
- Sequenciamento lógico de ações;
- Uso de temporização;
- Uso de estruturas de repetição;
- Montagem e interpretação de circuitos com LEDs e resistores.

**Importante:** preservar no código o comentário de crédito já existente: `//projeto por André Morais, obrigado pelo suporte.` Não remover o crédito.

## 4.3 Controle de LED com botão — Desafio Lógica Toggle

### Arquivos

- `03_IOT/03_LED_com_Botao_Toggle/prototipo_reutilizado_led_com_botao.png`
- `03_IOT/03_LED_com_Botao_Toggle/led_com_botao.ino`
- `03_IOT/03_LED_com_Botao_Toggle/NOTA_TECNICA.txt`

### Conteúdo para o site

**Título oficial:** Controle de LED com botão — Desafio Lógica Toggle

**Descrição fiel ao material entregue:**
A atividade trabalha a leitura de um botão conectado ao pino digital 4 do Arduino. O código utiliza o resistor interno da placa por meio de `INPUT_PULLUP`, lê continuamente o estado do botão e informa no Monitor Serial se ele está pressionado ou não.

**Justificativa:**
A atividade introduz o uso de entradas digitais e mostra como o Arduino pode receber informações de um componente físico para tomar decisões no código. O uso de `INPUT_PULLUP` também demonstra uma forma prática de estabilizar a leitura do botão utilizando o resistor interno da placa.

**Habilidades desenvolvidas:**
- Leitura de entradas digitais;
- Uso de `INPUT_PULLUP`;
- Estruturas condicionais `if/else`;
- Monitoramento de estados pelo Serial;
- Integração entre entrada física e lógica de programação.

**REGRA DE VERACIDADE:** o código enviado NÃO implementa, no estado atual, uma alternância persistente de LED do tipo toggle. Não escrever que o LED muda de estado a cada clique. O título oficial deve ser preservado porque foi solicitado pelo professor, mas a descrição deve refletir o código realmente entregue.

A imagem desta atividade foi indicada pelo estudante como sendo a mesma utilizada na atividade “Acender LED”.

## 4.4 Atividade extra — SmartClass IoT

### Arquivos

- `03_IOT/04_EXTRA_SmartClass_IoT/SmartClass_IoT_original.zip`
- `03_IOT/04_EXTRA_SmartClass_IoT/projeto_extraido/`

Link do site presente no projeto:

`https://charming-chimera-e3c8f8.netlify.app/`

### Conteúdo sugerido

**Título:** SmartClass IoT — Monitoramento do ambiente da sala de aula

**Descrição:**
O SmartClass IoT foi desenvolvido para monitorar temperatura e umidade em uma sala de aula. O problema identificado foi a dificuldade de avaliar de forma automática condições de calor, ambiente abafado e variações de temperatura. A proposta do projeto é medir as condições do ambiente, exibir os dados e emitir um alerta quando a situação estiver desconfortável.

**Evidência dos testes:**
Durante a simulação no Tinkercad, o sensor realizou as leituras corretamente. Quando a temperatura ficou abaixo de 28 °C, o LED permaneceu apagado. Ao ultrapassar esse limite, o LED acendeu, indicando condição crítica.

**Justificativa:**
O projeto demonstra uma aplicação de IoT ligada a um problema real do ambiente escolar, unindo sensor, lógica de decisão, alerta visual, prototipação e apresentação dos resultados.

Exibir como atividade extra, sem substituir nenhuma das três atividades obrigatórias.

---

# 5. LINGUAGENS

Para cada atividade de Linguagens, a professora exige um comentário contendo:

- habilidades desenvolvidas;
- objetivo da atividade;
- assunto;
- crítica pessoal educacional: dificuldades, pontos mais fáceis ou desafiadores, ferramentas usadas/aprendidas etc.

A escrita deve ser adequada a um documento oficial.

## 5.1 Videomanifesto — Manifesto Antropófago e Manifesto Pau-Brasil

### Arquivos

- `04_LINGUAGENS/01_Videomanifesto/videomanifesto.mov`
- `04_LINGUAGENS/01_Videomanifesto/analise_manifesto_digital.pdf`

### Habilidades oficiais

**H3 — Identificar o tema principal, os subtemas e finalidades dos textos.**

**H24 — Produzir textos escritos de domínio acadêmico e educacional.**

### Texto para o site

**Descrição/objetivo:**
A atividade partiu do estudo do gênero manifesto, com foco no Manifesto Pau-Brasil e no Manifesto Antropófago, de Oswald de Andrade, dentro do contexto do Modernismo brasileiro. A proposta foi observar o uso de linguagem crítica, provocativa e argumentativa e, depois, transformar ideias em uma produção digital em vídeo.

**Assunto:**
O material analisado discute a crítica de Oswald de Andrade à simples reprodução de modelos culturais europeus e a proposta antropofágica de assimilar influências externas e transformá-las em algo próprio. O PDF entregue também identifica recursos como ironia, paródia, frases curtas e mistura de referências cultas e populares.

**Justificativa:**
A atividade relaciona leitura, interpretação, argumentação, produção textual e linguagem audiovisual, além de conectar um movimento literário histórico a uma forma contemporânea de comunicação.

**Crítica/reflexão educacional sugerida:**
A atividade exigiu selecionar as ideias mais importantes dos manifestos e adaptá-las a uma linguagem mais curta e audiovisual. O aspecto mais desafiador foi manter o sentido crítico do gênero manifesto sem transformar o vídeo apenas em um resumo. O trabalho contribuiu para compreender melhor como escolhas de linguagem, frases de impacto e recursos visuais podem fortalecer uma argumentação.

Não inventar detalhes sobre gravação, edição ou problemas técnicos que não estejam documentados.

## 5.2 Inglês — What kind of art do you consume?

### Arquivo

- `04_LINGUAGENS/02_Ingles_What_kind_of_art/what_kind_of_art_do_you_consume.pdf`

### Habilidade oficial

**H25 — Interpretar textos em Língua Estrangeira Moderna (Inglês).**

### Conteúdo fiel ao trabalho

O estudante escreveu em inglês sobre:

- artista favorito: **Chris Pratt**;
- filme favorito: **Guardians of the Galaxy**, lançado em 2014 e dirigido por James Gunn;
- música favorita: **Come and Get Your Love**, da banda Redbone, lançada em 1974.

**Descrição/objetivo:**
A atividade teve como objetivo produzir um texto em inglês sobre preferências artísticas, reunindo informações biográficas, cinematográficas e musicais. O trabalho também incentivou o uso de estruturas no passado, especialmente o Simple Past.

**Justificativa:**
A produção permitiu aplicar o inglês a temas pessoais e culturais, trabalhando interpretação, vocabulário, organização de informações e construção de frases em língua estrangeira.

**Crítica/reflexão educacional sugerida:**
O trabalho exigiu organizar informações de áreas diferentes e apresentá-las em inglês de forma simples e compreensível. A atividade foi útil para praticar vocabulário relacionado a cinema, música e biografia e para revisar formas verbais usadas ao falar de fatos do passado.

Não inserir letras de música. O arquivo original cita apenas a preferência pelo refrão; não reproduzir letra protegida.

## 5.3 Red1000 — 2º trimestre

### Arquivo

- `04_LINGUAGENS/03_Red1000/red1000_nota_600.png`

### Dados visíveis na evidência

- Nota: **600/1000**;
- Gênero: **Dissertação ENEM**;
- Tema: **Os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil**.

### Habilidade oficial

**H22 — Produzir textos técnicos de acordo com uma estrutura estabelecida.**

### Texto para o site

**Descrição/objetivo:**
A atividade consistiu na produção de uma redação no modelo ENEM sobre os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil. O exercício trabalhou a construção de uma dissertação argumentativa seguindo uma estrutura definida.

**Justificativa:**
A atividade registra o desenvolvimento da escrita formal e argumentativa, além da capacidade de organizar uma discussão sobre um tema social contemporâneo dentro das exigências do modelo ENEM.

**Crítica/reflexão educacional sugerida:**
A nota de 600/1000 mostra que a produção atingiu parte dos critérios do modelo, mas também indica espaço para evolução. Como não foram fornecidos os comentários detalhados da correção, não inventar quais competências específicas causaram perda de pontos. A reflexão deve ser geral: aprimorar argumentação, organização das ideias, coesão e revisão do texto em futuras produções.

## 5.4 Olimpíada de Literatura

Não foi enviado certificado. **Não criar esta seção como atividade concluída.** Se o layout possuir uma área de certificados, deixar preparada apenas se o usuário fornecer o arquivo posteriormente.

---

# 6. MATEMÁTICA E SUAS TECNOLOGIAS

## AV1 — Estatística: Hábitos de exercício físico dos estudantes

### Arquivo

- `05_MATEMATICA/AV1_Estatistica/AV1_Estatistica_Habitos_de_exercicio_fisico.pdf`

Integrantes mostrados na apresentação: **Cleyton, Victor, Guilherme Weiss e Gustavo Ramos**.

### Competência oficial

**C4 — Analisar e investigar dados e informações de natureza científica e social, articulando diferentes áreas do conhecimento, compreendendo representações gráficas e uso de modelos matemáticos, realizando inferências, previsões e tendências, para tomadas de decisão.**

### Habilidades oficiais

**H27 — Compreender informações estatísticas provenientes de naturezas distintas (social, econômica, política ou científica) e formular juízos com base nessas informações.**

**H28 — Calcular medidas de tendência central e de dispersão de um conjunto de dados para aplicá-las e analisá-las em situações diversas no contexto das ciências, das tecnologias, das atividades pessoais e profissionais.**

**H29 — Construir tabelas e gráficos com recursos tecnológicos que permitam simplificar cálculos, facilitar a leitura e a compreensão das informações, para análise da realidade.**

### Texto para o site

**Descrição:**
A AV1 de Estatística investigou os hábitos de exercício físico de estudantes a partir de uma pesquisa com 40 respostas. O grupo elaborou perguntas sobre prática de exercícios, modalidades mais praticadas, frequência semanal, duração média das atividades e prática de mais de uma modalidade. Os dados foram transformados em porcentagens e representados em gráficos.

A apresentação registra, entre outros resultados, que 32 dos 40 participantes afirmaram praticar exercício ou esporte, correspondendo a 80%. A academia/musculação apareceu como a modalidade mais frequente, com 25%. Na frequência semanal, a faixa de 3 a 4 dias foi a mais escolhida, com 32,5%.

Também foram trabalhadas medidas estatísticas. Na apresentação final aparecem média de 2,9 dias por semana, mediana de 3 a 4 dias, moda de 3 a 4 dias, variância de 4,43 dias e desvio padrão de 2,10 dias.

**Justificativa:**
A atividade evidencia o uso da Estatística para interpretar uma situação real. A coleta, organização e representação de dados permitiram transformar respostas individuais em informações que podem ser comparadas e analisadas, trabalhando diretamente as habilidades H27, H28 e H29.

Use o PDF como principal evidência visual, podendo exibir uma miniatura da capa e alguns gráficos, sem alterar os números originais.

---

# 7. CIÊNCIAS DA NATUREZA — 3ª SÉRIE

**Atenção:** usar somente as orientações da **3ª série** do PDF de Ciências da Natureza. Não usar as atividades do 1º ou 2º ano.

O professor exige total de 3 atividades obrigatórias e avalia estrutura, navegação, identificação de competências, clareza, completude, padronização/capricho e explicação dos objetivos e conhecimentos trabalhados.

## 7.1 Atividade 1 — Mural Interativo: Poluição do Solo

### Arquivo

- `06_CIENCIAS_DA_NATUREZA/01_Mural_Interativo_Poluicao_do_Solo/mural_interativo_poluicao_do_solo.jpeg`

A parte do estudante foi identificada como **Poluição do Solo**.

### Competências e habilidades oficiais

**C2 — Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.**

**H11 — Empregar procedimentos e práticas de observação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza.**

**C3 — Determinar os impactos das ações humanas nos ambientes, identificando suas causas e propondo soluções para a sua redução.**

**H15 — Comparar propostas de intervenção ambiental aplicando conhecimentos científicos e tecnológicos, observando os riscos e benefícios de sua implementação.**

**H18 — Identificar situações de risco ambiental na cidade onde reside.**

**C4 — Compreender o funcionamento dos organismos vivos em geral e o ser humano em especial, considerando suas relações com o ambiente em que vivem, abordando aspectos físicos e socioculturais.**

**H23 — Formular propostas de alcance individual ou coletivo, utilizando como critérios a preservação e a promoção da saúde individual e coletiva.**

### Texto para o site

**Descrição/objetivo:**
A turma produziu um mural interativo sobre diferentes formas de poluição e seus impactos. A parte desenvolvida pelo estudante foi dedicada à poluição do solo, reunindo informações e recursos visuais para apresentar o problema de forma acessível no ambiente escolar.

**Justificativa:**
A atividade permite relacionar conhecimentos científicos a um problema ambiental presente no cotidiano. Ao organizar informações sobre poluição do solo e apresentar o conteúdo em um mural coletivo, o trabalho desenvolve comunicação científica, percepção de riscos ambientais e reflexão sobre formas de prevenção e intervenção.

**Evidência:**
Usar a fotografia do mural, destacando visualmente a seção “Poluição do Solo” sem recortar de forma que perca o contexto do trabalho coletivo.

## 7.2 Atividade 2 — Seminário sobre Estequiometria na Indústria: Produção de Ácido Sulfúrico

### Arquivo

- `06_CIENCIAS_DA_NATUREZA/02_Estequiometria_Industria_Acido_Sulfurico/Seminario_Estequiometria_Producao_Acido_Sulfurico.pdf`

Integrantes mostrados na apresentação: **Gustavo Ramos, Cleyton, Guilherme Weiss e Victor Morsoletto**.

### Competência e habilidades oficiais

**C2 — Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.**

**H6 — Compreender os conceitos relacionados à Física em seus diferentes ramos: Astronomia, Mecânica, Acústica, Óptica, Termologia, Calorimetria, Ondulatória, Eletricidade, Magnetismo e Física Moderna e Nuclear.**

**H7 — Compreender os conceitos relacionados à Química nos seus diferentes ramos: Físico-química, Química orgânica e Química Geral.**

**H9 — Explicar os conceitos de energia, matéria, vida e transformação para explicar fenômenos naturais e procedimentos tecnológicos.**

### Texto para o site

**Descrição/objetivo:**
O seminário analisou a produção industrial de ácido sulfúrico, relacionando conceitos de Química à estequiometria e à indústria. A apresentação explica o Processo de Contato, a conversão de dióxido de enxofre em trióxido de enxofre com uso do catalisador V₂O₅, os reagentes e produtos, o balanceamento das equações e as relações molares.

O grupo também aplicou cálculos de massa e regra de três em um exemplo de produção em grande escala, além de abordar a importância econômica do ácido sulfúrico, sua relação com fertilizantes, mineração, agronegócio, impactos ambientais e alternativas sustentáveis.

**Justificativa:**
A atividade demonstra como cálculos químicos e conceitos de transformação da matéria são utilizados em processos industriais reais. Ela conecta teoria, aplicação tecnológica, economia e sustentabilidade, evidenciando a utilidade da estequiometria fora do contexto puramente escolar.

## 7.3 Atividade 3 — Cartilha: Eletricidade e o Corpo Humano

### Arquivos

- `06_CIENCIAS_DA_NATUREZA/03_Cartilha_Eletricidade_e_Corpo_Humano/Cartilha_Eletricidade_Corpo_Humano_original.zip`
- `06_CIENCIAS_DA_NATUREZA/03_Cartilha_Eletricidade_e_Corpo_Humano/cartilha_paginas/`

### Competências e habilidades oficiais

**C1 — Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo.**

**H3 — Inferir significado de termos técnico-científicos em textos de instrumentação ou de divulgação científica.**

**H4 — Identificar, em textos, diagramas, gráficos, imagens e tabelas, informações relevantes para compreender um fenômeno ou conceito relacionado às Ciências da Natureza.**

**C2 — Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.**

**H12 — Relacionar informações para construir modelos em ciência e tecnologia.**

**C4 — Compreender o funcionamento dos organismos vivos em geral e o ser humano em especial, considerando suas relações com o ambiente em que vivem, abordando aspectos físicos e socioculturais.**

**H23 — Formular propostas de alcance individual ou coletivo, utilizando como critérios a preservação e a promoção da saúde individual e coletiva.**

### Texto para o site

**Descrição/objetivo:**
Foi produzida uma cartilha educativa sobre a relação entre eletricidade e o corpo humano. O material explica riscos do choque elétrico, possíveis alterações no funcionamento do organismo, relação entre intensidade de corrente e efeitos fisiológicos, cuidados em situações de acidente e medidas de prevenção.

**Justificativa:**
A cartilha transforma conhecimentos científicos em material de orientação e prevenção. A atividade relaciona conceitos de eletricidade à saúde e à segurança, exigindo seleção de informações relevantes, uso de linguagem acessível e organização visual de conteúdo científico.

**Evidência:**
Montar uma galeria com as seis páginas, mantendo legibilidade. Também pode haver botão “Ver cartilha completa”. Não alterar o conteúdo original das páginas.

## 7.4 Atividade opcional — Portfólio Digital de Eletroquímica

Competências/habilidades oficiais: **C2, H7, H9 e H11**.

O vídeo experimental ainda não foi fornecido. O estudante informou que colocará os vídeos depois. Portanto, **não marcar como concluída agora**. Se quiser deixar a atividade visível, usar rótulo “Opcional — vídeo pendente” e um espaço para inserção posterior.

---

# 8. CIÊNCIAS HUMANAS

O professor orientou selecionar livremente três atividades da área. Para cada atividade: título, descrição, habilidades, imagem ilustrativa e link de acesso ao material completo. Se a habilidade oficial não estiver disponível, não inventar.

As três atividades selecionadas para este pacote são:

1. Temas Contemporâneos — Call of Duty: Cold War;
2. Cinema e Totalitarismo — Homem de Ferro;
3. Reorganização do Mundo após 1945.

## 8.1 Temas Contemporâneos — Call of Duty: Cold War

### Arquivos

- `07_CIENCIAS_HUMANAS/01_Temas_Contemporaneos_Call_of_Duty_Cold_War/Call_of_Duty_Cold_War_slides_original.zip`
- `07_CIENCIAS_HUMANAS/01_Temas_Contemporaneos_Call_of_Duty_Cold_War/slides_extraidos/`
- `07_CIENCIAS_HUMANAS/01_Temas_Contemporaneos_Call_of_Duty_Cold_War/LINK_CANVA.txt`

Integrantes mostrados na apresentação: **Cleyton, Gustavo Ramos e Davi Freitas**.

### Habilidades oficiais

**H30 — Analisar as lutas sociais e conquistas obtidas no que se refere às mudanças nas legislações ou nas políticas públicas.**

**H39 — Relacionar o papel das instituições sociais às soluções para problemas políticos, econômicos, sociais e ambientais no contexto da sociedade brasileira e do mundo.**

**H40 — Analisar o processo de formação das instituições sociais e políticas, compreendendo seu papel na sociedade.**

### Texto para o site

**Descrição/objetivo:**
A atividade de Temas Contemporâneos propôs uma apresentação crítica sobre sociedade e política. O grupo escolheu analisar o jogo Call of Duty: Black Ops Cold War e a forma como sua narrativa representa a Guerra Fria, a União Soviética, a espionagem e o conflito ideológico.

A apresentação discute como os comunistas aparecem como inimigos dentro da narrativa, como a espionagem e as operações secretas são representadas, como o jogo constrói uma imagem negativa do comunismo e como determinadas ideias atribuídas ao sistema soviético aparecem na obra.

**Justificativa:**
O trabalho é relevante porque analisa uma mídia de entretenimento como produto cultural e político, observando como jogos podem construir representações históricas e ideológicas. Isso estimula uma leitura crítica da cultura popular e das mensagens transmitidas por narrativas audiovisuais interativas.

**REGRA DE IMPARCIALIDADE:** deixar claro que a apresentação analisa **a representação feita pelo jogo**, e não apresenta o jogo como fonte histórica neutra. Não transformar a descrição do portfólio em defesa ou ataque político.

**Link:** testar o link do Canva registrado no arquivo `LINK_CANVA.txt`. Se não abrir publicamente, pedir ao usuário um novo link; usar os slides locais como evidência enquanto isso.

## 8.2 Cinema e Totalitarismo — Homem de Ferro

### Arquivo

- `07_CIENCIAS_HUMANAS/02_Cinema_e_Totalitarismo_Homem_de_Ferro/Cinema_e_Totalitarismo_Homem_de_Ferro.pdf`

Integrantes: **Cleyton, Diogo e Guilherme Weiss**.

### Habilidades oficiais

**H10 — Compreender as transformações no mundo do trabalho, geradas por mudanças na ordem econômica.**

**H22 — Analisar, na perspectiva humana e social, as principais características e dinâmicas dos fluxos da sociedade.**

**H26 — Comparar pontos de vista e ações práticas do indivíduo ou grupo social em diferentes contextos.**

**H27 — Analisar hipóteses e questões ambientais, sociais, econômicas, políticas e culturais, a partir de leituras e debates.**

### Texto para o site

**Descrição/objetivo:**
A AV1 de Ciências Humanas propôs relacionar obras cinematográficas a características de regimes totalitários. O grupo escolheu Homem de Ferro e analisou elementos do filme que podem ser comparados aos conceitos estudados em sala.

A apresentação aborda imposição de ideias pela força, culto à personalidade, propaganda, uso do terror e repressão, manipulação das massas, relação entre economia e poder militar, cultura da guerra e uso da ciência e da tecnologia para ampliação do poder.

**Justificativa:**
A atividade permite aplicar conceitos históricos e políticos a uma obra de cultura popular, exigindo comparação e interpretação em vez de simples memorização. O próprio trabalho conclui que Homem de Ferro não retrata diretamente um governo totalitário, mas apresenta elementos que possibilitam estabelecer relações com os conceitos estudados.

Não afirmar que o filme é uma representação direta de um regime totalitário; preservar a nuance da conclusão original.

## 8.3 Reorganização do Mundo após 1945

### Arquivos

- `07_CIENCIAS_HUMANAS/03_Reorganizacao_do_Mundo_apos_1945/reorganizacao_mundo_apos_1945_foto_1.jpg`
- `07_CIENCIAS_HUMANAS/03_Reorganizacao_do_Mundo_apos_1945/reorganizacao_mundo_apos_1945_foto_2.jpg`

Integrantes identificados nas imagens: **Cleyton e Gustavo Ramos**.

### Conteúdo visível no trabalho

O mapa/síntese relaciona:

- Tratado de Versalhes e fragilidade da paz;
- necessidade de uma nova ordem após a guerra;
- Bretton Woods;
- FMI e Banco Mundial;
- fortalecimento do dólar como moeda de referência;
- criação da ONU;
- Conselho de Segurança;
- Hiroshima e Nagasaki;
- início da Era Nuclear;
- Guerra Fria;
- divisão do mundo entre EUA e URSS;
- permanência de relações de poder no presente.

### Texto para o site

**Descrição/objetivo:**
A atividade sintetizou as principais transformações políticas e econômicas ligadas à reorganização da ordem mundial após a Segunda Guerra Mundial. O material conecta acordos econômicos, novas instituições internacionais, fortalecimento dos Estados Unidos, início da era nuclear e formação do cenário da Guerra Fria.

**Justificativa:**
A síntese ajuda a compreender como acontecimentos do pós-guerra influenciaram a economia, a diplomacia e a segurança internacional. O formato de mapa de relações evidencia conexões entre fatos que muitas vezes são estudados separadamente.

### Habilidades

**As habilidades oficiais desta atividade NÃO foram fornecidas pelo estudante. Não inventar Hxx.**

Opções seguras:

- Preferencial: manter um pequeno campo interno/placeholder no código para o estudante inserir as habilidades assim que obtiver do professor, sem exibir texto incompleto na página pública; ou
- Exibir “Habilidades: aguardando confirmação do professor” apenas durante desenvolvimento e remover antes da entrega final.

Se a escola exigir que todas as atividades tenham habilidades antes da publicação, avisar o usuário que esta é a única pendência de conteúdo obrigatória desta atividade.

## 8.4 Material extra — Dossiê Histórico com Análise de Fonte Primária

Arquivo:

- `07_CIENCIAS_HUMANAS/04_MATERIAL_EXTRA_Dossie_Historico_Queda_da_Franca/Orientacao_Dossie_Historico_Queda_da_Franca.pdf`

Na lista da turma, Cleyton e Gustavo Ramos aparecem com o tema **A Queda da França**. Entretanto, o trabalho final não foi enviado. **Não misturar este enunciado com as fotos da Reorganização do Mundo após 1945.** Não usar como uma das três atividades principais até que o trabalho final seja fornecido.

---

# 9. O QUE NÃO DEVE SER FEITO

1. Não apagar nem reescrever o 1º trimestre.
2. Não criar atividades que não foram enviadas.
3. Não inventar notas, certificados, habilidades ou links.
4. Não inventar feedback detalhado do Red1000; só há a nota 600/1000 e o tema.
5. Não dizer que o código do botão realiza toggle do LED se o código atual apenas lê o botão.
6. Não misturar o Dossiê da Queda da França com o trabalho sobre reorganização do mundo após 1945.
7. Não reproduzir letras de músicas.
8. Não adicionar a Olimpíada de Literatura como concluída sem certificado.
9. Não marcar Eletroquímica opcional como concluída sem o vídeo.
10. Não publicar informações de segurança, segredos, senhas ou variáveis `.env` do projeto de Programação.
11. Não modificar os PDFs, imagens e evidências originais; usar cópias ou exibi-las como assets.
12. Não redesenhar todo o site se o 1º trimestre já tiver identidade visual definida.

---

# 10. EXPERIÊNCIA DE NAVEGAÇÃO DESEJADA

Dentro de cada área do conhecimento, organizar a navegação aproximadamente assim, adaptando ao site existente:

- Cabeçalho da área;
- Seletor/abas ou seções: **1º Trimestre | 2º Trimestre**;
- Dentro do 2º trimestre, cards das atividades;
- Cada card deve abrir/expandir detalhes ou levar a uma seção própria;
- Em cada atividade, ordem recomendada:
  1. título;
  2. resumo curto;
  3. evidência principal;
  4. descrição/objetivo;
  5. justificativa/reflexão;
  6. competências/habilidades;
  7. links e arquivos completos.

Para código, usar bloco monoespaçado com boa legibilidade e botão de copiar se isso combinar com a arquitetura existente.

Para galerias, permitir clicar para ampliar quando possível.

Para PDFs, oferecer botão de abrir/visualizar; não obrigar o navegador a carregar dezenas de páginas na tela inicial.

---

# 11. CHECKLIST FINAL DE IMPLEMENTAÇÃO

Antes de considerar o trabalho concluído, verificar:

### Geral
- [ ] 1º trimestre continua intacto;
- [ ] 2º trimestre aparece em todas as áreas necessárias;
- [ ] navegação funciona em desktop e celular;
- [ ] ortografia revisada;
- [ ] nenhum link quebrado interno;
- [ ] imagens sem distorção;
- [ ] evidências com `alt` apropriado;
- [ ] nenhum espaço vazio enorme;
- [ ] nenhum texto provisório esquecido.

### Programação
- [ ] projeto BP adicionado;
- [ ] GitHub visível;
- [ ] H1, H4 e H6;
- [ ] explicação da solução;
- [ ] README.md criado/melhorado no projeto;
- [ ] arquitetura real dos arquivos documentada.

### IoT
- [ ] Acender LED;
- [ ] Semáforo;
- [ ] LED com botão;
- [ ] SmartClass como extra;
- [ ] códigos visíveis;
- [ ] imagens visíveis;
- [ ] não afirmar toggle inexistente.

### Linguagens
- [ ] Videomanifesto — H3/H24;
- [ ] Inglês — H25;
- [ ] Red1000 — H22 e nota 600/1000;
- [ ] comentários/reflexões educacionais;
- [ ] Olimpíada não exibida como concluída sem certificado.

### Matemática
- [ ] AV1 Estatística;
- [ ] C4;
- [ ] H27/H28/H29;
- [ ] gráficos e dados do PDF acessíveis.

### Ciências da Natureza
- [ ] Mural Interativo — Poluição do Solo;
- [ ] Estequiometria na Indústria — Ácido Sulfúrico;
- [ ] Cartilha Eletricidade e Corpo Humano;
- [ ] competências/habilidades exatamente como fornecidas;
- [ ] Eletroquímica opcional não marcada como concluída sem vídeo.

### Humanas
- [ ] Call of Duty: Cold War — H30/H39/H40;
- [ ] Cinema e Totalitarismo — H10/H22/H26/H27;
- [ ] Reorganização do Mundo após 1945;
- [ ] habilidades da terceira atividade não inventadas;
- [ ] Dossiê Queda da França mantido apenas como material extra enquanto faltar o trabalho final.

---

# 12. RESULTADO QUE EU QUERO DE VOCÊ, CODEX

1. Inspecione primeiro o projeto existente do portfólio do 1º trimestre.
2. Explique brevemente quais arquivos/componentes você pretende alterar.
3. Implemente o 2º trimestre seguindo este documento e usando os assets deste pacote.
4. Preserve o 1º trimestre.
5. Crie/ajuste o README do projeto de Programação conforme exigência do professor.
6. Não invente os itens marcados como pendentes.
7. Ao terminar, execute o projeto, verifique erros de build/console e corrija-os.
8. Entregue um resumo final do que foi alterado e uma lista curta das pendências que ainda dependem do estudante (vídeos, habilidades da atividade de Reorganização do Mundo após 1945, certificado opcional etc.).

**Prioridade máxima: fidelidade aos trabalhos reais enviados, organização e continuidade visual do 1º trimestre.**
