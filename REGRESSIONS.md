# Registro de regresiones · curso Autoridades de control y CEPD

Este archivo contiene únicamente regresiones específicas de esta presentación. Las regresiones del motor común viven en `template-diapositivas`; las de la capa visual, en `template-diapositivas-aepd`.

## 2026-10-07 — Varias fuentes de diapositivas desincronizaron Speaker View

**Problema**

El contenido estaba repartido entre `index.html`, `speaker-gallery.js` y varios `slides-*.js`. Además, Notes cargaba indirectamente otros scripts. Las diapositivas 21–40 tenían versiones distintas en ramas auxiliares y en producción.

**Síntoma**

Speaker View seguía mostrando notas antiguas aunque se hubieran reescrito en otra fuente.

**Causa**

Había varias fuentes de verdad y responsabilidades mezcladas.

**Corrección**

- las 82 slides y sus notas se materializaron en `index.html`;
- los estilos se centralizaron en `style.css`;
- `speaker-gallery.js` volvió a contener solo personalizaciones de Speaker View;
- Notes volvió a ser exclusivamente el plugin vendorizado;
- se eliminaron los antiguos `slides-*.js` y loaders indirectos.

**Regla**

No reintroducir generación de diapositivas en runtime ni una segunda fuente de contenido.

## 2026-10-06 — El orden visible dependía del momento de carga de bloques

**Problema**

Los antiguos bloques 51–60, 61–70 y 71–80 se insertaban en hitos distintos del ciclo de carga.

**Síntoma**

Las posiciones visibles cambiaban según el orden temporal de ejecución.

**Corrección definitiva**

La arquitectura de bloques fue retirada. El orden de las 82 diapositivas es ahora exclusivamente el orden del HTML en `index.html`.

**Regla**

El contenido numerado del curso no debe depender de eventos, temporizadores ni loaders para establecer su orden.

## 2026-11-04 — Eliminación editorial de tres diapositivas y revisión de notas

Por petición del responsable del curso, se eliminaron las diapositivas originales 22, 25 y 42. La numeración pasa de 82 a 79. Se revisaron las notas históricas de los originales 2, 3, 5, 7, 10, 18 y 20, y las multas internacionales/españolas originales 45 y 46, con distinción de importes iniciales y firmeza procesal. Las notas siguen viviendo únicamente en `index.html`; no cambió el motor de presentación.

## 2026-11-04 — Segunda depuración editorial: 79 → 73

Se suprimieron las diapositivas **44, 50, 67, 69, 70 y 75 de la versión de 79**, sin alterar el motor ni el sistema de notas. La diapositiva de entrada a «Casos» (antes 72, ahora 67) se adaptó para retirar LOREG y reflejar los ejemplos restantes. La antigua diapositiva 76, ahora 70, mantiene una sola nota de ponente, solicitada literalmente: «contar lo de Netflix». También se corrigió en la nota de la LOPDGDD una referencia que prometía volver a un caso ya retirado.

## Pruebas de humo

- 73 `section.slide-page`;
- 73 títulos `data-title` únicos;
- un único `aside.notes` por slide;
- multas en 42–43;
- `Casos` en 67;
- `Gracias · preguntas` en 73;
- Speaker View muestra las mismas notas de `index.html`.
- «Inteligencia artificial · llamadas de atención» es la 70, con una sola nota «contar lo de Netflix».
- No existe el caso «LO 3/2018 y artículo 58 bis LOREG» ni figura en el índice de «Casos».
