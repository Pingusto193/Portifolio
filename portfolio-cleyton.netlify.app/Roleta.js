/* ============================================================================
   Roleta.js — a roda 3D de matérias.

   O giro é simulado: o arrasto injeta velocidade angular, e ao soltar a roda
   continua girando e vai perdendo força por atrito até encaixar no cartão
   mais próximo.
   ============================================================================ */

(function () {
  "use strict";

  /* Quanto da velocidade sobrevive a cada quadro (0–1). Mais perto de 1 =
     roda mais "solta", que gira por mais tempo depois do arrasto. */
  var ATRITO = 0.945;
  /* Graus de giro por pixel arrastado. */
  var SENSIBILIDADE = 0.34;
  /* Abaixo desta velocidade a roda desiste e é puxada para o encaixe. */
  var LIMITE_PARADA = 0.32;
  /* Força da mola que encaixa o cartão no centro. */
  var MOLA = 0.13;

  document.addEventListener("DOMContentLoaded", function () {
    var bloco = document.querySelector(".roda-bloco");
    var palco = document.getElementById("rodaPalco");
    var roda = document.getElementById("roda");
    if (!bloco || !palco || !roda) return;

    var cartas = Array.prototype.slice.call(roda.querySelectorAll(".carta"));
    if (!cartas.length) return;

    /* Movimento reduzido: nada de 3D nem inércia, vira uma grade. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bloco.classList.add("roda--estatica");
      return;
    }

    var total = cartas.length;
    var PASSO = 360 / total;

    var angulo = 0;
    var velocidade = 0;
    var destino = 0;
    var raio = 300;

    var arrastando = false;
    var moveu = false;
    var ultimoX = 0;
    var ponteiro = null;

    /* ------------------------------------------------------------ geometria */

    function medir() {
      var largura = palco.clientWidth || 900;
      var carta = Math.round(Math.max(212, Math.min(280, largura * 0.32)));
      var altura = Math.round(carta * 1.33);

      /* Raio mínimo para os cartões não se atravessarem, com folga. */
      raio = Math.round((carta / 2 / Math.tan(Math.PI / total)) * 1.16);

      palco.style.setProperty("--carta-w", carta + "px");
      palco.style.setProperty("--carta-h", altura + "px");
      palco.style.setProperty("--raio", raio + "px");
      palco.style.setProperty("--passo", PASSO + "deg");
    }

    /* --------------------------------------------------------------- índice */

    function indiceDaFrente() {
      return ((Math.round(-angulo / PASSO) % total) + total) % total;
    }

    /* -------------------------------------------------------------- desenho */

    var frenteAnterior = -1;

    function aplicar() {
      roda.style.transform = "translateZ(" + -raio + "px) rotateY(" + angulo + "deg)";

      for (var i = 0; i < total; i++) {
        /* Quanto o cartão está desviado da frente, de 0 a 180 graus. */
        var bruto = (((angulo + i * PASSO) % 360) + 360) % 360;
        var desvio = Math.min(bruto, 360 - bruto);

        cartas[i].style.opacity = Math.max(0, 1 - desvio / 128).toFixed(3);
        cartas[i].style.pointerEvents = desvio < 95 ? "auto" : "none";
      }

      var frente = indiceDaFrente();
      if (frente !== frenteAnterior) {
        frenteAnterior = frente;
        for (var j = 0; j < total; j++) {
          cartas[j].classList.toggle("carta--frente", j === frente);
        }
      }
    }

    /* ---------------------------------------------------------------- física */

    function quadro() {
      if (!arrastando) {
        if (Math.abs(velocidade) > LIMITE_PARADA) {
          /* Ainda girando por inércia: gasta a velocidade no atrito. */
          angulo += velocidade;
          velocidade *= ATRITO;
          destino = Math.round(angulo / PASSO) * PASSO;
        } else {
          velocidade = 0;
          var diferenca = destino - angulo;
          if (Math.abs(diferenca) < 0.02) {
            angulo = destino;
          } else {
            angulo += diferenca * MOLA;
          }
        }
      }

      aplicar();
      requestAnimationFrame(quadro);
    }

    /* --------------------------------------------------------------- arrasto */

    /* O arrasto escuta na janela em vez de usar setPointerCapture: a captura
       reencaminharia o clique para o palco e o cartão da frente deixaria de
       abrir a página da matéria. */
    function mover(evento) {
      if (!arrastando || evento.pointerId !== ponteiro) return;

      var deslocamento = evento.clientX - ultimoX;
      ultimoX = evento.clientX;
      if (Math.abs(deslocamento) > 2) moveu = true;

      var avanco = deslocamento * SENSIBILIDADE;
      angulo += avanco;
      /* Média com o quadro anterior para o arremesso não ficar espasmódico. */
      velocidade = velocidade * 0.55 + avanco * 0.45;
    }

    function soltar(evento) {
      if (!arrastando || (evento && evento.pointerId !== ponteiro)) return;

      arrastando = false;
      ponteiro = null;
      palco.classList.remove("girando");

      window.removeEventListener("pointermove", mover);
      window.removeEventListener("pointerup", soltar);
      window.removeEventListener("pointercancel", soltar);

      /* Um toque sem arremesso encaixa no cartão mais próximo. */
      if (Math.abs(velocidade) <= LIMITE_PARADA) {
        destino = Math.round(angulo / PASSO) * PASSO;
      }
    }

    palco.addEventListener("pointerdown", function (evento) {
      if (evento.pointerType === "mouse" && evento.button !== 0) return;

      arrastando = true;
      moveu = false;
      ultimoX = evento.clientX;
      ponteiro = evento.pointerId;
      velocidade = 0;
      palco.classList.add("girando");

      window.addEventListener("pointermove", mover);
      window.addEventListener("pointerup", soltar);
      window.addEventListener("pointercancel", soltar);
    });

    /* --------------------------------------------------------------- navegar */

    function irPara(indice) {
      var base = -indice * PASSO;
      /* Escolhe a volta mais próxima do ângulo atual para não dar giro extra. */
      var voltas = Math.round((angulo - base) / 360);
      destino = base + voltas * 360;
      velocidade = 0;
    }

    function girar(direcao) {
      velocidade = 0;
      destino = Math.round(angulo / PASSO) * PASSO - direcao * PASSO;
    }

    /* Sem setas na tela, o teclado continua sendo o caminho acessível. */
    palco.addEventListener("keydown", function (evento) {
      if (evento.key === "ArrowRight") { evento.preventDefault(); girar(1); }
      if (evento.key === "ArrowLeft") { evento.preventDefault(); girar(-1); }
    });

    /* Clicar num cartão lateral traz ele para a frente em vez de navegar. */
    cartas.forEach(function (carta, i) {
      carta.addEventListener("click", function (evento) {
        if (moveu) {
          evento.preventDefault();
          return;
        }
        if (i !== indiceDaFrente()) {
          evento.preventDefault();
          irPara(i);
        }
      });
      carta.addEventListener("dragstart", function (evento) {
        evento.preventDefault();
      });
    });

    /* ------------------------------------------------------------------ boot */

    medir();
    window.addEventListener("resize", function () {
      medir();
      aplicar();
    });

    aplicar();
    requestAnimationFrame(quadro);
  });
})();
