// ============================================
// EXERCIȚII - Florians langer Tag (A2.1 · Lecția 9)
// Claudia Toth · 5 exerciții cu rezolvări complete
// Reflexive Verben — Akkusativ vs Dativ (mich/mir) + Perfekt
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Reflexiv Akkusativ (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'Ich freue ____ auf das Wochenende.', hint: 'ich → Akkusativ', correct: 'mich', accept: ['mich'] },
    { id: 'b', prompt: 'Nach dem Aufstehen strecke ich ____ .', hint: 'ich', correct: 'mich', accept: ['mich'] },
    { id: 'c', prompt: 'Er muss ____ beeilen.', hint: 'er', correct: 'sich', accept: ['sich'] },
    { id: 'd', prompt: 'Wir treffen ____ zum Kartenspielen.', hint: 'wir', correct: 'uns', accept: ['uns'] },
    { id: 'e', prompt: 'Setzt du ____ neben mich?', hint: 'du', correct: 'dich', accept: ['dich'] },
    { id: 'f', prompt: 'Ihr unterhaltet ____ über das Buch.', hint: 'ihr', correct: 'euch', accept: ['euch'] },
    { id: 'g', prompt: 'Die Freunde treffen ____ im Kino.', hint: 'sie (pl)', correct: 'sich', accept: ['sich'] },
    { id: 'h', prompt: 'Nach der Arbeit lege ich ____ aufs Sofa.', hint: 'ich', correct: 'mich', accept: ['mich'] },
    { id: 'i', prompt: 'Wäschst du ____ jeden Morgen?', hint: 'du', correct: 'dich', accept: ['dich'] },
    { id: 'j', prompt: 'Die Frau schminkt ____ vor der Party.', hint: 'sie', correct: 'sich', accept: ['sich'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu pronumele reflexiv la Akkusativ (mich/dich/sich/uns/euch/sich).</strong>
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">persoana: ${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="pronume reflexiv...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Akkusativ oder Dativ? (mich vs mir) (10 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Ich wasche ____ . <em>(fără obiect)</em>', a: 'mich', b: 'mir', correct: 'mich', expl: 'Fără obiect direct → Akkusativ: mich.' },
    { id: 'b', text: 'Ich wasche ____ die Hände. <em>(obiect: die Hände)</em>', a: 'mich', b: 'mir', correct: 'mir', expl: 'Există obiect direct (die Hände) → Dativ: mir.' },
    { id: 'c', text: 'Ich putze ____ die Zähne. <em>(obiect: die Zähne)</em>', a: 'mich', b: 'mir', correct: 'mir', expl: 'Obiect direct (die Zähne) → Dativ: mir.' },
    { id: 'd', text: 'Ich dusche ____ . <em>(fără obiect)</em>', a: 'mich', b: 'mir', correct: 'mich', expl: 'Fără obiect → Akkusativ: mich.' },
    { id: 'e', text: 'Du ziehst ____ die Jacke an. <em>(obiect: die Jacke)</em>', a: 'dich', b: 'dir', correct: 'dir', expl: 'Obiect direct (die Jacke) → Dativ: dir.' },
    { id: 'f', text: 'Du beeilst ____ . <em>(fără obiect)</em>', a: 'dich', b: 'dir', correct: 'dich', expl: 'Fără obiect → Akkusativ: dich.' },
    { id: 'g', text: 'Ich ärgere ____ über den Stau. <em>(fără obiect direct)</em>', a: 'mich', b: 'mir', correct: 'mich', expl: 'Fără obiect direct → Akkusativ: mich.' },
    { id: 'h', text: 'Ich kämme ____ die Haare. <em>(obiect: die Haare)</em>', a: 'mich', b: 'mir', correct: 'mir', expl: 'Obiect direct (die Haare) → Dativ: mir.' },
    { id: 'i', text: 'Du setzt ____ auf den Stuhl. <em>(fără obiect)</em>', a: 'dich', b: 'dir', correct: 'dich', expl: 'Fără obiect → Akkusativ: dich.' },
    { id: 'j', text: 'Du wäschst ____ die Haare. <em>(obiect: die Haare)</em>', a: 'dich', b: 'dir', correct: 'dir', expl: 'Obiect direct (die Haare) → Dativ: dir.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🅰️🅳 Alege Akkusativ sau Dativ (mich/mir, dich/dir).</strong><br>
        <em>Regula:</em> dacă apare un OBIECT direct (die Hände, die Zähne, die Jacke...) → reflexivul e Dativ (mir/dir). Altfel → Akkusativ (mich/dich).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;">${it.text}</p>
                <label style="margin-right:14px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} — ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Reflexiv Dativ + obiect (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich putze ____ die Zähne.', hint: 'ich + obiect → Dativ', correct: 'mir', accept: ['mir'] },
    { id: 'b', prompt: 'Das Mädchen zieht ____ Socken an.', hint: 'sie + obiect → Dativ', correct: 'sich', accept: ['sich'] },
    { id: 'c', prompt: 'Wäschst du ____ oft die Hände?', hint: 'du + obiect → Dativ', correct: 'dir', accept: ['dir'] },
    { id: 'd', prompt: 'Die Eltern machen ____ Sorgen um den Sohn.', hint: 'sie (pl) + obiect → Dativ', correct: 'sich', accept: ['sich'] },
    { id: 'e', prompt: 'Meine Schwester kämmt ____ die Haare.', hint: 'sie + obiect → Dativ', correct: 'sich', accept: ['sich'] },
    { id: 'f', prompt: 'Ich ziehe ____ eine Jacke an.', hint: 'ich + obiect → Dativ', correct: 'mir', accept: ['mir'] },
    { id: 'g', prompt: 'Putzt du ____ vor dem Frühstück die Zähne?', hint: 'du + obiect → Dativ', correct: 'dir', accept: ['dir'] },
    { id: 'h', prompt: 'Wir machen ____ Sorgen um die Katze.', hint: 'wir + obiect → Dativ', correct: 'uns', accept: ['uns'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🚿 Completează cu pronumele reflexiv la Dativ.</strong><br>
        <em>Toate au un obiect direct</em> (die Zähne, die Hände, Socken...) → deci reflexivul e la Dativ: ich → mir, du → dir, restul ca la Akkusativ.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="pronume reflexiv Dativ...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Reflexive la Perfekt — Partizip II (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich habe mich ____ . (sich beeilen)', hint: 'be- → fără ge-', correct: 'beeilt', accept: ['beeilt'] },
    { id: 'b', prompt: 'Er hat sich ____ . (sich verabschieden)', hint: 'ver- → fără ge-', correct: 'verabschiedet', accept: ['verabschiedet'] },
    { id: 'c', prompt: 'Wir haben uns ____ . (sich entspannen)', hint: 'ent- → fără ge-', correct: 'entspannt', accept: ['entspannt'] },
    { id: 'd', prompt: 'Du hast dich ____ . (sich waschen)', hint: 'tare: ge...en', correct: 'gewaschen', accept: ['gewaschen'] },
    { id: 'e', prompt: 'Sie hat sich ____ . (sich freuen)', hint: 'regulat: ge...t', correct: 'gefreut', accept: ['gefreut'] },
    { id: 'f', prompt: 'Ich habe mich ____ . (sich anziehen)', hint: 'trennbar + tare: an-ge-zogen', correct: 'angezogen', accept: ['angezogen'] },
    { id: 'g', prompt: 'Ihr habt euch ____ . (sich setzen)', hint: 'regulat: ge...t', correct: 'gesetzt', accept: ['gesetzt'] },
    { id: 'h', prompt: 'Er hat sich die Hände ____ . (waschen)', hint: 'tare: ge...en', correct: 'gewaschen', accept: ['gewaschen'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>⏮️ Completează participiul (Partizip II) la Perfekt.</strong><br>
        <em>Toate fac Perfekt cu HABEN + pronume reflexiv.</em> Atenție: be-/ver-/ent- → fără ge- · trennbar → -ge- la mijloc (angezogen).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="Partizip II...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Mă spăl.', correct: 'Ich wasche mich.', accept: ['ich wasche mich'] },
    { id: 'b', ro: 'Mă spăl pe mâini.', correct: 'Ich wasche mir die Hände.', accept: ['ich wasche mir die hände'] },
    { id: 'c', ro: 'Mă grăbesc.', correct: 'Ich beeile mich.', accept: ['ich beeile mich'] },
    { id: 'd', ro: 'Te speli pe dinți. (du)', correct: 'Du putzt dir die Zähne.', accept: ['du putzt dir die zähne'] },
    { id: 'e', ro: 'Ne bucurăm de weekend.', correct: 'Wir freuen uns auf das Wochenende.', accept: ['wir freuen uns auf das wochenende'] },
    { id: 'f', ro: 'S-a relaxat. (er, Perfekt)', correct: 'Er hat sich entspannt.', accept: ['er hat sich entspannt'] },
    { id: 'g', ro: 'Mă întind pe canapea.', correct: 'Ich lege mich aufs Sofa.', accept: ['ich lege mich aufs sofa', 'ich lege mich auf das sofa'] },
    { id: 'h', ro: 'Mi-am luat rămas-bun. (Perfekt)', correct: 'Ich habe mich verabschiedet.', accept: ['ich habe mich verabschiedet'] },
    { id: 'i', ro: 'Îmi pun geaca.', correct: 'Ich ziehe mir die Jacke an.', accept: ['ich ziehe mir die jacke an'] },
    { id: 'j', ro: 'Copiii se spală pe mâini.', correct: 'Die Kinder waschen sich die Hände.', accept: ['die kinder waschen sich die hände'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană. Atenție la mich vs mir (apare un obiect?) și la Perfekt cu haben.</strong>
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
