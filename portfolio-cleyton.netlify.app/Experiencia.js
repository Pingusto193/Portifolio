/* ============================================================================
   Experiencia.js — entrada, revelações, transições e microinterações.
   Carregado de forma síncrona no <head> para cobrir a tela antes do 1º pintar.
   ============================================================================ */

(function () {
  "use strict";

  var raiz = document.documentElement;
  var menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
  var CHAVE_INTRO = "portfolio:intro-vista";
  var DURACAO_INTRO = 2700;
  var DURACAO_SAIDA = 400;

  raiz.classList.add("exp-js");

  /* ---------------------------------------------------------------- estado */

  function jaViuIntro() {
    try {
      return window.sessionStorage.getItem(CHAVE_INTRO) === "1";
    } catch (erro) {
      return false;
    }
  }

  function registrarIntro() {
    try {
      window.sessionStorage.setItem(CHAVE_INTRO, "1");
    } catch (erro) {
      /* modo privado: a intro simplesmente se repete */
    }
  }

  var animar = !menosMovimento.matches;
  var mostrarIntro = animar && !jaViuIntro();
  var entradaLiberada = false;

  /* Cobre a tela imediatamente, antes de qualquer pintura do <body>. */
  if (animar) {
    raiz.classList.add("exp-entrando");
    raiz.classList.add("exp-travado");
  }

  /* ------------------------------------------------------------ utilitários */

  function criar(tag, classe, html) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (html != null) el.innerHTML = html;
    return el;
  }

  function proximoQuadro(fn) {
    requestAnimationFrame(function () {
      requestAnimationFrame(fn);
    });
  }

  function limitarPorQuadro(fn) {
    var agendado = false;
    return function () {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(function () {
        agendado = false;
        fn();
      });
    };
  }

  /* ----------------------------------------------------------- tela de entrada */

  function montarIntro() {
    var nome = "CLEYTON PEDROZA";
    var letras = nome
      .split("")
      .map(function (letra, i) {
        var conteudo = letra === " " ? "&nbsp;" : letra;
        return '<span style="--i:' + i + '">' + conteudo + "</span>";
      })
      .join("");

    var intro = criar("div", "intro");
    intro.id = "intro";
    intro.setAttribute("role", "presentation");
    intro.innerHTML =
      '<span class="intro__cortina intro__cortina--topo"></span>' +
      '<span class="intro__cortina intro__cortina--base"></span>' +
      '<div class="intro__conteudo">' +
      '<span class="intro__risco" aria-hidden="true"></span>' +
      '<p class="intro__nome" aria-hidden="true">' + letras + "</p>" +
      '<p class="intro__cargo">Portfólio · Desenvolvimento de Sistemas</p>' +
      '<div class="intro__barra"><span class="intro__barra-preenchimento"></span></div>' +
      "</div>";

    document.body.appendChild(intro);
    return intro;
  }

  function encerrarIntro(intro, aoTerminar) {
    if (intro.dataset.encerrando === "1") return;
    intro.dataset.encerrando = "1";
    intro.classList.add("intro--saindo");
    raiz.classList.remove("exp-travado");
    registrarIntro();

    window.setTimeout(function () {
      if (intro.parentNode) intro.parentNode.removeChild(intro);
      aoTerminar();
    }, 950);
  }

  /* --------------------------------------------------- revelação ao rolar */

  var REGRAS_REVEAL = [
    { seletor: ".portfolio__item", tipo: "sobe", escada: 120 },
    { seletor: ".area-cabecalho", tipo: "sobe" },
    { seletor: ".trimestre-abas", tipo: "sobe" },
    { seletor: ".trimestre-cabecalho", tipo: "esquerda" },
    { seletor: ".atividade-grupo__cabecalho", tipo: "sobe" },
    { seletor: ".atividade-card", tipo: "sobe" },
    { seletor: ".conteudo", tipo: "sobe" },
    { seletor: ".documento-card", tipo: "sobe", escada: 70 },
    { seletor: ".evidencia-imagem", tipo: "zoom", escada: 60 }
  ];

  var observadorReveal = null;

  function revelar(el) {
    el.classList.add("revelado");
    if (el.classList.contains("section")) el.classList.add("visible");
    dispararContadores(el);
  }

  function marcarAlvos(escopo) {
    /* Seções já possuem seu próprio estado inicial no index.CSS. */
    var secoes = escopo.querySelectorAll(".section");
    for (var s = 0; s < secoes.length; s++) {
      registrarObservado(secoes[s]);
    }

    for (var r = 0; r < REGRAS_REVEAL.length; r++) {
      var regra = REGRAS_REVEAL[r];
      var itens = escopo.querySelectorAll(regra.seletor);
      for (var i = 0; i < itens.length; i++) {
        var item = itens[i];
        if (item.dataset.reveal) continue;
        item.dataset.reveal = regra.tipo;
        if (regra.escada) {
          item.style.setProperty("--atraso", Math.min(i, 6) * regra.escada + "ms");
        }
        registrarObservado(item);
      }
    }

    /* Alvos declarados direto no HTML. */
    var declarados = escopo.querySelectorAll("[data-reveal]");
    for (var d = 0; d < declarados.length; d++) {
      registrarObservado(declarados[d]);
    }
  }

  function registrarObservado(el) {
    if (el.dataset.expObservado === "1") return;
    el.dataset.expObservado = "1";
    if (observadorReveal) {
      observadorReveal.observe(el);
    } else {
      revelar(el);
    }
  }

  function iniciarRevelacoes() {
    if (!animar || !("IntersectionObserver" in window)) {
      marcarAlvos(document);
      var pendentes = document.querySelectorAll("[data-reveal], .section");
      for (var i = 0; i < pendentes.length; i++) revelar(pendentes[i]);
      return;
    }

    observadorReveal = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          revelar(entrada.target);
          observadorReveal.unobserve(entrada.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    marcarAlvos(document);
    acompanharConteudoNovo();
  }

  /* Páginas de atividades montam os cartões por JavaScript depois do load. */
  function acompanharConteudoNovo() {
    var alvo = document.querySelector("main.page") || document.body;
    if (!("MutationObserver" in window) || !alvo) return;

    var pendente = false;
    var observador = new MutationObserver(function (mutacoes) {
      var relevante = mutacoes.some(function (m) {
        return Array.prototype.some.call(m.addedNodes, function (no) {
          return no.nodeType === 1 && !no.classList.contains("brilho-cartao");
        });
      });
      if (!relevante || pendente) return;
      pendente = true;
      requestAnimationFrame(function () {
        pendente = false;
        marcarAlvos(alvo);
        aplicarBrilho(alvo);
      });
    });

    observador.observe(alvo, { childList: true, subtree: true });
  }

  /* ------------------------------------------------------ entrada encadeada */

  function dispararEntrada() {
    entradaLiberada = true;

    var itens = document.querySelectorAll("[data-entrada]");
    for (var i = 0; i < itens.length; i++) {
      var item = itens[i];
      var passo = parseInt(item.dataset.entrada, 10);
      item.style.setProperty("--atraso", (isNaN(passo) ? i : passo) * 90 + "ms");
      item.classList.add("entrou");
    }
    dispararContadores(document);
    iniciarRotadores();
  }

  /* --------------------------------------------------------- barra de progresso */

  function montarProgresso() {
    var barra = criar("div", "progresso-rolagem", "<span></span>");
    document.body.appendChild(barra);
    var preenchimento = barra.firstElementChild;

    var atualizar = limitarPorQuadro(function () {
      var altura = document.documentElement.scrollHeight - window.innerHeight;
      var razao = altura > 0 ? window.scrollY / altura : 0;
      preenchimento.style.transform = "scaleX(" + Math.min(1, Math.max(0, razao)) + ")";
    });

    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    atualizar();
  }

  /* ------------------------------------------------------------ barra fixada */

  function observarBarraSuperior() {
    var barra = document.querySelector(".top-bar");
    if (!barra) return;

    var atualizar = limitarPorQuadro(function () {
      barra.classList.toggle("fixada", window.scrollY > 40);
    });

    window.addEventListener("scroll", atualizar, { passive: true });
    atualizar();
  }

  /* ------------------------------------------------------------ voltar ao topo */

  function montarAoTopo() {
    var botao = criar("button", "ao-topo", "&#8593;");
    botao.type = "button";
    botao.setAttribute("aria-label", "Voltar ao topo");
    document.body.appendChild(botao);

    botao.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: animar ? "smooth" : "auto" });
    });

    var atualizar = limitarPorQuadro(function () {
      botao.classList.toggle("visivel", window.scrollY > 520);
    });

    window.addEventListener("scroll", atualizar, { passive: true });
    atualizar();
  }

  /* -------------------------------------------------------- brilho do ponteiro */

  var SELETORES_BRILHO = [
    ".portfolio__item",
    ".section__content",
    ".split__column",
    ".atividade-card",
    ".conteudo",
    ".cartao-destaque"
  ].join(",");

  function aplicarBrilho(escopo) {
    if (!animar || !window.matchMedia("(hover: hover)").matches) return;

    var cartoes = escopo.querySelectorAll(SELETORES_BRILHO);
    for (var i = 0; i < cartoes.length; i++) {
      var cartao = cartoes[i];
      if (cartao.dataset.brilho === "1") continue;
      cartao.dataset.brilho = "1";
      cartao.classList.add("tem-brilho");
      cartao.appendChild(criar("span", "brilho-cartao"));
      cartao.addEventListener("pointermove", moverBrilho);
    }
  }

  function moverBrilho(evento) {
    var caixa = this.getBoundingClientRect();
    this.style.setProperty("--mx", ((evento.clientX - caixa.left) / caixa.width) * 100 + "%");
    this.style.setProperty("--my", ((evento.clientY - caixa.top) / caixa.height) * 100 + "%");
  }

  /* ----------------------------------------------------------- foco do cursor */

  function montarFocoCursor() {
    if (!animar || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var foco = criar("div", "foco-cursor");
    document.body.appendChild(foco);

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var atualX = x;
    var atualY = y;

    window.addEventListener(
      "pointermove",
      function (evento) {
        x = evento.clientX;
        y = evento.clientY;
        foco.classList.add("ativo");
      },
      { passive: true }
    );

    (function seguir() {
      atualX += (x - atualX) * 0.09;
      atualY += (y - atualY) * 0.09;
      foco.style.transform = "translate3d(" + atualX + "px," + atualY + "px,0)";
      requestAnimationFrame(seguir);
    })();
  }

  /* -------------------------------------------------------------- contadores */

  /* Nada de contar atrás da tela de entrada: a animação seria perdida. */
  function dispararContadores(escopo) {
    if (!entradaLiberada) return;

    var alvos = escopo.querySelectorAll ? escopo.querySelectorAll("[data-contador]") : [];
    for (var i = 0; i < alvos.length; i++) {
      animarContador(alvos[i]);
    }
  }

  function animarContador(el) {
    if (el.dataset.contando === "1") return;
    el.dataset.contando = "1";

    var destino = parseFloat(el.dataset.contador);
    if (isNaN(destino)) return;

    var sufixo = el.dataset.contadorSufixo || "";
    if (!animar) {
      el.textContent = destino + sufixo;
      return;
    }

    var inicio = null;
    var duracao = 1400;

    function passo(agora) {
      if (inicio === null) inicio = agora;
      var avanco = Math.min(1, (agora - inicio) / duracao);
      var suave = 1 - Math.pow(1 - avanco, 3);
      el.textContent = Math.round(destino * suave) + sufixo;
      if (avanco < 1) requestAnimationFrame(passo);
    }

    requestAnimationFrame(passo);
  }

  /* --------------------------------------------------------------- rotadores */

  function iniciarRotadores() {
    var alvos = document.querySelectorAll("[data-rotador]");

    for (var i = 0; i < alvos.length; i++) {
      (function (el) {
        var frases;
        try {
          frases = JSON.parse(el.dataset.rotador);
        } catch (erro) {
          return;
        }
        if (!Array.isArray(frases) || !frases.length) return;

        if (!animar) {
          el.textContent = frases[0];
          return;
        }

        var indice = 0;
        var posicao = 0;
        var apagando = false;

        (function ciclo() {
          var frase = frases[indice];
          posicao += apagando ? -1 : 1;
          el.textContent = frase.slice(0, posicao);

          var espera = apagando ? 38 : 62;

          if (!apagando && posicao === frase.length) {
            apagando = true;
            espera = 1900;
          } else if (apagando && posicao === 0) {
            apagando = false;
            indice = (indice + 1) % frases.length;
            espera = 320;
          }

          window.setTimeout(ciclo, espera);
        })();
      })(alvos[i]);
    }
  }

  /* ------------------------------------------------------------- parallax leve */

  function montarParallax() {
    var alvos = document.querySelectorAll("[data-parallax]");
    if (!animar || !alvos.length) return;

    var atualizar = limitarPorQuadro(function () {
      for (var i = 0; i < alvos.length; i++) {
        var fator = parseFloat(alvos[i].dataset.parallax) || 0.08;
        alvos[i].style.transform = "translate3d(0," + window.scrollY * -fator + "px,0)";
      }
    });

    window.addEventListener("scroll", atualizar, { passive: true });
  }

  /* ------------------------------------------------------- link da página atual */

  function marcarLinkAtual() {
    var atual = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    var links = document.querySelectorAll(".Nav_Menu a");
    var casa = function (elo) {
      return (elo.pathname.split("/").pop() || "index.html").toLowerCase() === atual;
    };

    /* Páginas de matéria não aparecem no menu: preserva o que o HTML marcou. */
    if (!Array.prototype.some.call(links, casa)) return;

    for (var i = 0; i < links.length; i++) {
      if (casa(links[i])) {
        links[i].setAttribute("aria-current", "page");
      } else {
        links[i].removeAttribute("aria-current");
      }
    }
  }

  /* ------------------------------------------------------ transição entre páginas */

  function ehLinkInterno(elo) {
    if (!elo || !elo.href) return false;
    if (elo.target && elo.target !== "_self") return false;
    if (elo.hasAttribute("download")) return false;

    var href = elo.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#") return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;
    if (elo.origin !== location.origin) return false;
    if (elo.pathname === location.pathname && elo.hash) return false;

    return true;
  }

  function montarTransicao() {
    if (!animar) return;

    document.addEventListener("click", function (evento) {
      if (evento.defaultPrevented) return;
      if (evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;

      var elo = evento.target.closest ? evento.target.closest("a") : null;
      if (!ehLinkInterno(elo)) return;

      evento.preventDefault();
      raiz.classList.add("exp-saindo");
      window.setTimeout(function () {
        window.location.href = elo.href;
      }, DURACAO_SAIDA);
    });
  }

  /* -------------------------------------------------------------------- início */

  function iniciar() {
    marcarLinkAtual();
    montarProgresso();
    observarBarraSuperior();
    montarAoTopo();
    montarFocoCursor();
    aplicarBrilho(document);
    montarParallax();
    montarTransicao();
    iniciarRevelacoes();

    if (mostrarIntro) {
      var intro = montarIntro();
      proximoQuadro(function () {
        raiz.classList.remove("exp-entrando");
      });

      var finalizar = function () {
        encerrarIntro(intro, dispararEntrada);
      };

      var cronometro = window.setTimeout(finalizar, DURACAO_INTRO);
      var porTecla = function (evento) {
        if (evento.key === "Escape" || evento.key === "Enter" || evento.key === " ") antecipar();
      };
      var antecipar = function () {
        window.clearTimeout(cronometro);
        document.removeEventListener("keydown", porTecla);
        finalizar();
      };

      intro.addEventListener("click", antecipar);
      document.addEventListener("keydown", porTecla);
    } else {
      raiz.classList.remove("exp-travado");
      proximoQuadro(function () {
        raiz.classList.remove("exp-entrando");
        dispararEntrada();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }

  /* Volta pelo histórico: nunca deixar a cortina presa cobrindo a página. */
  window.addEventListener("pageshow", function (evento) {
    raiz.classList.remove("exp-saindo");
    if (evento.persisted) {
      raiz.classList.remove("exp-entrando", "exp-travado");
    }
  });
})();
