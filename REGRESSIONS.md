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

## Pruebas de humo

- 79 `section.slide-page`;
- 79 títulos `data-title` únicos;
- un único `aside.notes` por slide;
- multas en 42–43;
- `Casos` en 72;
- `Gracias · preguntas` en 79;
- Speaker View muestra las mismas notas de `index.html`.
