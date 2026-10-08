# Instrucciones para futuras iteraciones de la presentación

Este archivo define el criterio editorial, visual y técnico que debe seguirse al continuar o revisar la presentación del curso.

## 1. Fuentes de referencia y prioridad

Cuando estén disponibles, trabajar con estas dos fuentes:

1. **Guion_revision_80_diapositivas_AEPD.docx**: fuente principal para decidir **qué debe contar cada diapositiva**, qué mensajes deben enfatizarse y qué correcciones/actualizaciones deben incorporarse.
2. **Curso Sanidad 27 02 2025.pptx**: fuente de referencia para **el recorrido original, ejemplos, imágenes y materiales históricos** que puedan reutilizarse o reinterpretarse.

El guion de revisión prevalece sobre el texto literal de la presentación original cuando haya cambios de enfoque, correcciones o actualizaciones.

No eliminar contenido solo porque no coincida literalmente con el título del curso. Se debe conservar el recorrido completo previsto y revisar especialmente vigencia, errores y elementos desactualizados.

## 2. El template AEPD es un sistema visual, no un catálogo de diapositivas

La presentación deriva de `template-diapositivas-aepd`, pero **no deben copiarse mecánicamente sus ejemplos, composiciones o bloques de contenido**.

Se deben conservar:

- identidad visual AEPD;
- tipografía, paleta, logo y lenguaje gráfico;
- lienzo fijo 1600 × 900;
- Reveal.js, Speaker View y la infraestructura existente;
- coherencia global entre diapositivas.

Se debe adaptar libremente:

- la disposición de títulos, textos, imágenes y llamadas;
- el número y proporción de columnas;
- la jerarquía visual;
- el uso de cronologías, comparativas, esquemas, citas o datos destacados;
- el ritmo entre slides densas, visuales y de transición.

Cada diapositiva debe diseñarse en función de **la idea que se quiere explicar**, no en función de qué componente del template resulta más fácil reutilizar.

## 3. Criterio de diseño por diapositiva

Antes de modificar una slide, identificar:

- **Idea principal**: qué debe recordar la audiencia.
- **Explicación oral**: qué se contará y qué no necesita aparecer escrito.
- **Soporte visual**: qué imagen, esquema o recurso ayuda a entender la idea.
- **Densidad adecuada**: evitar trasladar párrafos completos a pantalla.

Priorizar composiciones con una jerarquía clara y una sola idea dominante. El texto en pantalla debe servir de apoyo a la explicación oral, no sustituirla.

Evitar:

- repetir la misma retícula en muchas diapositivas consecutivas;
- llenar el lienzo con tarjetas genéricas solo porque existen en el template;
- convertir el guion oral en texto pequeño;
- usar iconos decorativos sin función narrativa;
- mantener una imagen histórica si es ilegible, irrelevante o visualmente débil solo por fidelidad al PowerPoint original.

## 4. Imágenes y recursos visuales

Las imágenes son parte del contenido, no decoración.

Orden de preferencia:

1. **Reutilizar imágenes del PowerPoint original** cuando aporten valor histórico, documental o narrativo y tengan calidad suficiente.
2. **Recortar, reencuadrar o integrar esas imágenes de otra forma** cuando el material sea bueno pero la composición original no lo sea.
3. **Generar una imagen nueva** cuando permita explicar mejor la idea, mantener el estilo del curso o sustituir material de baja calidad.
4. Crear **diagramas o composiciones propias** cuando una fotografía no sea la mejor forma de comunicar el concepto.

Toda imagen nueva debe sentirse integrada con la identidad de la presentación: sobria, limpia, profesional y compatible con la estética AEPD.

Cuando una diapositiva use material histórico sensible, debe evitarse un tratamiento efectista. La imagen debe apoyar el contexto y la explicación.

## 5. Aplicación específica a las primeras 10 diapositivas

Las primeras 10 slides forman un bloque narrativo e histórico. Deben sentirse como una secuencia con ritmo, no como diez variaciones del mismo layout.

En particular:

- **1. Portada**: presentar el recorrido de la sesión con una composición más editorial y menos “demo de template”.
- **2. Censo antiguo**: enfatizar la idea de que el tratamiento masivo de información precede a la informática.
- **3. Pompeya**: usar el paralelismo con redes sociales actuales; la imagen o inscripción debe ser protagonista.
- **4. Derecho romano e intimidad**: aprovechar el contraste visual y conceptual sobre expectativas históricas de privacidad.
- **5. Warren y Brandeis**: evitar mostrar un bloque largo de texto; destacar el hito, la fecha y la idea “right to be let alone”.
- **6. Weimar**: convertir el artículo 129 en una idea comprensible sobre acceso/control de la información personal.
- **7. Jacquard**: explicar visualmente el salto hacia instrucciones codificadas y automatización.
- **8. Hollerith**: conectar máquina, tarjetas perforadas y tratamiento masivo de población.
- **9. Censo alemán de 1933**: centrar la slide en cómo la clasificación de población puede convertirse en instrumento de persecución; tratar las atribuciones históricas sobre IBM con prudencia.
- **10. René Carmille**: cerrar el bloque con el componente humano y ético de los sistemas de información, sin convertir cifras o atribuciones históricas discutibles en el eje de la slide.

## 6. Notas del presentador

Las notas deben recoger la explicación oral útil para presentar la diapositiva y seguir el guion de revisión.

No duplicar en las notas únicamente el texto visible. Deben ayudar a:

- contextualizar;
- explicar el enlace con la slide anterior y la siguiente;
- recordar matices históricos o jurídicos;
- señalar correcciones o cautelas;
- indicar el mensaje que debe quedar en la audiencia.

## 7. Reglas técnicas que no deben romperse

Además de estas instrucciones, leer `REGRESSIONS.md` antes de cambiar arquitectura o dependencias.

Mantener:

- lienzo fijo de 1600 × 900;
- estructura `section.slide-page > .slide-inner`;
- Reveal.js y plugin de notas vendorizados localmente;
- Speaker View y galería existentes;
- ausencia de breakpoints responsive que reorganicen las slides.

Si un contenido no cabe, **simplificar o cambiar de layout**; no reducir indiscriminadamente la tipografía ni convertir la slide en una página web desplazable.

## 8. Regla obligatoria para gráficos y desbordes

Todo gráfico SVG nuevo o rehecho debe usar la clase `safe-diagram`.

Además:

- cualquier texto largo o relevante dentro del SVG debe llevar `data-fit-width` con el ancho máximo disponible y, cuando proceda, `data-min-font-size`;
- en tarjetas SVG con un `<rect>` como fondo, el helper de `index.html` puede inferir el ancho disponible automáticamente, pero los títulos largos deben declarar igualmente su ancho de forma explícita;
- preferir etiquetas breves y dividir el contenido en varias líneas antes que comprimir excesivamente una frase;
- no usar una reducción automática de tipografía como sustituto de una mala composición: si el texto necesita bajar de aproximadamente el 75 % de su tamaño previsto, simplificar el texto o rediseñar el bloque;
- todo SVG debe quedar visualmente dentro de su panel con `overflow: hidden`;
- antes de cerrar una iteración, revisar especialmente títulos, etiquetas centradas, pies de gráfico y tarjetas estrechas a 1600 × 900.

La función `fitSvgDiagramText()` de `index.html` es una salvaguarda final: reduce el texto hasta el mínimo permitido y, solo si aún no cabe, aplica `textLength` para impedir que se salga físicamente del bloque.

## 9. Checklist antes de dar una iteración por terminada

Para cada diapositiva revisada comprobar:

- ¿La composición responde al contenido concreto de esa slide?
- ¿Se entiende la idea principal en pocos segundos?
- ¿El texto visible está reducido a lo esencial?
- ¿La imagen aporta información o contexto real?
- ¿Se ha evitado copiar mecánicamente un ejemplo del template?
- ¿Las notas permiten explicar correctamente la slide?
- ¿Se mantiene la coherencia visual AEPD?
- ¿No se han roto las restricciones técnicas del repositorio?
- ¿La slide funciona a 1600 × 900 sin desbordes ni texto minúsculo?
- ¿Se ha respetado el sentido del guion y, cuando procede, sus correcciones/actualizaciones?

## 10. Principio general

**Conservar el sistema visual; rediseñar la comunicación.**

La plantilla debe dar consistencia al curso, pero cada diapositiva debe tener una composición y un uso de imágenes adecuados a la historia que se está contando.

## Arquitectura técnica vigente · 82 diapositivas

La arquitectura actual se ha simplificado deliberadamente. **No introducir una segunda fuente de verdad.**

- `index.html` contiene las 82 diapositivas y sus notas. El orden del HTML es el orden de la presentación.
- `style.css` contiene todos los estilos de las diapositivas.
- `speaker-gallery.js` solo implementa personalizaciones de Speaker View: galería y contador de diapositiva.
- `vendor/reveal/notes.js` es el plugin de notas de Reveal y no debe cargar contenido propio del curso.
- La vista pública no muestra número de diapositiva; la numeración pertenece exclusivamente a Speaker View.
- No generar diapositivas en runtime.
- No cargar bloques mediante `document.write`, `DOMContentLoaded`, `load`, temporizadores o cadenas de loaders.
- No inyectar CSS de diapositivas desde JavaScript.
- No guardar versiones alternativas del contenido en plugins, ramas auxiliares o archivos de bloques y asumir que son la fuente usada por producción.

Las dos diapositivas adicionales de multas elevan el deck de las 80 diapositivas del guion fuente a **82 diapositivas en producción**.

Pruebas de humo mínimas después de tocar estructura, contenido o notas:

1. El documento contiene exactamente **82** `section.slide-page`.
2. Los títulos `data-title` son únicos.
3. La diapositiva 45 es «Principales multas RGPD internacionales».
4. La diapositiva 46 es «Principales multas de la AEPD».
5. «Casos» es la diapositiva 75.
6. «Gracias · preguntas» es la diapositiva 82.
7. Cada diapositiva conserva un único `aside.notes`.
8. Speaker View muestra las mismas notas que existen en `index.html`.

El principio técnico es deliberadamente conservador: **si una necesidad puede resolverse con HTML y CSS existentes, no añadir JavaScript ni una nueva abstracción.**

