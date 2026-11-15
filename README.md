# TP3 · Dos sentencias, dos soluciones — Soulless Catcher

**Desarrollo de Sistemas Web · Front End · IFTS 29 · 2° cuatrimestre 2026**
Entrega: **26/11/2026** · Producto: una landing con dos flujos · Evaluación por rúbrica (Aprobado / Desaprobado)

---

## La startup asignada

| Dato | Valor |
| --- | --- |
| Startup | **Soulless Catcher** |
| Servicio | Verificación de contenido digital |
| Objetivo | Asistente para revisar imágenes y videos sospechosos de haber sido generados con IA |
| Bloque | **Informe y revisión** |
| Asignación docente (sorteo) | **S04-C** (grupos 03 / 25 / 36) |
| Sentencias | **FRASE 1 · R5** y **FRASE 2 · R6** |
| Logo original | `assets/logo-soulless-catcher.webp` — descargado del material asignado ([logos/S04.webp](https://ifts29-portada.vercel.app/trayecto/tp3/logos/S04.webp)), se usa completo y legible en la landing |
| Origen | Startup creada por estudiantes del **IFTS 16** (condiciones expresadas con lógica proposicional) |

### Sentencias (redacción original, sin modificar)

> **FRASE 1 · R5** — Si la revisión no reúne evidencia suficiente, el sistema muestra un resultado no concluyente y explica qué información falta.

> **FRASE 2 · R6** — Si el usuario cuestiona el informe y aporta nueva evidencia, el sistema registra el pedido de revisión y lo deriva a una persona junto con el material original.

---

## Grupo

> ⚠️ **Completar antes de publicar:** número de grupo, integrantes y aportes concretos (requisito de la rúbrica 01).
> También hay campos marcados en amarillo dentro de `index.html` (equipo en la landing y enlaces en el pie).

| Integrante | Rol acordado | Aporte concreto |
| --- | --- | --- |
| _…completar_ | Coordinación de instrucciones al agente | _…completar_ |
| _…completar_ | Revisión de sentencias y flujos | _…completar_ |
| _…completar_ | Pruebas de la página (desktop, desplegables, casos) | _…completar_ |
| _…completar_ | Publicación y documentación | _…completar_ |

---

## Qué contiene la landing

1. **Presentación** — logo original completo, nombre, servicio, descripción del problema, equipo, bloque asignado y origen IFTS 16.
2. **Dos propuestas** — una por sentencia, cada una con la sentencia original, un título y su beneficio explicado en dos o tres frases.
3. **Dos diagramas** (SVG) — inicio → datos → decisión → acciones → resultado, con flechas y alternativas rotuladas; incluyen un paso de intervención humana (Flujo 2) y marcan con borde punteado los caminos que la sentencia no define (decisiones del grupo).
4. **Desplegables** — ficha de cada sentencia (sentencia → datos necesarios → condición → consecuencia), recorrido propuesto, herramientas del agente, excepciones y casos límite, cómo comprobarlo y qué agrega la propuesta.
5. **Casos interactivos** — botones que resaltan en el diagrama un recorrido que cumple la condición y otro que no (ejemplo ilustrativo: la página no ejecuta el proceso).

### Las dos propuestas

| | Título | Idea breve |
| --- | --- | --- |
| Flujo 1 · R5 | **«No concluyente, pero útil»** | Si el análisis no alcanza, el usuario recibe un resultado no concluyente con la lista concreta de qué falta, en vez de un “no sabemos” vacío. |
| Flujo 2 · R6 | **«Revisión registrada y derivada a una persona»** | El cuestionamiento con nueva evidencia se registra como pedido (ID, estado) y se deriva a una persona con material original + informe previo + evidencia nueva. |

---

## Cómo ver el proyecto

No necesita build ni dependencias (HTML + CSS + JS puros):

```bash
# opción 1: abrir directo
open index.html          # o doble clic en el archivo

# opción 2: servirlo en local
python3 -m http.server 8080
# → http://localhost:8080
```

Estructura:

```
tp3/
├── index.html                  # landing completa
├── css/styles.css              # estilos y leyenda de nodos SVG
├── js/main.js                  # resaltado de casos + navegación activa
├── assets/logo-soulless-catcher.webp  # logo original S04 (512×512)
├── docs/fichas.md              # fichas de las sentencias (punto de control 3) y títulos (punto 4)
└── README.md                   # este archivo
```

---

## Cómo se construyó (100% agéntico)

El grupo dirigió; el agente generó y modificó **todos** los archivos. Nadie editó código a mano: se pidieron instrucciones, se revisó el resultado y se volvió a pedir cambios.

| Campo | Registro |
| --- | --- |
| **Aplicación** (entorno de trabajo) | **OpenCode** |
| **Modelo** (tal como aparece seleccionado en la aplicación) | **MiMo-V2.6-Flash Free** — id: `mimo-v2.6-flash-free` |
| Para qué se usó | Leer y evaluar la consigna (PDF), recuperar la asignación oficial y el logo desde la web de la materia, y generar/iterar todos los archivos del proyecto: estructura, copywriting, diagramas SVG, estilos, interacciones y documentación |
| Cambios solicitados | ver registro de iteración ↓ |

> Si el grupo alternó otras herramientas (Cursor, Codex, etc.), agreguen una fila por cada una. Si una aplicación no informa el modelo, escriban **“modelo no informado”**; no lo inventen.

### Registro de iteración (evidencia para el nivel “Propone”)

| # | Instrucción inicial | Problema detectado | Pedido de mejora | Qué cambió y por qué |
| --- | --- | --- | --- | --- |
| 1 | _Ej.: “Armá la landing con la consigna y las dos frases de Soulless Catcher”_ | _Ej.: un diagrama quedaba cortado en desktop_ | _Ej.: “achicá los nodos / hacer scroll horizontal del diagrama”_ | _Ej.: el diagrama ahora se lee completo sin desbordes_ |
| 2 | _(completar con iteraciones reales)_ | | | |

---

## Publicación (completar antes de entregar)

- [ ] **Repositorio del grupo:** `https://…` _(agregar enlace)_
- [ ] **Landing publicada:** `https://…` _(agregar enlace; por ejemplo GitHub Pages, Netlify o Vercel)_
- [ ] Ambos enlaces probados **desde una ventana sin sesión**
- [ ] Los dos enlaces quedan identificados en este README

---

## Checklist contra la rúbrica

**01 · Participación**
- [ ] Todos participan y pueden explicar las dos propuestas
- [ ] Integrantes y aportes concretos registrados arriba

**02 · Repositorio y landing**
- [ ] Los dos enlaces accesibles sin sesión y verificados
- [ ] README con el enlace correcto a la landing final

**03 · Landing acorde a la consigna**
- [ ] Startup con su logo original completo y legible
- [ ] Las dos sentencias con su redacción original
- [ ] Una propuesta por sentencia (título + beneficio)
- [ ] Los dos diagramas dentro de la página
- [ ] Desplegables con datos, decisión, acción, resultado, excepciones e intervención humana
- [ ] Se recorre bien en desktop, sin desbordes; desplegables con clic **y** teclado (Enter/Espacio)

**04 · Dos flujos agénticos**
- [ ] Un diagrama por sentencia, con datos, decisiones, acciones y resultados coherentes
- [ ] Se distinguen los supuestos agregados (borde punteado = camino del grupo)
- [ ] Caso límite / excepción explicada en cada flujo, con intervención humana cuando corresponde
- [ ] Recorrido probado: un caso que cumple y uno que no, por cada flujo

**05 · Herramientas de IA**
- [ ] Aplicación y modelo declarados (o “modelo no informado”)
- [ ] Usos y aportes del grupo descritos
- [ ] Iteración documentada (instrucción → problema → mejora → qué cambió)
