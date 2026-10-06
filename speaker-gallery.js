(() => {
  "use strict";

  const PLUGIN_ID = "speaker-gallery";
  const RECEIVER_QUERY = /(?:^|[?&])receiver(?:[=&]|$)/i;
  const GALLERY_ID = "speaker-slide-gallery";
  const EXTRA_ID = "slides-21-30-injected";
  const EXTRA_31_40_ID = "slides-31-40-injected";

  function injectSlides21To30() {
    const root = document.querySelector(".reveal .slides");
    if (!root || document.getElementById(EXTRA_ID)) return;

    const style = document.createElement("style");
    style.id = EXTRA_ID;
    style.textContent = `
      .legal-bridge-layout,
      .legal-map-layout,
      .rgpd-map-layout,
      .control-opening-layout,
      .control-overview-layout,
      .article51-layout,
      .authority-model-layout,
      .independence52-layout,
      .members53-layout,
      .creation54-layout {
        display: grid;
        gap: 54px;
        align-items: center;
        flex: 1;
        min-height: 0;
      }

      .legal-bridge-layout,
      .article51-layout,
      .independence52-layout,
      .members53-layout,
      .creation54-layout {
        grid-template-columns: minmax(0, 1fr) 610px;
      }

      .legal-map-layout,
      .rgpd-map-layout,
      .control-overview-layout,
      .authority-model-layout {
        grid-template-columns: 640px minmax(0, 1fr);
      }

      .control-opening-layout {
        grid-template-columns: minmax(0, 1fr) 560px;
      }

      .diagram-panel {
        margin: 0;
        height: 430px;
        overflow: hidden;
        border: 0;
        border-radius: 30px;
        background: transparent;
        box-shadow: none;
      }

      .diagram-panel.tall { height: 470px; }
      .diagram-panel svg { width: 100%; height: 100%; display: block; overflow: hidden; }

      .copy-column .compact-copy {
        max-width: 820px;
        margin-top: 18px !important;
        font-size: 20px !important;
        line-height: 1.25 !important;
      }

      .micro-grid,
      .legal-pill-grid,
      .authority-pill-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin-top: 28px;
      }

      .micro-grid.two,
      .legal-pill-grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .authority-pill-grid.four { grid-template-columns: repeat(4, minmax(0, 1fr)); }

      .micro-grid article,
      .legal-pill-grid article,
      .authority-pill-grid article {
        min-width: 0;
        min-height: 86px;
        padding: 14px 15px;
        overflow: hidden;
        border-top: 2px solid rgba(199,71,86,.34);
        border-radius: 0 0 20px 20px;
        background: rgba(255,255,255,.56);
      }

      .micro-grid span,
      .legal-pill-grid span,
      .authority-pill-grid span {
        color: var(--gold);
        font-size: 10px;
        font-weight: 820;
        letter-spacing: .10em;
        text-transform: uppercase;
      }

      .micro-grid strong,
      .legal-pill-grid strong,
      .authority-pill-grid strong {
        display: block;
        margin-top: 7px;
        color: var(--blue-deep);
        font-size: 18px;
        line-height: 1.08;
        letter-spacing: -.025em;
        overflow-wrap: anywhere;
      }

      .section-marker {
        display: grid;
        place-items: center;
        height: 430px;
        border-radius: 34px;
        background: linear-gradient(135deg, var(--blue-deep), #254f7d);
        color: #fff;
        box-shadow: 0 26px 72px rgba(31,61,99,.18);
      }

      .section-marker span {
        color: #f1b434;
        font-size: 15px;
        font-weight: 850;
        letter-spacing: .16em;
        text-transform: uppercase;
      }

      .section-marker strong {
        display: block;
        margin-top: 18px;
        max-width: 420px;
        font-size: 48px;
        line-height: .98;
        letter-spacing: -.055em;
        text-align: center;
      }

      .control-seal {
        position: relative;
        display: grid;
        place-items: center;
        height: 430px;
        overflow: hidden;
        border-radius: 40px;
        background:
          radial-gradient(circle at 28% 24%, rgba(241,180,52,.24), transparent 28%),
          linear-gradient(145deg, #17385f, #244f7d);
        box-shadow: 0 30px 80px rgba(31,61,99,.22);
      }

      .control-seal .ring {
        display: grid;
        place-items: center;
        width: 300px;
        height: 300px;
        border: 2px solid rgba(255,255,255,.24);
        border-radius: 50%;
        box-shadow: inset 0 0 0 24px rgba(255,255,255,.04);
      }

      .control-seal span {
        color: #f1b434;
        font-size: 15px;
        font-weight: 850;
        letter-spacing: .16em;
        text-transform: uppercase;
      }

      .control-seal strong {
        display: block;
        margin-top: 14px;
        max-width: 270px;
        color: #fff;
        font-size: 50px;
        line-height: .96;
        letter-spacing: -.06em;
        text-align: center;
      }

      .control-seal p {
        margin: 14px auto 0 !important;
        max-width: 250px;
        color: #dbe6f2;
        font-size: 13px !important;
        line-height: 1.2 !important;
        text-align: center;
      }

      .control-seal-chips {
        position: absolute;
        right: 28px;
        bottom: 22px;
        left: 28px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }

      .control-seal-chips b {
        display: grid;
        min-height: 34px;
        place-items: center;
        padding: 8px 9px;
        border-radius: 13px;
        background: rgba(255,255,255,.10);
        color: #fff;
        font-size: 11.5px;
        line-height: 1.05;
        text-align: center;
      }

      .copy-column h2.slide-title-mid { font-size: 54px; line-height: 1.01; }
      .copy-column h2.slide-title-small { font-size: 48px; line-height: 1.02; }
    `;
    document.head.appendChild(style);

    const html = `
      <section class="slide-page" data-title="LOPDGDD" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>2018 · adaptación española</p></header>
          <main class="legal-bridge-layout">
            <div class="copy-column"><p class="kicker">Ley Orgánica 3/2018</p><h2 class="slide-title-mid">La LOPDGDD adapta y completa el marco español tras el RGPD.</h2><p class="body-copy compact-copy">No es la fecha de aplicación del RGPD: la LOPDGDD se publicó el 6 de diciembre de 2018 y entró en vigor el 7 de diciembre.</p><div class="micro-grid"><article><span>Función</span><strong>Adaptar el Derecho español</strong></article><article><span>Novedad</span><strong>Derechos digitales</strong></article><article><span>Cautela</span><strong>Artículo 58 bis LOREG</strong></article></div></div>
            <figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="LOPDGDD y RGPD en 2018"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="74" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">2018 · DOS FECHAS QUE NO DEBEN CONFUNDIRSE</text><g transform="translate(58 112)"><rect width="288" height="132" rx="24" fill="#eef3f8"/><text x="24" y="44" font-size="15" font-weight="850" fill="#c74756">25 MAYO</text><text x="24" y="82" font-size="28" font-weight="900" fill="#17385f" data-fit-width="230">RGPD</text><text x="24" y="112" font-size="14" fill="#66778a" data-fit-width="236">plena aplicación</text></g><g transform="translate(414 112)"><rect width="288" height="132" rx="24" fill="#fff0f1"/><text x="24" y="44" font-size="15" font-weight="850" fill="#c74756">7 DICIEMBRE</text><text x="24" y="82" font-size="28" font-weight="900" fill="#17385f" data-fit-width="230">LOPDGDD</text><text x="24" y="112" font-size="14" fill="#66778a" data-fit-width="236">entrada en vigor</text></g><path d="M356 178h48" stroke="#c74756" stroke-width="4" stroke-linecap="round"/><path d="M394 169l12 9-12 9" fill="none" stroke="#c74756" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(58 292)"><rect width="644" height="88" rx="22" fill="#17385f"/><text x="28" y="38" font-size="20" font-weight="850" fill="#fff" data-fit-width="560">Derecho español: complemento nacional + garantía de derechos digitales</text><text x="28" y="64" font-size="14" fill="#dbe6f2" data-fit-width="560">La ley concreta materias que el Reglamento remite al legislador nacional.</text></g></g></svg></figure>
          </main>
        </div><aside class="notes">Explicar que la LOPDGDD adapta el Derecho español al RGPD, completa aspectos remitidos a la legislación nacional y añade derechos digitales. Corregir expresamente la fecha: no entró en vigor el 25 de mayo de 2018; fue publicada el 6 de diciembre y entró en vigor el 7 de diciembre.</aside>
      </section>

      <section class="slide-page" data-title="Marco legal general" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Marco vigente · lex generalis</p></header><main class="legal-map-layout"><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Marco legal general RGPD y LOPDGDD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="76" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">MARCO LEGAL GENERAL</text><g transform="translate(70 118)"><rect width="285" height="172" rx="26" fill="#17385f"/><text x="28" y="48" font-size="18" font-weight="850" fill="#f1b434">Unión Europea</text><text x="28" y="92" font-size="34" font-weight="900" fill="#fff" data-fit-width="230">RGPD</text><text x="28" y="128" font-size="15" fill="#dbe6f2" data-fit-width="230">Reglamento (UE) 2016/679</text></g><g transform="translate(405 118)"><rect width="285" height="172" rx="26" fill="#fff0f1"/><text x="28" y="48" font-size="18" font-weight="850" fill="#c74756">España</text><text x="28" y="92" font-size="34" font-weight="900" fill="#17385f" data-fit-width="230">LOPDGDD</text><text x="28" y="128" font-size="15" fill="#66778a" data-fit-width="230">Ley Orgánica 3/2018</text></g><g transform="translate(158 336)"><rect width="444" height="56" rx="18" fill="#ffffff" stroke="#e4ddd2"/><text x="222" y="36" text-anchor="middle" font-size="17" font-weight="850" fill="#17385f" data-fit-width="400">Base del análisis institucional que empieza ahora</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Cambio de bloque</p><h2 class="slide-title-mid">Del recorrido histórico pasamos al marco que organiza la supervisión actual.</h2><p class="body-copy compact-copy">A partir de aquí, la sesión deja los antecedentes y trabaja con la arquitectura vigente: RGPD y LOPDGDD.</p><div class="legal-pill-grid two"><article><span>Europa</span><strong>Reglamento directamente aplicable</strong></article><article><span>España</span><strong>Complemento orgánico y derechos digitales</strong></article></div></div></main></div><aside class="notes">Cerrar el bloque histórico y fijar el marco que se utilizará a partir de este punto: RGPD y Ley Orgánica 3/2018. Desde esta diapositiva el foco pasa a la arquitectura de supervisión.</aside>
      </section>

      <section class="slide-page" data-title="RGPD · esquema general" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>RGPD · visión panorámica</p></header><main class="rgpd-map-layout"><figure class="diagram-panel tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Esquema general del RGPD"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="460" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">RGPD · GRANDES BLOQUES</text><g transform="translate(58 102)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Principios</text></g><g transform="translate(224 102)"><rect width="150" height="72" rx="18" fill="#f7f1e7"/><text x="75" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Bases jurídicas</text></g><g transform="translate(390 102)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Categorías</text><text x="75" y="55" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">especiales</text></g><g transform="translate(556 102)"><rect width="146" height="72" rx="18" fill="#f7f1e7"/><text x="73" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Derechos</text></g><g transform="translate(58 198)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Seguridad</text></g><g transform="translate(224 198)"><rect width="150" height="72" rx="18" fill="#f7f1e7"/><text x="75" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Transferencias</text><text x="75" y="55" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">internacionales</text></g><g transform="translate(390 198)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Responsabilidad</text><text x="75" y="55" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">proactiva</text></g><g transform="translate(556 198)"><rect width="146" height="72" rx="18" fill="#f7f1e7"/><text x="73" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Encargados</text></g><g transform="translate(138 330)"><rect width="220" height="94" rx="22" fill="#17385f"/><text x="110" y="40" text-anchor="middle" font-size="19" font-weight="900" fill="#fff">Autoridades</text><text x="110" y="66" text-anchor="middle" font-size="13" fill="#dbe6f2">supervisión nacional</text></g><g transform="translate(402 330)"><rect width="220" height="94" rx="22" fill="#fff0f1"/><text x="110" y="40" text-anchor="middle" font-size="19" font-weight="900" fill="#17385f">CEPD</text><text x="110" y="66" text-anchor="middle" font-size="13" fill="#66778a">coordinación europea</text></g><path d="M358 378h44" stroke="#c74756" stroke-width="3"/><path d="M393 371l9 7-9 7" fill="none" stroke="#c74756" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></svg></figure><div class="copy-column"><p class="kicker">Dónde encaja la sesión</p><h2 class="slide-title-small">El RGPD es un sistema completo; ahora nos centraremos en supervisión nacional y coordinación europea.</h2><p class="body-copy compact-copy">El mapa sitúa principios, derechos y obligaciones, pero anticipa el hilo central del curso: autoridades de control y Comité Europeo de Protección de Datos.</p></div></main></div><aside class="notes">Usar esta diapositiva como panorámica. El mensaje oral debe ser que dentro de todo el sistema RGPD la sesión va a concentrarse en dos elementos: la supervisión nacional y la coordinación europea mediante el CEPD.</aside>
      </section>

      <section class="slide-page section-break" data-title="RGPD · autoridades de control" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Bloque II · supervisión institucional</p></header><main class="control-opening-layout"><div class="copy-column"><p class="kicker">II. Autoridades de control en el RGPD</p><h2>El RGPD no solo impone obligaciones: crea un sistema institucional de supervisión independiente.</h2><p class="body-copy compact-copy">El derecho necesita una arquitectura capaz de controlar, corregir, sancionar, cooperar y orientar.</p><div class="authority-pill-grid"><article><span>Garantía</span><strong>Independencia</strong></article><article><span>Herramientas</span><strong>Funciones y poderes</strong></article><article><span>Escala UE</span><strong>Cooperación</strong></article></div></div><div class="control-seal reveal-block" aria-label="Apertura del bloque de autoridades de control"><div class="ring"><div><span>RGPD</span><strong>Autoridades de control</strong><p>independencia · funciones · poderes · cooperación</p></div></div><div class="control-seal-chips"><b>Independencia</b><b>Funciones y poderes</b><b>Cooperación europea</b></div></div></main></div><aside class="notes">Utilizar la diapositiva como apertura del bloque. El RGPD no se limita a imponer obligaciones a responsables y encargados; refuerza un sistema institucional de supervisión independiente con funciones, poderes y mecanismos de cooperación.</aside>
      </section>

      <section class="slide-page" data-title="Autoridades de control · visión de conjunto" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Mapa del bloque</p></header><main class="control-overview-layout"><figure class="diagram-panel tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Visión de conjunto de las autoridades de control"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="460" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">AUTORIDAD DE CONTROL · MAPA DE ELEMENTOS</text><g transform="translate(270 100)"><rect width="220" height="82" rx="25" fill="#17385f"/><text x="110" y="34" text-anchor="middle" font-size="14" font-weight="850" fill="#f1b434">AUTORIDAD DE CONTROL</text><text x="110" y="62" text-anchor="middle" font-size="25" font-weight="900" fill="#fff">APD</text></g><g stroke="#c74756" stroke-width="2.7" fill="none" stroke-linecap="round" opacity=".62"><path d="M380 182v241"/><path d="M258 251H502"/><path d="M258 337H502"/><path d="M258 423H502"/></g><g fill="#c74756" opacity=".78"><circle cx="380" cy="251" r="4"/><circle cx="380" cy="337" r="4"/><circle cx="380" cy="423" r="4"/></g><g transform="translate(58 218)"><rect width="200" height="66" rx="18" fill="#eef3f8"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Independencia</text></g><g transform="translate(502 218)"><rect width="200" height="66" rx="18" fill="#f7f1e7"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Competencia</text></g><g transform="translate(58 304)"><rect width="200" height="66" rx="18" fill="#fff0f1"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Funciones</text></g><g transform="translate(502 304)"><rect width="200" height="66" rx="18" fill="#eef3f8"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Poderes</text></g><g transform="translate(58 390)"><rect width="200" height="66" rx="18" fill="#f7f1e7"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Ventanilla única</text></g><g transform="translate(502 390)"><rect width="200" height="66" rx="18" fill="#fff0f1"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Cooperación</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Visión de conjunto</p><h2 class="slide-title-mid">La autoridad de control combina independencia, competencia, funciones, poderes y cooperación.</h2><p class="body-copy compact-copy">Esta diapositiva sirve como mapa: cada elemento se desplegará después con su base jurídica y su función en el modelo europeo.</p></div></main></div><aside class="notes">Presentar el esquema general: independencia, miembros y nombramiento, competencia territorial, autoridad principal, funciones, poderes y cooperación. No hace falta explicarlo todo; es un mapa de lo que se desarrollará a continuación.</aside>
      </section>

      <section class="slide-page" data-title="Artículo 51 RGPD" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 51 · misión</p></header><main class="article51-layout"><div class="copy-column"><p class="kicker">Aspectos generales</p><h2 class="slide-title-mid">Cada Estado debe contar con autoridad de control y las autoridades deben cooperar.</h2><p class="body-copy compact-copy">El artículo 51 combina dos ideas: proteger derechos y libertades, y facilitar la libre circulación de datos en la Unión.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Doble misión del artículo 51 RGPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 51 · DOBLE MISIÓN</text><g transform="translate(78 122)"><rect width="282" height="170" rx="26" fill="#17385f"/><text x="32" y="58" font-size="22" font-weight="900" fill="#fff" data-fit-width="220">Proteger derechos</text><text x="32" y="92" font-size="15" fill="#dbe6f2" data-fit-width="220">supervisar la aplicación</text><text x="32" y="116" font-size="15" fill="#dbe6f2" data-fit-width="220">del RGPD</text></g><g transform="translate(400 122)"><rect width="282" height="170" rx="26" fill="#fff0f1"/><text x="32" y="58" font-size="22" font-weight="900" fill="#17385f" data-fit-width="220">Libre circulación</text><text x="32" y="92" font-size="15" fill="#66778a" data-fit-width="220">garantizar un espacio</text><text x="32" y="116" font-size="15" fill="#66778a" data-fit-width="220">europeo coherente</text></g><g transform="translate(154 334)"><rect width="452" height="52" rx="18" fill="#ffffff" stroke="#e4ddd2"/><text x="226" y="33" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f" data-fit-width="410">Al menos una autoridad por Estado miembro + cooperación</text></g></g></svg></figure></main></div><aside class="notes">Explicar la doble misión de las autoridades: supervisar la aplicación del RGPD para proteger derechos y libertades, y facilitar la libre circulación de datos en la Unión. Cada Estado debe disponer al menos de una autoridad y las autoridades deben cooperar.</aside>
      </section>

      <section class="slide-page" data-title="Modelo de autoridad de control" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Modelo RGPD · características</p></header><main class="authority-model-layout"><figure class="diagram-panel tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Características del modelo de autoridad de control"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="460" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">MODELO RGPD · MÁS QUE SANCIONES</text><g transform="translate(58 110)"><rect width="304" height="82" rx="20" fill="#eef3f8"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Independencia</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">sin instrucciones externas</text></g><g transform="translate(398 110)"><rect width="304" height="82" rx="20" fill="#f7f1e7"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Tutela judicial</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">decisiones revisables</text></g><g transform="translate(58 216)"><rect width="304" height="82" rx="20" fill="#fff0f1"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Poderes correctivos</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">la multa es solo una herramienta</text></g><g transform="translate(398 216)"><rect width="304" height="82" rx="20" fill="#eef3f8"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Ventanilla única</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">cooperación y coherencia</text></g><g transform="translate(58 322)"><rect width="304" height="82" rx="20" fill="#f7f1e7"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Asistencia y operaciones</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">trabajo conjunto entre agencias</text></g><g transform="translate(398 322)"><rect width="304" height="82" rx="20" fill="#fff0f1"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">CEPD</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">directrices y resolución de conflictos</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Características centrales</p><h2 class="slide-title-small">El modelo europeo combina autoridad independiente, poderes eficaces y mecanismos de cooperación.</h2><p class="body-copy compact-copy">Conviene insistir en que la multa no agota el sistema: supervisar también implica orientar, investigar, corregir y cooperar.</p></div></main></div><aside class="notes">Recapitular las notas centrales: independencia, tutela judicial, poderes correctivos y sancionadores, ventanilla única, cooperación, asistencia mutua, operaciones conjuntas y participación en el CEPD. Aclarar que la multa es solo una de las herramientas.</aside>
      </section>

      <section class="slide-page" data-title="Independencia · artículo 52" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 52 · independencia</p></header><main class="independence52-layout"><div class="copy-column"><p class="kicker">Garantía institucional</p><h2 class="slide-title-mid">La independencia permite controlar a quienes también pueden ser controlados.</h2><p class="body-copy compact-copy">No es una cuestión meramente organizativa: exige ausencia de instrucciones, medios suficientes y capacidad real de actuación.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Pilares de la independencia del artículo 52 RGPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 52 · PILARES DE INDEPENDENCIA</text><g transform="translate(70 126)"><rect width="140" height="210" rx="24" fill="#17385f"/><text x="70" y="72" text-anchor="middle" font-size="15" font-weight="850" fill="#fff">Sin</text><text x="70" y="94" text-anchor="middle" font-size="15" font-weight="850" fill="#fff">instrucciones</text></g><g transform="translate(230 126)"><rect width="140" height="210" rx="24" fill="#eef3f8"/><text x="70" y="82" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Recursos</text><text x="70" y="104" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">humanos</text></g><g transform="translate(390 126)"><rect width="140" height="210" rx="24" fill="#f7f1e7"/><text x="70" y="82" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Personal</text><text x="70" y="104" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">propio</text></g><g transform="translate(550 126)"><rect width="140" height="210" rx="24" fill="#fff0f1"/><text x="70" y="82" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Recursos</text><text x="70" y="104" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">financieros</text></g><rect x="110" y="360" width="540" height="32" rx="16" fill="#ffffff" stroke="#e4ddd2"/><text x="380" y="381" text-anchor="middle" font-size="13.5" font-weight="850" fill="#17385f" data-fit-width="500">Independencia práctica: medios reales para supervisar</text></g></svg></figure></main></div><aside class="notes">Explicar que una autoridad solo puede supervisar eficazmente si actúa sin instrucciones externas y dispone de medios humanos, técnicos y financieros suficientes. La independencia es una garantía institucional del derecho fundamental.</aside>
      </section>

      <section class="slide-page" data-title="Miembros de la autoridad · artículo 53" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 53 · garantías personales</p></header><main class="members53-layout"><div class="copy-column"><p class="kicker">Miembros de la autoridad</p><h2 class="slide-title-mid">La independencia institucional necesita garantías personales de independencia.</h2><p class="body-copy compact-copy">Nombramiento, cualificación, incompatibilidades y cese limitado evitan que el supervisor pueda ser condicionado.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Garantías personales de los miembros de una autoridad de control"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 53 · GARANTÍAS DE LOS MIEMBROS</text><g transform="translate(72 118)"><rect width="286" height="92" rx="22" fill="#eef3f8"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Sin influencia externa</text><text x="24" y="64" font-size="13.5" fill="#66778a">ni instrucciones</text></g><g transform="translate(402 118)"><rect width="286" height="92" rx="22" fill="#fff0f1"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Incompatibilidades</text><text x="24" y="64" font-size="13.5" fill="#66778a">frente a conflictos de interés</text></g><g transform="translate(72 250)"><rect width="286" height="92" rx="22" fill="#f7f1e7"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Nombramiento transparente</text><text x="24" y="64" font-size="13.5" fill="#66778a">basado en cualificación</text></g><g transform="translate(402 250)"><rect width="286" height="92" rx="22" fill="#eef3f8"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Cese limitado</text><text x="24" y="64" font-size="13.5" fill="#66778a">mandato, dimisión o pérdida de requisitos</text></g></g></svg></figure></main></div><aside class="notes">Explicar las garantías personales: ausencia de instrucciones, incompatibilidades, procedimiento transparente de nombramiento, cualificación profesional y causas limitadas de cese. El objetivo es evitar condicionamientos sobre el órgano supervisor.</aside>
      </section>

      <section class="slide-page" data-title="Creación de autoridades · artículo 54" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 54 · desarrollo nacional</p></header><main class="creation54-layout"><div class="copy-column"><p class="kicker">Creación de autoridades</p><h2 class="slide-title-mid">El RGPD fija mínimos comunes, pero cada Estado concreta su autoridad por ley.</h2><p class="body-copy compact-copy">Por eso las autoridades nacionales no son idénticas, aunque responden al mismo modelo europeo de independencia y supervisión.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Elementos que debe regular la ley nacional según el artículo 54 RGPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 54 · QUÉ DEBE REGULAR LA LEY</text><g transform="translate(68 112)"><rect width="624" height="280" rx="28" fill="#ffffff" stroke="#e4ddd2"/><g font-size="15" fill="#17385f" font-weight="850"><text x="32" y="48">✓ requisitos para ser miembro</text><text x="32" y="88">✓ procedimiento de nombramiento</text><text x="32" y="128">✓ mandato mínimo de cuatro años</text><text x="32" y="168">✓ renovación e incompatibilidades</text><text x="32" y="208">✓ procedimiento de cese</text><text x="32" y="248">✓ deber de secreto del personal</text></g></g><rect x="176" y="414" width="408" height="30" rx="15" fill="#17385f"/><text x="380" y="434" text-anchor="middle" font-size="13" font-weight="850" fill="#fff" data-fit-width="360">Mismo modelo europeo, concreción nacional</text></g></svg></figure></main></div><aside class="notes">Mostrar que el RGPD fija mínimos comunes pero deja a la legislación nacional concretar requisitos, nombramiento, duración del mandato, renovación, incompatibilidades, cese y deber de secreto. Esto explica por qué las autoridades nacionales no son idénticas.</aside>
      </section>
    `;

    root.insertAdjacentHTML("beforeend", html);
  }

  injectSlides21To30();


  function injectSlides31To40() {
    const root = document.querySelector(".reveal .slides");
    if (!root || document.getElementById(EXTRA_31_40_ID)) return;

    const style = document.createElement("style");
    style.id = EXTRA_31_40_ID;
    style.textContent = `
      .authority31-layout,
      .authority32-layout,
      .authority34-layout,
      .authority35-layout,
      .authority36-layout,
      .authority38-layout,
      .aepd40-layout {
        display: grid;
        gap: 52px;
        align-items: center;
        flex: 1;
        min-height: 0;
      }

      .authority31-layout,
      .authority34-layout,
      .authority36-layout,
      .authority38-layout {
        grid-template-columns: minmax(0, 1fr) 630px;
      }

      .authority32-layout,
      .authority35-layout,
      .aepd40-layout {
        grid-template-columns: 640px minmax(0, 1fr);
      }

      .authority33-layout,
      .authority37-layout {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
        min-height: 0;
      }

      .authority33-layout .copy-column,
      .authority37-layout .copy-column {
        max-width: 1260px;
      }

      .authority33-layout .copy-column h2,
      .authority37-layout .copy-column h2 {
        font-size: 50px;
        line-height: 1.01;
      }

      .authority33-triad {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
      }

      .authority33-triad article {
        position: relative;
        min-height: 250px;
        padding: 24px 24px 22px;
        overflow: hidden;
        border: 1px solid rgba(31,61,99,.10);
        border-radius: 26px;
        background: rgba(255,255,255,.78);
        box-shadow: 0 18px 50px rgba(31,61,99,.08);
      }

      .authority33-triad article::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 5px;
        background: var(--blue);
      }

      .authority33-triad article:nth-child(2)::before { background: var(--red); }
      .authority33-triad article:nth-child(3)::before { background: var(--gold); }

      .authority33-triad span {
        color: var(--muted);
        font-size: 12px;
        font-weight: 850;
        letter-spacing: .12em;
        text-transform: uppercase;
      }

      .authority33-triad strong {
        display: block;
        margin-top: 12px;
        color: var(--blue-deep);
        font-size: 30px;
        line-height: 1;
        letter-spacing: -.04em;
      }

      .authority33-triad p {
        margin: 14px 0 0 !important;
        color: var(--muted);
        font-size: 17px !important;
        line-height: 1.24 !important;
      }

      .authority33-triad .article-ref {
        display: inline-grid;
        place-items: center;
        width: 54px;
        height: 54px;
        margin-top: 22px;
        border-radius: 50%;
        background: var(--blue-deep);
        color: #fff;
        font-size: 18px;
        font-weight: 900;
      }

      .authority33-triad article:nth-child(2) .article-ref { background: var(--red); }
      .authority33-triad article:nth-child(3) .article-ref { background: #9a7444; }

      .corrective-scale {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
        min-height: 0;
      }

      .corrective-scale article {
        min-width: 0;
        min-height: 236px;
        padding: 22px 20px;
        border-radius: 26px;
        border: 1px solid rgba(31,61,99,.09);
        background: rgba(255,255,255,.82);
        box-shadow: 0 16px 44px rgba(31,61,99,.07);
      }

      .corrective-scale article:nth-child(2) { background: rgba(247,241,231,.92); }
      .corrective-scale article:nth-child(3) { background: rgba(255,240,241,.92); }
      .corrective-scale article:nth-child(4) { background: rgba(199,71,86,.10); }

      .corrective-scale span {
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--blue-deep);
        color: #fff;
        font-size: 13px;
        font-weight: 900;
      }

      .corrective-scale article:nth-child(2) span { background: var(--gold); }
      .corrective-scale article:nth-child(3) span,
      .corrective-scale article:nth-child(4) span { background: var(--red); }

      .corrective-scale strong {
        display: block;
        margin-top: 14px;
        color: var(--blue-deep);
        font-size: 22px;
        line-height: 1.03;
        letter-spacing: -.03em;
      }

      .corrective-scale p {
        margin: 12px 0 0 !important;
        color: var(--muted);
        font-size: 15px !important;
        line-height: 1.22 !important;
      }

      .aepd-transition {
        display: grid;
        grid-template-columns: 1fr 470px;
        gap: 80px;
        align-items: center;
        flex: 1;
      }

      .aepd-transition .copy-column h2 {
        max-width: 900px;
        font-size: 66px;
        line-height: .98;
        letter-spacing: -.055em;
      }

      .aepd-seal {
        display: grid;
        place-items: center;
        height: 470px;
        border-radius: 42px;
        background:
          radial-gradient(circle at 30% 25%, rgba(241,180,52,.25), transparent 28%),
          linear-gradient(145deg, #17385f, #244f7d);
        box-shadow: 0 30px 80px rgba(31,61,99,.22);
      }

      .aepd-seal .ring {
        display: grid;
        place-items: center;
        width: 290px;
        height: 290px;
        border: 2px solid rgba(255,255,255,.26);
        border-radius: 50%;
        box-shadow: inset 0 0 0 24px rgba(255,255,255,.04);
      }

      .aepd-seal strong {
        color: #fff;
        font-size: 64px;
        font-weight: 900;
        letter-spacing: -.06em;
      }

      .aepd-seal span {
        display: block;
        margin-top: 10px;
        color: #f1b434;
        font-size: 15px;
        font-weight: 850;
        letter-spacing: .14em;
        text-transform: uppercase;
      }

      .authority31-layout .copy-column h2,
      .authority32-layout .copy-column h2,
      .authority34-layout .copy-column h2,
      .authority35-layout .copy-column h2,
      .authority36-layout .copy-column h2,
      .authority38-layout .copy-column h2,
      .aepd40-layout .copy-column h2 {
        font-size: 49px;
        line-height: 1.01;
      }

      .authority31-layout .body-copy,
      .authority32-layout .body-copy,
      .authority34-layout .body-copy,
      .authority35-layout .body-copy,
      .authority36-layout .body-copy,
      .authority38-layout .body-copy,
      .aepd40-layout .body-copy {
        font-size: 20px !important;
        line-height: 1.24 !important;
      }

      .authority31-layout .micro-grid,
      .authority32-layout .micro-grid,
      .authority34-layout .micro-grid,
      .authority35-layout .micro-grid,
      .authority36-layout .micro-grid,
      .authority38-layout .micro-grid {
        margin-top: 22px;
      }

      .authority31-layout .micro-grid article,
      .authority32-layout .micro-grid article,
      .authority34-layout .micro-grid article,
      .authority35-layout .micro-grid article,
      .authority36-layout .micro-grid article,
      .authority38-layout .micro-grid article {
        min-height: 78px;
        padding: 12px 13px;
      }

      .authority31-layout .micro-grid strong,
      .authority32-layout .micro-grid strong,
      .authority34-layout .micro-grid strong,
      .authority35-layout .micro-grid strong,
      .authority36-layout .micro-grid strong,
      .authority38-layout .micro-grid strong {
        font-size: 16px;
      }
    `;
    document.head.appendChild(style);

    const html = `
      <section class="slide-page" data-title="Competencia · artículo 55 RGPD" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 55 · competencia territorial</p></header>
          <main class="authority31-layout">
            <div class="copy-column">
              <p class="kicker">¿Qué autoridad puede actuar?</p>
              <h2>La regla general es territorial: cada autoridad ejerce sus funciones y poderes en su Estado miembro.</h2>
              <p class="body-copy">El RGPD añade reglas específicas para tratamientos del sector público y excluye la función judicial de los tribunales.</p>
              <div class="micro-grid">
                <article><span>Regla</span><strong>Funciones y poderes en su territorio</strong></article>
                <article><span>Sector público</span><strong>Autoridades y misiones de interés público</strong></article>
                <article><span>Excepción</span><strong>Tribunales en función judicial</strong></article>
              </div>
            </div>
            <figure class="diagram-panel">
              <svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Competencia territorial de las autoridades de control según el artículo 55 del RGPD">
                <rect width="760" height="470" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="70" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 55 · COMPETENCIA</text>
                  <g transform="translate(255 105)">
                    <circle cx="125" cy="96" r="92" fill="#17385f"/>
                    <text x="125" y="82" text-anchor="middle" font-size="17" font-weight="850" fill="#f1b434" data-fit-width="150">TERRITORIO</text>
                    <text x="125" y="116" text-anchor="middle" font-size="28" font-weight="900" fill="#fff" data-fit-width="150">Estado miembro</text>
                  </g>
                  <g transform="translate(54 140)">
                    <rect width="180" height="118" rx="22" fill="#eef3f8"/>
                    <text x="20" y="35" font-size="14" font-weight="850" fill="#c74756">01</text>
                    <text x="20" y="66" font-size="17" font-weight="850" fill="#17385f" data-fit-width="142">Responsables</text>
                    <text x="20" y="91" font-size="13" fill="#66778a" data-fit-width="142">y encargados</text>
                  </g>
                  <g transform="translate(526 140)">
                    <rect width="180" height="118" rx="22" fill="#f7f1e7"/>
                    <text x="20" y="35" font-size="14" font-weight="850" fill="#c74756">02</text>
                    <text x="20" y="66" font-size="17" font-weight="850" fill="#17385f" data-fit-width="142">Sector público</text>
                    <text x="20" y="91" font-size="13" fill="#66778a" data-fit-width="142">art. 6.1.c y e</text>
                  </g>
                  <g transform="translate(205 330)">
                    <rect width="350" height="74" rx="22" fill="#fff0f1"/>
                    <text x="24" y="31" font-size="14" font-weight="850" fill="#c74756">FUERA DE ESTA COMPETENCIA</text>
                    <text x="24" y="56" font-size="16" font-weight="850" fill="#17385f" data-fit-width="302">Tribunales en ejercicio de función judicial</text>
                  </g>
                  <g stroke="#c74756" stroke-width="3" fill="none" stroke-linecap="round">
                    <path d="M236 198h42"/>
                    <path d="M482 198h42"/>
                    <path d="M380 294v30"/>
                  </g>
                </g>
              </svg>
            </figure>
          </main>
        </div>
        <aside class="notes">Explicar que la autoridad ejerce sus funciones y poderes en su territorio, con reglas específicas para tratamientos de autoridades públicas y determinadas misiones de interés público. Subrayar la excepción relativa a tratamientos realizados por tribunales en el ejercicio de su función judicial.</aside>
      </section>

      <section class="slide-page" data-title="Autoridad principal · artículo 56 RGPD" data-background-color="#faf7f1">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 56 · ventanilla única</p></header>
          <main class="authority32-layout">
            <figure class="diagram-panel">
              <svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Funcionamiento de la autoridad de control principal y la ventanilla única">
                <rect width="760" height="470" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="70" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 56 · ONE-STOP-SHOP</text>
                  <g transform="translate(54 118)">
                    <rect width="180" height="110" rx="22" fill="#eef3f8"/>
                    <text x="20" y="42" font-size="17" font-weight="850" fill="#17385f" data-fit-width="142">Establecimiento</text>
                    <text x="20" y="67" font-size="13" fill="#66778a" data-fit-width="142">principal o único</text>
                    <text x="20" y="88" font-size="13" fill="#66778a" data-fit-width="142">del responsable/encargado</text>
                  </g>
                  <g transform="translate(286 103)">
                    <rect width="190" height="140" rx="24" fill="#17385f"/>
                    <text x="95" y="48" text-anchor="middle" font-size="13" font-weight="850" fill="#f1b434">AUTORIDAD</text>
                    <text x="95" y="80" text-anchor="middle" font-size="25" font-weight="900" fill="#fff" data-fit-width="145">principal</text>
                    <text x="95" y="110" text-anchor="middle" font-size="13" fill="#dbe6f2" data-fit-width="145">interlocutor principal</text>
                  </g>
                  <g transform="translate(528 118)">
                    <rect width="178" height="110" rx="22" fill="#fff0f1"/>
                    <text x="89" y="42" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f" data-fit-width="144">Autoridades</text>
                    <text x="89" y="66" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f" data-fit-width="144">interesadas</text>
                    <text x="89" y="89" text-anchor="middle" font-size="12.5" fill="#66778a" data-fit-width="144">siguen participando</text>
                  </g>
                  <g stroke="#c74756" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M236 173h42"/><path d="M270 167l8 6-8 6"/>
                    <path d="M478 173h42"/><path d="M512 167l8 6-8 6"/>
                  </g>
                  <g transform="translate(92 302)">
                    <rect width="576" height="94" rx="24" fill="#ffffff" stroke="#e4ddd2"/>
                    <text x="24" y="34" font-size="14" font-weight="850" fill="#c74756">TRATAMIENTO TRANSFRONTERIZO</text>
                    <text x="24" y="64" font-size="17" font-weight="850" fill="#17385f" data-fit-width="522">Una autoridad lidera; las demás cooperan y conservan voz en el caso.</text>
                  </g>
                </g>
              </svg>
            </figure>
            <div class="copy-column">
              <p class="kicker">Ventanilla única</p>
              <h2>La autoridad principal coordina el caso transfronterizo, pero no actúa sola.</h2>
              <p class="body-copy">Se vincula al establecimiento principal o único. Las autoridades afectadas siguen participando como autoridades interesadas.</p>
              <div class="micro-grid">
                <article><span>Entrada</span><strong>Establecimiento principal</strong></article>
                <article><span>Liderazgo</span><strong>Autoridad de control principal</strong></article>
                <article><span>Cooperación</span><strong>Autoridades interesadas</strong></article>
              </div>
            </div>
          </main>
        </div>
        <aside class="notes">Introducir la lógica de la ventanilla única: en tratamientos transfronterizos se identifica una autoridad principal vinculada al establecimiento principal o único del responsable o encargado. Esa autoridad actúa como interlocutora principal, pero las demás autoridades afectadas siguen participando como autoridades interesadas.</aside>
      </section>

      <section class="slide-page" data-title="Funciones, poderes e informe" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículos 57–59 · tres planos</p></header>
          <main class="authority33-layout">
            <div class="copy-column">
              <p class="kicker">Una distinción que ordena el capítulo</p>
              <h2>Funciones, poderes e informe de actividad responden a preguntas diferentes.</h2>
              <p class="body-copy">Qué debe hacer la autoridad, con qué herramientas puede hacerlo y cómo rinde cuentas de su actuación.</p>
            </div>
            <div class="authority33-triad reveal-block stagger">
              <article><span>Qué hace</span><strong>Funciones</strong><p>Supervisar, orientar, cooperar, atender reclamaciones y desarrollar tareas específicas.</p><b class="article-ref">57</b></article>
              <article><span>Con qué actúa</span><strong>Poderes</strong><p>Investigar, corregir, autorizar, asesorar y hacer cumplir el Reglamento.</p><b class="article-ref">58</b></article>
              <article><span>Cómo responde</span><strong>Informe</strong><p>Transparencia y rendición de cuentas frente a instituciones y ciudadanía.</p><b class="article-ref">59</b></article>
            </div>
          </main>
        </div>
        <aside class="notes">Explicar la diferencia entre tres conceptos: las funciones describen qué debe hacer la autoridad; los poderes son las herramientas jurídicas con las que puede hacerlo; y el informe de actividad garantiza transparencia y rendición de cuentas. Esta distinción ayuda a ordenar los artículos 57, 58 y 59.</aside>
      </section>

      <section class="slide-page" data-title="Funciones generales · artículo 57" data-background-color="#faf7f1">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 57 · supervisión general</p></header>
          <main class="authority34-layout">
            <div class="copy-column">
              <p class="kicker">Primera parte de las funciones</p>
              <h2>La autoridad no solo sanciona: también previene, orienta, coopera y observa el cambio tecnológico.</h2>
              <p class="body-copy">El artículo 57 combina supervisión jurídica, sensibilización pública, asesoramiento institucional y cooperación europea.</p>
              <div class="micro-grid">
                <article><span>Supervisión</span><strong>Velar por el cumplimiento</strong></article>
                <article><span>Sociedad</span><strong>Sensibilizar al público</strong></article>
                <article><span>Instituciones</span><strong>Asesorar y cooperar</strong></article>
              </div>
            </div>
            <figure class="diagram-panel">
              <svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Seis funciones generales de las autoridades de control">
                <rect width="760" height="470" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="68" font-size="15" font-weight="850" fill="#c74756">ARTÍCULO 57 · FUNCIONES GENERALES</text>
                  <g transform="translate(270 96)">
                    <rect width="220" height="70" rx="24" fill="#17385f"/>
                    <text x="110" y="29" text-anchor="middle" font-size="14" font-weight="850" fill="#f1b434">ARTÍCULO 57</text>
                    <text x="110" y="54" text-anchor="middle" font-size="21" font-weight="900" fill="#fff">Autoridad de control</text>
                  </g>
                  <g stroke="#c74756" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".62">
                    <path d="M380 166v224"/>
                    <path d="M244 226H516"/>
                    <path d="M244 308H516"/>
                    <path d="M244 390H516"/>
                  </g>
                  <g fill="#c74756" opacity=".78"><circle cx="380" cy="226" r="4"/><circle cx="380" cy="308" r="4"/><circle cx="380" cy="390" r="4"/></g>
                  <g transform="translate(54 194)"><rect width="190" height="64" rx="18" fill="#eef3f8"/><text x="95" y="27" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Cumplimiento</text><text x="95" y="48" text-anchor="middle" font-size="12.5" fill="#66778a">vigilar el RGPD</text></g>
                  <g transform="translate(516 194)"><rect width="190" height="64" rx="18" fill="#f7f1e7"/><text x="95" y="27" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Sensibilización</text><text x="95" y="48" text-anchor="middle" font-size="12.5" fill="#66778a">riesgos y derechos</text></g>
                  <g transform="translate(54 276)"><rect width="190" height="64" rx="18" fill="#fff0f1"/><text x="95" y="27" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Asesoramiento</text><text x="95" y="48" text-anchor="middle" font-size="12.5" fill="#66778a">Gobierno y Parlamento</text></g>
                  <g transform="translate(516 276)"><rect width="190" height="64" rx="18" fill="#eef3f8"/><text x="95" y="27" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Cooperación</text><text x="95" y="48" text-anchor="middle" font-size="12.5" fill="#66778a">otras autoridades</text></g>
                  <g transform="translate(54 358)"><rect width="190" height="64" rx="18" fill="#f7f1e7"/><text x="95" y="27" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f" data-fit-width="160">Tecnología y mercado</text><text x="95" y="48" text-anchor="middle" font-size="12" fill="#66778a">seguir su impacto</text></g>
                  <g transform="translate(516 358)"><rect width="190" height="64" rx="18" fill="#fff0f1"/><text x="95" y="27" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f">CEPD</text><text x="95" y="48" text-anchor="middle" font-size="12" fill="#66778a">contribuir a su actividad</text></g>
                </g>
              </svg>
            </figure>
          </main>
        </div>
        <aside class="notes">Desarrollar las funciones de supervisión general: vigilar el cumplimiento, sensibilizar al público, asesorar a Gobierno y Parlamento, cooperar con otras autoridades, observar el impacto de tecnologías y prácticas comerciales y contribuir al trabajo del CEPD.</aside>
      </section>

      <section class="slide-page" data-title="Funciones operativas · artículo 57" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 57 · funciones operativas</p></header>
          <main class="authority35-layout">
            <figure class="diagram-panel">
              <svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Funciones operativas de las autoridades de control según el artículo 57">
                <rect width="760" height="470" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="68" font-size="15" font-weight="850" fill="#c74756">ARTÍCULO 57 · DEL CASO A LOS INSTRUMENTOS</text>
                  <g transform="translate(54 112)">
                    <g><rect width="142" height="100" rx="20" fill="#eef3f8"/><text x="71" y="40" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">Reclamación</text><text x="71" y="64" text-anchor="middle" font-size="12.5" fill="#66778a">atender y tramitar</text></g>
                    <g transform="translate(172 0)"><rect width="142" height="100" rx="20" fill="#f7f1e7"/><text x="71" y="40" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">EIPD</text><text x="71" y="64" text-anchor="middle" font-size="12.5" fill="#66778a">evaluar riesgos</text></g>
                    <g transform="translate(344 0)"><rect width="142" height="100" rx="20" fill="#fff0f1"/><text x="71" y="40" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">Consulta</text><text x="71" y="64" text-anchor="middle" font-size="12.5" fill="#66778a">riesgo residual alto</text></g>
                    <g transform="translate(516 0)"><rect width="142" height="100" rx="20" fill="#eef3f8"/><text x="71" y="40" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f">Listas</text><text x="71" y="64" text-anchor="middle" font-size="12.5" fill="#66778a">alto riesgo</text></g>
                    <g stroke="#c74756" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M146 50h20"/><path d="M160 44l7 6-7 6"/><path d="M318 50h20"/><path d="M332 44l7 6-7 6"/><path d="M490 50h20"/><path d="M504 44l7 6-7 6"/></g>
                  </g>
                  <text x="56" y="264" font-size="14" font-weight="850" fill="#c74756">INSTRUMENTOS ESPECÍFICOS</text>
                  <g transform="translate(56 290)">
                    <rect width="648" height="106" rx="24" fill="#17385f"/>
                    <text x="30" y="40" font-size="17" font-weight="850" fill="#fff" data-fit-width="588">Códigos de conducta · certificación · acreditación</text>
                    <text x="30" y="70" font-size="17" font-weight="850" fill="#fff" data-fit-width="588">transferencias internacionales · cláusulas contractuales · BCR</text>
                  </g>
                </g>
              </svg>
            </figure>
            <div class="copy-column">
              <p class="kicker">Segunda parte de las funciones</p>
              <h2>La autoridad acompaña todo el ciclo: reclamaciones, riesgo, consulta e instrumentos de cumplimiento.</h2>
              <p class="body-copy">El artículo 57 muestra un papel operativo mucho más amplio que el puramente sancionador.</p>
              <div class="micro-grid">
                <article><span>Personas</span><strong>Reclamaciones y derechos</strong></article>
                <article><span>Riesgo</span><strong>EIPD, listas y consultas</strong></article>
                <article><span>Mercado</span><strong>Códigos, certificación y transferencias</strong></article>
              </div>
            </div>
          </main>
        </div>
        <aside class="notes">Añadir las funciones más operativas: atender reclamaciones, participar en evaluaciones de impacto y consultas previas, mantener listas de tratamientos de alto riesgo y trabajar en códigos de conducta, certificación, acreditación y transferencias internacionales. La autoridad tiene un papel mucho más amplio que el sancionador.</aside>
      </section>

      <section class="slide-page" data-title="Poderes de investigación · artículo 58" data-background-color="#faf7f1">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 58 · obtener evidencia</p></header>
          <main class="authority36-layout">
            <div class="copy-column">
              <p class="kicker">Poderes de investigación</p>
              <h2>Investigar significa poder comprobar por sí misma cómo se están tratando los datos.</h2>
              <p class="body-copy">La autoridad puede requerir información, acceder a datos y locales, auditar y revisar certificaciones.</p>
              <div class="micro-grid">
                <article><span>Requerir</span><strong>Información y documentación</strong></article>
                <article><span>Acceder</span><strong>Datos, equipos y locales</strong></article>
                <article><span>Verificar</span><strong>Auditorías y certificaciones</strong></article>
              </div>
            </div>
            <figure class="diagram-panel">
              <svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Poderes de investigación de una autoridad de control">
                <rect width="760" height="470" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="68" font-size="15" font-weight="850" fill="#c74756">ARTÍCULO 58 · PODERES DE INVESTIGACIÓN</text>
                  <g transform="translate(70 118)">
                    <rect width="620" height="222" rx="28" fill="#17385f"/>
                    <g transform="translate(26 34)">
                      <g><circle cx="58" cy="58" r="46" fill="#254f7d"/><text x="58" y="54" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">1</text><text x="58" y="92" text-anchor="middle" font-size="12" fill="#dbe6f2">información</text></g>
                      <g transform="translate(146 0)"><circle cx="58" cy="58" r="46" fill="#254f7d"/><text x="58" y="54" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">2</text><text x="58" y="92" text-anchor="middle" font-size="12" fill="#dbe6f2">acceso</text></g>
                      <g transform="translate(292 0)"><circle cx="58" cy="58" r="46" fill="#254f7d"/><text x="58" y="54" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">3</text><text x="58" y="92" text-anchor="middle" font-size="12" fill="#dbe6f2">auditoría</text></g>
                      <g transform="translate(438 0)"><circle cx="58" cy="58" r="46" fill="#c74756"/><text x="58" y="54" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">4</text><text x="58" y="92" text-anchor="middle" font-size="12" fill="#fff">certificación</text></g>
                    </g>
                    <text x="310" y="190" text-anchor="middle" font-size="18" font-weight="850" fill="#fff" data-fit-width="540">Objetivo: obtener evidencia suficiente para supervisar el tratamiento</text>
                  </g>
                  <g transform="translate(150 370)"><rect width="460" height="42" rx="16" fill="#fff0f1"/><text x="230" y="27" text-anchor="middle" font-size="14.5" font-weight="850" fill="#17385f" data-fit-width="420">Poderes de comprobación, no solo de reacción</text></g>
                </g>
              </svg>
            </figure>
          </main>
        </div>
        <aside class="notes">Explicar que la autoridad puede requerir información, acceder a datos y locales, realizar investigaciones y auditorías y revisar certificaciones. Son poderes de obtención de evidencia: permiten comprobar por sí misma cómo se está tratando la información.</aside>
      </section>

      <section class="slide-page" data-title="Poderes correctivos · artículo 58" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 58 · respuesta proporcionada</p></header>
          <main class="authority37-layout">
            <div class="copy-column">
              <p class="kicker">Poderes correctivos</p>
              <h2>El RGPD ofrece una escala de respuesta: corregir no equivale siempre a multar.</h2>
              <p class="body-copy">La medida debe adaptarse al incumplimiento: desde advertir hasta limitar el tratamiento, retirar certificaciones, sancionar o suspender transferencias.</p>
            </div>
            <div class="corrective-scale reveal-block stagger">
              <article><span>01</span><strong>Advertir</strong><p>Advertencias y apercibimientos cuando procede prevenir o reprochar una conducta.</p></article>
              <article><span>02</span><strong>Ordenar</strong><p>Atender derechos, rectificar prácticas y ajustar el tratamiento al RGPD.</p></article>
              <article><span>03</span><strong>Limitar</strong><p>Restricción o prohibición del tratamiento, retirada de certificaciones o suspensión de transferencias.</p></article>
              <article><span>04</span><strong>Sancionar</strong><p>Multa administrativa, además de o en lugar de otras medidas, cuando resulte proporcionada.</p></article>
            </div>
          </main>
        </div>
        <aside class="notes">Recorrer la escala de medidas: advertencias, apercibimientos, órdenes para atender derechos, órdenes para adecuar el tratamiento, limitación o prohibición, retirada de certificaciones, multas y suspensión de transferencias. La idea clave es que el RGPD permite elegir una respuesta proporcionada a cada incumplimiento.</aside>
      </section>

      <section class="slide-page" data-title="Poderes de autorización y consultivos" data-background-color="#faf7f1">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 58 · dimensión preventiva</p></header>
          <main class="authority38-layout">
            <div class="copy-column">
              <p class="kicker">Autorizar, asesorar, prevenir</p>
              <h2>La autoridad también interviene antes del problema: consulta, dictamen y autorización.</h2>
              <p class="body-copy">Esta vertiente preventiva completa los poderes de investigación y corrección. Sus decisiones están sujetas a tutela judicial efectiva.</p>
              <div class="micro-grid">
                <article><span>Consulta</span><strong>Tratamientos de alto riesgo</strong></article>
                <article><span>Dictamen</span><strong>Criterio preventivo</strong></article>
                <article><span>Autorización</span><strong>Supuestos específicos</strong></article>
              </div>
            </div>
            <figure class="diagram-panel">
              <svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Poderes consultivos y de autorización de una autoridad de control">
                <rect width="760" height="470" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="414" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="70" font-size="15" font-weight="850" fill="#c74756">ARTÍCULO 58 · PREVENIR ANTES DE CORREGIR</text>
                  <g transform="translate(58 118)">
                    <rect width="288" height="184" rx="26" fill="#eef3f8"/>
                    <text x="28" y="42" font-size="14" font-weight="850" fill="#c74756">CONSULTIVO</text>
                    <text x="28" y="80" font-size="25" font-weight="900" fill="#17385f">Consulta previa</text>
                    <text x="28" y="111" font-size="14" fill="#66778a">EIPD con riesgo residual alto</text>
                    <text x="28" y="140" font-size="18" font-weight="850" fill="#17385f">Dictámenes</text>
                  </g>
                  <g transform="translate(414 118)">
                    <rect width="288" height="184" rx="26" fill="#fff0f1"/>
                    <text x="28" y="42" font-size="14" font-weight="850" fill="#c74756">AUTORIZACIÓN</text>
                    <text x="28" y="78" font-size="18" font-weight="850" fill="#17385f">Códigos y certificación</text>
                    <text x="28" y="109" font-size="18" font-weight="850" fill="#17385f">Acreditación</text>
                    <text x="28" y="140" font-size="18" font-weight="850" fill="#17385f">Transferencias internacionales</text>
                  </g>
                  <g transform="translate(108 346)">
                    <rect width="544" height="62" rx="20" fill="#17385f"/>
                    <text x="272" y="38" text-anchor="middle" font-size="16.5" font-weight="850" fill="#fff" data-fit-width="498">Todas las decisiones quedan sometidas a tutela judicial efectiva</text>
                  </g>
                </g>
              </svg>
            </figure>
          </main>
        </div>
        <aside class="notes">Explicar la dimensión preventiva y consultiva de la autoridad: consulta previa en tratamientos de alto riesgo, emisión de dictámenes, autorizaciones específicas, códigos de conducta, certificación, acreditación y determinadas transferencias internacionales. Las decisiones de la autoridad están sometidas a tutela judicial efectiva.</aside>
      </section>

      <section class="slide-page" data-title="La Agencia Española de Protección de Datos" data-background-color="#fffdf9">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>III · concreción española</p></header>
          <main class="aepd-transition">
            <div class="copy-column">
              <p class="kicker">Del modelo europeo a la institución española</p>
              <h2>La Agencia Española de Protección de Datos</h2>
              <p class="body-copy">La AEPD materializa en España muchas de las funciones, poderes y mecanismos de cooperación que acabamos de recorrer.</p>
            </div>
            <div class="aepd-seal reveal-block" aria-label="Transición a la Agencia Española de Protección de Datos">
              <div class="ring"><div><strong>AEPD</strong><span>Autoridad estatal</span></div></div>
            </div>
          </main>
        </div>
        <aside class="notes">Usar la diapositiva como transición desde el modelo abstracto del RGPD a su concreción española. La AEPD es la autoridad estatal que materializa en España muchas de las funciones y poderes que acaban de explicarse.</aside>
      </section>

      <section class="slide-page" data-title="AEPD · visión general" data-background-color="#faf7f1">
        <div class="slide-inner">
          <header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>LOPDGDD · Título VII · estructura vigente</p></header>
          <main class="aepd40-layout">
            <figure class="diagram-panel tall">
              <svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Estructura actual de la Agencia Española de Protección de Datos">
                <rect width="760" height="520" rx="34" fill="#fff"/>
                <rect x="28" y="28" width="704" height="464" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/>
                <g font-family="Inter,Arial">
                  <text x="56" y="68" font-size="15" font-weight="850" fill="#c74756">AEPD · ORGANIGRAMA VIGENTE</text>
                  <g transform="translate(270 104)">
                    <rect width="220" height="84" rx="24" fill="#17385f"/>
                    <text x="110" y="36" text-anchor="middle" font-size="25" font-weight="900" fill="#fff">AEPD</text>
                    <text x="110" y="60" text-anchor="middle" font-size="12.5" fill="#dbe6f2">autoridad administrativa independiente</text>
                  </g>
                  <g stroke="#c74756" stroke-width="2.4" fill="none" opacity=".58">
                    <path d="M380 188v42M380 230H128M380 230H632"/>
                    <path d="M128 230v28M296 230v28M464 230v28M632 230v28"/>
                    <path d="M210 360v24M380 360v24M550 360v24"/>
                  </g>
                  <g transform="translate(54 258)"><rect width="148" height="84" rx="20" fill="#eef3f8"/><text x="74" y="34" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Presidencia</text><text x="74" y="58" text-anchor="middle" font-size="12" fill="#66778a">representación</text></g>
                  <g transform="translate(222 258)"><rect width="148" height="84" rx="20" fill="#f7f1e7"/><text x="74" y="34" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Adjuntía</text><text x="74" y="58" text-anchor="middle" font-size="12" fill="#66778a">apoyo institucional</text></g>
                  <g transform="translate(390 258)"><rect width="148" height="84" rx="20" fill="#fff0f1"/><text x="74" y="34" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f" data-fit-width="120">Consejo Consultivo</text><text x="74" y="58" text-anchor="middle" font-size="12" fill="#66778a">participación</text></g>
                  <g transform="translate(558 258)"><rect width="148" height="84" rx="20" fill="#eef3f8"/><text x="74" y="29" text-anchor="middle" font-size="13" font-weight="850" fill="#17385f" data-fit-width="120">SG Inspección</text><text x="74" y="49" text-anchor="middle" font-size="13" font-weight="850" fill="#17385f">de Datos</text><text x="74" y="68" text-anchor="middle" font-size="11.5" fill="#66778a">supervisión</text></g>
                  <g transform="translate(126 384)"><rect width="168" height="82" rx="20" fill="#f7f1e7"/><text x="84" y="28" text-anchor="middle" font-size="12.5" font-weight="850" fill="#17385f" data-fit-width="140">SG Promoción y</text><text x="84" y="48" text-anchor="middle" font-size="12.5" font-weight="850" fill="#17385f">Autorizaciones</text><text x="84" y="66" text-anchor="middle" font-size="11.5" fill="#66778a">prevención</text></g>
                  <g transform="translate(296 384)"><rect width="168" height="82" rx="20" fill="#eef3f8"/><text x="84" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Secretaría General</text><text x="84" y="60" text-anchor="middle" font-size="11.5" fill="#66778a">gestión y soporte</text></g>
                  <g transform="translate(466 384)"><rect width="168" height="82" rx="20" fill="#fff0f1"/><text x="84" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Servicio Jurídico</text><text x="84" y="60" text-anchor="middle" font-size="11.5" fill="#66778a">asesoramiento</text></g>
                </g>
              </svg>
            </figure>
            <div class="copy-column">
              <p class="kicker">LOPDGDD · Título VII</p>
              <h2>La AEPD combina independencia institucional, estructura propia y capacidad real de supervisión.</h2>
              <p class="body-copy">El mapa del bloque conecta su posición jurídica con los órganos que hacen posible investigación, promoción, autorización, gestión y asesoramiento.</p>
              <div class="legal-pill-grid two">
                <article><span>Naturaleza</span><strong>Autoridad administrativa independiente</strong></article>
                <article><span>Estatuto</span><strong>RD 389/2021</strong></article>
                <article><span>Europa</span><strong>Representación y cooperación en el CEPD</strong></article>
                <article><span>Capacidad</span><strong>Presupuesto, personal e investigación</strong></article>
              </div>
            </div>
          </main>
        </div>
        <aside class="notes">Explicar que el Título VII de la LOPDGDD desarrolla la posición institucional de la AEPD: naturaleza de autoridad administrativa independiente, estructura, relación con otros poderes públicos, representación española en el CEPD, presupuesto, personal y potestades de investigación. El esquema se ha actualizado conforme al organigrama oficial vigente en 2026: Presidencia, Adjuntía, Consejo Consultivo, Subdirección General de Inspección de Datos, Subdirección General de Promoción y Autorizaciones, Secretaría General y Servicio Jurídico.</aside>
      </section>
    `;

    root.insertAdjacentHTML("beforeend", html);
  }

  injectSlides31To40();

  function isEditable(target) {
    return Boolean(target && typeof target.matches === "function" && (target.matches("input, textarea, select") || target.isContentEditable));
  }

  function parseRevealMessage(event) {
    if (typeof event.data !== "string") return null;
    try {
      const data = JSON.parse(event.data);
      return data && data.namespace === "reveal-notes" ? data : null;
    } catch {
      return null;
    }
  }

  function sameOrigin(event) {
    return window.location.protocol === "file:" || event.origin === window.location.origin;
  }

  function labelsForDocument() {
    const spanish = document.documentElement.lang.toLowerCase().startsWith("es");
    return spanish ? {button:"Todas las diapositivas", title:"Todas las diapositivas", close:"Cerrar", slide:"Diapositiva", hint:"Flechas para recorrer · Enter para abrir · Esc para volver"} : {button:"All slides", title:"All slides", close:"Close", slide:"Slide", hint:"Arrow keys to browse · Enter to open · Esc to return"};
  }

  function createThumbnailUrl(deck, indices) {
    const configuredUrl = deck.getConfig().url;
    const url = new URL(typeof configuredUrl === "string" ? configuredUrl : window.location.href, window.location.href);
    url.searchParams.set("receiver", "");
    url.searchParams.set("progress", "false");
    url.searchParams.set("history", "false");
    url.searchParams.set("transition", "none");
    url.searchParams.set("backgroundTransition", "none");
    url.searchParams.set("autoSlide", "0");
    url.searchParams.set("controls", "false");
    url.searchParams.set("slideNumber", "false");
    url.searchParams.set("scrollActivationWidth", "false");
    url.hash = "#/" + indices.h + "/" + indices.v;
    return url.toString();
  }

  function createPlugin() {
    let deck, speakerWindow, overlay, grid, openButton;
    let thumbnails = [];
    let slides = [];
    let selectedIndex = 0;
    let galleryOpen = false;
    const labels = labelsForDocument();

    function slideDescriptors() {
      return deck.getSlides().map((slide, ordinal) => {
        const indices = deck.getIndices(slide);
        const heading = slide.querySelector("h1, h2, h3");
        const title = slide.dataset.title || (heading ? heading.textContent.trim().replace(/\s+/g, " ") : "") || labels.slide + " " + (ordinal + 1);
        return { ordinal, h: Number.isFinite(indices.h) ? indices.h : ordinal, v: Number.isFinite(indices.v) ? indices.v : 0, title };
      });
    }

    function currentIndex() {
      const indices = deck.getIndices();
      const index = slides.findIndex(slide => slide.h === indices.h && slide.v === indices.v);
      return index >= 0 ? index : 0;
    }

    function ensureFramesLoaded() {
      thumbnails.forEach(button => {
        const frame = button.querySelector("iframe[data-src]");
        if (frame && !frame.hasAttribute("src")) frame.src = frame.dataset.src;
      });
    }

    function updateActiveThumbnail() {
      if (!overlay || !speakerWindow || speakerWindow.closed) return;
      const activeIndex = currentIndex();
      thumbnails.forEach((button, index) => {
        const active = index === activeIndex;
        button.classList.toggle("is-current", active);
        button.setAttribute("aria-current", active ? "true" : "false");
      });
      if (!galleryOpen) selectedIndex = activeIndex;
    }

    function selectThumbnail(index, focus = true) {
      if (!thumbnails.length) return;
      selectedIndex = Math.max(0, Math.min(index, thumbnails.length - 1));
      thumbnails.forEach((button, itemIndex) => button.classList.toggle("is-selected", itemIndex === selectedIndex));
      const selected = thumbnails[selectedIndex];
      if (focus) selected.focus({ preventScroll: true });
      selected.scrollIntoView({ block: "nearest", inline: "nearest" });
    }

    function openGallery() {
      if (!overlay) return;
      galleryOpen = true;
      overlay.hidden = false;
      overlay.setAttribute("aria-hidden", "false");
      ensureFramesLoaded();
      updateActiveThumbnail();
      selectThumbnail(currentIndex());
    }

    function closeGallery() {
      if (!overlay || !galleryOpen) return;
      galleryOpen = false;
      overlay.hidden = true;
      overlay.setAttribute("aria-hidden", "true");
      openButton?.focus({ preventScroll: true });
    }

    function goToSelectedSlide() {
      const target = slides[selectedIndex];
      if (!target) return;
      deck.slide(target.h, target.v);
      closeGallery();
    }

    function gridColumnCount() {
      if (!grid || !speakerWindow) return 1;
      const columns = speakerWindow.getComputedStyle(grid).gridTemplateColumns;
      return Math.max(1, columns.split(" ").filter(Boolean).length);
    }

    function handleSpeakerKeydown(event) {
      if (!galleryOpen) {
        if (event.key.toLowerCase() === "g" && !isEditable(event.target)) {
          event.preventDefault();
          event.stopImmediatePropagation();
          openGallery();
        }
        return;
      }
      const columns = gridColumnCount();
      let nextIndex = selectedIndex;
      let handled = true;
      switch (event.key) {
        case "Escape": closeGallery(); break;
        case "Enter": case " ": goToSelectedSlide(); break;
        case "ArrowLeft": nextIndex -= 1; break;
        case "ArrowRight": nextIndex += 1; break;
        case "ArrowUp": nextIndex -= columns; break;
        case "ArrowDown": nextIndex += columns; break;
        case "Home": nextIndex = 0; break;
        case "End": nextIndex = thumbnails.length - 1; break;
        default: handled = false;
      }
      if (!handled) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (nextIndex !== selectedIndex) selectThumbnail(nextIndex);
    }

    function galleryStyles() {
      return `#speaker-gallery-trigger{position:absolute;top:10px;right:178px;z-index:30;height:34px;padding:0 12px;border:0;border-radius:3px;background:rgba(220,220,220,.92);color:#222;cursor:pointer;font:600 13px/34px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}#speaker-gallery-trigger:hover,#speaker-gallery-trigger:focus-visible{background:#fff;outline:2px solid #2b72d6;outline-offset:1px}#speaker-gallery-trigger kbd{margin-left:7px;padding:1px 5px;border:1px solid rgba(0,0,0,.2);border-radius:3px;background:rgba(255,255,255,.55);font:inherit;font-size:11px}#${GALLERY_ID}{position:fixed;inset:0;z-index:1000;display:flex;flex-direction:column;background:#15171a;color:#f5f6f8;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}#${GALLERY_ID}[hidden]{display:none}.speaker-gallery__header{display:flex;align-items:center;gap:18px;padding:18px 22px;border-bottom:1px solid rgba(255,255,255,.14)}.speaker-gallery__header h2{margin:0;font-size:20px;font-weight:650}.speaker-gallery__hint{flex:1;color:#aeb4bd;font-size:13px}.speaker-gallery__close{min-width:72px;height:34px;border:1px solid rgba(255,255,255,.2);border-radius:5px;background:#292d33;color:#fff;cursor:pointer}.speaker-gallery__grid{flex:1;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));align-content:start;gap:22px;padding:24px}.speaker-gallery__item{min-width:0;padding:0;border:2px solid transparent;border-radius:7px;background:transparent;color:inherit;cursor:pointer;text-align:left}.speaker-gallery__item:focus{outline:none}.speaker-gallery__item.is-selected{border-color:#69a7ff;box-shadow:0 0 0 2px rgba(105,167,255,.2)}.speaker-gallery__item.is-current .speaker-gallery__number{background:#2b72d6;color:#fff}.speaker-gallery__preview{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:4px;background:#000;box-shadow:0 6px 18px rgba(0,0,0,.35)}.speaker-gallery__preview iframe{width:100%;height:100%;border:0;pointer-events:none;background:#fff}.speaker-gallery__meta{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:9px;padding:9px 2px 2px}.speaker-gallery__number{min-width:25px;height:25px;padding:0 6px;border-radius:999px;background:#343941;color:#dce0e6;font-size:12px;line-height:25px;text-align:center}.speaker-gallery__title{overflow:hidden;color:#e8ebef;font-size:13px;line-height:1.3;text-overflow:ellipsis;white-space:nowrap}`;
    }

    function mount(speaker) {
      let doc;
      try { doc = speaker.document; } catch { return; }
      if (!doc?.body || doc.getElementById(GALLERY_ID)) return;
      speakerWindow = speaker;
      slides = slideDescriptors();
      const style = doc.createElement("style");
      style.dataset.speakerGallery = "true";
      style.textContent = galleryStyles();
      doc.head.appendChild(style);
      openButton = doc.createElement("button");
      openButton.id = "speaker-gallery-trigger";
      openButton.type = "button";
      openButton.innerHTML = labels.button + " <kbd>G</kbd>";
      openButton.addEventListener("click", openGallery);
      doc.body.appendChild(openButton);
      overlay = doc.createElement("section");
      overlay.id = GALLERY_ID;
      overlay.hidden = true;
      overlay.setAttribute("aria-hidden", "true");
      overlay.setAttribute("aria-label", labels.title);
      const header = doc.createElement("header");
      header.className = "speaker-gallery__header";
      const title = doc.createElement("h2");
      title.textContent = labels.title;
      const hint = doc.createElement("div");
      hint.className = "speaker-gallery__hint";
      hint.textContent = labels.hint;
      const closeButton = doc.createElement("button");
      closeButton.className = "speaker-gallery__close";
      closeButton.type = "button";
      closeButton.textContent = labels.close;
      closeButton.addEventListener("click", closeGallery);
      header.append(title, hint, closeButton);
      grid = doc.createElement("div");
      grid.className = "speaker-gallery__grid";
      thumbnails = slides.map(slide => {
        const button = doc.createElement("button");
        button.className = "speaker-gallery__item";
        button.type = "button";
        button.dataset.ordinal = String(slide.ordinal);
        button.setAttribute("aria-label", labels.slide + " " + (slide.ordinal + 1) + ": " + slide.title);
        const preview = doc.createElement("div");
        preview.className = "speaker-gallery__preview";
        const frame = doc.createElement("iframe");
        frame.loading = "lazy";
        frame.tabIndex = -1;
        frame.title = labels.slide + " " + (slide.ordinal + 1);
        frame.dataset.src = createThumbnailUrl(deck, slide);
        preview.appendChild(frame);
        const meta = doc.createElement("div");
        meta.className = "speaker-gallery__meta";
        const number = doc.createElement("span");
        number.className = "speaker-gallery__number";
        number.textContent = String(slide.ordinal + 1);
        const slideTitle = doc.createElement("span");
        slideTitle.className = "speaker-gallery__title";
        slideTitle.textContent = slide.title;
        meta.append(number, slideTitle);
        button.append(preview, meta);
        button.addEventListener("click", () => { selectedIndex = slide.ordinal; goToSelectedSlide(); });
        button.addEventListener("focus", () => { selectedIndex = slide.ordinal; thumbnails.forEach((item, index) => item.classList.toggle("is-selected", index === selectedIndex)); });
        grid.appendChild(button);
        return button;
      });
      overlay.append(header, grid);
      doc.body.appendChild(overlay);
      doc.addEventListener("keydown", handleSpeakerKeydown, true);
      updateActiveThumbnail();
    }

    function handleMessage(event) {
      if (!sameOrigin(event)) return;
      const message = parseRevealMessage(event);
      if (!message || message.type !== "heartbeat") return;
      const source = event.source;
      if (!source || source === window) return;
      try { if (source.closed) return; } catch { return; }
      mount(source);
    }

    function init(revealDeck) {
      deck = revealDeck;
      if (RECEIVER_QUERY.test(window.location.search)) return;
      window.addEventListener("message", handleMessage);
      deck.on("slidechanged", updateActiveThumbnail);
    }

    return { id: PLUGIN_ID, init };
  }

  window.RevealSpeakerGallery = createPlugin();
})();
