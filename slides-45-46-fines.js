(() => {
  "use strict";
  const EXTRA_ID = "slides-45-46-fines-injected";
  const logo = '<img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" />';
  const top = (txt) => `<header class="topbar"><div class="brand">${logo}</div><p>${txt}</p></header>`;
  const fmt = (v) => v >= 1000 ? (v/1000).toFixed(1).replace('.', ',') + " B€" : v.toLocaleString('es-ES', { maximumFractionDigits: 2 }) + " M€";
  const barRows = (items, max, opts={}) => items.map((d,i) => {
    const y = 105 + i * opts.step;
    const w = Math.max(8, d.value / max * opts.maxw);
    const fill = d.trans ? "#c74756" : "#17385f";
    const badge = d.trans ? `<g transform="translate(${opts.xBadge} ${y+15})"><rect width="28" height="18" rx="9" fill="#fff0f1" stroke="#efc6cc"/><text x="14" y="13" text-anchor="middle" font-size="11" font-weight="900" fill="#c74756">↔</text></g>` : "";
    return `<g>${badge}<text x="${opts.xLabel}" y="${y+18}" text-anchor="end" font-size="12.5" font-weight="850" fill="#17385f" data-fit-width="${opts.xLabel-92}">${d.name}</text><rect x="${opts.xBar}" y="${y}" width="${w}" height="24" rx="12" fill="${fill}"/><text x="${opts.xBar + w + 10}" y="${y+17}" font-size="12.5" font-weight="850" fill="#17385f">${fmt(d.value)}</text></g>`;
  }).join("");
  const chipGrid = (items) => `<div class="fines-chip-grid">${items.map(([a,b]) => `<article><span>${a}</span><strong>${b}</strong></article>`).join("")}</div>`;
  const copy = (k,h,b,items) => `<div class="copy-column"><p class="kicker">${k}</p><h2>${h}</h2><p class="body-copy">${b}</p>${chipGrid(items)}</div>`;
  const panel = (inner, label) => `<figure class="fines-chart-panel"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="${label}"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="464" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial">${inner}</g></svg></figure>`;
  const section = ({title,bg,eyebrow,left,right,notes}) => `<section class="slide-page" data-title="${title}" data-background-color="${bg}"><div class="slide-inner">${top(eyebrow)}<main class="fines-slide-layout">${left}${right}</main></div><aside class="notes">${notes}</aside></section>`;

  const intl = [
    {name:"Meta IE · transferencias", value:1200, trans:true},
    {name:"TikTok · datos a China", value:530, trans:true},
    {name:"Meta Instagram", value:405, trans:true},
    {name:"Google · localización", value:403, trans:true},
    {name:"Meta FB+IG · base jurídica", value:390, trans:true},
    {name:"TikTok · menores", value:345, trans:true},
    {name:"LinkedIn · publicidad", value:310, trans:true},
    {name:"Uber · transferencias", value:290, trans:true}
  ];
  const spain = [
    {name:"Amadeus · PNR/perfilado", value:18, trans:true},
    {name:"Google LLC · supresión", value:10, trans:true},
    {name:"Aena · biometría", value:10, trans:false},
    {name:"Vodafone · marketing", value:8.15, trans:true},
    {name:"CaixaBank · marketing", value:6, trans:false},
    {name:"BBVA · marketing", value:5, trans:false}
  ];

  function injectFinesSlides(){
    const root = document.querySelector(".reveal .slides");
    if(!root || document.getElementById(EXTRA_ID)) return;
    const after = [...root.querySelectorAll(':scope > section')].find(s => s.dataset.title === "Poderes de la AEPD");
    if(!after) return;
    const style = document.createElement("style");
    style.id = EXTRA_ID;
    style.textContent = `
      .fines-slide-layout{display:grid;grid-template-columns:760px minmax(0,1fr);gap:42px;align-items:center;flex:1;min-height:0;}
      .fines-chart-panel{margin:0;height:470px;overflow:hidden;border:0;border-radius:30px;background:transparent;box-shadow:none;}
      .fines-chart-panel svg{display:block;width:100%;height:100%;overflow:hidden;}
      .fines-slide-layout h2{font-size:45px;line-height:1.02;}
      .fines-slide-layout .body-copy{font-size:19px!important;line-height:1.24!important;}
      .fines-chip-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:24px;}
      .fines-chip-grid article{min-height:78px;padding:13px 14px;overflow:hidden;border-top:2px solid rgba(199,71,86,.34);border-radius:0 0 20px 20px;background:rgba(255,255,255,.58);}
      .fines-chip-grid span{color:var(--gold);font-size:10px;font-weight:850;letter-spacing:.10em;text-transform:uppercase;}
      .fines-chip-grid strong{display:block;margin-top:7px;color:var(--blue-deep);font-size:16px;line-height:1.08;overflow-wrap:anywhere;}
    `;
    document.head.appendChild(style);

    const intlChart = panel(`<text x="56" y="70" font-size="15" font-weight="850" fill="#c74756" data-fit-width="640">MAYORES MULTAS RGPD · INTERNACIONAL</text><text x="56" y="94" font-size="11.5" fill="#66778a">Importes en millones de euros. Amazon 746 M€ no se incluye porque fue anulada en 2026.</text>${barRows(intl,1200,{xBadge:50,xLabel:238,xBar:258,maxw:370,step:42})}<g transform="translate(56 462)"><rect width="24" height="16" rx="8" fill="#fff0f1" stroke="#efc6cc"/><text x="12" y="12" text-anchor="middle" font-size="10" font-weight="900" fill="#c74756">↔</text><text x="34" y="13" font-size="11.5" font-weight="850" fill="#17385f">caso transnacional / cooperación entre autoridades</text></g>`, "Mayores multas RGPD internacionales");
    const spainChart = panel(`<text x="56" y="70" font-size="15" font-weight="850" fill="#c74756" data-fit-width="640">MAYORES MULTAS AEPD · ESPAÑA</text><text x="56" y="94" font-size="11.5" fill="#66778a">Importes en millones de euros. Se muestra la sanción anunciada o propuesta cuando hay reducción por pronto pago.</text>${barRows(spain,18,{xBadge:50,xLabel:238,xBar:258,maxw:370,step:52})}<g transform="translate(56 462)"><rect width="24" height="16" rx="8" fill="#fff0f1" stroke="#efc6cc"/><text x="12" y="12" text-anchor="middle" font-size="10" font-weight="900" fill="#c74756">↔</text><text x="34" y="13" font-size="11.5" font-weight="850" fill="#17385f">dimensión transnacional: transferencias, cooperación o entidad no española</text></g>`, "Mayores multas de la AEPD en España");

    const s45 = section({
      title:"Principales multas RGPD internacionales",bg:"#fffdf9",eyebrow:"Enforcement internacional · importes comparados",
      left:intlChart,
      right:copy("La escala del enforcement europeo","Las mayores sanciones muestran que los poderes correctivos del RGPD alcanzan importes de cientos de millones cuando el tratamiento es masivo y transfronterizo.","La marca ↔ identifica expedientes con dimensión transnacional: autoridad principal, interesados en varios Estados, transferencias internacionales o cooperación europea.",[["Lectura","barras ordenadas de mayor a menor"],["Unidad","millones de euros"],["Clave","↔ transnacional"],["Cautela","algunas sanciones están recurridas"]]),
      notes:"Gráfico de mayores multas RGPD internacionales: Meta 1.200 M€, TikTok 530 M€, Meta Instagram 405 M€, Google 403 M€, Meta FB+IG 390 M€, TikTok menores 345 M€, LinkedIn 310 M€ y Uber 290 M€. Amazon 746 M€ no se incluye porque la multa fue anulada por un tribunal luxemburgués en 2026. Fuentes de apoyo: DPC Ireland, EDPB/CMS GDPR Enforcement Tracker y noticias regulatorias 2026."
    });
    const s46 = section({
      title:"Principales multas de la AEPD",bg:"#faf7f1",eyebrow:"Enforcement nacional · España",
      left:spainChart,
      right:copy("La escala española es menor, pero muy relevante","En España los importes son inferiores a los grandes expedientes irlandeses, pero la AEPD destaca por volumen de actividad sancionadora y por sectores regulados.","Estas sanciones ayudan a conectar los poderes del artículo 58 RGPD con sectores concretos: viajes, buscadores, biometría aeroportuaria, banca y telecomunicaciones.",[["AEPD","autoridad nacional española"],["Sectores","viajes, banca, telco y biometría"],["Clave","↔ dimensión transnacional"],["Uso docente","del poder abstracto al caso real"]]),
      notes:"Gráfico de principales multas de la AEPD: Amadeus 18 M€, Google LLC 10 M€, Aena 10 M€, Vodafone 8,15 M€, CaixaBank 6 M€ y BBVA 5 M€. La marca ↔ se usa para casos con dimensión transnacional o internacional: Amadeus por cooperación Art. 60, Google por entidad no española/transferencias a Lumen, Vodafone por transferencia internacional a Perú detectada en el expediente. Fuentes de apoyo: AEPD, EDPB, BOE, Aena, Data Protection Report, CMS/GDPR fine trackers."
    });
    after.insertAdjacentHTML("afterend", s45 + s46);
  }

  injectFinesSlides();
})();
