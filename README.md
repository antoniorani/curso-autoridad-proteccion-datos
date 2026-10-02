# Curso AEPD · Autoridades de control y CEPD

Presentación web del curso sobre autoridades de control, AEPD y Comité Europeo de Protección de Datos.

Esta presentación deriva directamente de `antoniorani/template-diapositivas-aepd`: conserva su motor Reveal.js, el lienzo fijo de 1600 × 900, sus componentes visuales, el logo local, Speaker View y las dependencias críticas vendorizadas.

## Ver la presentación

GitHub Pages:

https://antoniorani.github.io/curso-autoridad-proteccion-datos/

## Contrato visual y técnico

- Lienzo fijo de 1600 × 900; Reveal.js escala la composición completa.
- Estructura de cada diapositiva: `section.slide-page > .slide-inner`.
- Identidad visual y layouts definidos en `style.css`, heredados del template AEPD.
- Logo local en `assets/aepd-logo.svg`.
- Reveal.js y notas locales en `vendor/reveal/`.
- Speaker View y galería mediante `speaker-gallery.js`.
- No se usan breakpoints responsive para reorganizar el contenido de las diapositivas.

## Navegación

- Flechas / Page Up / Page Down / espacio: navegar.
- `S`: abrir Speaker View con las notas.
- En Speaker View, `G`: abrir la galería de diapositivas.
- Reveal.js mantiene hash, controles, progreso y numeración.

## Contenido incluido

1. Portada
2. Uno de los primeros tratamientos masivos de datos
3. Redes sociales en Pompeya
4. Derecho romano e intimidad
5. Warren y Brandeis: *The Right to Privacy*
6. Constitución de Weimar
7. Telar de Jacquard
8. Hollerith y el censo de 1890
9. Censo alemán de 1933
10. René Carmille y dimensión ética del tratamiento automatizado

## Regresiones

Consulta `REGRESSIONS.md` antes de simplificar dependencias o cambiar el motor de presentación. Reveal.js debe permanecer local y la geometría de las slides debe seguir siendo 1600 × 900.
