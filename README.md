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
| Asignación docente (sorteo) | **S04-C** · Grupo **03** |
| Sentencias | **FRASE 1 · R5** y **FRASE 2 · R6** |
| Logo original | `assets/logo-soulless-catcher.webp` — descargado del material asignado ([logos/S04.webp](https://ifts29-portada.vercel.app/trayecto/tp3/logos/S04.webp)), se usa completo y legible en la landing |
| Origen | Startup creada por estudiantes del **IFTS 16** (condiciones expresadas con lógica proposicional) |

### Sentencias (redacción original, sin modificar)

> **FRASE 1 · R5** — Si la revisión no reúne evidencia suficiente, el sistema muestra un resultado no concluyente y explica qué información falta.

> **FRASE 2 · R6** — Si el usuario cuestiona el informe y aporta nueva evidencia, el sistema registra el pedido de revisión y lo deriva a una persona junto con el material original.

---

## Grupo

**Grupo 03** · mismos integrantes que en TP1 y TP2.
| Integrante | GitHub | Rol acordado | Aporte concreto |
| --- | --- | --- | --- |
| Ignacio Tomás Humphreys | [Ignacio-Humphreys](https://github.com/Ignacio-Humphreys) | Análisis lógico y validación de sentencias | Redacción y revisión de las fichas lógicas de R5 y R6; control de correspondencia entre datos de entrada, condiciones, consecuencias y supuestos agregados. |
| Lihue Anker Díaz | [AnkerYeray](https://github.com/AnkerYeray) | Gestión del repositorio y despliegue | Configuración del repositorio en GitHub, manejo de ramas y pull requests, revisión de estructura de archivos y puesta en marcha de la publicación en GitHub Pages. |
| Cristel Nazarena Frías | [CristelFrias](https://github.com/CristelFrias) | Desarrollo de interactividad y revisión funcional | Incorporación de simuladores interactivos R5 y R6 con ChatGPT; revisión y pruebas de la landing en el navegador. |
| Lucas Federico De Diego | [lucasfedericodd](https://github.com/lucasfedericodd) | Coordinación de instrucciones agénticas y control de calidad | Formulación de prompts para los agentes de programación, contraste exhaustivo contra la consigna/rúbrica y verificación del cumplimiento 100% agéntico. |
| David Sebastian Giordano Rodriguez | [Sebastian1601](https://github.com/Sebastian1601) | Pruebas de usabilidad y accesibilidad desktop | Testing de visualización sin desbordes en desktop, verificación de navegación por teclado (Enter/Espacio) en desplegables y comprobación de enlaces. |

> Roles del grupo: se distribuyeron tareas clave (coordinar instrucciones, validar lógica, probar accesibilidad, desarrollar interactividad y gestionar la publicación) para asegurar la participación activa de todos.

### Revisión entre integrantes (para el nivel “Propone” de la rúbrica 01)

Durante la etapa de integración, Cristel propuso sumar simuladores interactivos para explorar dinámicamente las condiciones lógicas de R5 y R6. Tras una revisión conjunta entre integrantes, el equipo validó que los simuladores enriquecían la comprensión sin reemplazar ni desvirtuar los diagramas SVG requeridos por la consigna. Se ajustaron los estilos para preservar la identidad visual de Soulless Catcher, se mantuvieron los casos ilustrativos originales y se comprobó que la sección se integrara de manera armónica en la navegación del sitio.

---

## Qué contiene la landing

1. **Presentación** — logo original completo, nombre, servicio, descripción del problema, equipo, bloque asignado y origen IFTS 16.

2. **Dos propuestas** — una por sentencia, cada una con la sentencia original, un título y su beneficio explicado en dos o tres frases.

3. **Dos diagramas** (SVG) — inicio → datos → decisión → acciones → resultado, con flechas y alternativas rotuladas; incluyen un paso de intervención humana (Flujo 2) y marcan con borde punteado los caminos que la sentencia no define (decisiones del grupo).

4. **Desplegables** — ficha de cada sentencia (sentencia → datos necesarios → condición → consecuencia), recorrido propuesto, herramientas del agente, excepciones y casos límite, cómo comprobarlo y qué agrega la propuesta.

5. **Casos interactivos** — botones que resaltan en el diagrama un recorrido que cumple la condición y otro que no (ejemplo ilustrativo: la página no ejecuta el proceso).

6. **Simulador interactivo** — sección 05 «Poné a prueba nuestras soluciones»: dos combinaciones de R5 y cuatro de R6, resultados explicativos y reinicio independiente. Es una simulación local, sin análisis ni registros reales.

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
├── css/styles.css              # estilos, leyenda de nodos SVG y simuladores
├── js/main.js                  # resaltado de casos + navegación activa + simuladores
├── assets/logo-soulless-catcher.webp  # logo original S04 (512×512)
├── docs/fichas.md              # fichas de las sentencias (punto de control 3) y títulos (punto 4)
└── README.md                   # este archivo
```

---

## Cómo se construyó (100% agéntico)

El grupo dirigió; los agentes generaron y modificaron los archivos. Nadie editó código a mano: se pidieron instrucciones, se revisó el resultado y se volvió a pedir cambios. Se usaron **tres herramientas**, registradas por separado.

### Herramienta 1 · OpenCode
| Campo | Registro |
| --- | --- |
| **Aplicación** (entorno de trabajo) | **OpenCode** |
| **Modelo** (tal como aparece seleccionado en la aplicación) | **MiMo-V2.6-Flash Free** — id: `mimo-v2.6-flash-free` |
| Para qué se usó | Leer y evaluar la consigna (PDF), recuperar la asignación oficial y el logo desde la web de la materia, y generar/iterar todos los archivos del proyecto: estructura, copywriting, diagramas SVG, estilos, interacciones y documentación |
| Cambios solicitados | ver registro de iteración ↓ |

### Herramienta 2 · Claude
| Campo | Registro |
| --- | --- |
| **Aplicación** (entorno de trabajo) | **Claude** (asistente de Anthropic, usado desde su chat web/app) |
| **Modelo** (tal como lo informa el asistente) | **Claude Sonnet 5.5** — |
| Plan | gratuito |
| Para qué se usó | Revisar lo ya construido contra la consigna y la rúbrica; probar la landing en un navegador (desktop) midiendo desbordes en cuatro anchos, desplegables con clic y teclado, botones de casos y enlaces internos; detectar errores; y aplicar correcciones puntuales en `README.md` y `index.html` (datos del equipo, enlace del repositorio y un nodo del diagrama 2) |
| Cambios solicitados | ver registro de iteración (fila 2) |


### Herramienta 3 · ChatGPT

| Campo | Registro |
| --- | --- |
| Aplicación | ChatGPT (OpenAI), chat web |
| Modelo | GPT-6.2 (informado por el asistente) |
| Para qué se usó | Revisar la landing existente, proponer y generar los archivos completos del simulador interactivo R5/R6 y actualizar la documentación. |
| Modalidad | Cristel dirigió las instrucciones, reemplazó los archivos generados en VS Code y comprobó el funcionamiento local; gestión de rama mediante GitHub Desktop. |

### Registro de iteración (evidencia para el nivel “Propone”)
| # | Herramienta | Instrucción inicial | Problema detectado | Pedido de mejora | Qué cambió y por qué |
| --- | --- | --- | --- | --- | --- |
| 1 | OpenCode | «Leer la consigna del TP3, tomar la asignación S04-C para el Grupo 03 y generar la estructura base de la landing con los diagramas y fichas» | La primera versión requería definir con precisión cómo representar gráficamente las decisiones tomadas por el grupo frente a lo estrictamente normado por las sentencias R5 y R6 | Ajustar los diagramas SVG agregando clases específicas para distinguir visualmente los supuestos del grupo (bordes punteados) y codificar los desplegables con teclado | Se estructuraron los archivos HTML, CSS y JS iniciales, documentando las fichas en `docs/fichas.md` y asegurando navegación desktop accesible |
| 2 | Claude | Se le pasaron la consigna, la rúbrica y el proyecto ya generado, y se le pidió revisarlo y dejarlo listo para entregar | (a) El README decía que la asignación S04-C correspondía a los grupos 03 / 25 / 36, pero según el listado de la consigna solo corresponde al grupo 03 (el 25 es S04-A y el 36 es S04-B). (b) En el diagrama 2, el paso «Notifica al usuario» figura como supuesto del grupo en `docs/fichas.md`, pero estaba dibujado con borde sólido, igual que lo que define la sentencia. (c) Faltaban el número de grupo, los integrantes y el enlace del repositorio | Corregir el README, mostrar ese paso como camino diseñado por el grupo y completar los datos del equipo y el repositorio | README: asignación corregida a «S04-C · Grupo 03», equipo cargado y herramientas declaradas. Landing: el nodo pasó a borde punteado (la leyenda ya lo explica como «Camino diseñado por el grupo»), se cargó «Grupo 03» con sus integrantes y se enlazó el repositorio en el pie |
| 3 | ChatGPT | «necesito agregar o modificar algo»; se aceptó la propuesta de un simulador interactivo. | Los casos existentes eran predeterminados; no permitían elegir independientemente todas las condiciones. | «acordate que necesito todo el codigo entero para no equivocarme»; conservar diseño, diagramas y mensaje oculto. | Se generaron los archivos completos index.html, css/styles.css y js/main.js con simuladores R5 y R6, resultados y reinicio. |
| 4 | ChatGPT | Probar la landing actualizada. | La sección nueva no aparecía porque index.html no se había guardado. | Revisar los archivos modificados y guardar el HTML. | La sección apareció y Cristel confirmó haber revisado el funcionamiento. |

---

## Publicación 
- [x] **Repositorio del grupo:** <https://github.com/AnkerYeray/tp3_ifts29_frontend_grupo3> 
- [x] **Landing publicada:** <https://tp3ifts29frontendgrupo3.vercel.app> 
- [x] Ambos enlaces probados **desde una ventana sin sesión**
- [x] Los dos enlaces quedan identificados en este README

---

## Checklist contra la rúbrica

_Tildado = ya verificado (prueba en navegador de escritorio y revisión del contenido). Lo que sigue sin tildar lo tiene que comprobar el grupo._

**01 · Participación**
- [x] Todos participan y pueden explicar las dos propuestas
- [x] Integrantes y aportes concretos registrados arriba

**02 · Repositorio y landing**
- [x] Los dos enlaces accesibles sin sesión y verificados
- [x] README con el enlace correcto a la landing final

**03 · Landing acorde a la consigna**
- [x] Startup con su logo original completo y legible
- [x] Las dos sentencias con su redacción original
- [x] Una propuesta por sentencia (título + beneficio)
- [x] Los dos diagramas dentro de la página
- [x] Desplegables con datos, decisión, acción, resultado, excepciones e intervención humana
- [x] Se recorre bien en desktop, sin desbordes; desplegables con clic **y** teclado (Enter/Espacio)

**04 · Dos flujos agénticos**
- [x] Un diagrama por sentencia, con datos, decisiones, acciones y resultados coherentes
- [x] Se distinguen los supuestos agregados (borde punteado = camino del grupo)
- [x] Caso límite / excepción explicada en cada flujo, con intervención humana cuando corresponde
- [x] Recorrido probado: un caso que cumple y uno que no, por cada flujo
- [x] Simuladores R5 y R6 revisados localmente por Cristel (confirmación de la integrante).

**05 · Herramientas de IA**
- [x] Aplicación y modelo declarados (o “modelo no informado”)
- [x] Usos y aportes del grupo descritos
- [x] Iteración documentada (instrucción → problema → mejora → qué cambió)
