# Curso AEPD · Autoridades de control y CEPD

Presentación web del curso sobre autoridades de control, AEPD y Comité Europeo de Protección de Datos.

Deriva de `antoniorani/template-diapositivas-aepd`. Este repositorio documenta únicamente el **contenido y las excepciones propias del curso**; el motor genérico pertenece a `template-diapositivas` y el sistema visual a `template-diapositivas-aepd`.

## Arquitectura del curso

No hay build ni generación de slides en runtime.

- `index.html`: fuente única de las **73 diapositivas** y sus notas.
- `style.css`: estilos específicos del curso sobre la base visual AEPD.
- `assets/`: imágenes y recursos propios del curso.
- `speaker-gallery.js` y `vendor/reveal/`: copia sincronizada del motor común; no contienen contenido del curso.
- `AGENTS.md`: criterios editoriales y técnicos específicos del curso.
- `REGRESSIONS.md`: regresiones propias de esta presentación.

No reintroducir loaders de bloques, diapositivas generadas por JavaScript, CSS de slides generado en runtime ni fuentes alternativas de contenido.

## Contenido

El guion de revisión original cubre 80 diapositivas. Se añadieron dos diapositivas de multas y se eliminaron tres en la primera depuración (22, 25 y 42 de la versión de 82) y seis en la segunda (44, 50, 67, 69, 70 y 75 de la versión de 79). El deck actual contiene **73**. Los números de las eliminaciones se refieren a la versión vigente cuando se solicitaron.

- 1–20 · antecedentes históricos y normativos.
- 21–38 · marco legal y autoridades de control.
- 39–47 · AEPD y sanciones.
- 48–66 · CEPD, cooperación, herramientas e IMI.
- 67–73 · casos, IA, neuroderechos, temas recientes y cierre.

Pruebas de humo:

- 42 · `Principales multas RGPD internacionales`;
- 43 · `Principales multas de la AEPD`;
- 67 · `Casos`;
- 73 · `Gracias · preguntas`.

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
