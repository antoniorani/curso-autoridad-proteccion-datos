# Instrucciones para futuras iteraciones del curso

Este archivo contiene únicamente criterios **específicos de esta presentación**. Para decisiones del motor común consultar `antoniorani/template-diapositivas`; para identidad visual y layouts compartidos, `antoniorani/template-diapositivas-aepd`.

## 1. Fuentes y prioridad editorial

Cuando estén disponibles:

1. **Guion_revision_80_diapositivas_AEPD.docx**: fuente principal para contenido, mensajes, cautelas y actualizaciones.
2. **Curso Sanidad 27 02 2025.pptx**: referencia para recorrido original, ejemplos, imágenes y material histórico.

El guion de revisión prevalece sobre el texto literal del PowerPoint cuando exista una corrección o actualización.

El deck actual tiene **82 diapositivas**: las 80 del guion más dos slides docentes adicionales de multas.

## 2. Criterio narrativo

Mantener el recorrido completo:

- 1–20 · antecedentes históricos y evolución normativa;
- 21–40 · marco legal y autoridades de control;
- 41–51 · AEPD y sanciones;
- 52–74 · CEPD, cooperación, herramientas e IMI;
- 75–82 · casos, IA, neuroderechos, temas recientes y cierre.

No eliminar contenido solo porque parezca lateral al título del curso: conservar el hilo previsto y revisar especialmente vigencia, errores y elementos desactualizados.

## 3. Diseño de cada diapositiva

Antes de modificar una slide, identificar:

- **idea principal** que debe recordar la audiencia;
- **explicación oral** que debe ir a notas y no a pantalla;
- **soporte visual** que realmente ayude a comprender;
- **densidad** necesaria para que la slide se entienda con rapidez.

La identidad visual se hereda del template AEPD. No copiar mecánicamente sus ejemplos: cada composición debe responder al contenido concreto.

Evitar:

- repetir la misma retícula durante muchas slides;
- llenar el lienzo con tarjetas genéricas;
- convertir las notas en texto visible pequeño;
- iconos puramente decorativos;
- mantener una imagen histórica ilegible o irrelevante solo por fidelidad al PowerPoint.

## 4. Imágenes y material histórico

Orden de preferencia:

1. reutilizar imágenes del PowerPoint cuando tengan valor documental o narrativo;
2. recortar o reencuadrar si el material es válido pero la composición original no;
3. generar o crear un recurso nuevo cuando comunique mejor;
4. usar diagramas propios cuando una fotografía no sea la mejor representación.

El material histórico sensible debe tratarse de forma sobria y contextual, sin efectismo.

La portada actual se sirve directamente desde `assets/cover-2026.webp`; no reintroducir loaders Base64 ni fragmentos de texto para reconstruir imágenes.

## 5. Notas del ponente

Cada slide debe conservar un único `<aside class="notes">...</aside>`.

Las notas son un **guion hablado**, no instrucciones internas del tipo «explicar» o «mostrar». Deben:

- poder decirse casi literalmente;
- enlazar con la slide anterior y la siguiente;
- incluir matices históricos o jurídicos necesarios;
- señalar cautelas;
- marcar las ideas centrales con `<strong>`.

La numeración aparece únicamente en Speaker View.

## 6. Diagramas SVG

Los diagramas SVG creados para el curso deben usar `safe-diagram`.

Para textos que puedan desbordar:

- usar `data-fit-width` cuando sea necesario;
- usar `data-min-font-size` solo como límite de seguridad;
- preferir textos breves o varias líneas antes que comprimir excesivamente;
- mantener el SVG visualmente dentro de su panel.

`fitSvgDiagramText()` en `index.html` es una salvaguarda específica del curso. No convertirla en abstracción del template salvo que otra presentación necesite el mismo mecanismo.

## 7. Arquitectura propia del curso

Hay una sola fuente de verdad por responsabilidad:

- `index.html`: 82 slides y notas;
- `style.css`: estilos propios del curso;
- `assets/`: recursos propios;
- `speaker-gallery.js`: copia sincronizada del motor común, sin contenido del curso.

No reintroducir:

- `slides-*.js`;
- contenido dentro de plugins;
- CSS de slides generado en runtime;
- loaders o temporizadores que establezcan el orden;
- copias alternativas de notas fuera de `index.html`.

El principio técnico es: **si puede resolverse con el HTML y CSS existentes, no añadir JavaScript ni una nueva abstracción**.

## 8. Pruebas de humo

Antes de cerrar una iteración estructural:

1. existen exactamente **82** `section.slide-page`;
2. los 82 `data-title` son únicos;
3. cada slide tiene un único `aside.notes`;
4. la 45 es «Principales multas RGPD internacionales»;
5. la 46 es «Principales multas de la AEPD»;
6. «Casos» es la 75;
7. «Gracias · preguntas» es la 82;
8. Speaker View muestra las notas de `index.html`;
9. la vista pública no muestra número de diapositiva.

## 9. Cierre de una iteración

Preguntar siempre:

- ¿se entiende la idea principal en pocos segundos?
- ¿el texto visible está reducido a lo esencial?
- ¿la imagen aporta información real?
- ¿las notas permiten impartir la slide?
- ¿se mantiene el sentido del guion?
- ¿se ha evitado añadir infraestructura innecesaria?

**Conservar el sistema visual; rediseñar la comunicación.**
