window.PORTFOLIO_TRIMESTRES_ATIVO = true;

const ASSETS_2T = "Assets_2T";

const COMPETENCIAS_NATUREZA = {
  C1: "C1 — Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo.",
  C2: "C2 — Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.",
  C3: "C3 — Determinar os impactos das ações humanas nos ambientes, identificando suas causas e propondo soluções para a sua redução.",
  C4: "C4 — Compreender o funcionamento dos organismos vivos em geral e o ser humano em especial, considerando suas relações com o ambiente em que vivem, abordando aspectos físicos e socioculturais."
};

const HABILIDADES_NATUREZA = {
  H3: "H3 — Inferir significado de termos técnico-científicos em textos de instrumentação ou de divulgação científica.",
  H4: "H4 — Identificar, em textos, diagramas, gráficos, imagens e tabelas, informações relevantes para compreender um fenômeno ou conceito relacionado às Ciências da Natureza.",
  H6: "H6 — Compreender os conceitos relacionados à Física em seus diferentes ramos: Astronomia, Mecânica, Acústica, Óptica, Termologia, Calorimetria, Ondulatória, Eletricidade, Magnetismo e Física Moderna e Nuclear.",
  H7: "H7 — Compreender os conceitos relacionados à Química nos seus diferentes ramos: Físico-química, Química orgânica e Química Geral.",
  H9: "H9 — Explicar os conceitos de energia, matéria, vida e transformação para explicar fenômenos naturais e procedimentos tecnológicos.",
  H11: "H11 — Empregar procedimentos e práticas de observação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza.",
  H12: "H12 — Relacionar informações para construir modelos em ciência e tecnologia.",
  H15: "H15 — Comparar propostas de intervenção ambiental aplicando conhecimentos científicos e tecnológicos, observando os riscos e benefícios de sua implementação.",
  H18: "H18 — Identificar situações de risco ambiental na cidade onde reside.",
  H23: "H23 — Formular propostas de alcance individual ou coletivo, utilizando como critérios a preservação e a promoção da saúde individual e coletiva."
};

const CONFIGURACAO_AREAS = {
  portugues: {
    nome: "Linguagens",
    descricao: "Produções de Língua Portuguesa e Língua Inglesa organizadas como continuidade do percurso do 1º trimestre."
  },
  matematica: {
    nome: "Matemática e suas Tecnologias",
    descricao: "Atividades que aplicam conceitos matemáticos à leitura, à organização e à interpretação de situações reais."
  },
  natureza: {
    nome: "Ciências da Natureza",
    descricao: "Registros da 3ª série sobre ambiente, transformações químicas, eletricidade, saúde e segurança."
  },
  humanas: {
    nome: "Ciências Humanas",
    descricao: "Análises de mídia, política, totalitarismo e reorganização mundial construídas a partir dos materiais entregues."
  },
  tecnico: {
    nome: "Curso Técnico",
    descricao: "Projetos de Programação de Aplicativos, Desenvolvimento de Sistemas e Internet das Coisas."
  }
};

const ATIVIDADES_SEGUNDO_TRIMESTRE = {
  portugues: [
    {
      nome: "Videomanifesto — Manifesto Antropófago e Manifesto Pau-Brasil",
      resumo: "Estudo do gênero manifesto e adaptação de suas ideias para uma produção digital audiovisual.",
      descricao: "A atividade partiu do estudo do gênero manifesto, com foco no Manifesto Pau-Brasil e no Manifesto Antropófago, de Oswald de Andrade, dentro do contexto do Modernismo brasileiro. A proposta foi observar o uso de linguagem crítica, provocativa e argumentativa e, depois, transformar ideias em uma produção digital em vídeo.",
      assunto: "O material analisa a crítica de Oswald de Andrade à simples reprodução de modelos culturais europeus e a proposta antropofágica de assimilar influências externas e transformá-las em algo próprio. Também identifica recursos como ironia, paródia, frases curtas e mistura de referências cultas e populares.",
      justificativa: "A atividade relaciona leitura, interpretação, argumentação, produção textual e linguagem audiovisual, além de conectar um movimento literário histórico a uma forma contemporânea de comunicação.",
      reflexao: "A atividade exigiu selecionar as ideias mais importantes dos manifestos e adaptá-las a uma linguagem mais curta e audiovisual. O aspecto mais desafiador foi manter o sentido crítico do gênero manifesto sem transformar o vídeo apenas em um resumo. O trabalho contribuiu para compreender como escolhas de linguagem, frases de impacto e recursos visuais podem fortalecer uma argumentação.",
      habilidades: [
        "H3 — Identificar o tema principal, os subtemas e finalidades dos textos.",
        "H24 — Produzir textos escritos de domínio acadêmico e educacional."
      ],
      imagem: `${ASSETS_2T}/linguagens/manifesto-digital-capa.png`,
      imagemAlt: "Página da análise digital sobre o Manifesto Antropófago",
      imagemFit: "contain",
      legenda: "Prévia fiel da análise entregue em PDF.",
      documento: {
        url: `${ASSETS_2T}/linguagens/manifesto-digital.pdf`,
        titulo: "Análise do Manifesto Digital",
        descricao: "Evidência em PDF · 1 página"
      },
      links: [
        {
          label: "Abrir análise em PDF",
          url: `${ASSETS_2T}/linguagens/manifesto-digital.pdf`
        },
        {
          label: "Assistir ao vídeo no Google Drive",
          url: "https://drive.google.com/file/d/1rTGEEopMrjmIGcDecm7Z6ttiH6ggpOYH/view?usp=sharing",
          externo: true
        }
      ]
    },
    {
      nome: "Inglês — What kind of art do you consume?",
      resumo: "Texto em inglês sobre preferências artísticas, com informações de cinema, música e biografia.",
      descricao: "A atividade teve como objetivo produzir um texto em inglês sobre preferências artísticas. O trabalho apresenta Chris Pratt como artista favorito, Guardians of the Galaxy como filme favorito — lançado em 2014 e dirigido por James Gunn — e Come and Get Your Love, da banda Redbone, lançada em 1974, como música favorita. A produção também incentivou o uso de estruturas no passado, especialmente o Simple Past.",
      assunto: "Preferências artísticas, vocabulário ligado a cinema, música e biografia e uso do Simple Past.",
      justificativa: "A produção permitiu aplicar o inglês a temas pessoais e culturais, trabalhando interpretação, vocabulário, organização de informações e construção de frases em língua estrangeira.",
      reflexao: "O trabalho exigiu organizar informações de áreas diferentes e apresentá-las em inglês de forma simples e compreensível. A atividade foi útil para praticar vocabulário relacionado a cinema, música e biografia e para revisar formas verbais usadas ao falar de fatos do passado.",
      habilidades: [
        "H25 — Interpretar textos em Língua Estrangeira Moderna (Inglês)."
      ],
      imagem: `${ASSETS_2T}/linguagens/ingles-arte-capa.png`,
      imagemAlt: "Página da atividade em inglês sobre artista, filme e música favoritos",
      imagemFit: "contain",
      legenda: "Prévia fiel da produção em Língua Inglesa.",
      documento: {
        url: `${ASSETS_2T}/linguagens/ingles-arte.pdf`,
        titulo: "What kind of art do you consume?",
        descricao: "Produção em Língua Inglesa · PDF"
      },
      links: [
        {
          label: "Abrir atividade em PDF",
          url: `${ASSETS_2T}/linguagens/ingles-arte.pdf`
        }
      ]
    },
    {
      nome: "Red1000 — Redação do 2º trimestre",
      resumo: "Dissertação no modelo ENEM sobre os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil.",
      descricao: "A atividade consistiu na produção de uma redação no modelo ENEM sobre os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil. O exercício trabalhou a construção de uma dissertação argumentativa seguindo uma estrutura definida.",
      justificativa: "A atividade registra o desenvolvimento da escrita formal e argumentativa, além da capacidade de organizar uma discussão sobre um tema social contemporâneo dentro das exigências do modelo ENEM.",
      reflexao: "A nota de 600/1000 mostra que a produção atingiu parte dos critérios do modelo, mas também indica espaço para evolução. Como não foram fornecidos comentários detalhados da correção, a análise permanece geral: aprimorar a argumentação, a organização das ideias, a coesão e a revisão do texto em futuras produções.",
      habilidades: [
        "H22 — Produzir textos técnicos de acordo com uma estrutura estabelecida."
      ],
      status: "Nota: 600/1000",
      imagem: `${ASSETS_2T}/linguagens/red1000-600.png`,
      imagemAlt: "Folha de correção do Red1000 com nota 600 de 1000 e o tema da dissertação",
      legenda: "Evidência da nota, do gênero Dissertação ENEM e do tema desenvolvido."
    }
  ],
  matematica: [
    {
      nome: "AV1 — Estatística: hábitos de exercício físico dos estudantes",
      resumo: "Pesquisa com 40 respostas sobre prática, modalidade, frequência e duração de exercícios físicos.",
      descricao: "A AV1 de Estatística investigou os hábitos de exercício físico de estudantes a partir de uma pesquisa com 40 respostas. O grupo elaborou perguntas sobre prática de exercícios, modalidades mais praticadas, frequência semanal, duração média das atividades e prática de mais de uma modalidade. Os dados foram transformados em porcentagens e representados em gráficos.",
      resultados: "Entre os resultados registrados, 32 dos 40 participantes afirmaram praticar exercício ou esporte, correspondendo a 80%. A academia/musculação foi a modalidade mais frequente, com 25%, e a faixa de 3 a 4 dias por semana foi a mais escolhida, com 32,5%. A apresentação também registra média de 2,9 dias por semana, mediana e moda de 3 a 4 dias, variância de 4,43 dias e desvio padrão de 2,10 dias.",
      justificativa: "A atividade evidencia o uso da Estatística para interpretar uma situação real. A coleta, organização e representação de dados permitiram transformar respostas individuais em informações que podem ser comparadas e analisadas.",
      competencias: [
        "C4 — Analisar e investigar dados e informações de natureza científica e social, articulando diferentes áreas do conhecimento, compreendendo representações gráficas e uso de modelos matemáticos, realizando inferências, previsões e tendências, para tomadas de decisão."
      ],
      habilidades: [
        "H27 — Compreender informações estatísticas provenientes de naturezas distintas (social, econômica, política ou científica) e formular juízos com base nessas informações.",
        "H28 — Calcular medidas de tendência central e de dispersão de um conjunto de dados para aplicá-las e analisá-las em situações diversas no contexto das ciências, das tecnologias, das atividades pessoais e profissionais.",
        "H29 — Construir tabelas e gráficos com recursos tecnológicos que permitam simplificar cálculos, facilitar a leitura e a compreensão das informações, para análise da realidade."
      ],
      integrantes: "Cleyton, Victor, Guilherme Weiss e Gustavo Ramos",
      imagem: `${ASSETS_2T}/matematica/estatistica-capa.png`,
      imagemAlt: "Capa da apresentação Hábitos de exercício físico dos estudantes",
      legenda: "Capa da apresentação utilizada como evidência da AV1.",
      documento: {
        url: `${ASSETS_2T}/matematica/estatistica-exercicios.pdf`,
        titulo: "Apresentação da AV1 de Estatística",
        descricao: "Pesquisa, gráficos e cálculos · PDF com 20 páginas"
      },
      links: [
        {
          label: "Abrir apresentação completa",
          url: `${ASSETS_2T}/matematica/estatistica-exercicios.pdf`
        }
      ]
    }
  ],
  natureza: [
    {
      nome: "Mural Interativo — Poluição do Solo",
      resumo: "Produção coletiva sobre formas de poluição, com a seção do estudante dedicada à poluição do solo.",
      descricao: "A turma produziu um mural interativo sobre diferentes formas de poluição e seus impactos. A parte desenvolvida pelo estudante foi dedicada à poluição do solo, reunindo informações e recursos visuais para apresentar o problema de forma acessível no ambiente escolar.",
      justificativa: "A atividade permite relacionar conhecimentos científicos a um problema ambiental presente no cotidiano. Ao organizar informações sobre poluição do solo e apresentar o conteúdo em um mural coletivo, o trabalho desenvolve comunicação científica, percepção de riscos ambientais e reflexão sobre formas de prevenção e intervenção.",
      competencias: [
        COMPETENCIAS_NATUREZA.C2,
        COMPETENCIAS_NATUREZA.C3,
        COMPETENCIAS_NATUREZA.C4
      ],
      habilidades: [
        HABILIDADES_NATUREZA.H11,
        HABILIDADES_NATUREZA.H15,
        HABILIDADES_NATUREZA.H18,
        HABILIDADES_NATUREZA.H23
      ],
      imagem: `${ASSETS_2T}/natureza/mural-poluicao-solo.jpeg`,
      imagemAlt: "Mural coletivo sobre poluição com a seção Poluição do Solo ao centro",
      legenda: "A fotografia mantém o contexto do trabalho coletivo e evidencia a seção “Poluição do Solo”.",
      imagemFit: "contain"
    },
    {
      nome: "Seminário sobre Estequiometria na Indústria — Produção de Ácido Sulfúrico",
      resumo: "Aplicação da estequiometria à produção industrial de ácido sulfúrico pelo Processo de Contato.",
      descricao: "O seminário analisou a produção industrial de ácido sulfúrico, relacionando conceitos de Química à estequiometria e à indústria. A apresentação explica o Processo de Contato, a conversão de dióxido de enxofre em trióxido de enxofre com uso do catalisador V₂O₅, os reagentes e produtos, o balanceamento das equações e as relações molares. O grupo também aplicou cálculos de massa e regra de três em um exemplo de produção em grande escala e abordou importância econômica, fertilizantes, mineração, agronegócio, impactos ambientais e alternativas sustentáveis.",
      justificativa: "A atividade demonstra como cálculos químicos e conceitos de transformação da matéria são utilizados em processos industriais reais. Ela conecta teoria, aplicação tecnológica, economia e sustentabilidade, evidenciando a utilidade da estequiometria fora do contexto puramente escolar.",
      competencias: [COMPETENCIAS_NATUREZA.C2],
      habilidades: [
        HABILIDADES_NATUREZA.H6,
        HABILIDADES_NATUREZA.H7,
        HABILIDADES_NATUREZA.H9
      ],
      integrantes: "Gustavo Ramos, Cleyton, Guilherme Weiss e Victor Morsoletto",
      imagem: `${ASSETS_2T}/natureza/estequiometria-capa.png`,
      imagemAlt: "Capa da apresentação Produção de Ácido Sulfúrico",
      legenda: "Capa original do seminário de Estequiometria.",
      documento: {
        url: `${ASSETS_2T}/natureza/estequiometria-acido-sulfurico.pdf`,
        titulo: "Seminário de Estequiometria",
        descricao: "Produção industrial de ácido sulfúrico · PDF com 13 páginas"
      },
      links: [
        {
          label: "Abrir seminário completo",
          url: `${ASSETS_2T}/natureza/estequiometria-acido-sulfurico.pdf`
        }
      ]
    },
    {
      nome: "Cartilha — Eletricidade e o Corpo Humano",
      resumo: "Material educativo sobre corrente elétrica, efeitos fisiológicos, primeiros cuidados e prevenção de acidentes.",
      descricao: "Foi produzida uma cartilha educativa sobre a relação entre eletricidade e o corpo humano. O material explica riscos do choque elétrico, possíveis alterações no funcionamento do organismo, relação entre intensidade de corrente e efeitos fisiológicos, cuidados em situações de acidente e medidas de prevenção.",
      justificativa: "A cartilha transforma conhecimentos científicos em material de orientação e prevenção. A atividade relaciona conceitos de eletricidade à saúde e à segurança, exigindo seleção de informações relevantes, uso de linguagem acessível e organização visual de conteúdo científico.",
      competencias: [
        COMPETENCIAS_NATUREZA.C1,
        COMPETENCIAS_NATUREZA.C2,
        COMPETENCIAS_NATUREZA.C4
      ],
      habilidades: [
        HABILIDADES_NATUREZA.H3,
        HABILIDADES_NATUREZA.H4,
        HABILIDADES_NATUREZA.H12,
        HABILIDADES_NATUREZA.H23
      ],
      galeria: [1, 2, 3, 4, 5, 6].map((pagina) => ({
        src: `${ASSETS_2T}/natureza/cartilha-${pagina}.png`,
        alt: `Página ${pagina} da cartilha Eletricidade e o Corpo Humano`,
        legenda: `Página ${pagina} de 6`
      }))
    },
    {
      nome: "Portfólio Digital de Eletroquímica",
      resumo: "Atividade opcional em formato de site, com o vídeo experimental produzido pelo grupo.",
      descricao: "A proposta opcional aborda conceitos de eletroquímica em formato de portfólio digital, publicado como um site próprio produzido pelo grupo, reunindo o vídeo experimental e o material da atividade.",
      justificativa: "A atividade relaciona conceitos de eletroquímica a uma produção experimental documentada em vídeo, publicada em site próprio do grupo.",
      competencias: [COMPETENCIAS_NATUREZA.C2],
      habilidades: [
        HABILIDADES_NATUREZA.H7,
        HABILIDADES_NATUREZA.H9,
        HABILIDADES_NATUREZA.H11
      ],
      status: "Opcional — concluída",
      links: [
        {
          label: "Abrir portfólio digital de Eletroquímica",
          url: "https://atividade-natureza-bizarra.netlify.app/",
          externo: true
        }
      ]
    }
  ],
  humanas: [
    {
      nome: "Temas Contemporâneos — Call of Duty: Black Ops Cold War",
      resumo: "Análise crítica de como a narrativa do jogo representa a Guerra Fria, a espionagem e o conflito ideológico.",
      descricao: "A atividade de Temas Contemporâneos propôs uma apresentação crítica sobre sociedade e política. O grupo escolheu analisar o jogo Call of Duty: Black Ops Cold War e a forma como sua narrativa representa a Guerra Fria, a União Soviética, a espionagem e o conflito ideológico. A apresentação discute como os comunistas aparecem como inimigos dentro da narrativa, como operações secretas são representadas e como o jogo constrói determinadas imagens políticas.",
      justificativa: "O trabalho é relevante porque analisa uma mídia de entretenimento como produto cultural e político, observando como jogos podem construir representações históricas e ideológicas. A apresentação analisa a representação feita pelo jogo e não o utiliza como fonte histórica neutra.",
      habilidades: [
        "H30 — Analisar as lutas sociais e conquistas obtidas no que se refere às mudanças nas legislações ou nas políticas públicas.",
        "H39 — Relacionar o papel das instituições sociais às soluções para problemas políticos, econômicos, sociais e ambientais no contexto da sociedade brasileira e do mundo.",
        "H40 — Analisar o processo de formação das instituições sociais e políticas, compreendendo seu papel na sociedade."
      ],
      integrantes: "Cleyton, Gustavo Ramos e Davi Freitas",
      galeria: [1, 2, 3, 4, 5, 6].map((slide) => ({
        src: `${ASSETS_2T}/humanas/cold-war-${slide}.png`,
        alt: `Slide ${slide} da apresentação Call of Duty: Cold War`,
        legenda: `Slide ${slide} de 6`
      })),
      aviso: "Os seis slides locais estão disponíveis como evidência. O link público de visualização do Canva ainda precisa ser confirmado pelo estudante."
    },
    {
      nome: "Cinema e Totalitarismo — Homem de Ferro",
      resumo: "Comparação entre elementos do filme Homem de Ferro e conceitos associados a regimes totalitários.",
      descricao: "A AV1 de Ciências Humanas propôs relacionar obras cinematográficas a características de regimes totalitários. O grupo escolheu Homem de Ferro e analisou elementos do filme que podem ser comparados aos conceitos estudados em sala, como imposição de ideias pela força, culto à personalidade, propaganda, repressão, manipulação das massas, economia, poder militar e uso da tecnologia.",
      justificativa: "A atividade permite aplicar conceitos históricos e políticos a uma obra de cultura popular, exigindo comparação e interpretação em vez de simples memorização. O trabalho conclui que Homem de Ferro não retrata diretamente um governo totalitário, mas apresenta elementos que possibilitam estabelecer relações com os conceitos estudados.",
      habilidades: [
        "H10 — Compreender as transformações no mundo do trabalho, geradas por mudanças na ordem econômica.",
        "H22 — Analisar, na perspectiva humana e social, as principais características e dinâmicas dos fluxos da sociedade.",
        "H26 — Comparar pontos de vista e ações práticas do indivíduo ou grupo social em diferentes contextos.",
        "H27 — Analisar hipóteses e questões ambientais, sociais, econômicas, políticas e culturais, a partir de leituras e debates."
      ],
      integrantes: "Cleyton, Diogo e Guilherme Weiss",
      imagem: `${ASSETS_2T}/humanas/cinema-totalitarismo-capa.png`,
      imagemAlt: "Capa da apresentação Totalitarismo e Homem de Ferro",
      legenda: "Capa original da apresentação escolhida pelo grupo.",
      documento: {
        url: `${ASSETS_2T}/humanas/cinema-totalitarismo.pdf`,
        titulo: "Cinema e Totalitarismo — Homem de Ferro",
        descricao: "Apresentação completa · PDF com 11 páginas"
      },
      links: [
        {
          label: "Abrir apresentação completa",
          url: `${ASSETS_2T}/humanas/cinema-totalitarismo.pdf`
        }
      ]
    },
    {
      nome: "Reorganização do Mundo após 1945",
      resumo: "Mapa-síntese sobre a nova ordem política, econômica e de segurança formada depois da Segunda Guerra Mundial.",
      descricao: "A atividade sintetizou as principais transformações políticas e econômicas ligadas à reorganização da ordem mundial após a Segunda Guerra Mundial. O material conecta o Tratado de Versalhes, Bretton Woods, FMI, Banco Mundial, fortalecimento do dólar, criação da ONU, Conselho de Segurança, Hiroshima e Nagasaki, início da Era Nuclear e formação do cenário da Guerra Fria.",
      justificativa: "A síntese ajuda a compreender como acontecimentos do pós-guerra influenciaram a economia, a diplomacia e a segurança internacional. O formato de mapa de relações evidencia conexões entre fatos que muitas vezes são estudados separadamente.",
      integrantes: "Cleyton e Gustavo Ramos",
      galeria: [1, 2].map((pagina) => ({
        src: `${ASSETS_2T}/humanas/reorganizacao-${pagina}.jpg`,
        alt: `Página ${pagina} do mapa-síntese Reorganização do Mundo após 1945`,
        legenda: `Registro ${pagina} de 2`
      }))
      // Habilidades oficiais intencionalmente omitidas até a confirmação do professor.
    },
    {
      categoria: "Material extra",
      nome: "Dossiê Histórico — A Queda da França",
      resumo: "Orientação do professor preservada como material de referência; o trabalho final ainda não foi fornecido.",
      descricao: "O arquivo disponível é a orientação do Dossiê Histórico com Análise de Fonte Primária. Na lista da turma, Cleyton e Gustavo Ramos aparecem com o tema A Queda da França, mas o trabalho final correspondente não está presente no pacote.",
      justificativa: "O material permanece separado das três atividades principais para registrar o encaminhamento sem apresentar uma entrega inexistente. Ele também não deve ser confundido com as fotos da atividade Reorganização do Mundo após 1945.",
      integrantes: "Cleyton e Gustavo Ramos",
      status: "Trabalho final pendente",
      documento: {
        url: `${ASSETS_2T}/humanas/queda-franca-orientacao.pdf`,
        titulo: "Orientação do Dossiê Histórico",
        descricao: "Enunciado do professor · PDF com 7 páginas"
      },
      aviso: "Este PDF é somente a orientação da proposta e não representa uma atividade concluída.",
      pendente: true
      // Não há trabalho final nem habilidades oficiais para publicar neste momento.
    }
  ],
  tecnico: [
    {
      categoria: "Programação de Aplicativos e Desenvolvimento de Sistemas",
      nome: "BP — Promotora de Crédito: aplicação financeira Full Stack",
      resumo: "Projeto Rinha SENAI 2026 FullStack, apresentado na interface pelo nome Flinx.",
      descricao: "O projeto foi desenvolvido como uma aplicação web Full Stack voltada a operações financeiras simuladas e gerenciamento de conta. A solução reúne cadastro e autenticação, painel, gerenciamento de perfil, transferências, amizades, investimentos, consulta de movimentações e acompanhamento de despesas.",
      solucao: "A aplicação foi separada em frontend e backend. No frontend, React, React Router, Recharts e Vite estruturam páginas, navegação e visualizações. No backend, Express organiza a API e Prisma gerencia o banco SQLite. A solução utiliza autenticação com JSON Web Token em cookie HTTP-only, hash de senha com bcryptjs e upload de avatar com Multer. O schema contém usuários, transferências, investimentos, movimentações, snapshots, sequência de uso e amizades.",
      justificativa: "Esta atividade evidencia a integração de diferentes conhecimentos de desenvolvimento de sistemas em um projeto funcional. Ela mostra a aplicação de requisitos de usabilidade e segurança, a escolha de tecnologias adequadas e o uso conjunto de bibliotecas, frameworks, API, banco de dados e interface web.",
      habilidades: [
        "H1 — Reconhecer requisitos de qualidade, integridade, usabilidade e segurança da informação.",
        "H4 — Selecionar linguagem de programação de acordo com os requisitos.",
        "H6 — Aplicar linguagem de programação por meio de APIs, bibliotecas e frameworks na construção de rotinas de software."
      ],
      tecnologias: [
        "Frontend: React 19, React Router 7, Recharts e Vite.",
        "Backend: Node.js, Express 5, Prisma 7 e SQLite/libSQL.",
        "Segurança e arquivos: JWT, cookie HTTP-only, bcryptjs e Multer."
      ],
      imagem: `${ASSETS_2T}/programacao/flinx-favicon.svg`,
      imagemAlt: "Símbolo visual do projeto Flinx",
      imagemFit: "contain",
      legenda: "Identidade visual presente nos arquivos reais do frontend.",
      aviso: "O README completo foi preparado na cópia local do projeto e precisa ser enviado ao repositório pelo estudante.",
      links: [
        {
          label: "Abrir repositório no GitHub",
          url: "https://github.com/Pingusto193/RinhaSenai2026FullStack",
          externo: true
        },
        {
          label: "Ler README do projeto",
          url: `${ASSETS_2T}/programacao/README.md`
        },
        {
          label: "Baixar código entregue (.zip)",
          url: `${ASSETS_2T}/programacao/flinx-projeto.zip`,
          download: true
        }
      ]
    },
    {
      categoria: "Internet das Coisas",
      nome: "Acender LED",
      resumo: "Atividade introdutória de Arduino voltada ao controle de uma saída digital.",
      descricao: "O código configura o LED integrado da placa como saída e alterna seu estado entre ligado e desligado a cada um segundo, utilizando digitalWrite() e delay().",
      justificativa: "A atividade é importante por apresentar a base do controle digital em microcontroladores. Ela permite compreender como configurar pinos, alterar estados lógicos e controlar o tempo de execução de uma rotina.",
      habilidades: [
        "Configuração de saídas digitais em Arduino.",
        "Uso de pinMode, digitalWrite e delay.",
        "Compreensão de estados HIGH e LOW.",
        "Interpretação e teste de uma montagem eletrônica simples.",
        "Relação entre código e comportamento físico do circuito."
      ],
      imagem: `${ASSETS_2T}/iot/acender-led.png`,
      imagemAlt: "Protótipo no Tinkercad com Arduino, protoboard, botão, resistor e LED",
      legenda: "Protótipo fornecido para a atividade. O código entregue controla LED_BUILTIN.",
      codigo: `// C++ code
//
void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}`,
      montagemPendente: true,
      links: [
        {
          label: "Baixar código .ino",
          url: `${ASSETS_2T}/iot/acender-led.ino`,
          download: true
        }
      ]
    },
    {
      categoria: "Internet das Coisas",
      nome: "Semáforo",
      resumo: "Sequência com três LEDs que simula as fases de um semáforo.",
      descricao: "Foi desenvolvido um semáforo utilizando três LEDs ligados ao Arduino. O LED verde permanece ativo por um período, o amarelo realiza uma sequência oscilante e o vermelho é acionado em seguida, simulando a lógica de funcionamento de um semáforo.",
      justificativa: "A atividade amplia o uso de saídas digitais ao trabalhar com múltiplos componentes, ordem de execução, temporização e repetição. O laço for utilizado no LED amarelo também introduz uma forma simples de automatizar repetições no código.",
      habilidades: [
        "Controle de múltiplas saídas digitais.",
        "Sequenciamento lógico de ações.",
        "Uso de temporização.",
        "Uso de estruturas de repetição.",
        "Montagem e interpretação de circuitos com LEDs e resistores."
      ],
      imagem: `${ASSETS_2T}/iot/semaforo.png`,
      imagemAlt: "Protótipo de semáforo no Tinkercad com Arduino e LEDs verde, amarelo e vermelho",
      legenda: "Protótipo da montagem com três LEDs e resistores.",
      codigo: `//projeto por André Morais, obrigado pelo suporte.

#define LEDverde 10
#define LEDamarelo 9
#define LEDvermelho 8

void setup()
{
  pinMode (LEDvermelho, OUTPUT);
  pinMode (LEDamarelo, OUTPUT);
  pinMode (LEDverde, OUTPUT);
}

void loop()
{
  //ativação do LED verde
  digitalWrite (LEDvermelho, LOW);
  digitalWrite(LEDverde, HIGH);
  delay(2000);
  digitalWrite(LEDverde, LOW);
  delay(500);
  
  //ativação do LED amarelo (oscilante)
  for (int i =  0; i < 3; i++){
    digitalWrite(LEDamarelo, HIGH);
    delay(500);
    digitalWrite(LEDamarelo, LOW);
    delay(500);
  }
  
  //ativação do LED vermelho
  digitalWrite(LEDvermelho, HIGH);
  delay(2000);
  digitalWrite(LEDvermelho, LOW);
  delay(500);
}`,
      montagemPendente: true,
      links: [
        {
          label: "Baixar código .ino",
          url: `${ASSETS_2T}/iot/semaforo.ino`,
          download: true
        }
      ]
    },
    {
      categoria: "Internet das Coisas",
      nome: "Controle de LED com botão — Desafio Lógica Toggle",
      resumo: "Leitura de um botão no pino digital 4 com INPUT_PULLUP e acompanhamento pelo Monitor Serial.",
      descricao: "A atividade trabalha a leitura de um botão conectado ao pino digital 4 do Arduino. O código utiliza o resistor interno da placa por meio de INPUT_PULLUP, lê continuamente o estado do botão e informa no Monitor Serial se ele está pressionado ou não. No estado entregue, o código não implementa uma alternância persistente de LED do tipo toggle.",
      justificativa: "A atividade introduz o uso de entradas digitais e mostra como o Arduino pode receber informações de um componente físico para tomar decisões no código. O uso de INPUT_PULLUP também demonstra uma forma prática de estabilizar a leitura do botão utilizando o resistor interno da placa.",
      habilidades: [
        "Leitura de entradas digitais.",
        "Uso de INPUT_PULLUP.",
        "Estruturas condicionais if/else.",
        "Monitoramento de estados pelo Serial.",
        "Integração entre entrada física e lógica de programação."
      ],
      imagem: `${ASSETS_2T}/iot/led-botao.png`,
      imagemAlt: "Protótipo reutilizado com Arduino, protoboard, botão, resistor e LED",
      legenda: "Imagem reutilizada da atividade Acender LED, conforme indicado pelo estudante.",
      codigo: `#define BUTTON_PIN 4

void setup() {
  Serial.begin(9600);

  // Usa resistor interno do Arduino
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);

  if (buttonState == LOW) {
    Serial.println("Button is pressed");
  } else {
    Serial.println("Button is not pressed");
  }

  delay(100);
}`,
      montagemPendente: true,
      links: [
        {
          label: "Baixar código .ino",
          url: `${ASSETS_2T}/iot/led-botao.ino`,
          download: true
        }
      ]
    },
    {
      categoria: "Internet das Coisas",
      nome: "SmartClass IoT — Monitoramento do ambiente da sala de aula",
      resumo: "Atividade extra de monitoramento ambiental com sensor, Arduino e alerta visual por LED.",
      descricao: "O SmartClass IoT foi desenvolvido para monitorar condições de temperatura e umidade em uma sala de aula. O problema identificado foi a dificuldade de avaliar automaticamente situações de calor, ambiente abafado e variações de temperatura. A proposta é medir as condições do ambiente, exibir os dados e emitir um alerta quando a situação estiver desconfortável.",
      resultados: "Nos testes documentados, o LED permaneceu apagado a 24 °C e 27 °C e acendeu a 30 °C. O relatório registra que valores abaixo de 28 °C mantiveram o LED apagado e que, ao ultrapassar esse limite, o alerta visual foi acionado.",
      justificativa: "O projeto demonstra uma aplicação de IoT ligada a um problema real do ambiente escolar, unindo sensor, lógica de decisão, alerta visual, prototipação e apresentação dos resultados.",
      habilidades: [
        "Leitura e interpretação de dados de sensores.",
        "Uso de estruturas condicionais para acionar alertas.",
        "Integração entre protótipo eletrônico e apresentação de resultados.",
        "Análise de testes e relação entre dados e condições do ambiente."
      ],
      status: "Atividade extra",
      galeria: [
        {
          src: `${ASSETS_2T}/iot/smartclass-slide-1.png`,
          alt: "Capa da apresentação Ar Condicionado, de Cleyton e Gustavo Ramos",
          legenda: "Capa da apresentação"
        },
        {
          src: `${ASSETS_2T}/iot/smartclass-slide-2.png`,
          alt: "Slide do SmartClass com o problema, valores e tabela de testes",
          legenda: "Problema e resultados"
        },
        {
          src: `${ASSETS_2T}/iot/smartclass-testes.png`,
          alt: "Tabela com testes do SmartClass a 24, 27 e 30 graus Celsius",
          legenda: "Tabela de testes"
        },
        {
          src: `${ASSETS_2T}/iot/smartclass-foto.png`,
          alt: "Montagem física do SmartClass com Arduino, sensor, protoboard e LED aceso",
          legenda: "Registro da montagem física"
        }
      ],
      aviso: "As evidências registram etapas diferentes: a placa e o site descrevem um protótipo com TMP36, enquanto a foto física mostra leituras de temperatura e umidade com um sensor DHT. Os testes documentados validam especificamente o alerta de temperatura por LED.",
      codigoPendente: true,
      links: [
        {
          label: "Abrir site do SmartClass",
          url: "https://charming-chimera-e3c8f8.netlify.app/",
          externo: true
        },
        {
          label: "Baixar arquivo do protótipo (.brd)",
          url: `${ASSETS_2T}/iot/smartclass-board.brd`,
          download: true
        },
        {
          label: "Baixar arquivos do site (.zip)",
          url: `${ASSETS_2T}/iot/smartclass-site.zip`,
          download: true
        }
      ]
    }
  ]
};

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

function criarCabecalhoArea(configuracao) {
  const cabecalho = criarElemento("header", "area-cabecalho");
  cabecalho.appendChild(criarElemento("p", "area-cabecalho__eyebrow", "Portfólio escolar · 2026"));
  cabecalho.appendChild(criarElemento("h1", "area-cabecalho__titulo", configuracao.nome));
  cabecalho.appendChild(criarElemento("p", "area-cabecalho__texto", configuracao.descricao));
  return cabecalho;
}

function criarSecaoTexto(titulo, conteudo) {
  if (!conteudo || (Array.isArray(conteudo) && conteudo.length === 0)) return null;

  const secao = criarElemento("section", "atividade-detalhe");
  secao.appendChild(criarElemento("h3", "atividade-detalhe__titulo", titulo));

  if (Array.isArray(conteudo)) {
    const lista = criarElemento("ul", "atividade-detalhe__lista");
    conteudo.forEach((item) => lista.appendChild(criarElemento("li", "", item)));
    secao.appendChild(lista);
  } else {
    secao.appendChild(criarElemento("p", "atividade-detalhe__texto", conteudo));
  }

  return secao;
}

function criarDocumento(documento) {
  if (!documento) return null;

  const link = criarElemento("a", "documento-card");
  link.href = documento.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Abrir ${documento.titulo}`);

  const selo = criarElemento("span", "documento-card__selo", "PDF");
  const corpo = criarElemento("span", "documento-card__corpo");
  corpo.appendChild(criarElemento("strong", "documento-card__titulo", documento.titulo));
  corpo.appendChild(criarElemento("span", "documento-card__descricao", documento.descricao));
  const seta = criarElemento("span", "documento-card__seta", "↗");
  seta.setAttribute("aria-hidden", "true");
  link.append(selo, corpo, seta);
  return link;
}

function criarImagemAmpliavel(item, classe = "evidencia-imagem") {
  const botao = criarElemento("button", `${classe} evidencia-zoom`);
  botao.type = "button";
  botao.dataset.imagem = item.src;
  botao.dataset.alt = item.alt;
  botao.dataset.legenda = item.legenda || item.alt;
  botao.setAttribute("aria-label", `Ampliar: ${item.legenda || item.alt}`);

  const imagem = document.createElement("img");
  imagem.src = item.src;
  imagem.alt = item.alt;
  imagem.loading = "lazy";
  if (item.fit) imagem.style.objectFit = item.fit;
  if (item.posicao) imagem.style.objectPosition = item.posicao;
  botao.appendChild(imagem);

  if (item.legenda) {
    botao.appendChild(criarElemento("span", "evidencia-imagem__legenda", item.legenda));
  }
  return botao;
}

function criarEvidencias(atividade) {
  const possuiEvidencia = atividade.video || atividade.imagem || atividade.documento || atividade.galeria ||
    atividade.videoPendente || atividade.montagemPendente || atividade.codigoPendente;
  if (!possuiEvidencia) return null;

  const bloco = criarElemento("section", "atividade-evidencias");
  bloco.appendChild(criarElemento("h3", "atividade-detalhe__titulo", "Evidências"));

  if (atividade.video) {
    const figura = criarElemento("figure", "evidencia-video");
    const video = document.createElement("video");
    video.src = atividade.video.url;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.setAttribute("aria-label", atividade.video.titulo);
    figura.appendChild(video);
    figura.appendChild(criarElemento("figcaption", "evidencia-video__legenda", atividade.video.legenda));
    bloco.appendChild(figura);
  }

  if (atividade.imagem) {
    bloco.appendChild(criarImagemAmpliavel({
      src: atividade.imagem,
      alt: atividade.imagemAlt,
      legenda: atividade.legenda,
      fit: atividade.imagemFit,
      posicao: atividade.imagemPosicao
    }, "evidencia-imagem evidencia-imagem--principal"));
  }

  const documento = criarDocumento(atividade.documento);
  if (documento) bloco.appendChild(documento);

  if (atividade.galeria) {
    const galeria = criarElemento("div", "evidencia-galeria");
    atividade.galeria.forEach((item) => galeria.appendChild(criarImagemAmpliavel(item)));
    bloco.appendChild(galeria);
  }

  if (atividade.videoPendente) {
    const placeholder = criarElemento("div", "evidencia-placeholder evidencia-placeholder--video");
    placeholder.appendChild(criarElemento("span", "evidencia-placeholder__icone", "▶"));
    const texto = criarElemento("div", "");
    texto.appendChild(criarElemento("strong", "", "Espaço reservado para vídeo"));
    texto.appendChild(criarElemento("span", "", "Vídeo será inserido posteriormente."));
    placeholder.appendChild(texto);
    bloco.appendChild(placeholder);
  }

  if (atividade.montagemPendente) {
    const placeholder = criarElemento("div", "evidencia-placeholder");
    placeholder.appendChild(criarElemento("span", "evidencia-placeholder__icone", "▧"));
    const texto = criarElemento("div", "");
    texto.appendChild(criarElemento("strong", "", "Foto da montagem física"));
    texto.appendChild(criarElemento("span", "", "Registro ainda não fornecido pelo estudante."));
    placeholder.appendChild(texto);
    bloco.appendChild(placeholder);
  }

  if (atividade.codigoPendente) {
    const placeholder = criarElemento("div", "evidencia-placeholder");
    placeholder.appendChild(criarElemento("span", "evidencia-placeholder__icone", "</>"));
    const texto = criarElemento("div", "");
    texto.appendChild(criarElemento("strong", "", "Código-fonte do Arduino"));
    texto.appendChild(criarElemento("span", "", "O pacote contém o arquivo da placa, mas não inclui um sketch .ino para esta atividade extra."));
    placeholder.appendChild(texto);
    bloco.appendChild(placeholder);
  }

  return bloco;
}

function criarCodigo(codigo) {
  if (!codigo) return null;

  const secao = criarElemento("section", "atividade-codigo");
  const cabecalho = criarElemento("div", "atividade-codigo__cabecalho");
  cabecalho.appendChild(criarElemento("h3", "atividade-detalhe__titulo", "Código entregue"));
  const copiar = criarElemento("button", "atividade-codigo__copiar", "Copiar código");
  copiar.type = "button";
  copiar.dataset.codigo = codigo;
  cabecalho.appendChild(copiar);

  const pre = document.createElement("pre");
  pre.className = "atividade-codigo__bloco";
  const code = document.createElement("code");
  code.textContent = codigo;
  pre.appendChild(code);
  secao.append(cabecalho, pre);
  return secao;
}

function criarAcoes(links = []) {
  if (!links.length) return null;
  const acoes = criarElemento("div", "atividade-acoes");

  links.forEach((item) => {
    const link = criarElemento("a", "btn atividade-acao", item.label);
    link.href = item.url;
    if (item.externo || !item.download) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    if (item.download) link.setAttribute("download", "");
    acoes.appendChild(link);
  });
  return acoes;
}

function criarCardSegundoTrimestre(atividade) {
  const artigo = criarElemento("article", `atividade-card${atividade.pendente ? " atividade-card--pendente" : ""}`);
  const cabecalho = criarElemento("header", "atividade-card__cabecalho");
  const marcadores = criarElemento("div", "atividade-card__marcadores");
  marcadores.appendChild(criarElemento("span", "atividade-card__trimestre", "2º trimestre"));
  if (atividade.status) marcadores.appendChild(criarElemento("span", "atividade-card__status", atividade.status));
  cabecalho.appendChild(marcadores);
  cabecalho.appendChild(criarElemento("h2", "atividade-card__titulo", atividade.nome));
  cabecalho.appendChild(criarElemento("p", "atividade-card__resumo", atividade.resumo));
  if (atividade.integrantes) {
    cabecalho.appendChild(criarElemento("p", "atividade-card__integrantes", `Integrantes: ${atividade.integrantes}.`));
  }
  artigo.appendChild(cabecalho);

  const evidencias = criarEvidencias(atividade);
  if (evidencias) artigo.appendChild(evidencias);

  [
    ["Descrição e objetivo", atividade.descricao],
    ["Assunto", atividade.assunto],
    ["Explicação da solução", atividade.solucao],
    ["Resultados", atividade.resultados],
    ["Justificativa", atividade.justificativa],
    ["Reflexão educacional", atividade.reflexao],
    ["Tecnologias utilizadas", atividade.tecnologias],
    ["Competências", atividade.competencias],
    ["Habilidades desenvolvidas", atividade.habilidades]
  ].forEach(([titulo, conteudo]) => {
    const secao = criarSecaoTexto(titulo, conteudo);
    if (secao) artigo.appendChild(secao);
  });

  const codigo = criarCodigo(atividade.codigo);
  if (codigo) artigo.appendChild(codigo);

  if (atividade.aviso) {
    const aviso = criarElemento("aside", "atividade-aviso");
    aviso.appendChild(criarElemento("strong", "", "Observação sobre as evidências"));
    aviso.appendChild(criarElemento("p", "", atividade.aviso));
    artigo.appendChild(aviso);
  }

  const acoes = criarAcoes(atividade.links);
  if (acoes) artigo.appendChild(acoes);
  return artigo;
}

function criarPainelPrimeiroTrimestre(chave, container, materiaOriginal) {
  const painel = criarElemento("section", "trimestre-painel");
  painel.id = `${chave}-trimestre-1`;
  painel.setAttribute("role", "tabpanel");
  painel.dataset.trimestre = "1";
  const intro = criarElemento("header", "trimestre-cabecalho");
  intro.appendChild(criarElemento("p", "trimestre-cabecalho__numero", "01"));
  const texto = criarElemento("div", "");
  texto.appendChild(criarElemento("h2", "trimestre-cabecalho__titulo", "1º Trimestre"));
  texto.appendChild(criarElemento("p", "trimestre-cabecalho__texto", "Conteúdo original preservado integralmente."));
  intro.appendChild(texto);
  painel.appendChild(intro);

  const lista = criarElemento("div", "trimestre-lista trimestre-lista--primeiro");
  if (chave === "tecnico") {
    Array.from(container.children).forEach((card) => lista.appendChild(card));
  } else if (materiaOriginal) {
    materiaOriginal.atividades.forEach((atividade) => {
      lista.appendChild(window.PORTFOLIO_PRIMEIRO_TRIMESTRE.criarCard(materiaOriginal, atividade));
    });
  }
  painel.appendChild(lista);
  return painel;
}

function criarPainelSegundoTrimestre(chave, atividades) {
  const painel = criarElemento("section", "trimestre-painel");
  painel.id = `${chave}-trimestre-2`;
  painel.setAttribute("role", "tabpanel");
  painel.dataset.trimestre = "2";
  const intro = criarElemento("header", "trimestre-cabecalho");
  intro.appendChild(criarElemento("p", "trimestre-cabecalho__numero", "02"));
  const texto = criarElemento("div", "");
  texto.appendChild(criarElemento("h2", "trimestre-cabecalho__titulo", "2º Trimestre"));
  let resumoTrimestre = `${atividades.length} ${atividades.length === 1 ? "atividade documentada" : "atividades documentadas"}.`;
  if (chave === "natureza") {
    resumoTrimestre = "3 atividades obrigatórias e 1 opcional, todas concluídas.";
  } else if (chave === "humanas") {
    resumoTrimestre = "3 atividades selecionadas e 1 material extra com trabalho final pendente.";
  }
  texto.appendChild(criarElemento("p", "trimestre-cabecalho__texto", resumoTrimestre));
  intro.appendChild(texto);
  painel.appendChild(intro);

  const categorias = new Map();
  atividades.forEach((atividade) => {
    const categoria = atividade.categoria || (chave === "humanas" ? "Atividades principais" : "Atividades selecionadas");
    if (!categorias.has(categoria)) categorias.set(categoria, []);
    categorias.get(categoria).push(atividade);
  });

  categorias.forEach((itens, categoria) => {
    const grupo = criarElemento("section", "atividade-grupo");
    if (categorias.size > 1 || chave === "tecnico") {
      const tituloGrupo = criarElemento("header", "atividade-grupo__cabecalho");
      const rotuloGrupo = chave === "tecnico" ? "Área técnica" : "Organização do trimestre";
      tituloGrupo.appendChild(criarElemento("p", "atividade-grupo__eyebrow", rotuloGrupo));
      tituloGrupo.appendChild(criarElemento("h2", "atividade-grupo__titulo", categoria));
      grupo.appendChild(tituloGrupo);
    }
    const lista = criarElemento("div", "trimestre-lista trimestre-lista--segundo");
    itens.forEach((atividade) => lista.appendChild(criarCardSegundoTrimestre(atividade)));
    grupo.appendChild(lista);
    painel.appendChild(grupo);
  });
  return painel;
}

function criarAbas(chave, painelPrimeiro, painelSegundo) {
  const abas = criarElemento("div", "trimestre-abas");
  abas.setAttribute("role", "tablist");
  abas.setAttribute("aria-label", "Selecionar trimestre");

  const criarAba = (numero, texto, painel) => {
    const botao = criarElemento("button", "trimestre-aba", texto);
    botao.type = "button";
    botao.id = `${chave}-aba-${numero}`;
    botao.dataset.trimestre = String(numero);
    botao.setAttribute("role", "tab");
    botao.setAttribute("aria-controls", painel.id);
    painel.setAttribute("aria-labelledby", botao.id);
    return botao;
  };

  abas.append(criarAba(1, "1º Trimestre", painelPrimeiro), criarAba(2, "2º Trimestre", painelSegundo));
  return abas;
}

function ativarTrimestre(container, numero, atualizarUrl = true) {
  container.querySelectorAll(".trimestre-aba").forEach((aba) => {
    const ativa = aba.dataset.trimestre === String(numero);
    aba.classList.toggle("trimestre-aba--ativa", ativa);
    aba.setAttribute("aria-selected", String(ativa));
    aba.tabIndex = ativa ? 0 : -1;
  });

  container.querySelectorAll(".trimestre-painel").forEach((painel) => {
    painel.hidden = painel.dataset.trimestre !== String(numero);
  });

  if (atualizarUrl && window.history.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.set("trimestre", String(numero));
    url.hash = "";
    window.history.replaceState(null, "", url);
  }
}

function prepararLightbox() {
  let dialog = document.getElementById("evidencia-lightbox");
  if (dialog) return dialog;

  dialog = document.createElement("dialog");
  dialog.id = "evidencia-lightbox";
  dialog.className = "evidencia-lightbox";
  const fechar = criarElemento("button", "evidencia-lightbox__fechar", "Fechar ×");
  fechar.type = "button";
  fechar.addEventListener("click", () => dialog.close());
  const imagem = document.createElement("img");
  imagem.className = "evidencia-lightbox__imagem";
  const legenda = criarElemento("p", "evidencia-lightbox__legenda");
  dialog.append(fechar, imagem, legenda);
  dialog.addEventListener("click", (evento) => {
    if (evento.target === dialog) dialog.close();
  });
  document.body.appendChild(dialog);
  return dialog;
}

function abrirLightbox(botao) {
  const dialog = prepararLightbox();
  const imagem = dialog.querySelector("img");
  const legenda = dialog.querySelector(".evidencia-lightbox__legenda");
  imagem.src = botao.dataset.imagem;
  imagem.alt = botao.dataset.alt;
  legenda.textContent = botao.dataset.legenda;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(botao.dataset.imagem, "_blank", "noopener,noreferrer");
  }
}

async function copiarCodigo(botao) {
  const codigo = botao.dataset.codigo;
  const textoOriginal = botao.textContent;
  try {
    await navigator.clipboard.writeText(codigo);
  } catch (_erro) {
    const temporario = document.createElement("textarea");
    temporario.value = codigo;
    temporario.setAttribute("readonly", "");
    temporario.style.position = "fixed";
    temporario.style.opacity = "0";
    document.body.appendChild(temporario);
    temporario.select();
    document.execCommand("copy");
    temporario.remove();
  }
  botao.textContent = "Código copiado";
  setTimeout(() => {
    botao.textContent = textoOriginal;
  }, 1800);
}

document.addEventListener("DOMContentLoaded", () => {
  const chave = document.body.dataset.materia;
  const container = document.getElementById("lista-atividades");
  const configuracao = CONFIGURACAO_AREAS[chave];
  const atividades = ATIVIDADES_SEGUNDO_TRIMESTRE[chave];
  const materiaOriginal = window.PORTFOLIO_PRIMEIRO_TRIMESTRE?.materias?.[chave];
  if (!container || !configuracao || !atividades) return;

  const painelPrimeiro = criarPainelPrimeiroTrimestre(chave, container, materiaOriginal);
  const painelSegundo = criarPainelSegundoTrimestre(chave, atividades);
  const abas = criarAbas(chave, painelPrimeiro, painelSegundo);
  container.replaceChildren(criarCabecalhoArea(configuracao), abas, painelPrimeiro, painelSegundo);

  container.addEventListener("click", (evento) => {
    const aba = evento.target.closest(".trimestre-aba");
    if (aba) {
      ativarTrimestre(container, Number(aba.dataset.trimestre));
      return;
    }

    const zoom = evento.target.closest(".evidencia-zoom");
    if (zoom) {
      abrirLightbox(zoom);
      return;
    }

    const copiar = evento.target.closest(".atividade-codigo__copiar");
    if (copiar) copiarCodigo(copiar);
  });

  abas.addEventListener("keydown", (evento) => {
    const abaAtual = evento.target.closest(".trimestre-aba");
    if (!abaAtual) return;

    const listaAbas = [...abas.querySelectorAll(".trimestre-aba")];
    const indiceAtual = listaAbas.indexOf(abaAtual);
    let indiceDestino;

    if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
      indiceDestino = (indiceAtual - 1 + listaAbas.length) % listaAbas.length;
    } else if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
      indiceDestino = (indiceAtual + 1) % listaAbas.length;
    } else if (evento.key === "Home") {
      indiceDestino = 0;
    } else if (evento.key === "End") {
      indiceDestino = listaAbas.length - 1;
    } else {
      return;
    }

    evento.preventDefault();
    const abaDestino = listaAbas[indiceDestino];
    ativarTrimestre(container, Number(abaDestino.dataset.trimestre));
    abaDestino.focus();
  });

  const trimestreUrl = new URLSearchParams(window.location.search).get("trimestre");
  ativarTrimestre(container, trimestreUrl === "1" ? 1 : 2, false);
});
