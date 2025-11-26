var lerninhalte = {
  // ⚡ Grundlagen der Elektrotechnik
  "Spannung, Strom & Widerstand": `
    <h2>⚡ Spannung, Strom & Widerstand</h2>
    <p>Die <b>Spannung (U)</b> ist die treibende Kraft, die Elektronen in Bewegung setzt — vergleichbar mit dem Wasserdruck in einer Leitung.</p>
    <p>Der <b>Strom (I)</b> ist die Bewegung der Elektronen selbst – also der Fluss der Ladungsträger.</p>
    <p>Der <b>Widerstand (R)</b> ist das, was den Stromfluss behindert. Er hängt z. B. von der Länge, dem Material und dem Querschnitt eines Leiters ab.</p>
    <p>Einfach gesagt: Spannung = Druck 💨, Strom = Fluss 🌊, Widerstand = Engstelle 🚧.</p>
  `,
  "Ohmsches Gesetz": `
    <h2>⚡ Ohmsches Gesetz</h2>
    <p><b>U = R × I</b></p>
    <p>Das Ohmsche Gesetz beschreibt den linearen Zusammenhang zwischen Spannung, Strom und Widerstand.</p>
    <ul>
      <li>Erhöhe die Spannung → der Strom steigt (bei gleichem Widerstand).</li>
      <li>Erhöhe den Widerstand → der Strom sinkt (bei gleicher Spannung).</li>
    </ul>
    <p>Typische Anwendung: Berechnung von Vorwiderständen bei LEDs oder Prüfung von Stromstärken in Schaltungen.</p>
  `,
  "Reihen- & Parallelschaltung": `
    <h2>🔗 Reihen- & Parallelschaltung</h2>
    <p><b>Reihenschaltung:</b> Alle Bauteile sind hintereinander geschaltet → der gleiche Strom fließt durch alle, die Spannung teilt sich auf.</p>
    <p><b>Parallelschaltung:</b> Alle Bauteile sind nebeneinander geschaltet → die Spannung ist gleich, der Strom teilt sich auf.</p>
    <img src="Reihenschaltung.png" alt="Reihenschaltung">
    <img src="Parallelschaltung.png" alt="Parallelschaltung">
    <p><b>Merke:</b> In der Praxis sind die meisten Schaltungen Kombinationen aus beiden Arten (gemischte Schaltungen).</p>
  `,
  "Schutzmaßnahmen nach VDE 0100": `
    <h2>🧯 Schutzmaßnahmen nach VDE 0100</h2>
    <p>Die wichtigsten Schutzmaßnahmen sind:</p>
    <ul>
      <li><b>Schutzerdung (PE):</b> Ableitung von Fehlerströmen</li>
      <li><b>Schutztrennung:</b> Trennung von Stromkreisen durch Trenntrafo</li>
      <li><b>FI-Schutzschalter (RCD):</b> Trennt bei Fehlerströmen über 30 mA</li>
      <li><b>Kleinspannung (SELV/PELV):</b> Sicher durch niedrige Spannungen</li>
    </ul>
    <p><b>Ziel:</b> Schutz gegen elektrischen Schlag.</p>
  `,
  "Leistung und Energie": `
    <h2>⚡ Leistung & Energie</h2>
    <p>Die elektrische <b>Leistung (P)</b> zeigt, wie viel Energie pro Zeit umgesetzt wird: <b>P = U × I</b></p>
    <p>Die <b>Energie (E)</b> ergibt sich aus Leistung × Zeit: <b>E = P × t</b></p>
    <p>Beispiel: Eine 60 W Glühbirne, die 10 Stunden leuchtet, verbraucht <b>600 Wh = 0,6 kWh</b>.</p>
    <p><b>Merke:</b> 1 kWh = 1000 W über 1 Stunde → das ist die Einheit, die auf deiner Stromrechnung steht.</p>
  `,

  // 🔧 Schaltpläne & Symbole
  "Stromlaufpläne lesen": `
    <h2>📄 Stromlaufpläne lesen</h2>
    <p>Stromlaufpläne zeigen die elektrische Verbindung zwischen Bauteilen – sie sind das „Alphabet“ der Elektronik.</p>
    <p>Sie enthalten Symbole, Verbindungslinien und Kennzeichnungen, um zu verstehen, <b>wie Strom fließt</b> und <b>wie Geräte funktionieren</b>.</p>
    <h3>🔧 Wichtige Symbole</h3>
    <ul>
      <li>🔋 <b>Spannungsquelle</b></li>
      <li>💡 <b>Lampe/Verbraucher</b></li>
      <li>🔌 <b>Schalter</b></li>
      <li>🌀 <b>Spule</b></li>
      <li>⬜ <b>Widerstand</b></li>
      <li>⚡ <b>Sicherungen</b></li>
    </ul>
    <h3>🧭 Wie du einen Stromlaufplan liest</h3>
    <ol>
      <li>Starte bei der Spannungsquelle – verfolge den Pfad von + nach -.</li>
      <li>Erkenne die Schalter – bestimmen, wann der Strom fließen kann.</li>
      <li>Suche nach Verbrauchern – Lampen, Motoren, Steuergeräte usw.</li>
      <li>Beachte Sicherungen – wichtig für Fehlersuche.</li>
      <li>Symbolnummern beachten – sie führen zu anderen Stellen im Plan.</li>
    </ol>
    <h3>💡 Tipp: Immer von links nach rechts interpretieren</h3>
    <p>Die meisten Stromlaufpläne folgen einem logischen Signalfluss. Das macht die Analyse erheblich leichter.</p>
  `,
  "Schaltzeichen": `
    <h2>🔆 Schaltzeichen</h2>
    <p>Schaltzeichen sind genormte Symbole für elektrische Bauteile (nach DIN EN 60617).</p>
    <ul>
      <li>Widerstand – Zickzacklinie</li>
      <li>Lampe – Kreis mit Kreuz</li>
      <li>Schalter – Öffnende oder schließende Linie</li>
      <li>Sicherung – Rechteck mit Strich</li>
      <li>Motor – Kreis mit M</li>
    </ul>
  `,
  "Installationspläne": `
    <h2>🏠 Installationspläne</h2>
    <p>Installationspläne zeigen Steckdosen, Lampen, Schalter und Leitungsverläufe in Gebäuden.</p>
    <p>Sie helfen, die elektrische Anlage sicher und normgerecht aufzubauen (nach DIN VDE 0100).</p>
    <p><b>Hinweis:</b> Immer auf Leitungslängen, Absicherungen und Querschnitte achten!</p>
  `,
  "Leitungsquerschnitt & Absicherung": `
    <h2>🔌 Leitungsquerschnitt & Absicherung</h2>
    <p>Der Querschnitt einer Leitung bestimmt, wie viel Strom sie sicher führen kann.</p>
    <ul>
      <li>1,5 mm² → max. 16 A (z. B. Beleuchtung)</li>
      <li>2,5 mm² → max. 20 A (z. B. Steckdosen)</li>
    </ul>
    <p>Zu dünne Leitungen führen zu Erwärmung → Brandgefahr!</p>
    <p><b>Sicherung:</b> schützt Leitung und Anlage vor Überlast und Kurzschluss.</p>
  `,

  // 📏 Messtechnik
  "Multimeter richtig benutzen": `
    <h2>🔧 Multimeter</h2>
    <p>Ein Multimeter misst <b>Spannung (V)</b>, <b>Strom (A)</b> und <b>Widerstand (Ω)</b>.</p>
    <ul>
      <li>Spannung: Parallel messen</li>
      <li>Strom: In Reihe messen</li>
      <li>Widerstand: Nur im spannungsfreien Zustand messen</li>
    </ul>
    <p>Wichtig: Immer den passenden Messbereich einstellen, bevor du misst!</p>
  `,
  "Messfehler vermeiden": `
    <h2>⚠️ Messfehler vermeiden</h2>
    <ul>
      <li>Prüfe immer, ob das Messgerät richtig angeschlossen ist.</li>
      <li>Vermeide Kontaktfehler und lose Klemmen.</li>
      <li>Messbereich richtig wählen – zu kleiner Bereich zerstört das Gerät!</li>
      <li>Nur in spannungsfreien Anlagen Widerstände messen.</li>
    </ul>
  `,
  "Messgerätearten": `
    <h2>📟 Messgerätearten</h2>
    <ul>
      <li>Multimeter – Spannung, Strom, Widerstand</li>
      <li>Oszilloskop – zeitabhängige Signale</li>
      <li>Stromzange – Strommessung ohne Unterbrechung des Stromkreises</li>
      <li>Spannungsprüfer – einfache Spannungsprüfung (z. B. Duspol)</li>
    </ul>
  `,

  // 🦺 Sicherheitsregeln
  "5 Sicherheitsregeln": `
    <h2>⚠️ Die 5 Sicherheitsregeln</h2>
    <ol>
      <li>Freischalten (Spannungsquelle trennen)</li>
      <li>Gegen Wiedereinschalten sichern</li>
      <li>Spannungsfreiheit feststellen</li>
      <li>Erden und kurzschließen</li>
      <li>Benachbarte, unter Spannung stehende Teile abdecken oder abschranken</li>
    </ol>
    <p><b>Merke:</b> Diese Regeln schützen Leben – sie sind in der VDE 0105 festgelegt!</p>
  `,
  "PSA – Persönliche Schutzausrüstung": `
    <h2>🦺 Persönliche Schutzausrüstung (PSA)</h2>
    <p>Dazu gehören:</p>
    <ul>
      <li>Isolierte Handschuhe</li>
      <li>Schutzbrille</li>
      <li>Isolierte Werkzeuge</li>
      <li>Sicherheitsschuhe mit isolierender Sohle</li>
    </ul>
    <p><b>Wichtig:</b> PSA muss regelmäßig geprüft und bei Beschädigung sofort ersetzt werden!</p>
  `,
  "Unfallverhütung": `
    <h2>🛡️ Unfallverhütung</h2>
    <p>Der beste Schutz ist Aufmerksamkeit. Gefahren früh erkennen und vermeiden:</p>
    <ul>
      <li>Keine Arbeiten unter Spannung ohne Schulung</li>
      <li>Nur geprüfte Werkzeuge verwenden</li>
      <li>Fehler sofort melden</li>
      <li>Sauberkeit & Ordnung am Arbeitsplatz</li>
    </ul>
    <p><b>Ziel:</b> Sicher arbeiten – keine Verletzungen, keine Gefährdung anderer.</p>
  `,

  // 🔄 Schaltungs Regelungen
  "Reihenschaltung R, L und C": `
    <h2>🔄 Reihenschaltung von R, L und C</h2>
    <p>In einer Reihenschaltung aus <b>Wirkwiderstand (R)</b>, <b>induktivem Blindwiderstand (X<sub>L</sub>)</b> und <b>kapazitivem Blindwiderstand (X<sub>C</sub>)</b> fließt überall der <b>gleiche Strom</b>.</p>
    <p>Die Spannungen an den einzelnen Bauteilen addieren sich vektoriell zur Gesamtspannung:</p>
    <p><b>U = √(U<sub>R</sub>² + (U<sub>L</sub> − U<sub>C</sub>)²)</b></p>
    <p>Die Gesamtimpedanz: <b>Z = √(R² + (X<sub>L</sub> − X<sub>C</sub>)²)</b></p>
    <p>Phasenwinkel: <b>tan φ = (X<sub>L</sub> − X<sub>C</sub>) / R</b></p>
    <p>Resonanz: X<sub>L</sub> = X<sub>C</sub> → φ = 0°</p>
  `,
  "Parallelschaltung R, L und C": `
    <h2>🔁 Parallelschaltung von R, L und C</h2>
    <p>In einer Parallelschaltung aus R, L und C liegt an allen Zweigen die <b>gleiche Spannung</b>.</p>
    <p>Ströme addieren sich vektoriell zum Gesamtstrom: <b>I = √(I<sub>R</sub>² + (I<sub>C</sub> − I<sub>L</sub>)²)</b></p>
    <p>Gesamtadmittanz: <b>Y = √(G² + (B<sub>C</sub> − B<sub>L</sub>)²)</b></p>
    <p>Gesamtimpedanz: <b>Z = 1 / Y</b>, Phasenwinkel: <b>tan φ = (B<sub>C</sub> − B<sub>L</sub>) / G</b></p>
    <p>Resonanz: B<sub>L</sub> = B<sub>C</sub> → φ = 0°</p>
  `,
  "Wirk-, Blind- und Scheinleistung": `
    <h2>⚙️ Wirk-, Blind- und Scheinleistung</h2>
    <p>Wirkleistung P, Blindleistung Q, Scheinleistung S:</p>
    <p>S² = P² + Q²</p>
    <p>P = S × cosφ, Q = S × sinφ</p>
    <p>Einheiten: P [W], Q [Var], S [VA]</p>
    <p>Beispiel: S = 1000 VA, cosφ = 0,8 → P = 800 W, Q = 600 Var</p>
  `
};
