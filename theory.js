// ============================================
// TEORIE - Florians langer Tag (A2.1 · Lecția 9)
// Claudia Toth · Annettes Deutschkurs
// Sursă DF: INT266 (mir die Hände) + INT267 (mussten uns beeilen) + INT268 (haben sich verabschiedet)
// Tematica: Reflexive Verben — Akkusativ vs Dativ (mich/mir) + Perfekt
// ============================================

const theoryHTML = `
    <!-- 0: Story -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👨‍⚕️ 1. Florians langer Tag — povestea</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-florian-story.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele lecției</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · o zi lungă</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Prietena · îl ascultă</span></div>
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Studentă · Potsdam</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 O zi de la cap la coadă, plină de verbe reflexive</h4>
                <p>Florian e doctor și azi a avut o zi grea. Dimineața <strong>s-a trezit</strong>, <strong>s-a spălat</strong>, <strong>s-a îmbrăcat</strong> și <strong>s-a grăbit</strong> la clinică. A muncit toată ziua, abia <strong>s-a relaxat</strong>, iar seara <strong>și-a luat rămas-bun</strong> de la colegi. Toate aceste acțiuni sunt <strong>verbe reflexive</strong> — acțiunea se întoarce asupra persoanei care o face. Cuvântul-cheie: pronumele reflexiv (<strong>mich, dich, sich...</strong>).</p>
            </div>

            <div class="theory-box">
                <h4>💬 Dialogul: Florian + Carolina (seara)</h4>
                <p><strong style="color:#065f46;">Carolina:</strong> Du siehst müde aus! Wie war dein Tag?<br><span class="ro-translation">Arăți obosit! Cum a fost ziua ta?</span></p>
                <p><strong style="color:#065f46;">Florian:</strong> Anstrengend! Heute Morgen habe ich <strong>mich</strong> total <strong>beeilt</strong>. Ich habe <strong>mir</strong> nicht mal richtig die Zähne geputzt!<br><span class="ro-translation">Obositoare! Azi-dimineață m-am grăbit teribil. Nici măcar nu m-am spălat bine pe dinți!</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Und jetzt? Kannst du <strong>dich</strong> endlich <strong>entspannen</strong>?<br><span class="ro-translation">Și acum? Te poți relaxa în sfârșit?</span></p>
                <p><strong style="color:#065f46;">Florian:</strong> Ja! Ich ziehe <strong>mir</strong> eine Jogginghose an und lege <strong>mich</strong> aufs Sofa.<br><span class="ro-translation">Da! Îmi pun un pantalon de trening și mă întind pe canapea.</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Ai observat? Florian spune când <strong>mich</strong> (mă grăbesc, mă întind), când <strong>mir</strong> (îmi spăl dinții, îmi pun pantalonii). Asta e marea întrebare a lecției: <strong>mich</strong> sau <strong>mir</strong>? Răspunsul ține de un singur lucru — dacă mai e un obiect în propoziție. Hai să vedem! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    „Mein Tagesablauf" — Descrie-ți o zi obișnuită folosind cel puțin <strong>6 verbe reflexive</strong> (ich wasche mich, ich ziehe mich an, ich beeile mich, ich putze mir die Zähne, ich entspanne mich...). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/96hGa7QN4fYTZjbAA" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Reflexiv Akkusativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🪞 2. Reflexiv Akkusativ — cazul normal (mich)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-reflexiv-akkusativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Verb reflexiv = acțiunea se întoarce asupra subiectului</h4>
                <p>La un verb reflexiv, pronumele reflexiv se schimbă cu fiecare persoană. Cazul de bază (când NU mai e alt obiect) e <strong>Akkusativ</strong>:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Persoană</th><th>Reflexiv Akk</th><th>Exemplu + RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>ich</td><td><strong>mich</strong></td><td>Ich wasche mich. <span class="ro-translation">Mă spăl.</span></td></tr>
                    <tr><td>du</td><td><strong>dich</strong></td><td>Du setzt dich. <span class="ro-translation">Te așezi.</span></td></tr>
                    <tr><td>er/sie/es</td><td><strong>sich</strong></td><td>Er beeilt sich. <span class="ro-translation">Se grăbește.</span></td></tr>
                    <tr><td>wir</td><td><strong>uns</strong></td><td>Wir freuen uns. <span class="ro-translation">Ne bucurăm.</span></td></tr>
                    <tr><td>ihr</td><td><strong>euch</strong></td><td>Ihr entspannt euch. <span class="ro-translation">Vă relaxați.</span></td></tr>
                    <tr><td>sie/Sie</td><td><strong>sich</strong></td><td>Sie verabschieden sich. <span class="ro-translation">Își iau rămas-bun.</span></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Pronumele reflexiv stă de obicei imediat după verb: „Ich wasche <strong>mich</strong>", „Er beeilt <strong>sich</strong>". La persoana a 3-a (er/sie/es ȘI sie/Sie) e mereu <strong>sich</strong> — ușor de reținut!</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Reflexiv Dativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🆕 3. Reflexiv Dativ — când mai e un obiect (mir die Hände)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-reflexiv-dativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#dc2626;">
                <h4>🚨 Regula de aur: există un obiect direct? → reflexivul trece la Dativ</h4>
                <p>Dacă în propoziție mai apare un <strong>obiect direct</strong> (o parte a corpului, o haină, un lucru), pronumele reflexiv NU mai e la Akkusativ, ci la <strong>Dativ</strong>:</p>
                <ul>
                    <li>Ich wasche <strong style="color:#047857;">mich</strong>. <span class="ro-translation">Mă spăl. (fără obiect → Akkusativ)</span></li>
                    <li>Ich wasche <strong style="color:#dc2626;">mir</strong> die Hände. <span class="ro-translation">Mă spăl pe mâini. (obiect: die Hände → Dativ)</span></li>
                </ul>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Persoană</th><th>Reflexiv Dativ</th><th>Exemplu + RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>ich</td><td><strong>mir</strong> 🚨</td><td>Ich putze mir die Zähne. <span class="ro-translation">Mă spăl pe dinți.</span></td></tr>
                    <tr><td>du</td><td><strong>dir</strong> 🚨</td><td>Du ziehst dir die Jacke an. <span class="ro-translation">Îți pui geaca.</span></td></tr>
                    <tr><td>er/sie/es</td><td><strong>sich</strong></td><td>Er kämmt sich die Haare. <span class="ro-translation">Se piaptănă.</span></td></tr>
                    <tr><td>wir</td><td><strong>uns</strong></td><td>Wir machen uns Sorgen. <span class="ro-translation">Ne facem griji.</span></td></tr>
                    <tr><td>ihr</td><td><strong>euch</strong></td><td>Ihr wascht euch die Hände. <span class="ro-translation">Vă spălați pe mâini.</span></td></tr>
                    <tr><td>sie/Sie</td><td><strong>sich</strong></td><td>Sie rasieren sich die Beine. <span class="ro-translation">Își rad picioarele.</span></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vestea BUNĂ: doar <strong>ich</strong> și <strong>du</strong> se schimbă! mich → <strong>mir</strong>, dich → <strong>dir</strong>. Restul (sich/uns/euch/sich) rămân la fel ca la Akkusativ. Deci grija ta e doar la persoanele I și II singular. Trucul: dacă spui „pe mâini / pe dinți / geaca" (un obiect) → mir/dir! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Reflexiv Perfekt -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⏮️ 4. Reflexive la Perfekt (hat sich ...)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-reflexiv-perfekt.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Toate verbele reflexive fac Perfekt cu HABEN</h4>
                <p>Structura: <strong>haben (conjugat) + pronume reflexiv + Partizip II</strong> (la sfârșit). Pronumele reflexiv NU dispare — stă după auxiliar:</p>
                <p style="text-align:center; font-size:1.05rem;">Er <strong style="color:#047857;">hat</strong> <strong style="color:#dc2626;">sich</strong> <strong>verabschiedet</strong>.<br><span style="color:#6b7280; font-style:italic;">Și-a luat rămas-bun.</span></p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Prezent</th><th>Perfekt</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>Ich beeile mich.</td><td>Ich <strong>habe mich beeilt</strong>.</td><td>M-am grăbit.</td></tr>
                    <tr><td>Du wäschst dich.</td><td>Du <strong>hast dich gewaschen</strong>.</td><td>Te-ai spălat.</td></tr>
                    <tr><td>Er entspannt sich.</td><td>Er <strong>hat sich entspannt</strong>.</td><td>S-a relaxat.</td></tr>
                    <tr><td>Wir verabschieden uns.</td><td>Wir <strong>haben uns verabschiedet</strong>.</td><td>Ne-am luat rămas-bun.</td></tr>
                    <tr><td>Ich ziehe mich an.</td><td>Ich <strong>habe mich angezogen</strong>.</td><td>M-am îmbrăcat (trennbar!).</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>🚨 Prefixele be-/ver-/ent- (beeilen, verabschieden, entspannen) NU primesc ge- la Partizip II: beeil<strong>t</strong>, verabschiede<strong>t</strong>, entspann<strong>t</strong>. Iar verbele trennbar bagă -ge- la mijloc: an<strong>ge</strong>zogen. Pronumele reflexiv rămâne și aici (mich/dich/sich)!</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recap + vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📚 5. Recapitulare + vocabular Tagesablauf</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-vocab.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Akkusativ vs Dativ dintr-o privire</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Persoană</th><th>Akkusativ (fără obiect)</th><th>Dativ (cu obiect)</th></tr>
                </thead>
                <tbody>
                    <tr><td>ich</td><td>mich</td><td><strong>mir</strong></td></tr>
                    <tr><td>du</td><td>dich</td><td><strong>dir</strong></td></tr>
                    <tr><td>er/sie/es · wir · ihr · sie/Sie</td><td>sich · uns · euch · sich</td><td>sich · uns · euch · sich <em>(la fel!)</em></td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Verbe reflexive pentru o zi (Tagesablauf)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Germană</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>sich waschen / duschen</strong></td><td>a se spăla / a face duș</td></tr>
                    <tr><td><strong>sich die Zähne putzen</strong></td><td>a se spăla pe dinți (Dativ!)</td></tr>
                    <tr><td><strong>sich anziehen / ausziehen</strong></td><td>a se îmbrăca / dezbrăca</td></tr>
                    <tr><td><strong>sich beeilen</strong></td><td>a se grăbi</td></tr>
                    <tr><td><strong>sich entspannen / ausruhen</strong></td><td>a se relaxa / odihni</td></tr>
                    <tr><td><strong>sich verabschieden</strong></td><td>a-și lua rămas-bun</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Reține regula de aur: verb reflexiv SINGUR → <strong>mich</strong> (Akkusativ); verb reflexiv + un obiect (mâini, dinți, haine) → <strong>mir</strong> (Dativ). Și toate fac Perfekt cu HABEN. Acum povestește-ți ziua cu verbe reflexive! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
