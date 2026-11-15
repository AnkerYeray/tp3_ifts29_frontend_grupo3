# Fichas de análisis · Soulless Catcher · Bloque «Informe y revisión»

Puntos de control 3 y 4 de la consigna TP3: desarmar cada sentencia y definir una propuesta por sentencia.
(El mismo contenido, ampliado, está en los desplegables de la landing.)

---

## Ficha 1 · FRASE 1 · R5

**Sentencia original**
> Si la revisión no reúne evidencia suficiente, el sistema muestra un resultado no concluyente y explica qué información falta.

**Datos necesarios**
- El contenido a revisar (imagen o video) y su contexto.
- El resultado de la revisión: evidencia reunida (metadatos, patrones de generación, coincidencias de fuentes).
- El criterio de “evidencia suficiente” (umbral de pronunciamiento).
- El detalle de la evidencia faltante (qué se buscó y no se encontró).

**Condición**
- La revisión **no** reúne evidencia suficiente → *negación*: el análisis no alcanza para pronunciarse.

**Consecuencia**
- El sistema muestra un resultado **no concluyente** **y** explica **qué información falta** → dos efectos, ambos obligatorios (la “y” los mantiene juntos).

**Título de la propuesta:** «No concluyente, pero útil»
**Beneficio:** Cuando el análisis no llega a un veredicto, el usuario recibe un resultado no concluyente con la lista concreta de qué falta, en vez de un “no sabemos” vacío. Así puede aportar el material y reintentar, y el sistema queda trazado: qué se analizó, qué se encontró y qué no pudo determinarse.

**Supuestos agregados por el grupo (no están en la sentencia):**
- Consultar herramientas de análisis (metadatos, patrones, fuentes) antes de decidir.
- Si la evidencia **sí** alcanza, emitir informe conclusivo (la sentencia no define ese camino).
- Encadenar con la Propuesta 2 cuando el usuario cuestione el resultado.

---

## Ficha 2 · FRASE 2 · R6

**Sentencia original**
> Si el usuario cuestiona el informe y aporta nueva evidencia, el sistema registra el pedido de revisión y lo deriva a una persona junto con el material original.

**Datos necesarios**
- El informe previo que se cuestiona.
- El cuestionamiento del usuario.
- La nueva evidencia aportada.
- El material original (el archivo que se revisó).

**Condición**
- El usuario cuestiona el informe **y** aporta nueva evidencia → *conjunción*: hacen falta **ambas** cosas.

**Consecuencia**
- El sistema registra el pedido de revisión **y** lo deriva a una persona junto con el material original → también conjunción: las dos acciones ocurren.

**Título de la propuesta:** «Revisión registrada y derivada a una persona»
**Beneficio:** Todo reclamo queda registrado con identificador y estado, y llega a una persona con el paquete completo (material original + informe previo + evidencia nueva). El usuario recibe aviso de que una persona lo atenderá y nada queda perdido en un buzón sin contexto.

**Supuestos agregados por el grupo (no están en la sentencia):**
- Registrar con ID, fecha y estado del pedido.
- Adjuntar también el informe previo y la evidencia nueva al paquete de derivación.
- Notificar al usuario.
- Si falta una de las dos condiciones de la “y”, pedir completar en lugar de registrar.

---

## Cómo comprobar cada flujo (un caso que cumple y uno que no)

| Flujo | Caso que **cumple** la condición | Caso que **no** la cumple |
| --- | --- | --- |
| 1 · R5 | Imagen sin metadatos, sin coincidencias y con patrones inconcluyentes → no concluyente + lista de faltantes | Video con metadatos coherentes, patrones de captura y fuente verificable → informe conclusivo *(camino del grupo)* |
| 2 · R6 | El usuario señala el punto del informe que disputa y adjunta evidencia nueva → registrado + derivado a una persona | El usuario sólo dice “no estoy de acuerdo”, sin evidencia → se pide completar *(camino del grupo)* |

En la landing, cada caso se recorre con los botones bajo cada diagrama.
