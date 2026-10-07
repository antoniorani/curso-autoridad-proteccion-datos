# Registro de regresiones

## 2026-10-07 — Varias fuentes de diapositivas desincronizaron Speaker View

**Problema detectado**

El contenido estaba repartido entre `index.html`, `speaker-gallery.js` y varios `slides-*.js`. Además, `vendor/reveal/notes.js` cargaba indirectamente otros scripts mediante wrappers y `document.write`. Las diapositivas 21–40 tenían versiones distintas en ramas auxiliares y en `main`.

**Síntoma observado**

Las notas 21–40 se reescribieron correctamente en ramas de trabajo, pero Speaker View seguía mostrando en producción las notas antiguas de `speaker-gallery.js`, redactadas como instrucciones internas («Explicar…», «Mostrar…») y sin las ideas centrales en negrita.

**Causa**

Había varias fuentes de verdad y responsabilidades mezcladas:

- contenido de diapositivas dentro del plugin de Speaker View;
- bloques de diapositivas generados con JavaScript;
- estilos creados desde JavaScript;
- carga de contenido acoplada al plugin de notas;
- orden visible dependiente de orden de ejecución.

**Corrección aplicada**

- Las 82 diapositivas y sus notas se materializaron como HTML estático en `index.html`.
- Todos los estilos de diapositivas se centralizaron en `style.css`.
- `speaker-gallery.js` quedó limitado a la galería de Speaker View.
- `vendor/reveal/notes.js` volvió a ser únicamente el plugin de notas de Reveal.
- Se eliminaron los scripts `slides-*.js` y los loaders indirectos.
- El runtime propio se redujo a una sola extensión: `speaker-gallery.js`.

**Regla para el futuro**

No reintroducir generación de diapositivas en runtime ni una segunda fuente de contenido. El deck debe poder auditarse leyendo `index.html` y `style.css`.

Pruebas de humo: 82 diapositivas; multas en 45–46; «Casos» en 75; «Gracias · preguntas» en 82; títulos únicos; un único bloque de notas por slide.


Este archivo recoge fallos reales introducidos durante cambios técnicos para evitar repetirlos en futuras presentaciones.

## 2026-10-06 — Los bloques 51–60 se cargaban después de 61–80

> Estado actual: esta arquitectura de bloques ya fue retirada el 7 de octubre de 2026. Se conserva esta entrada únicamente como historial de la regresión.

**Cambio que introdujo la regresión**

El bloque `slides-51-60.js` esperaba al evento `load` y además a varios ciclos de estabilidad antes de insertarse, mientras que `slides-61-70.js` y `slides-71-80.js` se insertaban en `DOMContentLoaded`.

**Síntoma observado**

Las diapositivas 61–80 ocupaban temporalmente las posiciones 51–70. Por eso «Casos», que pertenece a la diapositiva 73, aparecía como 63 y «Gracias · preguntas», que pertenece a la 80, aparecía como 70.

**Lección**

Los bloques de una presentación numerada no pueden depender de eventos o retardos distintos si todos se insertan con `append`. El orden temporal de ejecución pasa a ser el orden visible de las diapositivas.

**Regla para el futuro**

- Cargar los scripts de bloques en orden numérico.
- Insertar 41–50, 51–60, 61–70 y 71–80 en el mismo hito de inicialización.
- Mantener una sola fuente de inyección por bloque; no duplicar 41–50 en el plugin de notas y en su archivo propio.
- Verificar como prueba de humo que «Casos» sea la 73 y «Gracias · preguntas» la 80.

**Corrección aplicada**

Se eliminó el cargador duplicado de 41–50 en `vendor/reveal/notes.js` y se hizo que 51–60 se inserte en `DOMContentLoaded`, igual que los demás bloques.

## 2026-10-02 — Reveal.js remoto dejó la presentación en blanco

**Cambio que introdujo la regresión**

Se sustituyeron los archivos locales de Reveal.js 6.0.1 (`reveal.js`, `reveal.css` y `notes.js`) por referencias equivalentes a jsDelivr con el objetivo de simplificar el repositorio.

**Síntoma observado**

La presentación publicada en GitHub Pages cargaba como una página completamente en blanco. El workflow de GitHub Pages terminaba correctamente, por lo que el despliegue exitoso no detectó el fallo de ejecución en el navegador.

**Lección**

Las dependencias necesarias para que la presentación llegue siquiera a inicializarse son dependencias críticas de ejecución. Reducir archivos no compensa introducir un nuevo punto externo de fallo.

**Regla para el futuro**

- Mantener Reveal.js y el plugin de notas vendorizados localmente en `vendor/reveal/`.
- No sustituir dependencias críticas locales por CDN sin una razón funcional clara.
- Después de cambiar rutas de scripts, CSS, plugins o dependencias, hacer una prueba de humo sobre la URL publicada, no solo comprobar que GitHub Pages haya desplegado.
- Conservar la Speaker View nativa de Reveal.js mediante `RevealNotes`; no reimplementar un sistema propio salvo necesidad demostrada.

**Corrección aplicada**

Se restauraron los archivos locales de Reveal.js 6.0.1 y se actualizó el template para que las nuevas presentaciones hereden este enfoque.


## Regla heredada por la plantilla AEPD

Esta plantilla hereda las regresiones y decisiones técnicas de `template-diapositivas`. Además, su composición visual depende de un lienzo fijo 1600 × 900: no introduzcas breakpoints que conviertan las slides en páginas responsive. Si un contenido no cabe, simplifica el contenido o elige otro layout.
