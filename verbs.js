// ============================================
// VERB-KONJUGATION - Florians langer Tag (A2.1 · Lecția 9)
// 6 verbe reflexive: sich waschen · sich anziehen · sich beeilen · sich verabschieden · sich entspannen · sich freuen
// ============================================

const verbsData = [
    {
        inf: 'sich waschen', ro: 'a se spăla', typ: 'tare (neregulat)', aux: 'haben', part: 'gewaschen',
        praes: [
            ['ich','wasche mich','mă spăl'],['du','wäschst dich','te speli'],['er/sie/es','wäscht sich','se spală'],
            ['wir','waschen uns','ne spălăm'],['ihr','wascht euch','vă spălați'],['sie/Sie','waschen sich','se spală / vă spălați']
        ],
        praet: [
            ['ich','wusch mich','mă spălam'],['du','wuschst dich','te spălai'],['er/sie/es','wusch sich','se spăla'],
            ['wir','wuschen uns','ne spălam'],['ihr','wuscht euch','vă spălați'],['sie/Sie','wuschen sich','se spălau']
        ],
        perf: [
            ['ich','habe mich gewaschen','m-am spălat'],['du','hast dich gewaschen','te-ai spălat'],['er/sie/es','hat sich gewaschen','s-a spălat'],
            ['wir','haben uns gewaschen','ne-am spălat'],['ihr','habt euch gewaschen','v-ați spălat'],['sie/Sie','haben sich gewaschen','s-au spălat']
        ],
        note: '🚨 TARE (a→ä: du wäschst, er wäscht). Cu obiect → Dativ: Ich wasche <strong>mir</strong> die Hände (Mă spăl pe mâini).'
    },
    {
        inf: 'sich anziehen', ro: 'a se îmbrăca', typ: 'tare (neregulat) / TRENNBAR', aux: 'haben', part: 'angezogen',
        praes: [
            ['ich','ziehe mich an','mă îmbrac'],['du','ziehst dich an','te îmbraci'],['er/sie/es','zieht sich an','se îmbracă'],
            ['wir','ziehen uns an','ne îmbrăcăm'],['ihr','zieht euch an','vă îmbrăcați'],['sie/Sie','ziehen sich an','se îmbracă / vă îmbrăcați']
        ],
        praet: [
            ['ich','zog mich an','mă îmbrăcam'],['du','zogst dich an','te îmbrăcai'],['er/sie/es','zog sich an','se îmbrăca'],
            ['wir','zogen uns an','ne îmbrăcam'],['ihr','zogt euch an','vă îmbrăcați'],['sie/Sie','zogen sich an','se îmbrăcau']
        ],
        perf: [
            ['ich','habe mich angezogen','m-am îmbrăcat'],['du','hast dich angezogen','te-ai îmbrăcat'],['er/sie/es','hat sich angezogen','s-a îmbrăcat'],
            ['wir','haben uns angezogen','ne-am îmbrăcat'],['ihr','habt euch angezogen','v-ați îmbrăcat'],['sie/Sie','haben sich angezogen','s-au îmbrăcat']
        ],
        note: '🚨 TRENNBAR + TARE. Particula an- se separă (ich ziehe mich AN). Perfekt: an+ge+zogen. Cu obiect → Dativ: Ich ziehe <strong>mir</strong> die Jacke an.'
    },
    {
        inf: 'sich beeilen', ro: 'a se grăbi', typ: 'regulat', aux: 'haben', part: 'beeilt',
        praes: [
            ['ich','beeile mich','mă grăbesc'],['du','beeilst dich','te grăbești'],['er/sie/es','beeilt sich','se grăbește'],
            ['wir','beeilen uns','ne grăbim'],['ihr','beeilt euch','vă grăbiți'],['sie/Sie','beeilen sich','se grăbesc / vă grăbiți']
        ],
        praet: [
            ['ich','beeilte mich','mă grăbeam'],['du','beeiltest dich','te grăbeai'],['er/sie/es','beeilte sich','se grăbea'],
            ['wir','beeilten uns','ne grăbeam'],['ihr','beeiltet euch','vă grăbeați'],['sie/Sie','beeilten sich','se grăbeau']
        ],
        perf: [
            ['ich','habe mich beeilt','m-am grăbit'],['du','hast dich beeilt','te-ai grăbit'],['er/sie/es','hat sich beeilt','s-a grăbit'],
            ['wir','haben uns beeilt','ne-am grăbit'],['ihr','habt euch beeilt','v-ați grăbit'],['sie/Sie','haben sich beeilt','s-au grăbit']
        ],
        note: '🚨 Prefix NESEPARABIL be- → FĂRĂ ge- la Perfekt (habe mich beeilt, NU gebeeilt). Imperativ: Beeil dich! (Grăbește-te!).'
    },
    {
        inf: 'sich verabschieden', ro: 'a-și lua rămas-bun', typ: 'regulat', aux: 'haben', part: 'verabschiedet',
        praes: [
            ['ich','verabschiede mich','îmi iau rămas-bun'],['du','verabschiedest dich','îți iei rămas-bun'],['er/sie/es','verabschiedet sich','își ia rămas-bun'],
            ['wir','verabschieden uns','ne luăm rămas-bun'],['ihr','verabschiedet euch','vă luați rămas-bun'],['sie/Sie','verabschieden sich','își iau rămas-bun']
        ],
        praet: [
            ['ich','verabschiedete mich','îmi luam rămas-bun'],['du','verabschiedetest dich','îți luai rămas-bun'],['er/sie/es','verabschiedete sich','își lua rămas-bun'],
            ['wir','verabschiedeten uns','ne luam rămas-bun'],['ihr','verabschiedetet euch','vă luați rămas-bun'],['sie/Sie','verabschiedeten sich','își luau rămas-bun']
        ],
        perf: [
            ['ich','habe mich verabschiedet','mi-am luat rămas-bun'],['du','hast dich verabschiedet','ți-ai luat rămas-bun'],['er/sie/es','hat sich verabschiedet','și-a luat rămas-bun'],
            ['wir','haben uns verabschiedet','ne-am luat rămas-bun'],['ihr','habt euch verabschiedet','v-ați luat rămas-bun'],['sie/Sie','haben sich verabschiedet','și-au luat rămas-bun']
        ],
        note: '🚨 Prefix NESEPARABIL ver- → FĂRĂ ge- (habe mich verabschiedet). Opusul lui sich begrüßen (a se saluta).'
    },
    {
        inf: 'sich entspannen', ro: 'a se relaxa', typ: 'regulat', aux: 'haben', part: 'entspannt',
        praes: [
            ['ich','entspanne mich','mă relaxez'],['du','entspannst dich','te relaxezi'],['er/sie/es','entspannt sich','se relaxează'],
            ['wir','entspannen uns','ne relaxăm'],['ihr','entspannt euch','vă relaxați'],['sie/Sie','entspannen sich','se relaxează / vă relaxați']
        ],
        praet: [
            ['ich','entspannte mich','mă relaxam'],['du','entspanntest dich','te relaxai'],['er/sie/es','entspannte sich','se relaxa'],
            ['wir','entspannten uns','ne relaxam'],['ihr','entspanntet euch','vă relaxați'],['sie/Sie','entspannten sich','se relaxau']
        ],
        perf: [
            ['ich','habe mich entspannt','m-am relaxat'],['du','hast dich entspannt','te-ai relaxat'],['er/sie/es','hat sich entspannt','s-a relaxat'],
            ['wir','haben uns entspannt','ne-am relaxat'],['ihr','habt euch entspannt','v-ați relaxat'],['sie/Sie','haben sich entspannt','s-au relaxat']
        ],
        note: '🚨 Prefix NESEPARABIL ent- → FĂRĂ ge- (habe mich entspannt). Sinonim aproape: sich ausruhen (a se odihni — dar acela e trennbar: ruht sich aus).'
    },
    {
        inf: 'sich freuen', ro: 'a se bucura', typ: 'regulat', aux: 'haben', part: 'gefreut',
        praes: [
            ['ich','freue mich','mă bucur'],['du','freust dich','te bucuri'],['er/sie/es','freut sich','se bucură'],
            ['wir','freuen uns','ne bucurăm'],['ihr','freut euch','vă bucurați'],['sie/Sie','freuen sich','se bucură / vă bucurați']
        ],
        praet: [
            ['ich','freute mich','mă bucuram'],['du','freutest dich','te bucurai'],['er/sie/es','freute sich','se bucura'],
            ['wir','freuten uns','ne bucuram'],['ihr','freutet euch','vă bucurați'],['sie/Sie','freuten sich','se bucurau']
        ],
        perf: [
            ['ich','habe mich gefreut','m-am bucurat'],['du','hast dich gefreut','te-ai bucurat'],['er/sie/es','hat sich gefreut','s-a bucurat'],
            ['wir','haben uns gefreut','ne-am bucurat'],['ihr','habt euch gefreut','v-ați bucurat'],['sie/Sie','haben sich gefreut','s-au bucurat']
        ],
        note: '🧩 Regulat. Prepoziție fixă: sich freuen AUF + Akk (ceva în viitor — Ich freue mich auf das Wochenende) vs sich freuen ÜBER + Akk (ceva deja întâmplat).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em><br>' +
        '<small style="color:#5A5147;">Pronumele reflexiv (mich/dich/sich...) rămâne și la Perfekt.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe reflexive pentru o zi</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Toate fac Perfekt cu HABEN; pronumele reflexiv se schimbă cu fiecare persoană.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„La verbele reflexive, pronumele se conjugă ODATĂ cu verbul: ich wasche MICH, du wäschst DICH, er wäscht SICH. Cu un obiect → Dativ (mir/dir). Prefixele be-/ver-/ent- NU primesc ge- la Perfekt. Toate fac Perfekt cu HABEN. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
