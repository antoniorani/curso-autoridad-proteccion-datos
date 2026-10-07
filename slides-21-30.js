(() => {
  "use strict";
  const EXTRA_ID = "slides-21-30-injected";

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
        </div><aside class="notes"><p>Con la LOPDGDD aterrizamos ya plenamente en el marco español actual. Conviene aclarar una confusión de fechas bastante habitual: el RGPD empezó a aplicarse plenamente el 25 de mayo de 2018, pero la LOPDGDD se publicó en diciembre y entró en vigor el 7 de diciembre de ese año.</p><p>¿Qué hace esta ley? <strong>No sustituye al RGPD: adapta el Derecho español y completa aquellas materias que el Reglamento deja espacio para concretar a nivel nacional.</strong></p><p>Además incorpora un título sobre derechos digitales, que amplía el foco hacia cuestiones propias del entorno tecnológico. Y más adelante volveremos sobre uno de sus episodios más conocidos, el artículo 58 bis de la LOREG. <strong>A partir de aquí vamos a trabajar ya con la combinación RGPD más LOPDGDD como marco de referencia.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="Marco legal general" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Marco vigente · lex generalis</p></header><main class="legal-map-layout"><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Marco legal general RGPD y LOPDGDD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="76" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">MARCO LEGAL GENERAL</text><g transform="translate(70 118)"><rect width="285" height="172" rx="26" fill="#17385f"/><text x="28" y="48" font-size="18" font-weight="850" fill="#f1b434">Unión Europea</text><text x="28" y="92" font-size="34" font-weight="900" fill="#fff" data-fit-width="230">RGPD</text><text x="28" y="128" font-size="15" fill="#dbe6f2" data-fit-width="230">Reglamento (UE) 2016/679</text></g><g transform="translate(405 118)"><rect width="285" height="172" rx="26" fill="#fff0f1"/><text x="28" y="48" font-size="18" font-weight="850" fill="#c74756">España</text><text x="28" y="92" font-size="34" font-weight="900" fill="#17385f" data-fit-width="230">LOPDGDD</text><text x="28" y="128" font-size="15" fill="#66778a" data-fit-width="230">Ley Orgánica 3/2018</text></g><g transform="translate(158 336)"><rect width="444" height="56" rx="18" fill="#ffffff" stroke="#e4ddd2"/><text x="222" y="36" text-anchor="middle" font-size="17" font-weight="850" fill="#17385f" data-fit-width="400">Base del análisis institucional que empieza ahora</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Cambio de bloque</p><h2 class="slide-title-mid">Del recorrido histórico pasamos al marco que organiza la supervisión actual.</h2><p class="body-copy compact-copy">A partir de aquí, la sesión deja los antecedentes y trabaja con la arquitectura vigente: RGPD y LOPDGDD.</p><div class="legal-pill-grid two"><article><span>Europa</span><strong>Reglamento directamente aplicable</strong></article><article><span>España</span><strong>Complemento orgánico y derechos digitales</strong></article></div></div></main></div><aside class="notes"><p>Con esta diapositiva cerramos de verdad el recorrido histórico. Hasta ahora hemos ido viendo cómo se construye el derecho; desde este momento vamos a estudiar cómo funciona su arquitectura de supervisión.</p><p>Para orientarnos, el marco general con el que vamos a trabajar es sencillo: <strong>el RGPD establece el marco europeo común y la LOPDGDD lo completa en el ordenamiento español en las materias que corresponden.</strong></p><p>No necesitamos convertir esto en una discusión sobre jerarquías normativas. Lo que nos interesa para el resto de la sesión es saber dónde mirar cuando hablemos de autoridades, poderes, procedimientos o estructura institucional. <strong>Dejamos los antecedentes y entramos en el sistema de supervisión vigente.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="RGPD · esquema general" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>RGPD · visión panorámica</p></header><main class="rgpd-map-layout"><figure class="diagram-panel tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Esquema general del RGPD"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="460" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">RGPD · GRANDES BLOQUES</text><g transform="translate(58 102)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Principios</text></g><g transform="translate(224 102)"><rect width="150" height="72" rx="18" fill="#f7f1e7"/><text x="75" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Bases jurídicas</text></g><g transform="translate(390 102)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Categorías</text><text x="75" y="55" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">especiales</text></g><g transform="translate(556 102)"><rect width="146" height="72" rx="18" fill="#f7f1e7"/><text x="73" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Derechos</text></g><g transform="translate(58 198)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Seguridad</text></g><g transform="translate(224 198)"><rect width="150" height="72" rx="18" fill="#f7f1e7"/><text x="75" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Transferencias</text><text x="75" y="55" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">internacionales</text></g><g transform="translate(390 198)"><rect width="150" height="72" rx="18" fill="#eef3f8"/><text x="75" y="36" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Responsabilidad</text><text x="75" y="55" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">proactiva</text></g><g transform="translate(556 198)"><rect width="146" height="72" rx="18" fill="#f7f1e7"/><text x="73" y="43" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Encargados</text></g><g transform="translate(138 330)"><rect width="220" height="94" rx="22" fill="#17385f"/><text x="110" y="40" text-anchor="middle" font-size="19" font-weight="900" fill="#fff">Autoridades</text><text x="110" y="66" text-anchor="middle" font-size="13" fill="#dbe6f2">supervisión nacional</text></g><g transform="translate(402 330)"><rect width="220" height="94" rx="22" fill="#fff0f1"/><text x="110" y="40" text-anchor="middle" font-size="19" font-weight="900" fill="#17385f">CEPD</text><text x="110" y="66" text-anchor="middle" font-size="13" fill="#66778a">coordinación europea</text></g><path d="M358 378h44" stroke="#c74756" stroke-width="3"/><path d="M393 371l9 7-9 7" fill="none" stroke="#c74756" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></svg></figure><div class="copy-column"><p class="kicker">Dónde encaja la sesión</p><h2 class="slide-title-small">El RGPD es un sistema completo; ahora nos centraremos en supervisión nacional y coordinación europea.</h2><p class="body-copy compact-copy">El mapa sitúa principios, derechos y obligaciones, pero anticipa el hilo central del curso: autoridades de control y Comité Europeo de Protección de Datos.</p></div></main></div><aside class="notes"><p>Antes de entrar en las autoridades, merece la pena mirar el RGPD desde arriba. Aquí aparecen principios, bases jurídicas, categorías especiales, derechos, seguridad, transferencias, responsabilidad proactiva... Es decir, prácticamente todo el ecosistema de obligaciones y garantías que ya conocéis.</p><p>No voy a desarrollar cada bloque porque no es el objeto de esta sesión. Lo que quiero es que localicemos dos piezas dentro del conjunto: <strong>las autoridades de control, que supervisan a nivel nacional, y el Comité Europeo de Protección de Datos, que ayuda a coordinar y dar coherencia a nivel europeo.</strong></p><p>Ese es el hilo que vamos a seguir desde ahora. <strong>El curso no pretende explicar todo el RGPD, sino explicar quién vigila su aplicación y cómo se coordinan esas autoridades.</strong></p></aside>
      </section>

      <section class="slide-page section-break" data-title="RGPD · autoridades de control" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Bloque II · supervisión institucional</p></header><main class="control-opening-layout"><div class="copy-column"><p class="kicker">II. Autoridades de control en el RGPD</p><h2>El RGPD no solo impone obligaciones: crea un sistema institucional de supervisión independiente.</h2><p class="body-copy compact-copy">El derecho necesita una arquitectura capaz de controlar, corregir, sancionar, cooperar y orientar.</p><div class="authority-pill-grid"><article><span>Garantía</span><strong>Independencia</strong></article><article><span>Herramientas</span><strong>Funciones y poderes</strong></article><article><span>Escala UE</span><strong>Cooperación</strong></article></div></div><div class="control-seal reveal-block" aria-label="Apertura del bloque de autoridades de control"><div class="ring"><div><span>RGPD</span><strong>Autoridades de control</strong><p>independencia · funciones · poderes · cooperación</p></div></div><div class="control-seal-chips"><b>Independencia</b><b>Funciones y poderes</b><b>Cooperación europea</b></div></div></main></div><aside class="notes"><p>Aquí empieza el segundo gran bloque del curso. El RGPD no se limita a decir qué deben hacer responsables y encargados. También diseña quién debe vigilar que esas obligaciones se cumplan.</p><p>Y eso es importante porque <strong>un sistema de derechos necesita una supervisión capaz de investigar, corregir, sancionar, asesorar y cooperar.</strong> Por eso el Reglamento dedica un bloque completo a las autoridades de control.</p><p>Vamos a ver cómo garantiza su independencia, quién puede formar parte de ellas, cuál es su competencia y qué funciones y poderes tienen. Después veremos cómo todo esto se concreta en España con la AEPD. <strong>La autoridad de control es una pieza estructural del modelo, no simplemente el organismo que pone multas.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="Autoridades de control · visión de conjunto" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Mapa del bloque</p></header><main class="control-overview-layout"><figure class="diagram-panel tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Visión de conjunto de las autoridades de control"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="460" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">AUTORIDAD DE CONTROL · MAPA DE ELEMENTOS</text><g transform="translate(270 100)"><rect width="220" height="82" rx="25" fill="#17385f"/><text x="110" y="34" text-anchor="middle" font-size="14" font-weight="850" fill="#f1b434">AUTORIDAD DE CONTROL</text><text x="110" y="62" text-anchor="middle" font-size="25" font-weight="900" fill="#fff">APD</text></g><g stroke="#c74756" stroke-width="2.7" fill="none" stroke-linecap="round" opacity=".62"><path d="M380 182v241"/><path d="M258 251H502"/><path d="M258 337H502"/><path d="M258 423H502"/></g><g fill="#c74756" opacity=".78"><circle cx="380" cy="251" r="4"/><circle cx="380" cy="337" r="4"/><circle cx="380" cy="423" r="4"/></g><g transform="translate(58 218)"><rect width="200" height="66" rx="18" fill="#eef3f8"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Independencia</text></g><g transform="translate(502 218)"><rect width="200" height="66" rx="18" fill="#f7f1e7"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Competencia</text></g><g transform="translate(58 304)"><rect width="200" height="66" rx="18" fill="#fff0f1"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Funciones</text></g><g transform="translate(502 304)"><rect width="200" height="66" rx="18" fill="#eef3f8"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Poderes</text></g><g transform="translate(58 390)"><rect width="200" height="66" rx="18" fill="#f7f1e7"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Ventanilla única</text></g><g transform="translate(502 390)"><rect width="200" height="66" rx="18" fill="#fff0f1"/><text x="100" y="40" text-anchor="middle" font-size="14" font-weight="850" fill="#17385f">Cooperación</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Visión de conjunto</p><h2 class="slide-title-mid">La autoridad de control combina independencia, competencia, funciones, poderes y cooperación.</h2><p class="body-copy compact-copy">Esta diapositiva sirve como mapa: cada elemento se desplegará después con su base jurídica y su función en el modelo europeo.</p></div></main></div><aside class="notes"><p>Esta diapositiva es simplemente el mapa de lo que viene. No hace falta aprender todos estos conceptos ahora; los iremos viendo uno por uno.</p><p>Primero hablaremos de independencia y de las garantías de quienes dirigen la autoridad. Después veremos dónde puede actuar cada autoridad, cómo funciona la autoridad principal en tratamientos transfronterizos y, finalmente, qué funciones y poderes tiene.</p><p>Y hay una idea que conviene tener presente desde el principio: <strong>las autoridades nacionales no trabajan como islas.</strong> El RGPD construye un sistema en el que tienen que cooperar, prestarse asistencia y participar en mecanismos europeos comunes. <strong>Supervisión nacional y cooperación europea forman parte del mismo modelo.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="Artículo 51 RGPD" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 51 · misión</p></header><main class="article51-layout"><div class="copy-column"><p class="kicker">Aspectos generales</p><h2 class="slide-title-mid">Cada Estado debe contar con autoridad de control y las autoridades deben cooperar.</h2><p class="body-copy compact-copy">El artículo 51 combina dos ideas: proteger derechos y libertades, y facilitar la libre circulación de datos en la Unión.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Doble misión del artículo 51 RGPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 51 · DOBLE MISIÓN</text><g transform="translate(78 122)"><rect width="282" height="170" rx="26" fill="#17385f"/><text x="32" y="58" font-size="22" font-weight="900" fill="#fff" data-fit-width="220">Proteger derechos</text><text x="32" y="92" font-size="15" fill="#dbe6f2" data-fit-width="220">supervisar la aplicación</text><text x="32" y="116" font-size="15" fill="#dbe6f2" data-fit-width="220">del RGPD</text></g><g transform="translate(400 122)"><rect width="282" height="170" rx="26" fill="#fff0f1"/><text x="32" y="58" font-size="22" font-weight="900" fill="#17385f" data-fit-width="220">Libre circulación</text><text x="32" y="92" font-size="15" fill="#66778a" data-fit-width="220">garantizar un espacio</text><text x="32" y="116" font-size="15" fill="#66778a" data-fit-width="220">europeo coherente</text></g><g transform="translate(154 334)"><rect width="452" height="52" rx="18" fill="#ffffff" stroke="#e4ddd2"/><text x="226" y="33" text-anchor="middle" font-size="16" font-weight="850" fill="#17385f" data-fit-width="410">Al menos una autoridad por Estado miembro + cooperación</text></g></g></svg></figure></main></div><aside class="notes"><p>El artículo 51 nos da la misión general de las autoridades de control. Cada Estado debe disponer al menos de una autoridad independiente encargada de supervisar la aplicación del Reglamento.</p><p>Y fija una doble finalidad que a veces se olvida: <strong>proteger los derechos y libertades fundamentales de las personas y, al mismo tiempo, facilitar la libre circulación de datos personales dentro de la Unión.</strong></p><p>Esto nos recuerda que el RGPD no está pensado para impedir que circulen los datos, sino para que esa circulación se produzca con garantías comunes. Además, las autoridades deben cooperar entre sí. <strong>Desde el propio artículo 51 ya aparece la idea de una red de supervisores, no de veintisiete sistemas completamente separados.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="Modelo de autoridad de control" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Modelo RGPD · características</p></header><main class="authority-model-layout"><figure class="diagram-panel tall"><svg class="safe-diagram" viewBox="0 0 760 520" role="img" aria-label="Características del modelo de autoridad de control"><rect width="760" height="520" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="460" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">MODELO RGPD · MÁS QUE SANCIONES</text><g transform="translate(58 110)"><rect width="304" height="82" rx="20" fill="#eef3f8"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Independencia</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">sin instrucciones externas</text></g><g transform="translate(398 110)"><rect width="304" height="82" rx="20" fill="#f7f1e7"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Tutela judicial</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">decisiones revisables</text></g><g transform="translate(58 216)"><rect width="304" height="82" rx="20" fill="#fff0f1"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Poderes correctivos</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">la multa es solo una herramienta</text></g><g transform="translate(398 216)"><rect width="304" height="82" rx="20" fill="#eef3f8"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Ventanilla única</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">cooperación y coherencia</text></g><g transform="translate(58 322)"><rect width="304" height="82" rx="20" fill="#f7f1e7"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">Asistencia y operaciones</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">trabajo conjunto entre agencias</text></g><g transform="translate(398 322)"><rect width="304" height="82" rx="20" fill="#fff0f1"/><text x="24" y="34" font-size="17" font-weight="850" fill="#17385f">CEPD</text><text x="24" y="58" font-size="13.5" fill="#66778a" data-fit-width="250">directrices y resolución de conflictos</text></g></g></svg></figure><div class="copy-column"><p class="kicker">Características centrales</p><h2 class="slide-title-small">El modelo europeo combina autoridad independiente, poderes eficaces y mecanismos de cooperación.</h2><p class="body-copy compact-copy">Conviene insistir en que la multa no agota el sistema: supervisar también implica orientar, investigar, corregir y cooperar.</p></div></main></div><aside class="notes"><p>Si juntamos lo que el RGPD exige a una autoridad de control, aparece este modelo: independencia, poderes reales, control judicial de sus decisiones y mecanismos de cooperación con las demás autoridades.</p><p>También aparecen instrumentos que veremos después con más detalle: ventanilla única, asistencia mutua, operaciones conjuntas y participación en el CEPD.</p><p>Quiero detenerme en una idea porque suele condicionar mucho la percepción pública de estas instituciones: <strong>una autoridad de protección de datos no se define por su capacidad de imponer multas.</strong> La sanción es una herramienta importante, pero es solo una entre muchas. <strong>Supervisar significa también investigar, ordenar cambios, prevenir, asesorar, autorizar en determinados casos y coordinarse con otras autoridades.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="Independencia · artículo 52" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 52 · independencia</p></header><main class="independence52-layout"><div class="copy-column"><p class="kicker">Garantía institucional</p><h2 class="slide-title-mid">La independencia permite controlar a quienes también pueden ser controlados.</h2><p class="body-copy compact-copy">No es una cuestión meramente organizativa: exige ausencia de instrucciones, medios suficientes y capacidad real de actuación.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Pilares de la independencia del artículo 52 RGPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 52 · PILARES DE INDEPENDENCIA</text><g transform="translate(70 126)"><rect width="140" height="210" rx="24" fill="#17385f"/><text x="70" y="72" text-anchor="middle" font-size="15" font-weight="850" fill="#fff">Sin</text><text x="70" y="94" text-anchor="middle" font-size="15" font-weight="850" fill="#fff">instrucciones</text></g><g transform="translate(230 126)"><rect width="140" height="210" rx="24" fill="#eef3f8"/><text x="70" y="82" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Recursos</text><text x="70" y="104" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">humanos</text></g><g transform="translate(390 126)"><rect width="140" height="210" rx="24" fill="#f7f1e7"/><text x="70" y="82" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Personal</text><text x="70" y="104" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">propio</text></g><g transform="translate(550 126)"><rect width="140" height="210" rx="24" fill="#fff0f1"/><text x="70" y="82" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">Recursos</text><text x="70" y="104" text-anchor="middle" font-size="15" font-weight="850" fill="#17385f">financieros</text></g><rect x="110" y="360" width="540" height="32" rx="16" fill="#ffffff" stroke="#e4ddd2"/><text x="380" y="381" text-anchor="middle" font-size="13.5" font-weight="850" fill="#17385f" data-fit-width="500">Independencia práctica: medios reales para supervisar</text></g></svg></figure></main></div><aside class="notes"><p>La independencia es probablemente la característica institucional más importante. Pensemos en lo que supervisa una autoridad de protección de datos: empresas privadas, administraciones públicas y, en ocasiones, tratamientos especialmente sensibles.</p><p>Para poder hacerlo con credibilidad, <strong>la autoridad debe actuar sin recibir instrucciones externas y disponer de medios humanos, técnicos y financieros suficientes.</strong> No basta con declarar formalmente que es independiente si después no tiene capacidad real para ejercer sus funciones.</p><p>Por eso me gusta plantearlo de esta manera: <strong>la independencia no es un privilegio de la autoridad; es una garantía para las personas cuyos derechos debe proteger.</strong> Si quien supervisa puede ser condicionado por quien está siendo supervisado, la garantía pierde buena parte de su sentido.</p></aside>
      </section>

      <section class="slide-page" data-title="Miembros de la autoridad · artículo 53" data-background-color="#fffdf9">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 53 · garantías personales</p></header><main class="members53-layout"><div class="copy-column"><p class="kicker">Miembros de la autoridad</p><h2 class="slide-title-mid">La independencia institucional necesita garantías personales de independencia.</h2><p class="body-copy compact-copy">Nombramiento, cualificación, incompatibilidades y cese limitado evitan que el supervisor pueda ser condicionado.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Garantías personales de los miembros de una autoridad de control"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 53 · GARANTÍAS DE LOS MIEMBROS</text><g transform="translate(72 118)"><rect width="286" height="92" rx="22" fill="#eef3f8"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Sin influencia externa</text><text x="24" y="64" font-size="13.5" fill="#66778a">ni instrucciones</text></g><g transform="translate(402 118)"><rect width="286" height="92" rx="22" fill="#fff0f1"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Incompatibilidades</text><text x="24" y="64" font-size="13.5" fill="#66778a">frente a conflictos de interés</text></g><g transform="translate(72 250)"><rect width="286" height="92" rx="22" fill="#f7f1e7"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Nombramiento transparente</text><text x="24" y="64" font-size="13.5" fill="#66778a">basado en cualificación</text></g><g transform="translate(402 250)"><rect width="286" height="92" rx="22" fill="#eef3f8"/><text x="24" y="38" font-size="17" font-weight="850" fill="#17385f">Cese limitado</text><text x="24" y="64" font-size="13.5" fill="#66778a">mandato, dimisión o pérdida de requisitos</text></g></g></svg></figure></main></div><aside class="notes"><p>La independencia institucional también tiene que reflejarse en las personas que dirigen la autoridad. El artículo 53 introduce garantías sobre su nombramiento, su cualificación y las condiciones en las que pueden ejercer el cargo.</p><p>La lógica es bastante clara: <strong>no sirve de mucho declarar independiente a una institución si sus miembros pueden recibir instrucciones, mantener actividades incompatibles o ser cesados arbitrariamente.</strong></p><p>Por eso se exige un procedimiento transparente de nombramiento, competencia profesional y causas limitadas de cese, entre otras garantías. <strong>La independencia de la institución se construye también protegiendo la independencia personal de quienes toman sus decisiones.</strong></p></aside>
      </section>

      <section class="slide-page" data-title="Creación de autoridades · artículo 54" data-background-color="#faf7f1">
        <div class="slide-inner"><header class="topbar"><div class="brand"><img class="aepd-logo" src="assets/aepd-logo.svg" alt="AEPD – Agencia Española de Protección de Datos" /></div><p>Artículo 54 · desarrollo nacional</p></header><main class="creation54-layout"><div class="copy-column"><p class="kicker">Creación de autoridades</p><h2 class="slide-title-mid">El RGPD fija mínimos comunes, pero cada Estado concreta su autoridad por ley.</h2><p class="body-copy compact-copy">Por eso las autoridades nacionales no son idénticas, aunque responden al mismo modelo europeo de independencia y supervisión.</p></div><figure class="diagram-panel"><svg class="safe-diagram" viewBox="0 0 760 470" role="img" aria-label="Elementos que debe regular la ley nacional según el artículo 54 RGPD"><rect width="760" height="470" rx="34" fill="#fff"/><rect x="30" y="30" width="700" height="410" rx="28" fill="#fbf8f2" stroke="#e8dfd1"/><g font-family="Inter,Arial"><text x="58" y="72" font-size="15" font-weight="850" fill="#c74756" data-fit-width="620">ARTÍCULO 54 · QUÉ DEBE REGULAR LA LEY</text><g transform="translate(68 112)"><rect width="624" height="280" rx="28" fill="#ffffff" stroke="#e4ddd2"/><g font-size="15" fill="#17385f" font-weight="850"><text x="32" y="48">✓ requisitos para ser miembro</text><text x="32" y="88">✓ procedimiento de nombramiento</text><text x="32" y="128">✓ mandato mínimo de cuatro años</text><text x="32" y="168">✓ renovación e incompatibilidades</text><text x="32" y="208">✓ procedimiento de cese</text><text x="32" y="248">✓ deber de secreto del personal</text></g></g><rect x="176" y="414" width="408" height="30" rx="15" fill="#17385f"/><text x="380" y="434" text-anchor="middle" font-size="13" font-weight="850" fill="#fff" data-fit-width="360">Mismo modelo europeo, concreción nacional</text></g></svg></figure></main></div><aside class="notes"><p>El artículo 54 completa esta parte del modelo. El RGPD fija una serie de mínimos comunes, pero no diseña exactamente la misma autoridad para todos los países.</p><p>Cada ordenamiento nacional concreta cuestiones como el procedimiento de nombramiento, la duración del mandato, las posibilidades de renovación, las incompatibilidades, las causas de cese o el deber de secreto.</p><p>Esto explica algo que veremos después cuando hablemos de la AEPD y de otras autoridades europeas: <strong>comparten un mismo modelo jurídico europeo, pero su organización concreta no tiene por qué ser idéntica.</strong> Hay un suelo común de garantías y cada Estado lo desarrolla institucionalmente. <strong>Lo siguiente será ver hasta dónde alcanza la competencia de cada autoridad y cómo se reparte esa supervisión.</strong></p></aside>
      </section>
    `;

    root.insertAdjacentHTML("beforeend", html);
  }

  injectSlides21To30();
})();
