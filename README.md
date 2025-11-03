# Azubis-Test-
[index.html](https://github.com/user-attachments/files/23300436/index.html)
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Meine Tests</title>
<style>
  :root {
    --blue: #007aff;
    --bg: #f2f2f7;
    --card: #fff;
    --shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--bg);
    margin: 0;
    padding: 20px;
    color: #222;
  }
  h1 {
    text-align: center;
    font-size: 26px;
    margin-bottom: 10px;
    user-select: none;
  }
  .card {
    background: var(--card);
    border-radius: 16px;
    box-shadow: var(--shadow);
    padding: 18px;
    margin-bottom: 20px;
    transition: transform 0.2s;
  }
  .card:hover { transform: scale(1.01); }
  button {
    background: var(--blue);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
  }
  button.secondary {
    background: #e5e5ea;
    color: #333;
  }
  label {
    display: block;
    padding: 6px 0;
  }
</style>
</head>
<body>
<h1 id="title">📘 Meine Tests</h1>
<div id="app"></div>

<script>
// 🔹 Eingebaute Standardtests (nur Multiple-Choice)
let tests = [
  {
    name: "DIN-Vorschriften und DGUV Vorschrift 3",
    questions: [

      { question: "Was regelt die DIN VDE 0100?", options: ["Elektromagnetische Verträglichkeit","Prüfverfahren für medizinische Geräte","Errichtung von Niederspannungsanlagen","DIN-konforme Schilder für Baustellen"], correct: "Errichtung von Niederspannungsanlagen" },

      { question: "Was bedeutet das Kürzel VDE?", options: ["Verband Deutscher Elektriker","Verband der Elektrotechnik, Elektronik und Informationstechnik","Vereinigte Deutsche Energienetze","Verband Deutscher Energieanlagen"], correct: "Verband der Elektrotechnik, Elektronik und Informationstechnik" },

{ question: "Welche DIN-Norm gilt für Schutzmaßnahmen gegen elektrischen Schlag?", 
options: ["DIN EN 60204-1","DIN VDE 0105-100","DIN VDE 0100-410","DIN VDE 0298-4"], correct: "DIN VDE 0100-410" },

{ question: "Wie oft muss ein elektrischer Betriebsmittel geprüft werden (nach VDE)?", 
options: [" Alle 10 Jahre","Nur vor der ersten Inbetriebnahme","Nach Herstellerangabe oder regelmäßig","Prüfung ist freiwillig"], correct: "Nach Herstellerangabe oder regelmäßig" },

{ question: "Welche Norm betrifft das Arbeiten unter Spannung?", 
options: [" DIN VDE 0701","DIN VDE 0680","DIN VDE 0105-100","DIN VDE 0281"], correct: "DIN VDE 0105-100" },

{ question: "Welche DIN-VDE-Norm beschreibt die Prüfung ortsveränderlicher Geräte?", 
options: [" DIN VDE 0100-600","DIN VDE 0701-0702","DIN VDE 0105-100","DIN VDE 0295"], correct: "DIN VDE 0701-0702" },

{ question: "Wann darf eine Elektrofachkraft von DIN-Vorgaben abweichen?", 
options: ["Nie","Wenn die Arbeit schneller erledigt werden muss","Mit Dokumentation und gleichwertigem Sicherheitsniveau","Nur mit Genehmigung des Kunden"], correct: "Mit Dokumentation und gleichwertigem Sicherheitsniveau" },

{ question: "Wer ist für die Prüfung elektrischer Betriebsmittel verantwortlich?", 
options: ["Der Elektriker","Die Berufsgenossenschaft","Der Unternehmer / Arbeitgeber","Die Sicherheitsfachkraft"], correct: "Der Unternehmer / Arbeitgeber" },

{ question: "Wie oft sind ortsveränderliche elektrische Geräte mit hoher beansprachung zu prüfen?", 
options: ["Alle 6 Monate","Mindestens einmal jährlich oder nach Gefährdungsbeurteilung","Nur bei Neukauf","Nie, wenn sie funktionieren"], correct: "Mindestens einmal jährlich oder nach Gefährdungsbeurteilung" },

{ question: "Was passiert bei Missachtung der DGUV V3?", 
options: ["Keine Konsequenzen","Versicherungsschutz kann entfallen","Man bekommt eine Abmahnung vom Kunden","Man spart Kosten"], correct: "Versicherungsschutz kann entfallen" },

{ question: "Welche Prüfung gehört zur DGUV-V3-Erstprüfung?", 
options: ["Sichtprüfung","Messung des Schutzleiterwiderstandes","Messung des Isolationswiderstandes","Alle genannten Punkte"], correct: "Alle genannten Punkte" }


    ]
  },

  {
    name: "Frequenzumrichter",
    questions: [
      { question: "Wozu dient ein Frequenzumrichter?", 
options: ["Strom speichern","Netzspannung erhöhen","Drehzahl von Motoren variabel steuern","Spannung gleichrichten"], correct: "Drehzahl von Motoren variabel steuern" },

      { question: "Was wandelt der Frequenzumrichter zuerst um?", 
options: ["DC zu AC","AC zu DC","Drehstrom zu Wechselstrom","Frequenz zu Spannung"], correct: "AC zu DC" },
    

 { question: "Welche Spannung liefert ein Frequenzumrichter im Ausgang typischerweise?", 
options: ["Immer 230 V","Gleichspannung","Frequenzvariable Wechselspannung","Starkstrom mit 10 kV"], correct: "Frequenzvariable Wechselspannung" },
    

 { question: "Wofür steht die Abkürzung „PWM“, die bei Frequenzumrichtern genutzt wird?", 
options: ["Power Wiring Module","Pulse Width Modulation","Passive Wave Mechanism","Phase Wire Management"], correct: "Pulse Width Modulation" },
    
 { question: "Welche Art von Motor wird am häufigsten mit einem Frequenzumrichter betrieben?", 
options: ["Asynchronmotor","Gleichstrommotor","Universalmotor","Schrittmotor"], correct: "Asynchronmotor" },
    

 { question: "Welcher Parameter wird bei Frequenzumrichtern nicht direkt beeinflusst?", 
options: ["Frequenz"," Spannung","Stromaufnahme","Baugröße des Motors"], correct: "Baugröße des Motors" },
    

 { question: "Welcher Nachteil kann bei falscher Frequenzumrichter-Programmierung auftreten?", 
options: ["Höhere Effizienz","Längere Lebensdauer","Motorschäden oder Vibrationen","Geringerer Stromverbrauch"], correct: "Motorschäden oder Vibrationen" },
    

 { question: "Wie schützt ein Frequenzumrichter den Motor?", 
options: ["Durch externe Sicherung","Durch integrierte Schutzfunktionen (z. B. Überlast, Übertemperatur)","Durch Abschalten der Netzspannung","Gar nicht"], correct: "Durch integrierte Schutzfunktionen (z. B. Überlast, Übertemperatur)" }
    ]

  }
];

const app = document.getElementById("app");
let isAdmin = false;
const ADMIN_CODE = "2516";

// 🔹 Startseite
function showHome() {
  app.innerHTML = "";
  tests.forEach((test, i) => {
    const c = document.createElement("div");
    c.className = "card";
    c.innerHTML = `
      <h3>${test.name}</h3>
      <p>${test.questions.length} Fragen</p>
      <button onclick="startTest(${i})">Starten</button>
      ${isAdmin ? `<button class="secondary" onclick="deleteTest(${i})">Löschen</button>` : ""}
    `;
    app.appendChild(c);
  });
}

// 🔹 Test löschen (nur Admin)
function deleteTest(i) {
  if (confirm("Diesen Test wirklich löschen?")) {
    tests.splice(i,1);
    showHome();
  }
}

// 🔹 Test starten
function startTest(index) {
  const t = tests[index];
  let current = 0;
  let score = 0;
  const answers = [];

  function showQ() {
    const q = t.questions[current];
    if (!q) return showResult();
    app.innerHTML = `<div class="card">
      <h3>${t.name}</h3>
      <p><b>${q.question}</b></p>
      <div id="answerBox"></div>
      <button onclick="next()">Weiter</button>
    </div>`;
    const box = document.getElementById("answerBox");
    q.options.forEach(opt => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="ans" value="${opt}"> ${opt}`;
      box.appendChild(label);
    });
  }

  window.next = function() {
    const q = t.questions[current];
    const checked = document.querySelector("input[name='ans']:checked");
    if (!checked) return alert("Bitte eine Antwort auswählen!");
    const ans = checked.value;
    answers.push(ans);
    if (ans === q.correct) score++;
    current++;
    showQ();
  };

  function showResult() {
    app.innerHTML = `<div class="card">
      <h3>${t.name}</h3>
      <p><b>Ergebnis:</b> ${score} von ${t.questions.length} richtig ✅</p>
      <h4>Lösungen:</h4>
      ${t.questions.map((q,i)=>`
        <p><b>${q.question}</b><br>
        Deine Antwort: ${answers[i]}<br>
        Richtig: ${q.correct}</p>`).join("")}
      <button class="secondary" onclick="showHome()">Zurück</button>
    </div>`;
  }

  showQ();
}

// 🔹 Versteckter Admin-Modus (nur löschen)
let pressTimer;
const title = document.getElementById("title");
title.addEventListener("touchstart", () => { pressTimer = setTimeout(() => askAdmin(), 3000); });
title.addEventListener("touchend", () => clearTimeout(pressTimer));
title.addEventListener("mousedown", () => { pressTimer = setTimeout(() => askAdmin(), 3000); });
title.addEventListener("mouseup", () => clearTimeout(pressTimer));

function askAdmin() {
  const code = prompt("Admin-Code eingeben:");
  if (code === ADMIN_CODE) {
    isAdmin = true;
    alert("Admin-Modus aktiviert ✅");
  } else {
    alert("Falscher Code ❌");
    isAdmin = false;
  }
  showHome();
}

showHome();
</script>
</body>
</html>
