// Lightweight SVG placeholders for the first generated slide batch.
// The reviewed PowerPoint uses richer imagery; these text assets keep the repository self-contained.
function svgData(label, sub = '', bg = 'FBF8F1', fg = '243B53') {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="560" viewBox="0 0 900 560"><rect width="900" height="560" fill="#${bg}"/><rect x="30" y="30" width="840" height="500" rx="24" fill="#ffffff" stroke="#E0D8C8" stroke-width="3"/><text x="70" y="245" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#${fg}">${esc(label)}</text><text x="72" y="315" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#666666">${esc(sub)}</text><rect x="70" y="390" width="220" height="12" fill="#F2A900"/></svg>`;
  return 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
}

const ASSETS = {
  logo: svgData('AEPD', 'Agencia Española de Protección de Datos', 'FFFFFF', '444444'),
  nativity_walk: svgData('Censo', 'inscripción y población'),
  nativity_stable: svgData('Lucas 2:1–4', 'tratamiento masivo'),
  pompeii_wall: svgData('Pompeya', 'inscripciones públicas'),
  pompeii_street: svgData('Vida cotidiana', 'publicar antes de Internet'),
  pompeii_graffiti: svgData('10.000+', 'textos en muros'),
  latrine_illustration: svgData('Roma', 'intimidad cambiante'),
  latrine_ruins: svgData('Letrinas', 'expectativas sociales'),
  privacy_article: svgData('1890', 'The Right to Privacy'),
  weimar_emblem: svgData('Weimar', '1919'),
  weimar_parliament: svgData('Expediente', 'derecho de acceso'),
  jacquard_portrait: svgData('Jacquard', '1804'),
  jacquard_loom: svgData('Telar', 'tarjetas perforadas'),
  hollerith_machine: svgData('Hollerith', 'censo 1890'),
  punch_card: svgData('Tarjeta', 'perforada'),
  ss_card: svgData('1933', 'clasificación'),
  ibm_poster: svgData('Censo alemán', 'datos + poder'),
  ibm_meeting: svgData('Tecnología', 'contexto histórico'),
  ibm_logo: svgData('IBM', 'tabulación'),
  rene_carmille: svgData('René Carmille', 'ética y resistencia')
};

const DIMS = Object.fromEntries(Object.keys(ASSETS).map((k) => [k, { w: 900, h: 560 }]));
module.exports = { ASSETS, DIMS };
