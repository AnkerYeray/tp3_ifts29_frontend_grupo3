/* Soulless Catcher · TP3 · interacciones de la landing
   - Resalto de recorridos de ejemplo en los diagramas (ilustrativo)
   - Estado activo de la navegación según la sección visible
   No ejecuta ningún proceso real: sólo presenta los flujos. */

(function () {
  "use strict";

  /* ── Casos de ejemplo: camino (ids del SVG) + descripción ── */
  var CASES = {
    "f1-c1": {
      nodes: ["f1-start", "f1-tools", "f1-dec", "f1-b-no", "f1-no1", "f1-no2", "f1-no3"],
      caption:
        "Caso SIN evidencia suficiente (cumple la sentencia R5): imagen sin metadatos, sin coincidencias de fuentes y " +
        "con análisis de patrones inconcluyente → el agente muestra «no concluyente» y explica qué falta para avanzar."
    },
    "f1-c2": {
      nodes: ["f1-start", "f1-tools", "f1-dec", "f1-b-si", "f1-si1", "f1-si2"],
      caption:
        "Caso CON evidencia suficiente (camino diseñado por el grupo): metadatos coherentes, patrones de captura y " +
        "fuente verificable → el agente emite el informe conclusivo con la evidencia reunida."
    },
    "f2-c1": {
      nodes: ["f2-start", "f2-step2", "f2-dec", "f2-b-si", "f2-si1", "f2-si2", "f2-si3", "f2-si4"],
      caption:
        "Caso que CUMPLE la sentencia R6: el usuario señala el punto del informe que disputa y adjunta una evidencia " +
        "nueva → se registra el pedido (ID, fecha, estado) y se deriva a una persona junto con el material original."
    },
    "f2-c2": {
      nodes: ["f2-start", "f2-step2", "f2-dec", "f2-b-no", "f2-no1", "f2-no2", "f2-no3"],
      caption:
        "Caso que NO CUMPLE (falta la conjunción «y»): el usuario adjunta material pero no cuestiona el informe → " +
        "el sistema pide completar lo que falta; todavía no se registra ni se deriva (decisión del grupo)."
    }
  };

  var STEP_MS = 170; /* retardo entre nodos al resaltar un caso */

  function panelOf(el) {
    return el.closest(".diagram-panel");
  }

  function clearPanel(panel) {
    if (!panel) return;
    if (panel._timers) panel._timers.forEach(clearTimeout);
    panel._timers = [];

    panel.querySelectorAll(".hl").forEach(function (node) {
      node.classList.remove("hl");
    });

    panel.querySelectorAll("[data-case]").forEach(function (btn) {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-pressed", "false");
    });

    var caption = panel.querySelector(".case-caption");
    if (caption && panel._defaultCaption) {
      caption.textContent = panel._defaultCaption;
    }
  }

  function highlightCase(panel, caseId, btn) {
    var data = CASES[caseId];
    if (!data) return;

    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");

    panel._timers = panel._timers || [];
    data.nodes.forEach(function (nodeId, i) {
      panel._timers.push(
        setTimeout(function () {
          var node = document.getElementById(nodeId);
          if (node) node.classList.add("hl");
        }, i * STEP_MS)
      );
    });

    var caption = panel.querySelector(".case-caption");
    if (caption) {
      caption.textContent = "";
      panel._timers.push(
        setTimeout(function () {
          caption.textContent = data.caption;
        }, Math.min(data.nodes.length * STEP_MS, 700))
      );
    }
  }

  /* ── Botones de caso ── */
  document.querySelectorAll(".diagram-panel").forEach(function (panel) {
    panel._timers = [];
    var caption = panel.querySelector(".case-caption");
    if (caption) panel._defaultCaption = caption.textContent;

    panel.querySelectorAll("[data-case]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var yaActivo = btn.classList.contains("is-active");
        clearPanel(panel);
        if (!yaActivo) highlightCase(panel, btn.dataset.case, btn);
      });
    });

    var clearBtn = panel.querySelector("[data-clear]");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        clearPanel(panel);
      });
    }
  });

  /* ── Navegación: sección visible → enlace activo ── */
  var links = Array.prototype.slice.call(document.querySelectorAll(".sidebar-nav a"));
  var sections = links
    .map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            var isActive = a.getAttribute("href") === "#" + entry.target.id;
            a.classList.toggle("active", isActive);
            if (isActive) {
              a.setAttribute("aria-current", "location");
            } else {
              a.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  var easterEgg = document.querySelector(".easter-egg");
  if (easterEgg) {
    easterEgg.addEventListener("click", function () {
      var page = document.createElement("main");
      var message = document.createElement("p");
      page.className = "easter-egg-page";
      message.className = "easter-egg-message";
      message.textContent =
        "Soulless Catcher, un guiño a lo que fui, ahora convertido en otro usuario de IA del montón, a la fuerza, sin alma, sin pasión... el código manual, como el David de Miguel Angel, será visto en un museo, y extrañaremos las épocas de la inteligencia humana";
      page.appendChild(message);
      document.body.replaceChildren(page);
      document.body.classList.add("easter-egg-open");
    });
  }
})();
