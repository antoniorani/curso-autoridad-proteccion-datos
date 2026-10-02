const pptxgen = require('pptxgenjs');
const { ASSETS, DIMS } = require('./assets');
const fs = require('fs');
const path = require('path');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Curso AEPD';
pptx.subject = 'Primeras 10 diapositivas - antecedentes';
pptx.title = 'Antecedentes de la protección de datos';
pptx.company = 'AEPD';
pptx.lang = 'es-ES';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'es-ES'
};
pptx.defineLayout({ name: 'CUSTOM_WIDE', width: 13.333, height: 7.5 });
pptx.layout = 'CUSTOM_WIDE';
pptx.margin = 0;
pptx.notesSlide = true;
pptx.version = '2024';

const W = 13.333;
const H = 7.5;
const ENABLE_LAYOUT_WARNINGS = process.env.CHECK_LAYOUT === '1';

const C = {
  orange: 'F2A900',
  orangeDark: 'C97800',
  text: '202020',
  muted: '666666',
  light: 'F6F3EE',
  sand: 'FBF8F1',
  blue: '243B53',
  blue2: '3A5772',
  red: '8E1D1D',
  white: 'FFFFFF',
  black: '000000',
  grey: 'E7E4DE',
  pale: 'FFF9EA'
};

function fitImage(name, x, y, w, h, mode = 'crop') {
  const dim = DIMS[name];
  const ar = dim.w / dim.h;
  const box = w / h;
  if (mode === 'contain') {
    if (ar >= box) {
      const nh = w / ar;
      return { data: ASSETS[name], x, y: y + (h - nh) / 2, w, h: nh };
    }
    const nw = h * ar;
    return { data: ASSETS[name], x: x + (w - nw) / 2, y, w: nw, h };
  }
  if (ar >= box) {
    const virtualW = h * ar;
    return { data: ASSETS[name], x: x - (virtualW - w) / 2, y, w: virtualW, h, sizing: { type: 'crop', x: (virtualW - w) / 2, y: 0, w, h } };
  }
  const virtualH = w / ar;
  return { data: ASSETS[name], x, y: y - (virtualH - h) / 2, w, h: virtualH, sizing: { type: 'crop', x: 0, y: (virtualH - h) / 2, w, h } };
}

function addBg(slide, fill = C.sand) {
  slide.background = { color: fill };
}

function addBrand(slide, section, num) {
  slide.addShape(pptx.ShapeType.line, { x: 0.55, y: 6.98, w: 4.8, h: 0, line: { color: C.orange, width: 1.2 } });
  slide.addText(section, { x: 0.58, y: 6.99, w: 7.6, h: 0.25, margin: 0, fontFace: 'Aptos', fontSize: 7.5, color: C.muted, breakLine: false });
  slide.addText(String(num).padStart(2, '0'), { x: 12.3, y: 6.83, w: 0.45, h: 0.3, margin: 0, fontFace: 'Aptos', fontSize: 8.5, color: C.muted, align: 'right' });
  slide.addImage({ data: ASSETS.logo, x: 11.27, y: 0.35, w: 1.35, h: 0.67, transparency: 0 });
}

function addKicker(slide, text, x, y, w) {
  slide.addText(text.toUpperCase(), { x, y, w, h: 0.26, margin: 0, fontFace: 'Aptos', fontSize: 8.5, bold: true, charSpace: 1.2, color: C.orangeDark });
}

function addTitle(slide, title, subtitle = '', opts = {}) {
  const x = opts.x ?? 0.72;
  const y = opts.y ?? 0.72;
  const w = opts.w ?? 8.7;
  slide.addText(title, { x, y, w, h: opts.h ?? 0.92, margin: 0, fontFace: 'Aptos Display', fontSize: opts.size ?? 29, bold: true, color: opts.color ?? C.text, fit: 'shrink' });
  if (subtitle) slide.addText(subtitle, { x, y: y + (opts.subY ?? 0.96), w, h: 0.55, margin: 0, fontFace: 'Aptos', fontSize: opts.subSize ?? 14, color: opts.subColor ?? C.muted, fit: 'shrink' });
}

function addBody(slide, text, x, y, w, h, opts = {}) {
  slide.addText(text, { x, y, w, h, margin: 0.02, fontFace: 'Aptos', fontSize: opts.size ?? 17, color: opts.color ?? C.text, bold: opts.bold ?? false, italic: opts.italic ?? false, breakLine: false, fit: 'shrink', valign: opts.valign ?? 'mid' });
}

function addNote(slide, text) {
  slide.addNotes(text);
}

function addCaption(slide, text, x, y, w) {
  slide.addText(text, { x, y, w, h: 0.32, margin: 0, fontFace: 'Aptos', fontSize: 8.3, color: C.muted, fit: 'shrink' });
}

function addImageFrame(slide, name, x, y, w, h, mode = 'crop') {
  slide.addShape(pptx.ShapeType.rect, { x, y, w, h, fill: { color: C.white, transparency: 0 }, line: { color: 'DDD6C7', width: 0.6 } });
  slide.addImage(fitImage(name, x + 0.03, y + 0.03, w - 0.06, h - 0.06, 'contain'));
}

function addQuote(slide, quote, source, x, y, w, h) {
  slide.addText('“', { x: x - 0.15, y: y - 0.06, w: 0.35, h: 0.5, margin: 0, fontFace: 'Aptos Display', fontSize: 24, color: C.orange });
  slide.addText(quote, { x, y, w, h: h - 0.28, margin: 0, fontFace: 'Aptos Display', fontSize: 21, color: C.text, italic: true, fit: 'shrink' });
  slide.addText(source, { x, y: y + h - 0.25, w, h: 0.24, margin: 0, fontFace: 'Aptos', fontSize: 8.5, color: C.muted });
}

function normalizedBox(o, i) {
  const d = o.options || o.data || {};
  let x = d.x ?? 0, y = d.y ?? 0, w = d.w ?? 0, h = d.h ?? 0;
  if (d.sizing && d.sizing.type === 'crop') {
    x = x + (d.sizing.x || 0);
    y = y + (d.sizing.y || 0);
    w = d.sizing.w || w;
    h = d.sizing.h || h;
  }
  const type = o.type || (d.path || d.data ? 'image' : 'object');
  return { i, x, y, w, h, type };
}

function warnIfSlideElementsOutOfBounds(slide, pptx) {
  if (!ENABLE_LAYOUT_WARNINGS) return;
  const idx = pptx._slides.indexOf(slide) + 1;
  const maxX = W + 0.05, maxY = H + 0.05;
  for (const [i, o] of slide._slideObjects.entries()) {
    const box = normalizedBox(o, i);
    if (box.w <= 0.05 || box.h <= 0.05) continue;
    if (box.type === 'shape') continue;
    if (box.x < -0.05 || box.y < -0.05 || box.x + box.w > maxX || box.y + box.h > maxY) {
      console.warn(`Slide ${idx}: element ${i} out of bounds`, box);
    }
  }
}

function relation(a, b) {
  const ax2 = a.x + a.w, ay2 = a.y + a.h, bx2 = b.x + b.w, by2 = b.y + b.h;
  if (ax2 <= b.x || bx2 <= a.x || ay2 <= b.y || by2 <= a.y) return 'separate';
  const aContainsB = a.x <= b.x && a.y <= b.y && ax2 >= bx2 && ay2 >= by2;
  const bContainsA = b.x <= a.x && b.y <= a.y && bx2 >= ax2 && by2 >= ay2;
  return (aContainsB || bContainsA) ? 'containment' : 'overlap';
}

function warnIfSlideHasOverlaps(slide, pptx) {
  if (!ENABLE_LAYOUT_WARNINGS) return;
  const idx = pptx._slides.indexOf(slide) + 1;
  const objects = slide._slideObjects
    .map((o, i) => normalizedBox(o, i))
    .filter(o => o.w > 0.05 && o.h > 0.05 && o.type !== 'shape');
  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      const r = relation(objects[i], objects[j]);
      if (r !== 'overlap') continue;
      const ix = Math.max(0, Math.min(objects[i].x+objects[i].w, objects[j].x+objects[j].w) - Math.max(objects[i].x, objects[j].x));
      const iy = Math.max(0, Math.min(objects[i].y+objects[i].h, objects[j].y+objects[j].h) - Math.max(objects[i].y, objects[j].y));
      if (ix * iy > 0.04) console.warn(`Slide ${idx}: possible overlap between elements ${objects[i].i} and ${objects[j].i}`);
    }
  }
}

// Slide 1
{
  const slide = pptx.addSlide();
  addBg(slide, C.sand);
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.sand }, line: { color: C.sand } });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.18, h: H, fill: { color: C.orange }, line: { color: C.orange } });
  slide.addText('Curso AEPD', { x: 0.75, y: 0.55, w: 3.2, h: 0.35, margin: 0, fontFace: 'Aptos', fontSize: 12, bold: true, color: C.orangeDark, charSpace: 1 });
  slide.addText('Autoridades de control,\nCEPD y antecedentes\nde la protección de datos', { x: 0.72, y: 1.35, w: 8.1, h: 2.2, margin: 0, fontFace: 'Aptos Display', fontSize: 34, bold: true, color: C.text, fit: 'shrink' });
  slide.addText('Primer bloque · diapositivas 1–10', { x: 0.76, y: 4.08, w: 4.5, h: 0.4, margin: 0, fontFace: 'Aptos', fontSize: 16, color: C.muted });
  slide.addShape(pptx.ShapeType.line, { x: 0.75, y: 4.75, w: 4.9, h: 0, line: { color: C.orange, width: 2 } });
  slide.addText('De los censos antiguos a los primeros tratamientos automatizados', { x: 0.76, y: 5.08, w: 6.6, h: 0.62, margin: 0, fontFace: 'Aptos', fontSize: 17, color: C.blue, fit: 'shrink' });
  slide.addImage({ data: ASSETS.logo, x: 9.45, y: 0.42, w: 2.35, h: 1.18 });
  slide.addShape(pptx.ShapeType.arc, { x: 8.88, y: 1.42, w: 3.7, h: 3.7, adjustPoint: 0.25, line: { color: 'E8DCC4', width: 1.5, transparency: 10 }, rotate: 15 });
  slide.addText('01', { x: 10.45, y: 2.77, w: 1.4, h: 0.8, margin: 0, fontFace: 'Aptos Display', fontSize: 38, bold: true, color: 'E5D4B0', align: 'center' });
  addNote(slide, 'Presentar la sesión y anticipar el recorrido: antecedentes de la protección de datos, nacimiento y papel de las autoridades de control, la AEPD y el Comité Europeo de Protección de Datos. No desarrollar contenido jurídico todavía; situar a la audiencia y explicar que la sesión combina historia, regulación, organización institucional y casos.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 2
{
  const slide = pptx.addSlide();
  addBg(slide);
  addBrand(slide, 'Antecedentes · datos antes de la informática', 2);
  addKicker(slide, 'Uno de los primeros tratamientos masivos', 0.7, 0.45, 5.4);
  addTitle(slide, 'El censo: datos personales antes de los ordenadores', 'Registrar, identificar y clasificar poblaciones es una práctica antigua.', { y: 0.78, w: 7.7, size: 27, subY: 1.05 });
  addImageFrame(slide, 'nativity_walk', 8.55, 0.85, 3.35, 2.18, 'crop');
  addImageFrame(slide, 'nativity_stable', 8.55, 3.35, 3.35, 2.18, 'crop');
  addQuote(slide, 'salió un edicto […] para levantar un censo de todo el mundo habitado', 'Lucas 2:1–4', 0.78, 3.05, 6.65, 1.55);
  addBody(slide, 'La protección de datos no empieza con la informática. Lo que cambia con la tecnología es la escala, la velocidad y la reutilización de la información.', 0.78, 5.25, 6.65, 0.78, { size: 15.5, color: C.blue });
  addNote(slide, 'Usar el censo como ejemplo intuitivo de que el tratamiento de información sobre grandes grupos de personas es muy anterior a la informática. Separar datos de tecnología: registrar, identificar y clasificar poblaciones es una práctica antigua; lo que cambia con la tecnología es la escala, la velocidad y la capacidad de reutilización.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 3
{
  const slide = pptx.addSlide();
  addBg(slide, C.white);
  addBrand(slide, 'Antecedentes · exposición pública y memoria social', 3);
  addKicker(slide, 'Redes sociales antes de Internet', 0.72, 0.45, 5.5);
  addTitle(slide, 'Pompeya: publicar también es una práctica antigua', 'Lo nuevo no es hablar de otros; lo nuevo es la persistencia y la amplificación.', { y: 0.78, w: 8.2, size: 27, subY: 1.03 });
  addImageFrame(slide, 'pompeii_wall', 0.8, 2.25, 3.42, 1.88, 'crop');
  addImageFrame(slide, 'pompeii_graffiti', 0.8, 4.48, 3.42, 1.55, 'crop');
  addImageFrame(slide, 'pompeii_street', 4.52, 2.25, 2.25, 3.78, 'crop');
  slide.addText('10.000+', { x: 7.4, y: 2.26, w: 2.4, h: 0.7, margin: 0, fontFace: 'Aptos Display', fontSize: 36, bold: true, color: C.orangeDark });
  addBody(slide, 'textos en muros y paredes interiores: vida cotidiana, ideas y sentimientos.', 7.43, 3.03, 3.9, 0.82, { size: 17, color: C.text });
  addBody(slide, 'La analogía con redes sociales funciona por contraste: hoy la información se busca, se replica, se agrega y permanece.', 7.43, 4.48, 4.3, 1.05, { size: 15.5, color: C.blue });
  addNote(slide, 'Explicar que la publicación de opiniones, críticas, mensajes y datos sobre otras personas tampoco nace con Internet. Las inscripciones de Pompeya permiten comparar con redes sociales actuales: lo novedoso hoy es persistencia, búsqueda, amplificación, perfilado y relación entre información dispersa.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 4
{
  const slide = pptx.addSlide();
  addBg(slide);
  addBrand(slide, 'Antecedentes · expectativas sociales de privacidad', 4);
  addKicker(slide, 'Derecho romano y privacidad', 0.72, 0.45, 5.2);
  addTitle(slide, '¿Viene la protección de datos del Derecho romano?', 'La expectativa social de intimidad cambia con el tiempo.', { y: 0.78, w: 7.9, size: 27, subY: 1.03 });
  addBody(slide, 'Las letrinas públicas romanas son un ejemplo útil para explicar que la intimidad no siempre tuvo el mismo significado social.', 0.78, 2.33, 5.5, 1.08, { size: 18, color: C.text });
  addBody(slide, 'La protección de datos moderna no nace aquí, pero este contraste ayuda a entender que los derechos responden a cambios sociales y tecnológicos.', 0.78, 4.12, 5.55, 1.18, { size: 16, color: C.blue });
  addImageFrame(slide, 'latrine_illustration', 7.1, 1.15, 4.85, 2.4, 'crop');
  addImageFrame(slide, 'latrine_ruins', 7.1, 4.0, 4.85, 2.1, 'crop');
  addNote(slide, 'Utilizar la escena de las letrinas públicas como contraste histórico sobre el concepto de intimidad. La diapositiva funciona como recurso narrativo: la expectativa social de privacidad cambia con el tiempo y la protección jurídica de la esfera personal no ha sido siempre la misma.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 5
{
  const slide = pptx.addSlide();
  addBg(slide, C.white);
  addBrand(slide, 'Antecedentes · privacidad moderna', 5);
  addKicker(slide, '1890 · Harvard Law Review', 0.72, 0.45, 5.2);
  addTitle(slide, 'Warren y Brandeis: el derecho a la privacidad', 'Un antecedente intelectual de la privacidad moderna.', { y: 0.78, w: 7.8, size: 27, subY: 1.03 });
  addImageFrame(slide, 'privacy_article', 8.15, 1.05, 3.6, 2.35, 'contain');
  slide.addText('the right to be let alone', { x: 0.78, y: 3.0, w: 5.7, h: 0.82, margin: 0, fontFace: 'Aptos Display', fontSize: 31, bold: true, color: C.orangeDark, fit: 'shrink' });
  addBody(slide, 'La privacidad se articula como protección frente a intromisiones. Más adelante, la protección de datos evolucionará hacia un poder de control sobre la información relativa a una persona.', 0.82, 4.18, 6.9, 1.17, { size: 15.5, color: C.blue });
  addBody(slide, 'Clave para contarla: privacidad y protección de datos están conectadas, pero no son idénticas.', 8.15, 4.13, 3.6, 1.1, { size: 14.5, color: C.text });
  addNote(slide, 'Introducir uno de los antecedentes intelectuales de la privacidad moderna: el right to be let alone. Subrayar que privacidad y protección de datos no son idénticas; la protección de datos evolucionará después hacia un derecho de control sobre la información que concierne a una persona.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 6
{
  const slide = pptx.addSlide();
  addBg(slide);
  addBrand(slide, 'Antecedentes · acceso a la información personal', 6);
  addKicker(slide, '1919 · Constitución de Weimar', 0.72, 0.45, 5.6);
  addTitle(slide, 'Un antecedente del derecho de acceso', 'Examinar el expediente personal como garantía frente a decisiones desfavorables.', { y: 0.78, w: 8.2, size: 27, subY: 1.03 });
  addImageFrame(slide, 'weimar_emblem', 8.65, 1.18, 2.85, 2.05, 'contain');
  addImageFrame(slide, 'weimar_parliament', 8.65, 3.72, 2.85, 2.2, 'crop');
  slide.addText('“El funcionario tendrá derecho a examinar su expediente personal.”', { x: 0.85, y: 2.55, w: 6.55, h: 0.95, margin: 0, fontFace: 'Aptos Display', fontSize: 25, italic: true, color: C.text, fit: 'shrink' });
  addBody(slide, 'La garantía no es todavía el derecho fundamental actual, pero anticipa una idea central: poder conocer y controlar información que produce efectos sobre la persona.', 0.85, 4.28, 6.55, 1.25, { size: 16, color: C.blue });
  addNote(slide, 'Mostrar un antecedente de acceso y control sobre la información personal: el funcionario podía conocer su expediente y defenderse frente a anotaciones desfavorables. Sirve para ilustrar que algunas facultades que hoy asociamos al derecho de acceso tienen precedentes anteriores a las leyes modernas de protección de datos.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 7
{
  const slide = pptx.addSlide();
  addBg(slide, C.white);
  addBrand(slide, 'Antecedentes · primeros tratamientos automatizados', 7);
  addKicker(slide, '1804 · Telar de Jacquard', 0.72, 0.45, 4.5);
  addTitle(slide, 'Automatización antes de la informática', 'Las tarjetas perforadas permiten programar patrones de forma mecánica.', { y: 0.78, w: 7.9, size: 27, subY: 1.03 });
  addImageFrame(slide, 'jacquard_portrait', 0.9, 2.5, 2.0, 1.85, 'contain');
  addImageFrame(slide, 'jacquard_loom', 3.25, 2.18, 3.05, 2.5, 'contain');
  slide.addText('tarjetas perforadas', { x: 7.05, y: 2.35, w: 4.1, h: 0.56, margin: 0, fontFace: 'Aptos Display', fontSize: 28, bold: true, color: C.orangeDark, fit: 'shrink' });
  addBody(slide, 'Un mecanismo físico codifica instrucciones. Es un antecedente técnico de la programación y de la automatización del tratamiento.', 7.08, 3.22, 4.5, 1.2, { size: 17, color: C.text });
  addBody(slide, 'Todavía no estamos ante datos personales, pero sí ante la idea de instrucción codificada.', 7.08, 5.1, 4.3, 0.72, { size: 15.5, color: C.blue });
  addNote(slide, 'Explicar la importancia de las tarjetas perforadas como antecedente técnico de la automatización. La diapositiva no trata todavía datos personales en sentido estricto, pero ayuda a entender el salto de un tratamiento exclusivamente humano a procesos controlados mediante instrucciones codificadas.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 8
{
  const slide = pptx.addSlide();
  addBg(slide);
  addBrand(slide, 'Antecedentes · automatización y censos', 8);
  addKicker(slide, '1890 · Censo de Estados Unidos', 0.72, 0.45, 5.4);
  addTitle(slide, 'Hollerith: mecanizar el censo', 'La tecnología cambia la escala del procesamiento de datos sobre poblaciones.', { y: 0.78, w: 8.4, size: 27, subY: 1.03 });
  addImageFrame(slide, 'hollerith_machine', 0.85, 2.1, 3.45, 2.15, 'contain');
  addImageFrame(slide, 'punch_card', 0.85, 4.72, 3.45, 1.25, 'crop');
  slide.addText('10 años', { x: 5.25, y: 2.26, w: 2.15, h: 0.55, margin: 0, fontFace: 'Aptos Display', fontSize: 26, bold: true, color: C.muted });
  slide.addText('manual', { x: 5.31, y: 2.83, w: 1.7, h: 0.28, margin: 0, fontFace: 'Aptos', fontSize: 10, color: C.muted });
  slide.addShape(pptx.ShapeType.line, { x: 7.15, y: 2.55, w: 1.0, h: 0, line: { color: C.orange, width: 2, beginArrowType: 'none', endArrowType: 'triangle' } });
  slide.addText('6 meses', { x: 8.45, y: 2.26, w: 2.25, h: 0.55, margin: 0, fontFace: 'Aptos Display', fontSize: 26, bold: true, color: C.orangeDark });
  slide.addText('tabuladora', { x: 8.52, y: 2.83, w: 1.9, h: 0.28, margin: 0, fontFace: 'Aptos', fontSize: 10, color: C.orangeDark });
  addBody(slide, 'La tabuladora no solo recoge datos: permite analizarlos mecánicamente. Aquí se ve el salto de la inscripción al procesamiento masivo.', 5.25, 4.2, 5.75, 1.28, { size: 16.5, color: C.blue });
  addNote(slide, 'Conectar automatización y tratamiento masivo de información personal. La tabuladora de Hollerith permitió mecanizar el censo de 1890 y reducir drásticamente el tiempo necesario para explotar los datos. La idea central es que la tecnología transforma la capacidad administrativa para clasificar y analizar poblaciones.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 9
{
  const slide = pptx.addSlide();
  addBg(slide, C.white);
  addBrand(slide, 'Antecedentes · tecnología y poder', 9);
  addKicker(slide, '1933 · Censo alemán', 0.72, 0.45, 4.5);
  addTitle(slide, 'Datos, clasificación y poder del Estado', 'La tecnología de clasificación no es neutral en sus consecuencias.', { y: 0.78, w: 8.2, size: 27, subY: 1.03 });
  addImageFrame(slide, 'ss_card', 0.85, 2.58, 3.2, 1.12, 'contain');
  addImageFrame(slide, 'ibm_poster', 4.45, 2.48, 2.0, 2.05, 'contain');
  addImageFrame(slide, 'ibm_meeting', 6.85, 2.58, 2.1, 1.12, 'contain');
  addImageFrame(slide, 'ibm_logo', 9.33, 2.58, 1.95, 1.12, 'contain');
  addBody(slide, 'El ejemplo muestra la relación entre datos, categorías personales y capacidad estatal de localizar o clasificar poblaciones.', 0.9, 5.05, 5.7, 1.06, { size: 16, color: C.text });
  addBody(slide, 'Para contarlo con prudencia: el foco no es un debate historiográfico concreto, sino la dimensión de derechos fundamentales del tratamiento de datos.', 7.02, 5.05, 4.55, 1.14, { size: 14.5, color: C.blue });
  addNote(slide, 'Explicar que la capacidad de clasificar población mediante datos puede utilizarse con fines administrativos legítimos o convertirse en herramienta de persecución. El ejemplo introduce la dimensión de derechos fundamentales de la protección de datos: el problema no es solo la exactitud técnica, sino quién trata la información, con qué finalidad y con qué consecuencias. Presentar las referencias históricas sobre IBM con prudencia y centrarse en la función de las tecnologías de clasificación.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 10
{
  const slide = pptx.addSlide();
  addBg(slide);
  addBrand(slide, 'Antecedentes · ética del tratamiento automatizado', 10);
  addKicker(slide, 'René Carmille · tecnología y resistencia', 0.72, 0.45, 5.2);
  addTitle(slide, 'La misma infraestructura puede servir para proteger o perseguir', 'El tratamiento automatizado tiene una dimensión ética y política.', { y: 0.78, w: 8.9, size: 26, subY: 1.03 });
  addImageFrame(slide, 'rene_carmille', 0.85, 2.05, 5.45, 3.42, 'crop');
  slide.addText('identificar\nlocalizar\nclasificar', { x: 7.05, y: 2.18, w: 3.5, h: 1.6, margin: 0, fontFace: 'Aptos Display', fontSize: 30, bold: true, color: C.red, breakLine: true, fit: 'shrink' });
  addBody(slide, 'Las tecnologías de datos no solo administran información: pueden producir consecuencias directas sobre personas y colectivos.', 7.08, 4.18, 4.55, 1.05, { size: 16, color: C.text });
  addBody(slide, 'Esta es la razón de fondo para hablar de garantías, control independiente y derechos fundamentales.', 7.08, 5.62, 4.4, 0.72, { size: 15, color: C.blue });
  addNote(slide, 'Continuar la idea anterior: los sistemas de información pueden contribuir a identificar, localizar y clasificar personas, pero también pueden ser alterados o saboteados para impedir usos represivos. El caso de René Carmille permite hablar del componente humano y ético del tratamiento de datos. Las cifras y atribuciones históricas conviene tratarlas como material histórico de la presentación y no como eje jurídico de la sesión.');
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);
}

fs.mkdirSync(path.join(__dirname, '..', 'dist'), { recursive: true });
pptx.writeFile({ fileName: path.join(__dirname, '..', 'dist', 'aepd_antecedentes_01_10.pptx') });
