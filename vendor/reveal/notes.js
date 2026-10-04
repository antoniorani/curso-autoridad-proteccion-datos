(() => {
  "use strict";

  document.write('<script src="vendor/reveal/notes-original.js"><\/script>');

  const EXTRA_ID = "slides-41-50-injected";

  function injectSlides41To50() {
    const root = document.querySelector(".reveal .slides");
    if (!root || document.getElementById(EXTRA_ID)) return;

    const style = document.createElement("style");
    style.id = EXTRA_ID;
    style.textContent = `
      .foundation41-layout,
      .organigram42-layout,
      .independent43-layout,
      .powers44-layout,
      .lopdgdd45-layout,
      .nature46-layout,
      .presidency47-layout,
      .council48-layout,
      .regional49-layout,
      .edpb50-layout {
        display: grid;
        gap: 52px;
        align-items: center;
        flex: 1;
        min-height: 0;
      }

      .foundation41-layout,
      .independent43-layout,
      .powers44-layout,
      .nature46-layout,
      .council48-layout,
      .edpb50-layout {
        grid-template-columns: minmax(0, 1fr) 625px;
      }

      .organigram42-layout,
      .lopdgdd45-layout,
      .presidency47-layout,
      .regional49-layout {
        grid-template-columns: 640px minmax(0, 1fr);
      }

      .diagram-panel-xl {
        margin: 0;
        height: 438px;
        overflow: hidden;
        border: 0;
        border-radius: 30px;
        background: transparent;
        box-shadow: none;
      }

      .diagram-panel-xl.tall { height: 470px; }
      .diagram-panel-xl svg { display: block; width: 100%; height: 100%; overflow: hidden; }

      .institution-grid,
      .aepd-feature-grid,
      .compact-pills {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin-top: 26px;
      }

      .institution-grid.two,
      .compact-pills.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }

      .institution-grid article,
      .aepd-feature-grid article,
      .compact-pills article {
        min-width: 0;
        min-height: 82px;
        padding: 13px 14px;
        overflow: hidden;
        border-top: 2px solid rgba(199,71,86,.34);
        border-radius: 0 0 20px 20px;
        background: rgba(255,255,255,.60);
      }

      .institution-grid span,
      .aepd-feature-grid span,
      .compact-pills span {
        color: var(--gold);
        font-size: 10px;
        font-weight: 850;
        letter-spacing: .10em;
        text-transform: uppercase;
      }

      .institution-grid strong,
      .aepd-feature-grid strong,
      .compact-pills strong {
        display: block;
        margin-top: 7px;
        color: var(--blue-deep);
        font-size: 16.5px;
        line-height: 1.08;
        letter-spacing: -.025em;
        overflow-wrap: anywhere;
      }

      .foundation41-layout .copy-column h2,
      .organigram42-layout .copy-column h2,
      .independent43-layout .copy-column h2,
      .powers44-layout .copy-column h2,
      .lopdgdd45-layout .copy-column h2,
      .nature46-layout .copy-column h2,
      .presidency47-layout .copy-column h2,
      .council48-layout .copy-column h2,
      .regional49-layout .copy-column h2,
      .edpb50-layout .copy-column h2 {
        font-size: 48px;
        line-height: 1.01;
      }

      .foundation41-layout .body-copy,
      .organigram42-layout .body-copy,
      .independent43-layout .body-copy,
      .powers44-layout .body-copy,
      .lopdgdd45-layout .body-copy,
      .nature46-layout .body-copy,
      .presidency47-layout .body-copy,
      .council48-layout .body-copy,
      .regional49-layout .body-copy,
      .edpb50-layout .body-copy {
        font-size: 20px !important;
        line-height: 1.24 !important;
      }

      .edpb50-hero {
        display: grid;
        place-items: center;
        height: 438px;
        border-radius: 40px;
        background:
          radial-gradient(circle at 72% 22%, rgba(241,180,52,.26), transparent 28%),
          linear-gradient(145deg, #17385f, #254f7d);
        color: #fff;
        box-shadow: 0 30px 80px rgba(31,61,99,.20);
      }

      .edpb50-hero strong {
        font-size: 66px;
        line-height: .9;
        letter-spacing: -.07em;
      }

      .edpb50-hero span {
        display: block;
        margin-top: 16px;
        color: #f1b434;
        font-size: 15px;
        font-weight: 850;
        letter-spacing: .16em;
        text-transform: uppercase;
      }
    `;
    document.head.appendChild(style);

    const html = `
      <section class="slide-page" data-title="Origen y fundamento jurídico de la AEPD" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>AEPD · fundamento constitucional</p></header>
          <main class="foundation41-layout">
            <div class="copy-column"><p class="kicker">Antes del RGPD</p><h2>La AEPD nace de una garantía constitucional y se desarrolla antes del modelo europeo actual.</h2><p class="body-copy">El artículo 18.4 CE, la doctrina constitucional, el Convenio 108 y la Carta de la UE explican por qué la protección de datos se convierte en una autoridad independiente.</p><div class="institution-grid"><article><span>1978</span><strong>Artículo 18.4 CE</strong></article><article><span>1992/1994</span><strong>Creación y puesta en marcha</strong></article><article><span>2000/2009</span><strong>Carta UE: art. 8 vinculante</strong></article></div></div>
            <figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Fundamentos jurídicos de la Agencia Española de Protección de Datos"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ORIGEN Y FUNDAMENTO JURÍDICO</text><g transform="translate(62 116)"><rect width="150" height="104" rx="22" fill="#eef3f8"/><text x="75" y="39" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">18.4 CE</text><text x="75" y="65" text-anchor="middle" font-size="12.5" fill="#66778a" data-fit-width="118">límite al uso</text><text x="75" y="84" text-anchor="middle" font-size="12.5" fill="#66778a" data-fit-width="118">de la informática</text></g><g transform="translate(236 116)"><rect width="150" height="104" rx="22" fill="#f7f1e7"/><text x="75" y="39" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">STC 292/2000</text><text x="75" y="65" text-anchor="middle" font-size="12.5" fill="#66778a" data-fit-width="118">derecho</text><text x="75" y="84" text-anchor="middle" font-size="12.5" fill="#66778a" data-fit-width="118">autónomo</text></g><g transform="translate(410 116)"><rect width="150" height="104" rx="22" fill="#fff0f1"/><text x="75" y="39" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">Convenio 108</text><text x="75" y="65" text-anchor="middle" font-size="12.5" fill="#66778a">1981</text><text x="75" y="84" text-anchor="middle" font-size="12.5" fill="#66778a">marco europeo</text></g><g transform="translate(584 116)"><rect width="118" height="104" rx="22" fill="#eef3f8"/><text x="59" y="39" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">Carta UE</text><text x="59" y="65" text-anchor="middle" font-size="12.5" fill="#66778a">2000</text><text x="59" y="84" text-anchor="middle" font-size="12.5" fill="#66778a">2009</text></g><g transform="translate(170 290)"><rect width="420" height="92" rx="26" fill="#17385f"/><text x="210" y="39" text-anchor="middle" font-size="26" font-weight="900" fill="#fff">AEPD</text><text x="210" y="66" text-anchor="middle" font-size="14" fill="#dbe6f2" data-fit-width="360">creada en 1992 · funcionamiento efectivo en 1994</text></g><g stroke="#c74756" stroke-width="3" fill="none" stroke-linecap="round"><path d="M137 222v52h242"/><path d="M311 222v52h68"/><path d="M485 222v52H379"/><path d="M643 222v52H379"/></g></g></svg></figure>
          </main>
        </div><aside class="notes">Relacionar el artículo 18.4 CE con la doctrina constitucional sobre el derecho fundamental a la protección de datos, el Convenio 108 y la Carta de Derechos Fundamentales. Recordar que la Carta se proclama en 2000 y tiene valor jurídico vinculante desde 2009. La AEPD fue creada en 1992 y comenzó a funcionar en 1994: es anterior al RGPD.</aside>
      </section>

      <section class="slide-page" data-title="Organigrama de la AEPD" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>AEPD · organización vigente</p></header><main class="organigram42-layout"><figure class="diagram-panel-xl tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Organigrama vigente de la Agencia Española de Protección de Datos"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="464" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="68" font-size="15" font-weight="850" fill="#c74756">ORGANIGRAMA AEPD · 2026</text><g transform="translate(250 104)"><rect width="260" height="78" rx="23" fill="#17385f"/><text x="130" y="34" text-anchor="middle" font-size="20" font-weight="900" fill="#fff" data-fit-width="216">Presidencia</text><text x="130" y="58" text-anchor="middle" font-size="12.5" fill="#dbe6f2" data-fit-width="216">Lorenzo Cotino Hueso</text></g><g stroke="#c74756" stroke-width="2.4" fill="none" opacity=".62"><path d="M380 182v42M380 224H116M380 224H644"/><path d="M116 224v32M292 224v32M468 224v32M644 224v32"/><path d="M292 346v34M468 346v34"/></g><g transform="translate(52 256)"><rect width="128" height="78" rx="18" fill="#eef3f8"/><text x="64" y="31" text-anchor="middle" font-size="13.5" font-weight="850" fill="#17385f">Adjuntía</text><text x="64" y="53" text-anchor="middle" font-size="11.5" fill="#66778a">F. Pérez Bes</text></g><g transform="translate(204 256)"><rect width="176" height="90" rx="20" fill="#f7f1e7"/><text x="88" y="30" text-anchor="middle" font-size="13.5" font-weight="850" fill="#17385f" data-fit-width="144">Consejo Consultivo</text><text x="88" y="54" text-anchor="middle" font-size="11.5" fill="#66778a">plural · no vinculante</text></g><g transform="translate(404 256)"><rect width="176" height="90" rx="20" fill="#fff0f1"/><text x="88" y="28" text-anchor="middle" font-size="12.8" font-weight="850" fill="#17385f" data-fit-width="144">SG Inspección</text><text x="88" y="48" text-anchor="middle" font-size="12.8" font-weight="850" fill="#17385f">de Datos</text><text x="88" y="68" text-anchor="middle" font-size="11.5" fill="#66778a">control y supervisión</text></g><g transform="translate(604 256)"><rect width="104" height="78" rx="18" fill="#eef3f8"/><text x="52" y="32" text-anchor="middle" font-size="12.5" font-weight="850" fill="#17385f">Servicio</text><text x="52" y="52" text-anchor="middle" font-size="12.5" font-weight="850" fill="#17385f">Jurídico</text></g><g transform="translate(180 380)"><rect width="200" height="82" rx="20" fill="#f7f1e7"/><text x="100" y="28" text-anchor="middle" font-size="12.5" font-weight="850" fill="#17385f" data-fit-width="166">SG Promoción y</text><text x="100" y="47" text-anchor="middle" font-size="12.5" font-weight="850" fill="#17385f">Autorizaciones</text><text x="100" y="65" text-anchor="middle" font-size="11.5" fill="#66778a">orientación preventiva</text></g><g transform="translate(404 380)"><rect width="176" height="82" rx="20" fill="#eef3f8"/><text x="88" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Secretaría General</text><text x="88" y="60" text-anchor="middle" font-size="11.5" fill="#66778a">gestión y soporte</text></g></g></svg></figure><div class="copy-column"><p class="kicker">No memorizar cargos: entender funciones</p><h2>El organigrama muestra cómo se reparte la actividad de la Agencia.</h2><p class="body-copy">Presidencia y Adjuntía dirigen; el Consejo Consultivo aporta perspectivas; las áreas técnicas convierten el mandato legal en supervisión, promoción, autorización, soporte y asesoramiento.</p><div class="compact-pills two"><article><span>Dirección</span><strong>Presidencia y Adjuntía</strong></article><article><span>Actividad</span><strong>Inspección, promoción, autorizaciones y soporte</strong></article></div></div></main></div><aside class="notes">Explicar de forma práctica cómo se organiza la Agencia: Presidencia, Adjuntía, Consejo Consultivo, áreas de inspección, promoción y autorizaciones, Secretaría General y Servicio Jurídico. Actualizar respecto del PPT original: a octubre de 2026 el presidente es Lorenzo Cotino Hueso y el adjunto Francisco Pérez Bes.</aside>
      </section>

      <section class="slide-page" data-title="AEPD como autoridad independiente" data-background-color="#fffdf9"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Independencia · sector público</p></header><main class="independent43-layout"><div class="copy-column"><p class="kicker">Independencia no es aislamiento</p><h2>La AEPD actúa con autonomía funcional, pero dentro del marco jurídico del sector público.</h2><p class="body-copy">Tiene presupuesto propio y ejerce sus funciones con independencia. A la vez, está sometida a controles jurídicos y a las reglas públicas que le resultan aplicables.</p><div class="institution-grid"><article><span>Autonomía</span><strong>Funcional y presupuestaria</strong></article><article><span>Régimen</span><strong>Autoridad administrativa independiente</strong></article><article><span>Control</span><strong>Legalidad y sector público</strong></article></div></div><figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Independencia de la AEPD y controles jurídicos"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">AUTORIDAD INDEPENDIENTE</text><g transform="translate(250 120)"><circle cx="130" cy="105" r="92" fill="#17385f"/><text x="130" y="95" text-anchor="middle" font-size="27" font-weight="900" fill="#fff">AEPD</text><text x="130" y="124" text-anchor="middle" font-size="13" fill="#dbe6f2">independencia funcional</text></g><g transform="translate(56 138)"><rect width="170" height="92" rx="20" fill="#eef3f8"/><text x="85" y="37" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">RGPD</text><text x="85" y="61" text-anchor="middle" font-size="12.5" fill="#66778a">Título VI</text></g><g transform="translate(534 138)"><rect width="170" height="92" rx="20" fill="#f7f1e7"/><text x="85" y="37" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Ley 40/2015</text><text x="85" y="61" text-anchor="middle" font-size="12.5" fill="#66778a">sector público</text></g><g transform="translate(96 320)"><rect width="568" height="60" rx="20" fill="#fff0f1"/><text x="284" y="37" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f" data-fit-width="520">Independencia para decidir · sujeción plena al Derecho</text></g><g stroke="#c74756" stroke-width="3" fill="none" stroke-linecap="round"><path d="M226 184h40"/><path d="M534 184h-40"/><path d="M380 306v14"/></g></g></svg></figure></main></div><aside class="notes">Explicar que la AEPD tiene presupuesto propio y autonomía funcional y debe ejercer sus funciones con independencia. Conectar con el Título VI del RGPD, la Ley 40/2015 y la LOPDGDD. Independencia no significa ausencia de controles: la Agencia forma parte del sector público y está sometida al Derecho.</aside></section>

      <section class="slide-page" data-title="Poderes de la AEPD" data-background-color="#faf7f1"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Poderes europeos · traducción española</p></header><main class="powers44-layout"><div class="copy-column"><p class="kicker">Del RGPD a la institución</p><h2>Los poderes europeos se concretan en una autoridad estatal con estructura, funciones e informe.</h2><p class="body-copy">La AEPD aterriza en España las categorías del RGPD: independencia, miembros, establecimiento, competencia, funciones, poderes e informe de actividad.</p><div class="institution-grid"><article><span>RGPD</span><strong>Marco común europeo</strong></article><article><span>LOPDGDD</span><strong>Desarrollo institucional español</strong></article><article><span>AEPD</span><strong>Aplicación concreta</strong></article></div></div><figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Traducción de los poderes del RGPD en la AEPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">PODERES DE LA AEPD</text><g transform="translate(64 126)"><rect width="168" height="110" rx="22" fill="#eef3f8"/><text x="84" y="46" text-anchor="middle" font-size="20" font-weight="900" fill="#17385f">RGPD</text><text x="84" y="73" text-anchor="middle" font-size="12.5" fill="#66778a">arts. 55–59</text></g><g transform="translate(296 126)"><rect width="168" height="110" rx="22" fill="#17385f"/><text x="84" y="42" text-anchor="middle" font-size="17" font-weight="850" fill="#f1b434">categorías</text><text x="84" y="73" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">funciones</text><text x="84" y="94" text-anchor="middle" font-size="12.5" fill="#dbe6f2">+ poderes</text></g><g transform="translate(528 126)"><rect width="168" height="110" rx="22" fill="#fff0f1"/><text x="84" y="46" text-anchor="middle" font-size="20" font-weight="900" fill="#17385f">AEPD</text><text x="84" y="73" text-anchor="middle" font-size="12.5" fill="#66778a">ejercicio estatal</text></g><g stroke="#c74756" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M236 181h52"/><path d="M278 175l9 6-9 6"/><path d="M468 181h52"/><path d="M510 175l9 6-9 6"/></g><g transform="translate(96 308)"><rect width="568" height="70" rx="22" fill="#ffffff" stroke="#e4ddd2"/><text x="284" y="30" text-anchor="middle" font-size="15" font-weight="850" fill="#c74756">RESULTADO</text><text x="284" y="53" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f" data-fit-width="520">una autoridad con potestad real de supervisar, investigar y corregir</text></g></g></svg></figure></main></div><aside class="notes">Aterrizar en la AEPD las categorías ya explicadas en el artículo 58 RGPD: independencia, condiciones de los miembros, establecimiento de la autoridad, competencia, funciones, poderes e informe de actividad. La idea es mostrar que los poderes europeos tienen traducción institucional concreta en España.</aside></section>

      <section class="slide-page" data-title="LOPDGDD · autoridades de control" data-background-color="#fffdf9"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Título VII · mapa interno</p></header><main class="lopdgdd45-layout"><figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Título VII de la LOPDGDD sobre autoridades de control"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">LOPDGDD · TÍTULO VII</text><g transform="translate(76 118)"><rect width="276" height="184" rx="28" fill="#17385f"/><text x="28" y="44" font-size="14" font-weight="850" fill="#f1b434">CAPÍTULO I</text><text x="28" y="82" font-size="24" font-weight="900" fill="#fff" data-fit-width="220">Disposiciones generales</text><text x="28" y="119" font-size="14" fill="#dbe6f2">naturaleza · estructura · relación</text><text x="28" y="144" font-size="14" fill="#dbe6f2">presupuesto · personal · representación</text></g><g transform="translate(408 118)"><rect width="276" height="184" rx="28" fill="#fff0f1"/><text x="28" y="44" font-size="14" font-weight="850" fill="#c74756">CAPÍTULO II</text><text x="28" y="82" font-size="24" font-weight="900" fill="#17385f" data-fit-width="220">Investigación y auditoría</text><text x="28" y="119" font-size="14" fill="#66778a">entrada · inspección · auditoría</text><text x="28" y="144" font-size="14" fill="#66778a">y colaboración con la Agencia</text></g><g transform="translate(158 340)"><rect width="444" height="52" rx="18" fill="#ffffff" stroke="#e4ddd2"/><text x="222" y="33" text-anchor="middle" font-size="15.5" font-weight="850" fill="#17385f" data-fit-width="400">Dos vertientes: estatuto institucional + potestades operativas</text></g></g></svg></figure><div class="copy-column"><p class="kicker">La ley organiza la institución</p><h2>El Título VII convierte el modelo de autoridad en reglas españolas de organización y actuación.</h2><p class="body-copy">Sirve para ubicar relación con Gobierno y CGPJ, presupuesto, personal, estructura y potestades de inspección.</p><div class="compact-pills two"><article><span>Institución</span><strong>Naturaleza, órganos, presupuesto y personal</strong></article><article><span>Actuación</span><strong>Investigación, inspección y auditoría preventiva</strong></article></div></div></main></div><aside class="notes">Explicar las dos grandes vertientes del Título VII: disposiciones generales sobre la autoridad y potestades de investigación y auditoría preventiva. El esquema permite comentar relación con Gobierno y CGPJ, presupuesto, personal, estructura y potestades de inspección.</aside></section>

      <section class="slide-page" data-title="Naturaleza y régimen de la AEPD" data-background-color="#faf7f1"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>AEPD · personalidad y régimen</p></header><main class="nature46-layout"><div class="copy-column"><p class="kicker">Autoridad administrativa independiente</p><h2>La AEPD tiene personalidad jurídica propia y plena capacidad pública y privada.</h2><p class="body-copy">Actúa con independencia de los poderes públicos, representa a España en el CEPD y cuenta con presupuesto y personal propios.</p><div class="institution-grid"><article><span>Personalidad</span><strong>Jurídica propia</strong></article><article><span>Capacidad</span><strong>Pública y privada</strong></article><article><span>Europa</span><strong>Representación en el CEPD</strong></article></div></div><figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Naturaleza y régimen jurídico de la AEPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">NATURALEZA Y RÉGIMEN</text><g transform="translate(70 126)"><rect width="620" height="148" rx="28" fill="#17385f"/><text x="310" y="55" text-anchor="middle" font-size="30" font-weight="900" fill="#fff" data-fit-width="520">Autoridad administrativa independiente</text><text x="310" y="92" text-anchor="middle" font-size="15" fill="#dbe6f2" data-fit-width="520">personalidad jurídica propia · plena capacidad pública y privada</text></g><g transform="translate(72 326)"><g><rect width="168" height="76" rx="18" fill="#eef3f8"/><text x="84" y="32" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f">Presupuesto</text><text x="84" y="54" text-anchor="middle" font-size="12" fill="#66778a">propio</text></g><g transform="translate(226 0)"><rect width="168" height="76" rx="18" fill="#f7f1e7"/><text x="84" y="32" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f">Personal</text><text x="84" y="54" text-anchor="middle" font-size="12" fill="#66778a">funcionario y laboral</text></g><g transform="translate(452 0)"><rect width="168" height="76" rx="18" fill="#fff0f1"/><text x="84" y="32" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f">CEPD</text><text x="84" y="54" text-anchor="middle" font-size="12" fill="#66778a">representación española</text></g></g></g></svg></figure></main></div><aside class="notes">Explicar que la AEPD es una autoridad administrativa independiente con personalidad jurídica propia y plena capacidad pública y privada, que actúa con independencia de los poderes públicos. Señalar su relación institucional con el Gobierno, su representación en el CEPD, su presupuesto y el régimen de su personal.</aside></section>

      <section class="slide-page" data-title="Presidencia y Adjuntía" data-background-color="#fffdf9"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>AEPD · nombramiento, mandato y cese</p></header><main class="presidency47-layout"><figure class="diagram-panel-xl tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Presidencia y adjuntía de la AEPD"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="464" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="68" font-size="15" font-weight="850" fill="#c74756">PRESIDENCIA Y ADJUNTÍA</text><g transform="translate(70 110)"><rect width="280" height="126" rx="26" fill="#17385f"/><text x="28" y="42" font-size="15" font-weight="850" fill="#f1b434">PRESIDENCIA</text><text x="28" y="78" font-size="25" font-weight="900" fill="#fff" data-fit-width="220">Lorenzo Cotino Hueso</text><text x="28" y="104" font-size="13" fill="#dbe6f2">dirección y representación</text></g><g transform="translate(410 110)"><rect width="280" height="126" rx="26" fill="#eef3f8"/><text x="28" y="42" font-size="15" font-weight="850" fill="#c74756">ADJUNTÍA</text><text x="28" y="78" font-size="25" font-weight="900" fill="#17385f" data-fit-width="220">Francisco Pérez Bes</text><text x="28" y="104" font-size="13" fill="#66778a">apoyo y sustitución</text></g><g transform="translate(80 286)"><rect width="600" height="90" rx="24" fill="#fff" stroke="#e4ddd2"/><text x="30" y="34" font-size="14" font-weight="850" fill="#c74756">PROCEDIMIENTO</text><text x="30" y="62" font-size="16" font-weight="850" fill="#17385f" data-fit-width="540">Gobierno → Congreso → nombramiento · mandato de cinco años</text></g><g transform="translate(120 410)"><rect width="520" height="42" rx="16" fill="#fff0f1"/><text x="260" y="27" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f" data-fit-width="480">cese tasado · decisiones recurribles ante la Audiencia Nacional</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Gobernanza de la autoridad</p><h2>La dirección de la Agencia se diseña para combinar competencia profesional, mandato estable y control jurídico.</h2><p class="body-copy">El procedimiento de nombramiento, el mandato y las causas tasadas de cese son piezas de la independencia institucional.</p><div class="compact-pills"><article><span>Nombramiento</span><strong>Gobierno y Congreso</strong></article><article><span>Mandato</span><strong>Cinco años</strong></article><article><span>Recursos</span><strong>Audiencia Nacional</strong></article></div></div></main></div><aside class="notes">Explicar el procedimiento de nombramiento, las exigencias de competencia profesional, la intervención del Gobierno y del Congreso, la duración del mandato y las causas tasadas de cese. Señalar que las decisiones del presidente agotan la vía administrativa y pueden recurrirse ante la Audiencia Nacional. Actualizar visualmente con los titulares actuales.</aside></section>

      <section class="slide-page" data-title="Consejo Consultivo" data-background-color="#faf7f1"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>AEPD · participación institucional</p></header><main class="council48-layout"><div class="copy-column"><p class="kicker">Pluralidad no vinculante</p><h2>El Consejo Consultivo incorpora perspectivas diversas a la actividad de la Agencia.</h2><p class="body-copy">Su composición reúne instituciones públicas, autoridades autonómicas, organizaciones empresariales y profesionales, universidades, sindicatos y otros actores.</p><div class="institution-grid"><article><span>Carácter</span><strong>No vinculante</strong></article><article><span>Composición</span><strong>Plural e institucional</strong></article><article><span>Función</span><strong>Aportar perspectivas</strong></article></div></div><figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Composición plural del Consejo Consultivo de la AEPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">CONSEJO CONSULTIVO · NO VINCULANTE</text><g transform="translate(284 138)"><circle cx="96" cy="96" r="82" fill="#17385f"/><text x="96" y="88" text-anchor="middle" font-size="21" font-weight="900" fill="#fff">Consejo</text><text x="96" y="114" text-anchor="middle" font-size="15" fill="#dbe6f2">Consultivo</text></g><g transform="translate(56 116)"><rect width="170" height="70" rx="18" fill="#eef3f8"/><text x="85" y="42" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Instituciones públicas</text></g><g transform="translate(534 116)"><rect width="170" height="70" rx="18" fill="#f7f1e7"/><text x="85" y="42" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Autoridades APD</text></g><g transform="translate(56 262)"><rect width="170" height="70" rx="18" fill="#fff0f1"/><text x="85" y="42" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Empresa y profesión</text></g><g transform="translate(534 262)"><rect width="170" height="70" rx="18" fill="#eef3f8"/><text x="85" y="42" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Academia y sindicatos</text></g><g transform="translate(178 372)"><rect width="404" height="44" rx="16" fill="#fff" stroke="#e4ddd2"/><text x="202" y="28" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f" data-fit-width="360">Aporta criterio plural; no sustituye la decisión de la AEPD</text></g></g></svg></figure></main></div><aside class="notes">Explicar que la AEPD dispone de un Consejo Consultivo de composición plural y carácter no vinculante, en el que están representadas instituciones públicas, autoridades autonómicas, organizaciones empresariales, profesionales, universidades, sindicatos y otros actores. Su función es aportar perspectivas diversas a la actividad de la Agencia.</aside></section>

      <section class="slide-page" data-title="Autoridades autonómicas" data-background-color="#fffdf9"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>España · coordinación interna</p></header><main class="regional49-layout"><figure class="diagram-panel-xl"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Autoridades autonómicas de protección de datos en España"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">AUTORIDADES AUTONÓMICAS</text><g transform="translate(80 124)"><rect width="600" height="78" rx="22" fill="#eef3f8"/><text x="28" y="32" font-size="18" font-weight="850" fill="#17385f">País Vasco</text><text x="28" y="56" font-size="13" fill="#66778a">Autoridad Vasca de Protección de Datos</text></g><g transform="translate(80 222)"><rect width="600" height="78" rx="22" fill="#f7f1e7"/><text x="28" y="32" font-size="18" font-weight="850" fill="#17385f">Cataluña</text><text x="28" y="56" font-size="13" fill="#66778a">Autoritat Catalana de Protecció de Dades</text></g><g transform="translate(80 320)"><rect width="600" height="78" rx="22" fill="#fff0f1"/><text x="28" y="32" font-size="18" font-weight="850" fill="#17385f">Andalucía</text><text x="28" y="56" font-size="13" fill="#66778a">Consejo de Transparencia y Protección de Datos de Andalucía</text></g><g transform="translate(590 134)"><circle cx="38" cy="38" r="26" fill="#17385f"/><text x="38" y="45" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">APD</text></g></g></svg></figure><div class="copy-column"><p class="kicker">La AEPD no está sola</p><h2>España también cuenta con autoridades autonómicas con competencias propias.</h2><p class="body-copy">La existencia de autoridades autonómicas obliga a pensar la coordinación dentro de España, además de la cooperación europea.</p><div class="compact-pills"><article><span>País Vasco</span><strong>AVPD</strong></article><article><span>Cataluña</span><strong>APDCAT</strong></article><article><span>Andalucía</span><strong>CTPDA</strong></article></div></div></main></div><aside class="notes">Explicar que la AEPD no es la única autoridad de protección de datos en España. Existen autoridades autonómicas con competencias en sus respectivos ámbitos, como las de País Vasco, Cataluña y Andalucía. Esto permite introducir la necesidad de coordinación interna además de la cooperación europea.</aside></section>

      <section class="slide-page" data-title="El Comité Europeo de Protección de Datos" data-background-color="#faf7f1"><div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>IV · Comité Europeo de Protección de Datos</p></header><main class="edpb50-layout"><div class="copy-column"><p class="kicker">Nuevo bloque</p><h2>El sistema europeo necesita una instancia común de coherencia, cooperación y resolución.</h2><p class="body-copy">El CEPD coordina a las autoridades nacionales, promueve una aplicación coherente del RGPD y resuelve determinados conflictos entre autoridades.</p><div class="institution-grid"><article><span>Coherencia</span><strong>Aplicación común del RGPD</strong></article><article><span>Cooperación</span><strong>Autoridades nacionales conectadas</strong></article><article><span>Decisión</span><strong>Resolución de controversias</strong></article></div></div><div class="edpb50-hero reveal-block"><div><strong>CEPD</strong><span>Comité Europeo</span></div></div></main></div><aside class="notes">Abrir el bloque explicando que el RGPD crea un sistema europeo de supervisión que necesita una instancia común para coordinar a las autoridades nacionales, promover una aplicación coherente y resolver determinadas controversias. Esa instancia es el Comité Europeo de Protección de Datos.</aside></section>
    `;

    root.insertAdjacentHTML("beforeend", html);
    if (window.Reveal?.sync) {
      window.Reveal.sync();
      window.Reveal.layout?.();
    }
    if (typeof window.fitSvgDiagramText === "function") window.fitSvgDiagramText();
  }

  setTimeout(injectSlides41To50, 0);
})();
