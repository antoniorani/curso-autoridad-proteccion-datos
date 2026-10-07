(() => {
  "use strict";
  const EXTRA_31_40_ID = "slides-31-40-injected";

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
        <aside class="notes"><p>Después de ver cómo se crea una autoridad, la siguiente pregunta es bastante natural: ¿hasta dónde puede actuar? El artículo 55 parte de una regla sencilla: cada autoridad ejerce sus funciones y poderes dentro de su ámbito territorial.</p><p>Pero enseguida aparecen matices, especialmente cuando hablamos de autoridades públicas, misiones de interés público o tratamientos que pueden afectar a varios Estados.</p><p><strong>La competencia de una autoridad no depende solo de dónde esté físicamente un servidor o una empresa, sino de las reglas que el RGPD establece para repartir la supervisión.</strong> Y hay una excepción importante: los tratamientos realizados por los tribunales cuando actúan en su función judicial. <strong>Esta distribución de competencias prepara el terreno para el siguiente concepto: la autoridad de control principal.</strong></p></aside>
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
        <aside class="notes"><p>Cuando un tratamiento es transfronterizo, necesitamos evitar que una empresa tenga que responder de forma desordenada ante varias autoridades por el mismo asunto. Ahí aparece la lógica de la ventanilla única.</p><p>Se identifica una autoridad principal, normalmente vinculada al establecimiento principal o único del responsable o encargado. Esa autoridad asume el liderazgo del procedimiento.</p><p>Pero conviene evitar una simplificación: <strong>autoridad principal no significa autoridad única.</strong> Las demás autoridades afectadas siguen participando como autoridades interesadas y pueden intervenir en el procedimiento. <strong>La ventanilla única organiza la cooperación; no elimina la pluralidad de supervisores.</strong></p></aside>
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
        <aside class="notes"><p>A partir de aquí conviene separar tres conceptos que a veces se mezclan. Las funciones responden a la pregunta de qué debe hacer una autoridad. Los poderes nos dicen con qué herramientas jurídicas puede hacerlo. Y el informe de actividad sirve para explicar públicamente qué ha hecho.</p><p><strong>Función no es lo mismo que poder: vigilar el cumplimiento es una función; requerir información u ordenar una medida concreta es un poder.</strong> Esta distinción nos ayuda a leer con más claridad los artículos 57, 58 y 59.</p><p>Además, el informe anual introduce una dimensión que también importa en una autoridad independiente: <strong>independencia no significa opacidad; la autoridad debe rendir cuentas sobre su actividad.</strong></p></aside>
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
        <aside class="notes"><p>El artículo 57 muestra hasta qué punto el trabajo de una autoridad va mucho más allá de tramitar expedientes sancionadores. Entre sus funciones está vigilar la aplicación del RGPD, sensibilizar a la ciudadanía, asesorar a los poderes públicos y cooperar con otras autoridades.</p><p>También debe seguir la evolución de las tecnologías y de las prácticas comerciales, porque los riesgos para los derechos no se quedan quietos.</p><p><strong>Una autoridad de protección de datos no actúa solo cuando ya se ha producido una infracción; también informa, asesora, observa y previene.</strong> Y, además, contribuye al trabajo del CEPD. <strong>La supervisión nacional está conectada desde el principio con la construcción de criterios europeos comunes.</strong></p></aside>
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
        <aside class="notes"><p>En esta segunda parte aparecen funciones mucho más cercanas al trabajo cotidiano de una autoridad: atender reclamaciones, participar en evaluaciones de impacto y consultas previas, mantener determinadas listas de tratamientos de riesgo o intervenir en códigos de conducta y certificación.</p><p>También encontramos actuaciones relacionadas con acreditación y transferencias internacionales.</p><p>La idea que quiero que quede es muy sencilla: <strong>el ciudadano suele conocer a la autoridad por una reclamación o una sanción, pero la actividad institucional es bastante más amplia.</strong> Hay una gran cantidad de trabajo preventivo y técnico que normalmente no genera titulares. <strong>La eficacia de una autoridad se mide también por los problemas que ayuda a evitar, no solo por los que sanciona.</strong></p></aside>
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
        <aside class="notes"><p>Si una autoridad tiene que comprobar si el RGPD se cumple, necesita poder obtener evidencia por sí misma. Para eso están los poderes de investigación.</p><p>Puede requerir información, acceder a datos y documentación, realizar investigaciones y auditorías y, en los términos previstos, acceder a locales o revisar determinadas certificaciones.</p><p><strong>No basta con que el responsable diga que cumple: la autoridad debe tener capacidad jurídica para verificarlo.</strong> Estos poderes permiten reconstruir qué tratamiento existe realmente y cómo funciona. <strong>Primero se investiga y se obtiene evidencia; después, si procede, se decide qué respuesta correctiva corresponde.</strong></p></aside>
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
        <aside class="notes"><p>Una vez comprobado un incumplimiento, el RGPD ofrece a la autoridad una escala bastante amplia de respuestas. Puede advertir, apercibir, ordenar que se atienda un derecho, exigir que un tratamiento se adapte, limitarlo o incluso prohibirlo.</p><p>También puede retirar determinadas certificaciones, suspender transferencias o imponer multas administrativas.</p><p><strong>La multa es importante, pero es solo una herramienta dentro de un repertorio mucho más amplio.</strong> Lo esencial es que la respuesta pueda adaptarse al problema concreto. <strong>El objetivo del poder correctivo no es sancionar por sancionar, sino conseguir una respuesta efectiva y proporcionada frente al incumplimiento.</strong></p></aside>
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
        <aside class="notes"><p>El artículo 58 también muestra una dimensión menos visible de la autoridad: no todo ocurre después de que algo vaya mal. En determinados supuestos la autoridad autoriza, asesora o emite dictámenes antes o durante el desarrollo de un tratamiento.</p><p>Esto aparece en consultas previas, códigos de conducta, certificación, acreditación o determinadas transferencias internacionales.</p><p><strong>La autoridad tiene también una función preventiva: puede intervenir antes de que el riesgo se convierta en una vulneración.</strong> Y sus decisiones, naturalmente, no están fuera del Derecho. <strong>La independencia de la autoridad convive con la tutela judicial efectiva de quienes se ven afectados por sus decisiones.</strong></p></aside>
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
        <aside class="notes"><p>Hasta aquí hemos hablado de la autoridad de control de una manera bastante abstracta, siguiendo el modelo que dibuja el RGPD. Ahora vamos a aterrizarlo en España.</p><p>La AEPD es la autoridad estatal que concreta aquí muchas de las funciones, garantías y poderes que acabamos de estudiar.</p><p><strong>Todo lo que hemos visto sobre independencia, investigación, corrección, prevención y cooperación deja de ser un esquema teórico y pasa a tener una institución concreta.</strong> A partir de ahora veremos cómo se organiza y cuál es su posición jurídica. <strong>La pregunta ya no será qué exige el RGPD a una autoridad, sino cómo se materializa ese modelo en la AEPD.</strong></p></aside>
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
        <aside class="notes"><p>Esta diapositiva funciona como mapa del bloque dedicado a la Agencia. El Título VII de la LOPDGDD desarrolla su posición institucional: naturaleza de autoridad administrativa independiente, estructura, relación con otros poderes públicos, representación en el CEPD, presupuesto, personal y potestades de investigación.</p><p>No hace falta aprenderse ahora el organigrama. Lo iremos viendo por partes.</p><p><strong>Lo importante es entender que la independencia necesita una organización concreta, recursos y una distribución interna de funciones.</strong> En 2026 esa estructura se articula alrededor de Presidencia, Adjuntía, Consejo Consultivo, Inspección, Promoción y Autorizaciones, Secretaría General y Servicio Jurídico. <strong>La estructura no es decorativa: es la forma práctica de poder ejercer las funciones que acabamos de estudiar.</strong></p></aside>
      </section>
    `;

    root.insertAdjacentHTML("beforeend", html);
  }

  injectSlides31To40();
})();
