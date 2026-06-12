// ============================================
// FLASHCARDS - Florians langer Tag (A2.1 · Lecția 9)
// Claudia Toth · 32 carduri: reflexiv Akk/Dativ + verbe reflexive + Perfekt + propoziții
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (3) ===
    { de: "Reflexivpronomen Akkusativ", ro: "mich/dich/sich/uns/euch/sich — cazul normal (fără obiect)", audio: "audio/letters/konzept-akkusativ.wav" },
    { de: "Reflexivpronomen Dativ", ro: "mir/dir/sich/uns/euch/sich — când mai e un obiect direct", audio: "audio/letters/konzept-dativ.wav" },
    { de: "Perfekt reflexiv", ro: "mereu haben + pronume reflexiv + Partizip II (hat sich beeilt)", audio: "audio/letters/konzept-perfekt.wav" },

    // === Pronume Akkusativ (3) ===
    { de: "mich (ich)", ro: "Ich wasche mich. (Mă spăl.)", audio: "audio/letters/pron-mich.wav" },
    { de: "dich (du)", ro: "Du setzt dich. (Te așezi.)", audio: "audio/letters/pron-dich.wav" },
    { de: "uns / euch (wir / ihr)", ro: "Wir freuen uns. Ihr setzt euch.", audio: "audio/letters/pron-uns-euch.wav" },

    // === Pronume Dativ (2) ===
    { de: "mir (ich + obiect)", ro: "Ich wasche mir die Hände. (Mă spăl pe mâini.)", audio: "audio/letters/pron-mir.wav" },
    { de: "dir (du + obiect)", ro: "Du putzt dir die Zähne. (Te speli pe dinți.)", audio: "audio/letters/pron-dir.wav" },

    // === Verbe reflexive Tagesablauf (10) ===
    { de: "sich waschen", ro: "a se spăla (er wäscht sich)", audio: "audio/letters/sich-waschen.wav" },
    { de: "sich duschen", ro: "a face duș", audio: "audio/letters/sich-duschen.wav" },
    { de: "sich anziehen", ro: "a se îmbrăca (trennbar: zieht sich an)", audio: "audio/letters/sich-anziehen.wav" },
    { de: "sich ausziehen", ro: "a se dezbrăca (trennbar)", audio: "audio/letters/sich-ausziehen.wav" },
    { de: "sich die Zähne putzen", ro: "a se spăla pe dinți (Dativ: mir die Zähne)", audio: "audio/letters/sich-zaehne-putzen.wav" },
    { de: "sich kämmen", ro: "a se pieptăna", audio: "audio/letters/sich-kaemmen.wav" },
    { de: "sich beeilen", ro: "a se grăbi (be- → fără ge-: hat sich beeilt)", audio: "audio/letters/sich-beeilen.wav" },
    { de: "sich entspannen", ro: "a se relaxa", audio: "audio/letters/sich-entspannen.wav" },
    { de: "sich verabschieden", ro: "a-și lua rămas-bun", audio: "audio/letters/sich-verabschieden.wav" },
    { de: "sich freuen", ro: "a se bucura (auf + Akk = ceva în viitor)", audio: "audio/letters/sich-freuen.wav" },

    // === Perfekt (5) ===
    { de: "Ich habe mich beeilt.", ro: "M-am grăbit.", audio: "audio/letters/perf-beeilt.wav" },
    { de: "Er hat sich verabschiedet.", ro: "Și-a luat rămas-bun.", audio: "audio/letters/perf-verabschiedet.wav" },
    { de: "Wir haben uns entspannt.", ro: "Ne-am relaxat.", audio: "audio/letters/perf-entspannt.wav" },
    { de: "Sie hat sich gewaschen.", ro: "S-a spălat.", audio: "audio/letters/perf-gewaschen.wav" },
    { de: "Ich habe mich angezogen.", ro: "M-am îmbrăcat. (trennbar: an-ge-zogen)", audio: "audio/letters/perf-angezogen.wav" },

    // === Propoziții (9) ===
    { de: "Ich wasche mir die Hände.", ro: "Mă spăl pe mâini. (Dativ + obiect)", audio: "audio/letters/satz-haende.wav" },
    { de: "Ich putze mir die Zähne.", ro: "Mă spăl pe dinți. (Dativ + obiect)", audio: "audio/letters/satz-zaehne.wav" },
    { de: "Beeil dich!", ro: "Grăbește-te! (imperativ)", audio: "audio/letters/satz-beeil-dich.wav" },
    { de: "Ich ziehe mir die Jacke an.", ro: "Îmi pun geaca. (Dativ + obiect, trennbar)", audio: "audio/letters/satz-jacke.wav" },
    { de: "Ich lege mich aufs Sofa.", ro: "Mă întind pe canapea. (Akkusativ)", audio: "audio/letters/satz-sofa.wav" },
    { de: "Wie fühlst du dich?", ro: "Cum te simți?", audio: "audio/letters/satz-fuehlst.wav" },
    { de: "Ich freue mich auf das Wochenende.", ro: "Mă bucur de weekend (ceva în viitor).", audio: "audio/letters/satz-wochenende.wav" },
    { de: "Setz dich!", ro: "Așază-te! (imperativ)", audio: "audio/letters/satz-setz-dich.wav" },
    { de: "Ich mache mir Sorgen.", ro: "Îmi fac griji. (Dativ)", audio: "audio/letters/satz-sorgen.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
