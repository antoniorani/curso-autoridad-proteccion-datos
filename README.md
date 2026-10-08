# Curso AEPD · Autoridades de control y CEPD

Presentación web del curso sobre autoridades de control, AEPD y Comité Europeo de Protección de Datos.

Deriva de `antoniorani/template-diapositivas-aepd`. Este repositorio documenta únicamente el **contenido y las excepciones propias del curso**; el motor genérico pertenece a `template-diapositivas` y el sistema visual a `template-diapositivas-aepd`.

## Arquitectura del curso

No hay build ni generación de slides en runtime.

- `index.html`: fuente única de las **82 diapositivas** y sus notas.
- `style.css`: estilos específicos del curso sobre la base visual AEPD.
- `assets/`: imágenes y recursos propios del curso.
- `speaker-gallery.js` y `vendor/reveal/`: copia sincronizada del motor común; no contienen contenido del curso.
- `AGENTS.md`: criterios editoriales y técnicos específicos del curso.
- `REGRESSIONS.md`: regresiones propias de esta presentación.

No reintroducir loaders de bloques, diapositivas generadas por JavaScript, CSS de slides generado en runtime ni fuentes alternativas de contenido.

## Contenido

El guion de revisión original cubre 80 diapositivas. El deck contiene **82** porque incorpora dos diapositivas docentes adicionales de multas.

- 1–20 · antecedentes históricos y normativos.
- 21–40 · marco legal y autoridades de control.
- 41–51 · AEPD y sanciones.
- 52–74 · CEPD, cooperación, herramientas e IMI.
- 75–82 · casos, IA, neuroderechos, temas recientes y cierre.

Pruebas de humo:

- 45 · `Principales multas RGPD internacionales`;
- 46 · `Principales multas de la AEPD`;
- 75 · `Casos`;
- 82 · `Gracias · preguntas`.

## Notas del ponente

Cada slide contiene un único `<aside class="notes">...</aside>`. Las notas están redactadas como guion oral y las ideas centrales se marcan con `<strong>`.

La numeración se muestra solo en Speaker View.

## Publicación

URL pública:

https://antoniorani.github.io/curso-autoridad-proteccion-datos/

La política del ecosistema es GitHub Pages desde **`main` / `(root)`**, sin workflow de despliegue una vez configurado el repositorio con **Deploy from a branch**.

## Mantenimiento

Antes de modificar contenido, diseño o arquitectura:

- leer `AGENTS.md` para criterios propios del curso;
- leer `REGRESSIONS.md` para fallos históricos de esta presentación;
- acudir al template AEPD para decisiones visuales compartidas;
- acudir al template genérico para decisiones del motor.
