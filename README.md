# Curso AEPD · Autoridades de control y CEPD

Presentación web del curso sobre autoridades de control, AEPD y Comité Europeo de Protección de Datos.

La presentación deriva de `antoniorani/template-diapositivas-aepd` y conserva Reveal.js, lienzo fijo de 1600 × 900, Speaker View, dependencias críticas locales e identidad visual AEPD.

## Arquitectura

La presentación no tiene build ni genera diapositivas en tiempo de ejecución.

- `index.html`: **fuente única del contenido**. Contiene las 82 `section.slide-page` y sus notas de ponente.
- `style.css`: **fuente única de estilos de las diapositivas**.
- `speaker-gallery.js`: personalizaciones de Speaker View: galería y contador de diapositiva; no contiene ni carga diapositivas.
- `vendor/reveal/reveal.js`, `vendor/reveal/reveal.css` y `vendor/reveal/notes.js`: dependencias locales de Reveal.js.
- `assets/`: imágenes, logo y datos de la portada.

No deben reintroducirse loaders de bloques, inyección de diapositivas desde JavaScript, CSS generado en runtime ni carga de contenido desde el plugin de notas.

## Contenido

El guion de revisión original cubre 80 diapositivas. El deck actual contiene **82** porque incorpora dos diapositivas docentes adicionales de multas.

- 1–20 · antecedentes históricos y normativos.
- 21–40 · marco legal y autoridades de control en el RGPD.
- 41–51 · AEPD y dos diapositivas adicionales de sanciones.
- 52–74 · CEPD, cooperación, herramientas e IMI.
- 75–82 · casos, IA, neuroderechos, temas recientes y cierre.

Pruebas de humo útiles:

- diapositiva 45: `Principales multas RGPD internacionales`;
- diapositiva 46: `Principales multas de la AEPD`;
- diapositiva 75: `Casos`;
- diapositiva 82: `Gracias · preguntas`.

## Notas del ponente

Cada diapositiva incluye sus notas en:

```html
<aside class="notes">...</aside>
```

Las notas están redactadas como guion oral y las ideas centrales se marcan con `<strong>` para localizarlas rápidamente en Speaker View.

## Ver la presentación

GitHub Pages:

https://antoniorani.github.io/curso-autoridad-proteccion-datos/

## Navegación

- Flechas / Page Up / Page Down / espacio: navegar.
- `S`: abrir Speaker View.
- En Speaker View, `G`: abrir la galería de diapositivas.
- Reveal.js mantiene hash, controles y progreso. La numeración se muestra solo en Speaker View.

## Contrato visual y técnico

- Lienzo fijo de 1600 × 900; Reveal.js escala la composición completa.
- Estructura de cada diapositiva: `section.slide-page > .slide-inner`.
- No usar breakpoints para reorganizar las diapositivas como páginas responsive.
- Si un contenido no cabe, simplificar el contenido o cambiar el layout.
- Mantener Reveal.js y Notes vendorizados localmente.
- El orden de las diapositivas es el orden del HTML; no depende de eventos ni de temporización JavaScript.

## Guía para futuras iteraciones

Antes de modificar contenido, diseño o arquitectura, consultar:

- `AGENTS.md`: criterio editorial, visual y técnico.
- `REGRESSIONS.md`: fallos reales que no deben reintroducirse.
