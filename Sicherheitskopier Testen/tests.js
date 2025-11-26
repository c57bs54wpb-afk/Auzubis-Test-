// tests.js



var tests = [
  /////////////////////////////// 1. Lehrjahr ///////////////////////////////



 {
  id:"1_3",
    year: 1,
    name: "Bilder Fragen",
    questions: [
   {
  question: "Was zeigt dieses Symbol?",
  image: "Widerstand.png",
  options: ["Widerstand", "Kondensator", "Spule", "Diode"],
  correct: "Widerstand"
},
   
    {
      question: "Welches Bauteil wird hier dargestellt?",
      image: "Kondensator.jpg",
      options: ["Kondensator", "Widerstand", "Spule", "Schalter"],
      correct: "Kondensator"
    },
 
    {
      question: "Dieses Symbol steht für welches Bauteil?",
      image: "Diode.jpg",
      options: ["Transistor", "LED", "Diode", "Batterie"],
      correct: "Diode"
    },
    {
      question: "Was stellt dieses Symbol dar?",
      image: "LED.png",
      options: ["Leuchtdiode (LED)", "Diode", "Transistor", "Schalter"],
      correct: "Leuchtdiode (LED)"
    },
    {
      question: "Was zeigt dieses Symbol?",
      image: "Batterie.png",
      options: ["Widerstand", "Spannungsquelle (Batterie)", "Kondensator", "Spule"],
      correct: "Spannungsquelle (Batterie)"
    },
  {
      question: "Dieses Symbol beschreibt welches Element?",
      image: "Öffner.png",
      options: ["Öffner", "Schließer", "Abzweigung", "Sicherung"],
      correct: "Öffner"
    },
    {
      question: "Welches Schaltzeichen ist hier dargestellt?",
      image: "Sicherung.png",
      options: ["Sicherung", "Schalter", "Kondensator", "LED"],
      correct: "Sicherung"
    },

    {
      question: "Wofür steht dieses Symbol im Stromlaufplan?",
      image: "Erde.png",
      options: ["Erde / Masse", "Batterie", "Gleichrichter", "Transformator"],
      correct: "Erde / Masse"
    }

   ]
  },

  {
    id:"1_4",
    year: 1,
    name: "Elektronik Grundlagen 1",
    questions: [
      {
        question: "Was ist die Einheit des elektrischen Stroms?",
        options: ["Volt (V)", "Ampere (A)", "Ohm (Ω)", "Watt (W)"],
        correct: "Ampere (A)"
      },

      {
        question: "Welche Farbe hat der Schutzleiter nach VDE?",
        options: ["Blau", "Gelb-Grün", "Braun", "Schwarz"],
        correct: "Gelb-Grün"
      },
      {
        question: "Was versteht man unter Spannung in einem Stromkreis?",
        options: [
          "Die Menge an Elektronen",
          "Die treibende Kraft, die den Strom fließen lässt",
          "Der Widerstand des Materials",
          "Die Leistung in Watt"
        ],
        correct: "Die treibende Kraft, die den Strom fließen lässt"
      },
      {
        question: "Welche Bauteile speichern elektrische Energie?",
        options: ["Widerstände", "Kondensatoren", "Spulen", "Transistoren"],
        correct: "Kondensatoren"
      },
      {
        question: "Wie verhält sich der Strom in einer Reihenschaltung von Widerständen?",
        options: [
          "Er ist überall gleich",
          "Er teilt sich auf",
          "Er wird immer größer",
          "Er verschwindet"
        ],
        correct: "Er ist überall gleich"
      },
      {
        type: "text",
        question: "Erkläre den Unterschied zwischen Wechselstrom (AC) und Gleichstrom (DC).",
        correctKeywords: ["Richtung", "periodisch", "konstant"]
      },
      {
        type: "text",
        question: "Nenne zwei Schutzmaßnahmen gegen elektrischen Schlag in einem Stromkreis.",
        correctKeywords: ["Schutzerdung", "Schutzisolierung", "FI-Schutzschalter", "Schutztrennung"]
      },
      {
        question: "Welche Norm beschreibt die Sicherheit von Niederspannungsanlagen?",
        options: ["DIN VDE 0100", "DIN ISO 9001", "DIN EN 60204", "DIN VDE 0298"],
        correct: "DIN VDE 0100"
      },
      {
        question: "Was misst ein Multimeter?",
        options: ["Strom, Spannung, Widerstand", "Nur Spannung", "Nur Strom", "Nur Widerstand"],
        correct: "Strom, Spannung, Widerstand"
      },
      {
        type: "text",
        question: "Beschreibe, wie man den Gesamtwiderstand zweier parallel geschalteter Widerstände berechnet.",
        correctKeywords: ["1/R", "Summe", "Kehrwert", "Parallel"]
      }
    ]
  },

  {
    id:"1_5",
    year: 1,
    name: "Elektronik Grundlagen 2",
    questions: [
      { 
        question: "Was misst ein Multimeter?", 
        options: ["Strom", "Spannung", "Widerstand", "Alle genannten"], 
        correct: "Alle genannten" 
      },
      { 
        question: "Welche Farbe hat der Schutzleiter nach VDE?", 
        options: ["Blau", "Gelb-Grün", "Braun", "Schwarz"], 
        correct: "Gelb-Grün" 
      },
      { 
        type: "text", 
        question: "Erkläre kurz den Unterschied zwischen Wechselstrom und Gleichstrom.", 
        correctKeywords: ["Richtung", "periodisch", "konstant"]
      },
      { 
        question: "Welche Bauteile speichern elektrische Energie?", 
        options: ["Widerstände", "Kondensatoren", "Spulen", "Transistoren"], 
        correct: "Kondensatoren" 
      },
      { 
        type: "text", 
        question: "Nenne drei typische Sicherheitsmaßnahmen beim Arbeiten an elektrischen Anlagen.", 
        correctKeywords: ["FI", "Schutzerdung", "Isolierung"]
      }
    ]
  },

{
  id:"1_6",
  year: 1,
  name: "Elektronik Grundlagen 3",
  questions: [
    {
      question: "Welche Bauteile können als Strombegrenzer verwendet werden?",
      options: ["Widerstände", "Kondensatoren", "Dioden", "Relais"],
      correct: "Widerstände"
    },
    {
      question: "Was ist ein Kurzschluss?",
      options: ["Strom fließt nicht", "Strom nimmt einen ungewollten Weg", "Spannung steigt", "Widerstand sinkt"],
      correct: "Strom nimmt einen ungewollten Weg"
    },
    {
      question: "Welche Funktion hat eine Sicherung in einem Stromkreis?",
      options: ["Steuert den Stromfluss", "Unterbricht bei Überlast/Kurzschluss", "Erhöht die Spannung", "Speichert Energie"],
      correct: "Unterbricht bei Überlast/Kurzschluss"
    },
    {
      question: "Was beschreibt die elektrische Leitfähigkeit?",
      options: ["Wie gut ein Material Strom leitet", "Wie viel Spannung ein Material aushält", "Wie hoch der Widerstand ist", "Wie viel Energie gespeichert wird"],
      correct: "Wie gut ein Material Strom leitet"
    },
    {
      type: "text",
      question: "Erkläre den Unterschied zwischen Leiter, Halbleiter und Isolator.",
      correctKeywords: ["Leiter", "Halbleiter", "Isolator", "Stromfluss"]
    },
    {
      question: "Welches Messgerät wird verwendet, um die Spannung zwischen zwei Punkten zu messen?",
      options: ["Amperemeter", "Voltmeter", "Ohmmeter", "Multimeter"],
      correct: "Voltmeter"
    },
    {
      question: "Was zeigt das Symbol '⏚' in einer Schaltung?",
      options: ["Schutzleiter", "Nullleiter", "Schutzisoliert", "Außenleiter"],
      correct: "Schutzleiter"
    },
    {
      question: "Welche Sicherheitsmaßnahme muss vor Arbeiten an einer elektrischen Anlage immer durchgeführt werden?",
      options: ["Strom abschalten", "FI ausschalten", "Widerstände entfernen", "Spannung erhöhen"],
      correct: "Strom abschalten"
    },
    {
      question: "Was passiert, wenn ein Kondensator in Gleichstrom betrieben wird?",
      options: ["Lädt sich auf und sperrt dann Strom", "Leitet Strom konstant", "Kurzschluss", "Erhöht Spannung"],
      correct: "Lädt sich auf und sperrt dann Strom"
    },
    {
      type: "text",
      question: "Beschreibe kurz, wie man die Stromstärke in einem einfachen Stromkreis mit Widerstand berechnet.",
      correctKeywords: ["Ohmsches Gesetz", "I = U / R", "Strom", "Spannung", "Widerstand"]
    }
  ]
},

{id:"1_7",
  "year": 1,
  "name": "Energie, Leistung und Wirkungsgrad",
  "questions": [
    {
      "question": "Welche Einheit hat die elektrische Leistung?",
      "options": ["Joule (J)", "Watt (W)", "Ampere (A)", "Volt (V)"],
      "correct": "Watt (W)"
    },
    {
      "question": "Wie lautet die Formel für Leistung?",
      "options": ["P = U × I", "P = R / I", "P = I / U", "P = U + I"],
      "correct": "P = U × I"
    },
    {
      "question": "Was beschreibt der Wirkungsgrad?",
      "options": ["Verhältnis von Spannung zu Strom", "Verhältnis von abgegebener zu aufgenommener Leistung", "Verhältnis von Spannung zu Leistung", "Verhältnis von Widerstand zu Strom"],
      "correct": "Verhältnis von abgegebener zu aufgenommener Leistung"
    },
    {
      "type": "text",
      "question": "Nenne zwei Gründe, warum elektrische Energie in Wärme umgewandelt werden kann.",
      "correctKeywords": ["Widerstand", "Reibung", "Verluste", "I²R-Verluste"]
    },
    {
      "type": "text",
      "question": "Wie kann man den Wirkungsgrad einer Anlage verbessern?",
      "correctKeywords": ["Verluste reduzieren", "bessere Leitfähigkeit", "Isolation", "effiziente Geräte"]
    }
  ]
},


{
  id:"1_8",
  "year": 1,
  "name": "Werkstoffkunde und Leitermaterialien",
  "questions": [
    {
      "question": "Welches Material wird am häufigsten als elektrischer Leiter verwendet?",
      "options": ["Eisen", "Kupfer", "Aluminium", "Silber"],
      "correct": "Kupfer"
    },
    {
      "question": "Warum ist Kupfer ein guter Leiter?",
      "options": ["Hoher Widerstand", "Viele freie Elektronen", "Billig und leicht", "Magnetisch"],
      "correct": "Viele freie Elektronen"
    },
    {
      "question": "Was versteht man unter einem Isolator?",
      "options": ["Material mit geringem Widerstand", "Material mit hohem Widerstand", "Magnetisches Material", "Supraleiter"],
      "correct": "Material mit hohem Widerstand"
    },
    {
      "question": "Welches Material wird oft als Isolierung für Kabel verwendet?",
      "options": ["Kupfer", "PVC", "Aluminium", "Blei"],
      "correct": "PVC"
    },
    {
      "type": "text",
      "question": "Erkläre, warum Aluminium trotz höherem Widerstand oft in Stromleitungen verwendet wird.",
      "correctKeywords": ["leichter", "kostengünstig", "gute Leitfähigkeit", "Gewicht"]
    },
    {
      "type": "text",
      "question": "Was passiert mit dem Widerstand eines Leiters, wenn seine Temperatur steigt?",
      "correctKeywords": ["erhöht sich", "Temperaturabhängigkeit", "Elektronenbewegung"]
    }
  ]
},


{
  id:"1_9",
  "year": 1,
  "name": "Magnetismus und Induktion",
  "questions": [
    {
      "question": "Was entsteht, wenn Strom durch einen Leiter fließt?",
      "options": ["Wärme", "Magnetfeld", "Licht", "Spannung"],
      "correct": "Magnetfeld"
    },
    {
      "question": "Wie kann man die Magnetwirkung eines Leiters verstärken?",
      "options": ["Dünneren Leiter verwenden", "Stromrichtung ändern", "Leiter zu einer Spule wickeln", "Spannung senken"],
      "correct": "Leiter zu einer Spule wickeln"
    },
    {
      "question": "Was versteht man unter elektromagnetischer Induktion?",
      "options": ["Erwärmung durch Strom", "Entstehung einer Spannung durch Bewegung im Magnetfeld", "Spannungserhöhung", "Aufladung eines Kondensators"],
      "correct": "Entstehung einer Spannung durch Bewegung im Magnetfeld"
    },
    {
      "type": "text",
      "question": "Nenne zwei Anwendungen des Elektromagnetismus.",
      "correctKeywords": ["Relais", "Motor", "Lautsprecher", "Generator"]
    },
    {
      "type": "text",
      "question": "Erkläre kurz, was in einem Generator passiert.",
      "correctKeywords": ["Bewegung", "Magnetfeld", "Spannung", "Induktion"]
    }
  ]
},




  {
    id:"1_10",
    year: 1,
    name: "DIN-Vorschriften und DGUV Vorschrift 3",
    questions: [
      { 
        question: "Was regelt die DIN VDE 0100?",
        options: ["Elektromagnetische Verträglichkeit", "Prüfverfahren für medizinische Geräte", "Errichtung von Niederspannungsanlagen", "DIN-konforme Schilder für Baustellen"], 
        correct: "Errichtung von Niederspannungsanlagen" 
      },
      { 
        question: "Was bedeutet das Kürzel VDE?", 
        options: ["Verband Deutscher Elektriker", "Verband der Elektrotechnik, Elektronik und Informationstechnik", "Vereinigte Deutsche Energienetze", "Verband Deutscher Energieanlagen"], 
        correct: "Verband der Elektrotechnik, Elektronik und Informationstechnik" 
      },
      { 
        question: "Welche DIN-Norm gilt für Schutzmaßnahmen gegen elektrischen Schlag?", 
        options: ["DIN EN 60204-1", "DIN VDE 0105-100", "DIN VDE 0100-410", "DIN VDE 0298-4"], 
        correct: "DIN VDE 0100-410" 
      },
      { 
        question: "Wie oft muss ein elektrischer Betriebsmittel geprüft werden (nach VDE)?", 
        options: ["Alle 10 Jahre", "Nur vor der ersten Inbetriebnahme", "Nach Herstellerangabe oder regelmäßig", "Prüfung ist freiwillig"], 
        correct: "Nach Herstellerangabe oder regelmäßig" 
      },
      { 
        question: "Welche Norm betrifft das Arbeiten unter Spannung?", 
        options: ["DIN VDE 0701", "DIN VDE 0680", "DIN VDE 0105-100", "DIN VDE 0281"], 
        correct: "DIN VDE 0105-100" 
      }
    ]
  },

  {
    id:"1_11",
    name: "Zwischenprüfung Elektro 1. Lehrjahr",
    year: 1,
    questions: [
      // 🧠 Teil 1 – Theorie
       {"type": "text", question: "Unterschied Wechselstrom/Gleichstrom?", 
correctKeywords: ["Wechselstrom ändert Richtung", "Gleichstrom fließt konstant"] },
  {"type": "text", question: "Drei Schutzmaßnahmen nach VDE 0100?", 
correctKeywords: ["Schutzerdung", "Schutzisolierung", "Schutztrennung"] },
  {"type": "text", question: "Funktion eines FI-Schutzschalters?", 
correctKeywords: ["schaltet bei Differenzstrom ab"] },
  {"type": "text", question: "Bedeutung des Ohmschen Gesetzes?", 
correctKeywords: ["U = R * I"] },
  {"type": "text", question: "Was ist ein Stromkreis?", 
correctKeywords: ["Spannungsquelle", "Leiter", "Schalter", "Verbraucher"] },
  {"type": "text", question: "Leiterfarben L, N, PE?", 
correctKeywords: ["L = braun/schwarz", "N = blau", "PE = grün-gelb"] },
  {"type": "text", question: "Was ist der Unterschied zwischen Serie-.Parallelschaltung?", 
correctKeywords: ["Serie: gleicher Strom, Spannung teilt sich", "Parallel: gleiche Spannung, Strom teilt sich"] },
  {"type": "text", question: "Drei typische Verbraucher?", 
correctKeywords: ["Beleuchtung", "Steckdosen", "Rollladenmotoren"] },
  {"type": "text", question: "Aufgabe einer Sicherung?", 
correctKeywords: ["Schutz vor Überlast/Kurzschluss"] },
  {"type": "text", question: "Nennspannung eines Gerätes?",
 correctKeywords: ["Spannung, für die es gebaut ist"] },

      // 🔢 Teil 2 – Rechenaufgaben
     { type: "calc",

question: "Lampe 60W, 230V → Strom?", 
calcResult: ["0,26 A"] },
  {type: "calc",
 question: "Leitung 10A, 230V → Leistung?", 
calcResult: ["2300 W"] },
  {type: "calc",
 question: "Widerstand 100Ω, 24V → Strom?", 
calcResult: ["0,24 A"] },
  {type: "calc",
 question: "Heizung 2kW, 5h → Energie?", 
calcResult: ["10 kWh"] },
  { type: "calc",
question: "Leitung 50m, 0,5Ω, 10A → Spannungsfall?", 
calcResult: ["5 V"] }
    ]
  },
{
  id:"1_12",
  year: 1,
  name: "Elektronik Berechnungen 1",
  questions: [
    {type: "calc",

      question: "R1 = 12 Ω, R2 = 18 Ω in Reihe, Spannung U = 24 V → Gesamtstrom?",
      correctKeywords: ["1 A"]
    },
    {type: "calc",

      question: "R1 = 6 Ω, R2 = 12 Ω parallel, Spannung U = 12 V → Strom durch R2?",
      correctKeywords: ["1 A"]
    },
    {type: "calc",

      question: "Leistung P = 150 W, Spannung U = 230 V → Strom I?",
      answer: ["0,652 A"]
    },
    {type: "calc",

      question: "Ein Heizkörper hat 2 kW Leistung, Spannung 230 V → Stromaufnahme?",
      answer: ["8,7 A"]
    },
    {type: "calc",

      question: "Zwei Lampen in Reihe: R1 = 40 Ω, R2 = 60 Ω, U = 120 V → Spannung über R1?",
      answer: ["48 V"]
    },
    {type: "calc",

      question: "Drei Widerstände R1=10Ω, R2=20Ω, R3=30Ω parallel, U=60V → Gesamtstrom?",
      answer: ["9 A"]
    },
    {type: "calc",

      question: "R1=5Ω in Reihe mit R2=10Ω, U=15V → Gesamtstrom?",
      answer: ["1 A"]
    },
    {type: "calc",

      question: "Gesamtwiderstand zweier paralleler Widerstände R1=8Ω, R2=12Ω?",
      answer: ["4,8 Ω"]
    },
    {type: "calc",

      question: "Eine Lampe 100 W, 230 V → benötigter Strom?",
      answer: ["0,435 A"]
    },
    {
      type: "text",
      question: "Erkläre, wie sich der Gesamtwiderstand verändert, wenn man einen weiteren Widerstand parallel zu einem bestehenden Parallelzweig schaltet.",
      correctKeywords: ["sinkt", "Gesamtwiderstand", "Parallel", "mehr Wege"]
    }
  ]
},

{
  id:"1_13",
  year: 1,
  name: "Elektronik Berechnungen 2 – Mischschaltungen & Energie",
  questions: [
    {type: "calc",

      question: "R1=10Ω, R2=20Ω parallel → R3=15Ω in Reihe, Uges = 24V → Gesamtstrom?",
      correctKeywords: ["0,66 A"]
    },
    {type: "calc",

      question: "Gesamtspannung 230V, Strom in Reihe 5A → Gesamtwiderstand?",
      correctKeywords: ["46 Ω"]
    },
    {type: "calc",

      question: "Motor R=12Ω, U=230V → Stromaufnahme?",
      correctKeywords: ["19,17 A"]
    },
    {type: "calc",

      question: "Zwei Lampen in Reihe: R1=30Ω, R2=60Ω, Uges=90V → Spannung über R2?",
      correctKeywords: ["60 V"]
    },
    {type: "calc",

      question: "Drei Widerstände R1=10Ω, R2=20Ω, R3=30Ω parallel, U=120V → Ströme durch R1, R2, R3?",
      correctKeywords: ["R1: 12 A", "R2: 6 A", "R3: 4 A"]
    },
    {type: "calc",

      question: "Leitungslänge 50m, Widerstand 0,2Ω, Strom 10A → Spannungsabfall?",
      correctKeywords: ["2 V"]
    },
    {type: "calc",

      question: "Heizung 2 kW, Spannung 230V → Energieverbrauch in 3 Stunden?",
      correctKeywords: ["6 kWh"]
    },
    {type: "calc",

      question: "Mischschaltung: R1=10Ω in Reihe mit R2=20Ω // R3=30Ω, U=60V → Gesamtstrom?",
      correctKeywords: ["3 A"]
    },
    {type: "calc",

      question: "Parallelschaltung: R1=8Ω, R2=12Ω, R3=24Ω, U=48V → Strom durch R2?",
      correctKeywords: ["4 A"]
    },
    {
      type: "text",
      question: "Erkläre, warum Mischschaltungen in elektrischen Anlagen häufig verwendet werden.",
      correctKeywords: ["Kombination", "Serie", "Parallel", "Spannung", "Strom", "flexibel"]
    }
  ]
},

{
  id:"1_14",
  year: 1,
  name: "Zwischenprüfung 1. Lehrjahr – Elektroniker für Betriebstechnik",
  questions: [
    // 🔹 Theorie – Grundlagen
    {
      question: "Unterschied Gleichstrom (DC) / Wechselstrom (AC)?",
      type: "text",
      correctKeywords: ["Gleichstrom", "konstant", "Richtung", "Wechselstrom", "periodisch"]
    },
    {
      question: "Nenne drei typische Schutzmaßnahmen gegen elektrischen Schlag.",
      type: "text",
      correctKeywords: ["Schutzerdung", "FI-Schutzschalter", "Schutzisolierung", "Schutztrennung"]
    },
    {
      question: "Welche Farbe hat der Schutzleiter nach VDE?",
      options: ["Blau", "Gelb-Grün", "Braun", "Schwarz"],
      correct: "Gelb-Grün"
    },
    {
      question: "Was ist die Aufgabe eines FI-Schutzschalters?",
      options: ["Schaltet bei Differenzstrom ab", "Erhöht Spannung", "Speichert Energie", "Erhöht Stromstärke"],
      correct: "Schaltet bei Differenzstrom ab"
    },
    {
      question: "Welche DIN-Norm regelt die Errichtung von Niederspannungsanlagen?",
      options: ["DIN EN 60204", "DIN VDE 0100", "DIN ISO 9001", "DIN VDE 0298"],
      correct: "DIN VDE 0100"
    },
    
    // 🔹 Theorie – Bauteile
    {
      question: "Welche Bauteile speichern elektrische Energie?",
      options: ["Widerstände", "Kondensatoren", "Spulen", "Transistoren"],
      correct: "Kondensatoren"
    },
    {
      question: "Welche Bauteile können als Strombegrenzer eingesetzt werden?",
      options: ["Widerstände", "Kondensatoren", "Dioden", "Relais"],
      correct: "Widerstände"
    },
    {
      question: "Was ist ein Kurzschluss?",
      options: ["Strom fließt nicht", "Strom nimmt ungewollten Weg", "Spannung steigt", "Widerstand sinkt"],
      correct: "Strom nimmt ungewollten Weg"
    },
    
    // 🔹 Berechnungen – Widerstände & Strom
    {type: "calc",

      question: "R1=12Ω, R2=18Ω in Reihe, U=24V → Gesamtstrom?",
      correctKeywords: ["1 A"]
    },
    {type: "calc",

      question: "R1=6Ω, R2=12Ω parallel, U=12V → Strom durch R2?",
      correctKeywords: ["1 A"]
    },
    {type: "calc",

      question: "Drei Widerstände R1=10Ω, R2=20Ω, R3=30Ω parallel, U=120V → Ströme durch R1, R2, R3?",
      correctKeywords: ["R1: 12 A", "R2: 6 A", "R3: 4 A"]
    },
    {type: "calc",

      question: "Leitungslänge 50m, Widerstand 0,2Ω, Strom 10A → Spannungsabfall?",
      correctKeywords: ["2 V"]
    },
    {type: "calc",

      question: "Heizung 2kW, Spannung 230V → Energieverbrauch in 3 Stunden?",
      correctKeywords: ["6 kWh"]
    },
    
    // 🔹 Berechnungen – Mischschaltungen
    {type: "calc",

      question: "R1=10Ω, R2=20Ω parallel → R3=15Ω in Reihe, Uges=24V → Gesamtstrom?",
      correctKeywords: ["0,66 A"]
    },
    {type: "calc",

      question: "Parallelschaltung: R1=8Ω, R2=12Ω, R3=24Ω, U=48V → Strom durch R2?",
      correctKeywords: ["4 A"]
    },
    {type: "calc",

      question: "Mischschaltung: R1=5Ω in Reihe mit R2=10Ω // R3=10Ω, U=24V → Gesamtstrom?",
      correctKeywords: ["2,4 A"]
    },
    {
      type: "text",
      question: "Erkläre, warum Mischschaltungen in elektrischen Anlagen häufig verwendet werden.",
      correctKeywords: ["Kombination", "Serie", "Parallel", "Spannung", "Strom", "flexibel"]
    },

    // 🔹 Berechnungen – Leistung
    {type: "calc",

      question: "Leistung P=150W, Spannung U=230V → Strom I?",
      correctKeywords: ["0,652 A"]
    },
    {type: "calc",

      question: "Motor R=12Ω, U=230V → Stromaufnahme?",
      correctKeywords: ["19,17 A"]
    },
    {type: "calc",

      question: "Zwei Lampen in Reihe: R1=30Ω, R2=60Ω, Uges=90V → Spannung über R2?",
      correctKeywords: ["60 V"]
    }
  ]
},
{
  id:"1_15",
  year: 1,
  name: "Zwischenprüfung 1. Lehrjahr – Sicherheit & Normen",
  questions: [
    {
      type: "text",
      question: "Nenne drei persönliche Schutzausrüstungen (PSA) beim Arbeiten an elektrischen Anlagen.",
      correctKeywords: ["Schutzhelm", "Schutzhandschuhe", "Schutzbrille", "Sicherheitsschuhe"]
    },
    {
      type: "text",
      question: "Welche Sicherheitsmaßnahme muss vor dem Arbeiten an einer elektrischen Anlage immer durchgeführt werden?",
      correctKeywords: ["Strom abschalten", "FI prüfen", "Freischalten", "Sichern"]
    },
    {
      type: "text",
      question: "Erkläre kurz, wozu ein FI-Schutzschalter dient.",
      correctKeywords: ["Differenzstrom", "schaltet ab", "Verhinderung Stromschlag"]
    },
    {
      type: "text",
      question: "Welche DIN-VDE-Norm regelt die Errichtung von Niederspannungsanlagen?",
      correctKeywords: ["DIN VDE 0100"]
    },
    {
      type: "text",
      question: "Was versteht man unter Schutzerdung und warum ist sie wichtig?",
      correctKeywords: ["Schutzleiter", "Ableitung Fehlerstrom", "Verhinderung Stromschlag"]
    },
    {
      type: "text",
      question: "Nenne zwei typische Gefahrenquellen beim Arbeiten an elektrischen Anlagen.",
      correctKeywords: ["Stromschlag", "Kurzschluss", "Überlast", "Brand"]
    },
    {
      type: "text",
      question: "Was bedeutet DGUV Vorschrift 3 und wann wird sie angewendet?",
      correctKeywords: ["Prüfung elektrischer Anlagen", "Sicherheitsvorschrift", "Arbeitsmittel"]
    },
    {
      type: "text",
      question: "Welche Schutzmaßnahmen sind notwendig, wenn unter Spannung gearbeitet werden muss?",
      correctKeywords: ["Isolierung", "Abstand halten", "Persönliche Schutzausrüstung", "Freischalten nicht möglich"]
    },
    {
      type: "text",
      question: "Welche Farbe hat der Neutralleiter nach VDE?",
      correctKeywords: ["Blau"]
    },
    {
      type: "text",
      question: "Warum sind Warn- und Hinweisschilder an elektrischen Anlagen wichtig?",
      correctKeywords: ["Gefahr", "Warnung", "Aufmerksamkeit", "Sicherheit"]
    }
  ]
},


 {
  id:"1_16",
    name: "Gemischten Schaltung",
    year: 1,
    questions: [
     { type: "calc",

question: "R1=10Ω, R2=20Ω parallel, R3=15Ω in Reihe → Gesamtwiderstand?", 
correctKeywords: ["21,67 Ω"] },
  { type: "calc",

question: "Gesamtspannung 12V, Strom 2A → Gesamtwiderstand?", 
correctKeywords: ["6 Ω"] },
  { type: "calc",

question: "Zwei Lampen parallel, 230V, 60W + 100W → Ströme?", 
correctKeywords: ["0,26 A", "0,43 A"] },
  {type: "calc",

 question: "Parallelschaltung: weiteren Widerstand hinzufügen → Gesamtwiderstand?", 
correctKeywords: ["sinkt"] },
  { type: "calc",

question: "R1=5Ω in Reihe mit R2=10Ω // R3=10Ω, U=24V → Gesamtstrom?", 
correctKeywords: ["2,4 A"] },
  { type: "calc",

question: "Warum Parallelschaltung in Haushalten?", 
correctKeywords: ["Geräte unabhängig"] },
  { type: "calc",

question: "R1=30Ω, R2=60Ω, R3=40Ω parallel → Gesamtwiderstand?", 
correctKeywords: ["54 Ω"] },
  {type: "calc",

 question: "R1=8Ω, R2=12Ω, R3=24Ω parallel, U=48V → Strom durch R1?",
 correctKeywords: ["3 A"] },
  {type: "calc",

 question: "Motor 12Ω, Lampe 6Ω parallel, U=24V → Gesamtstrom?", 
correctKeywords: ["6 A"] }
    ]
  },
  /////////////////////////////////////////////////////////////////////////////2. Lehrjahr //////////////////////////////////////////////////////////////////////////
  {
    id:"2_3",
    year: 2,
    name: "Aufbauwissen Elektronik",
    questions: [
      {
        question: "Welche Spannung liegt typischerweise in einem Einphasen-Wechselstromnetz an?",
        options: ["230 V", "12 V", "400 V", "24 V"],
        correct: "230 V"
      },
      {
        question: "Welche Funktion hat ein Transistor?",
        options: ["Energie speichern", "Elektrischen Strom verstärken oder schalten", "Spannung messen", "Widerstand ändern"],
        correct: "Elektrischen Strom verstärken oder schalten"
      },
      {
        question: "Was ist die Einheit des Widerstands?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        correct: "Ohm"
      },
      {
        type: "text",
        question: "Erkläre, wie ein Spannungsteiler funktioniert.",
        correctKeywords: ["Widerstand", "Spannung teilen", "Reihenschaltung", "Proportional"]
      }
    ]
  },
{
  id:"2_4",
  year: 2,
  name: "Messtechnik & Bauelemente",
  questions: [
    { question: "Welche Einheit hat die elektrische Kapazität?", 
      options: ["Ohm", "Farad", "Henry", "Ampere"], 
      correct: "Farad",
 explanation: "  C = Q / U" 

    },
    { question: "Was misst ein Oszilloskop?", 
      options: ["Spannung über Zeit", "Stromstärke", "Widerstand", "Leistung"], 
      correct: "Spannung über Zeit" 
    },
    { type: "text", 
      question: "Erkläre den Unterschied zwischen Serienschaltung und Parallelschaltung.", 
      correctKeywords: ["Strom", "Spannung", "gleich", "geteilt"]
    },
    { question: "Welches Bauteil erzeugt eine Spannung, die abhängig von der Frequenz variiert?", 
      options: ["Transformator", "Frequenzumrichter", "Kondensator", "Diode"], 
      correct: "Frequenzumrichter",
 

    },
    { type: "text", 
      question: "Nenne zwei typische Fehlerquellen beim Messen von Spannung und Strom.", 
      correctKeywords: ["Messfehler", "Kontaktproblem", "Falsche Polarität"]
    }
  ]
},

{
  id:"2_5",
  year: 2,
  name: "Elektronik Bauelemente",
  questions: [
    { 
      question: "Was macht ein Transistor?", 
      options: ["Schaltet Strom", "Speichert Energie", "Erhöht Spannung", "Misst Strom"], 
      correct: "Schaltet Strom",
      explanation: "Ein Transistor ist ein elektronisches Bauelement, das Strom verstärken oder schalten kann." 
    },
    { question: "Welche Farbe hat ein Widerstand mit 470 Ω?", 
      options: ["Gelb-Violett-Braun", "Gelb-Violett-Schwarz", "Braun-Schwarz-Orange", "Rot-Violett-Braun"], 
      correct: "Gelb-Violett-Braun",
	explanation: "Kondensatoren speichern elektrische Energie in einem elektrischen Feld und geben sie wieder ab."
   
    },
    { type: "text", 
      question: "Erkläre die Funktionsweise eines Kondensators in einem Wechselstromkreis.", 
      correctKeywords: ["Lädt", "entlädt", "Strom", "Spannung", "Phasenverschiebung"],
 

    },
    { question: "Welche Einheit hat der Blindwiderstand?", 
      options: ["Ohm", "Farad", "Henry", "Ampere"], 
      correct: "Ohm" 
    },
    { type: "text", 
      question: "Nenne zwei Anwendungsgebiete für Spulen in der Elektronik.", 
      correctKeywords: ["Filter", "Transformator", "Drossel"]
    }
  ]
},


{id:"2_6",
  year: 2,
  name: "Messtechnik Praxis",
  questions: [
    { question: "Welches Gerät misst die Netzfrequenz?", 
      options: ["Multimeter", "Frequenzmesser", "Oszilloskop", "Voltmeter"], 
      correct: "Frequenzmesser" 
    },
    { question: "Was ist ein Oszilloskop?", 
      options: ["Ein Strommesser", "Ein Spannungsmesser über Zeit", "Ein Widerstandsmesser", "Ein Leistungsmesser"], 
      correct: "Ein Spannungsmesser über Zeit" 
    },
    { type: "text", 
      question: "Erkläre kurz den Unterschied zwischen serieller und paralleler Messung von Strom.", 
      correctKeywords: ["Stromkreis", "gleich", "geteilt", "Reihenschaltung", "Parallelschaltung"]
    },
    { question: "Welche Gefahr besteht bei falscher Erdung?", 
      options: ["Kurzschluss", "Schlaggefahr", "Überlastung", "Keine Gefahr"], 
      correct: "Schlaggefahr" 
    },
    { type: "text", 
      question: "Beschreibe, wie du einen Widerstand korrekt mit einem Multimeter misst.", 
      correctKeywords: ["Messspitzen", "Widerstand", "Abklemmen", "Messbereich"]
    }
  ]
},

{id:"2_7",
year: 2,
  name: "Kondensatoren im Wechselstromkreis",
  questions: [
    {
      question: "Wie verhält sich der Strom in einem idealen Kondensator zum Spannungsverlauf?",
      options: [
        "Er ist gleichphasig zur Spannung",
        "Er eilt der Spannung um 90° voraus",
        "Er hinkt der Spannung um 90° hinterher",
        "Er ist immer konstant"
      ],
      correct: "Er eilt der Spannung um 90° voraus",
explanation: "Denke daran: In einem Kondensator speichert die Spannung Energie im elektrischen Feld. Überlege, wann der Strom am größten ist, wenn die Spannung ansteigt oder fällt – das gibt dir einen Hinweis auf das Phasenverhältnis."
    },
    {
      question: "Wie lautet die Formel für den Blindwiderstand eines Kondensators?",
      options: [
        "X_C = 2πfC",
        "X_C = 1 / (2πfC)",
        "X_C = R × C",
        "X_C = f × C"
      ],
      correct: "X_C = 1 / (2πfC)"
    },
    {
      question: "Was passiert mit dem Blindwiderstand X_C, wenn die Frequenz steigt?",
      options: [
        "Er bleibt gleich",
        "Er wird größer",
        "Er wird kleiner",
        "Er hängt nur von der Spannung ab"
      ],
      correct: "Er wird kleiner"
    },
    {
      question: "Was passiert mit dem Strom in einem Kondensator, wenn die Kapazität verdoppelt wird?",
      options: [
        "Er halbiert sich",
        "Er bleibt gleich",
        "Er verdoppelt sich",
        "Er wird null"
      ],
      correct: "Er verdoppelt sich"
    },
    {
      question: "Welche Spannung liegt an einem Kondensator an, wenn er vollständig geladen ist (im Gleichstrom)?",
      options: [
        "0 V",
        "Gleich der Versorgungsspannung",
        "Abhängig von der Kapazität",
        "Unendlich groß"
      ],
      correct: "Gleich der Versorgungsspannung"
    },
    {
      question: "Wie lautet die Formel für die Scheinleistung in einem reinen Wechselstromkreis mit Kondensator?",
      options: [
        "S = U × I",
        "P = U × I × cos φ",
        "Q = U × I × sin φ",
        "R = U / I"
      ],
      correct: "S = U × I"
    },
    {
      question: "Wie verhalten sich Spannung und Strom bei einem idealen Kondensator zueinander?",
      options: [
        "Spannung eilt dem Strom voraus",
        "Strom eilt der Spannung voraus",
        "Beide sind gleichphasig",
        "Sie sind um 180° phasenverschoben"
      ],
      correct: "Strom eilt der Spannung voraus"
    },
    {
      question: "Wie nennt man die Energie, die im Kondensator gespeichert wird?",
      options: [
        "Induktive Energie",
        "Elektrische Feldenergie",
        "Magnetische Energie",
        "Mechanische Energie"
      ],
      correct: "Elektrische Feldenergie"
    },
    {
      question: "Welche Formel beschreibt die Energie im Kondensator?",
      options: [
        "E = ½ C × U²",
        "E = C × U",
        "E = R × I²",
        "E = L × I²"
      ],
      correct: "E = ½ C × U²"
    },
    {
      question: "Was passiert bei Reihenschaltung von Kondensatoren mit der Gesamtkapazität?",
      options: [
        "Sie wird größer als der größte Einzelwert",
        "Sie wird kleiner als der kleinste Einzelwert",
        "Sie bleibt gleich",
        "Sie verdoppelt sich"
      ],
      correct: "Sie wird kleiner als der kleinste Einzelwert"
    },
    {
      question: "Was passiert bei Parallelschaltung von Kondensatoren?",
      options: [
        "Die Gesamtkapazität wird kleiner",
        "Die Gesamtkapazität ist die Summe aller Einzelkapazitäten",
        "Die Spannung teilt sich auf",
        "Der Gesamtstrom wird kleiner"
      ],
      correct: "Die Gesamtkapazität ist die Summe aller Einzelkapazitäten"
    },
    {
      question: "Welche Wirkung hat ein Kondensator in einem Wechselstromkreis?",
      options: [
        "Er wirkt kapazitiv",
        "Er wirkt induktiv",
        "Er wirkt resistiv",
        "Er hat keine Wirkung"
      ],
      correct: "Er wirkt kapazitiv"
    },
    {
      question: "Welche Größe ist bei einem Kondensator frequenzabhängig?",
      options: [
        "Kapazität C",
        "Blindwiderstand X_C",
        "Spannung U",
        "Ladung Q"
      ],
      correct: "Blindwiderstand X_C"
    },
    {
      question: "Was passiert bei einer zu hohen Wechselspannung am Kondensator?",
      options: [
        "Er lädt sich stärker, bleibt aber intakt",
        "Er kann durchschlagen oder zerstört werden",
        "Er wird induktiv",
        "Seine Kapazität steigt dauerhaft"
      ],
      correct: "Er kann durchschlagen oder zerstört werden"
    }
  ]
},

{id:"2_8",
  year: 2,
  name: "Zwischenprüfung 2. Lehrjahr – Elektroniker für Betriebstechnik",
  questions: [
    // 🔹 Theorie – Grundlagen Maschinen & Schaltungen
    {
      question: "Was ist der Unterschied zwischen einem Asynchron- und Synchronmotor?",
      type: "text",
      correctKeywords: ["Asynchronmotor", "Drehfeld", "Schlupf", "Synchronmotor", "gleichschnell"]
    },
    {
      question: "Welche Funktion hat ein Schütz in einer Steuerung?",
      type: "text",
      correctKeywords: ["Schalten", "Fernsteuerung", "Motor", "Last"]
    },
    {
      question: "Was ist ein Transformator und wozu wird er eingesetzt?",
      type: "text",
      correctKeywords: ["Spannung umwandeln", "Strom anpassen", "Primär", "Sekundär", "Magnetfeld"]
    },
    {
      question: "Welche Schutzart hat ein Gerät mit IP54?",
      options: ["Staubdicht, Spritzwasser geschützt", "Vollständig staubdicht", "Nur Tropfwasserschutz", "Keine Schutzart"],
      correct: "Staubdicht, Spritzwasser geschützt"
    },

    // 🔹 Theorie – Sicherheitsnormen & Vorschriften
    {
      question: "Welche Norm regelt die Prüfung von ortsveränderlichen elektrischen Betriebsmitteln?",
      options: ["DIN VDE 0100", "DIN VDE 0701-0702", "DIN EN 60204", "DIN ISO 9001"],
      correct: "DIN VDE 0701-0702"
    },
    {
      type: "text",
      question: "Nenne drei typische Sicherheitsmaßnahmen bei Arbeiten an elektrischen Maschinen.",
      correctKeywords: ["Freischalten", "Sichern gegen Wiedereinschalten", "Abschirmung", "Persönliche Schutzausrüstung"]
    },
    {
      question: "Was bedeutet der Begriff 'Dreieck-Schaltung' bei Drehstrommotoren?",
      type: "text",
      correctKeywords: ["Motor", "Drehstrom", "Spannung", "Leistung", "Anschluss"]
    },
    {
      question: "Wofür wird ein Motorschutzschalter eingesetzt?",
      options: ["Steuerung ein- und ausschalten", "Überlast- und Kurzschlussschutz", "Spannung messen", "Drehzahl erhöhen"],
      correct: "Überlast- und Kurzschlussschutz"
    },

    // 🔹 Berechnungen – Drehstrom & Leistung
    {type: "calc",

      question: "Drehstrom: U = 400V, I = 10A, cos φ = 0,8 → Wirkleistung P?",
      correctKeywords: ["P = 3,2 kW"]
    },
    {type: "calc",

      question: "Drehstrommotor Sternschaltung: U = 400V, I = 8A, cos φ = 0,85 → Wirkleistung?",
      correctKeywords: ["P ≈ 8,16 kW"]
    },
    {type: "calc",

      question: "Transformator Primär 230V, Sekundär 115V, Primärstrom 2A → Sekundärstrom?",
      correctKeywords: ["4 A"]
    },
    {

      question: "Motor R = 12Ω, U = 230V → Stromaufnahme?",
type: "calc",
      correctKeywords: ["19,17 A"]
    },
    {type: "calc",

      question: "Leitung 30m, Widerstand 0,1Ω, Strom 15A → Spannungsabfall?",
      correctKeywords: ["3 V"]
    },

    // 🔹 Berechnungen – Mischschaltungen
    {type: "calc",

      question: "R1=10Ω, R2=20Ω parallel → R3=15Ω in Reihe, Uges=36V → Gesamtstrom?",
      correctKeywords: ["1,2 A"]
    },
    {type: "calc",

      question: "R1=5Ω in Reihe mit R2=10Ω // R3=15Ω, U=24V → Strom durch R2?",
      correctKeywords: ["1,6 A"]
    },
    {type: "calc",

      question: "Zwei Widerstände R1=12Ω, R2=8Ω parallel, U=24V → Ströme durch R1 und R2?",
      correctKeywords: ["R1: 2 A", "R2: 3 A"]
    },
    {
      type: "text",
      question: "Erkläre den Vorteil einer Stern-/Dreieck-Umschaltung bei Drehstrommotoren.",
      correctKeywords: ["Anlaufstrom", "Reduzierung", "Drehmoment", "Motorstart"]
    },

    // 🔹 Bauteile & Sensorik
    {
      question: "Welches Bauteil wandelt mechanische Bewegung in ein elektrisches Signal um?",
      options: ["Relais", "Sensor", "Motor", "Kondensator"],
      correct: "Sensor"
    },
    {
      question: "Welches Bauteil schaltet elektrische Lasten fern?",
      options: ["Schütz", "Widerstand", "Kondensator", "Diode"],
      correct: "Schütz"
    },
    {
      type: "text",
      question: "Nenne zwei Arten von Endschaltern in der Automatisierungstechnik.",
      correctKeywords: ["mechanisch", "nähe", "optisch", "magnetisch"]
    }
  ]
},

{id:"2_9",
  year: 2,
  name: "Elektronik Berechnungen & Steuerungen",
  questions: [
    // 🔹 Berechnungen – Drehstrom & Leistung
    {
	type: "calc",

      question: "Drehstrom: U = 400V, I = 15A, cos φ = 0,9 → Wirkleistung P?",
      calcResult: ["P ≈ 15,7 kW"]
    },
    {type: "calc",

      question: "Drehstrommotor Sternschaltung: U = 400V, I = 10A, cos φ = 0,85 → Wirkleistung?",
      calcResult: ["P ≈ 8,82 kW"]
    },
    {type: "calc",

      question: "Drehstrommotor Dreieck: U = 400V, I = 10A, cos φ = 0,85 → Wirkleistung?",
      calcResult: ["P ≈ 11,7 kW"]
    },
    {type: "calc",

      question: "Motor 3-phasig, P = 5 kW, U = 400V, cos φ = 0,8 → Stromaufnahme?",
      calcResult: ["I ≈ 9,0 A"]
    },
    {type: "calc",

      question: "Leistung P = 2 kW, Spannung U = 230V, cos φ = 0,9 → Strom?",
      calcResult: ["I ≈ 9,65 A"]
    },

    // 🔹 Berechnungen – Transformator
    {type: "calc",

      question: "Transformator Primär 230V, Sekundär 115V, Primärstrom 4A → Sekundärstrom?",
      calcResult: ["8 A"]
    },
    {type: "calc",

      question: "Transformator: Primärspannung 400V, Sekundärspannung 230V, Primärstrom 5A → Sekundärstrom?",
      calcResult: ["8,7 A"]
    },
    {type: "calc",

      question: "Transformator: P = 2 kVA, Usec = 115V → Sekundärstrom?",
      calcResult: ["I ≈ 17,4 A"]
    },

    // 🔹 Mischschaltungen & Spannungsteiler
    {

      question: "R1=10Ω, R2=20Ω in Reihe, Uges=30V → Spannung über R2?",
type: "calc",
      calcResult: ["20 V"]
    },
    {

      question: "R1=15Ω, R2=15Ω parallel → Gesamtwiderstand?",
type: "calc",
      calcResult: ["7,5 Ω"]
    },
    {
type: "calc",
      question: "Spannungsteiler: R1=10Ω, R2=20Ω, Uges=30V → Spannung über R1?",
      calcResult: ["10 V"]
    },
    {
type: "calc",
      question: "Mischschaltung: R1=10Ω, R2=20Ω parallel → R3=30Ω in Reihe, Uges=60V → Gesamtstrom?",
      calcResult: ["1,5 A"]
    },

    // 🔹 Sensor-/Aktor-Schaltungen
    {
      question: "Ein NTC-Widerstand wird eingesetzt, um:",
      options: ["Spannung zu stabilisieren", "Temperatur zu messen", "Strom zu begrenzen", "Motor zu steuern"],
      correct: "Temperatur zu messen"
    },
    {
      question: "Ein Schütz schaltet eine Lampe fern. Welche Art von Signal wird meist zur Ansteuerung verwendet?",
      options: ["Niederspannungssteuerung", "Hochspannungsversorgung", "Gleichstrom direkt", "Mechanische Bewegung"],
      correct: "Niederspannungssteuerung"
    },
    {
      type: "text",
      question: "Nenne zwei Arten von Sensoren, die in der Automatisierung häufig verwendet werden.",
      correctKeywords: ["Temperatur", "Druck", "Nähe", "Licht", "Magnetisch"]
    },
    {
      type: "text",
      question: "Erkläre kurz, wie ein Motorschutzschalter in Verbindung mit einem Schütz arbeitet.",
      correctKeywords: ["Überlast", "Kurzschluss", "Schütz", "Schaltet ab", "Schutz"]
    },

    // 🔹 Praxis – Steuerung & Schutz
    {
      question: "Warum wird bei Motoren häufig ein Sanftanlauf (Softstarter) verwendet?",
      options: ["Vermeidung hoher Anlaufströme", "Erhöhung der Spannung", "Reduzierung der Leistung", "Steigerung der Drehzahl"],
      correct: "Vermeidung hoher Anlaufströme"
    },
    {
      question: "Welche Schutzmaßnahmen sind beim Arbeiten an einem Drehstrommotor unbedingt einzuhalten?",
      type: "text",
      correctKeywords: ["Freischalten", "Sichern gegen Wiedereinschalten", "PSA", "FI-Schutz"]
    },
    {
      type: "text",
      question: "Erkläre, warum Sensoren und Aktoren in der Automatisierung getrennt von der Lastversorgung betrieben werden.",
      correctKeywords: ["Sicher", "Steuerkreis", "Trennung", "Schutz", "Stabilität"]
    }
  ]
},



  /////////////////////////////// 3. Lehrjahr ///////////////////////////////
  {id:"3_3",
    year: 3,
    name: "Frequenzumrichter",
    questions: [
      { 
        question: "Wozu dient ein Frequenzumrichter?", 
        options: ["Strom speichern", "Netzspannung erhöhen", "Drehzahl von Motoren variabel steuern", "Spannung gleichrichten"], 
        correct: "Drehzahl von Motoren variabel steuern" 
      },
      { 
        question: "Was wandelt der Frequenzumrichter zuerst um?", 
        options: ["DC zu AC", "AC zu DC", "Drehstrom zu Wechselstrom", "Frequenz zu Spannung"], 
        correct: "AC zu DC" 
      }
    ]
  },
{
  year: 3,
  name: "Frequenzumrichter & Motorsteuerung",
  questions: [
    { question: "Welche Steuerung ermöglicht variable Drehzahlen?", 
      options: ["Frequenzumrichter", "Transformator", "Kondensator", "Diode"], 
      correct: "Frequenzumrichter" 
    },
    { question: "Was bewirkt ein PWM-Signal?", 
      options: ["Dreht Motor schneller", "Regelt Spannung", "Dreht Motor und Regelt Leistung", "Speichert Energie"], 
      correct: "Dreht Motor und Regelt Leistung" 
    },
    { type: "text", 
      question: "Erkläre die Schutzfunktionen eines Frequenzumrichters.", 
      correctKeywords: ["Überlast", "Übertemperatur", "Kurzschluss", "Schutz"]
    },
    { question: "Welche Spannung liefert der Ausgang eines Frequenzumrichters typischerweise?", 
      options: ["230 V AC", "DC Spannung", "Frequenzvariable AC Spannung", "10 kV AC"], 
      correct: "Frequenzvariable AC Spannung" 
    },
    { type: "text", 
      question: "Wie gehst du vor, wenn ein Motor bei Inbetriebnahme ungewöhnliche Vibrationen zeigt?", 
      correctKeywords: ["Abschalten", "Prüfen", "Frequenz", "Anschlüsse"]
    }
  ]
},

{id:"3_4",
  year: 3,
  name: "Drehstrom & Motoren",
  questions: [
    { 
      question: "Welche Eigenschaft hat ein Drehstrommotor gegenüber einem Einphasenmotor?", 
      options: ["Höherer Wirkungsgrad", "Geringere Spannung", "Nur Wechselstrombetrieb", "Benötigt keine Sicherung"], 
      correct: "Höherer Wirkungsgrad" 
    },
    { 
      question: "Wie werden die Wicklungen eines Drehstrommotors bei Sternschaltung verbunden?", 
      options: ["Alle Enden zusammen", "Alle Anfänge zusammen", "In Reihe geschaltet", "Parallelschaltung"], 
      correct: "Alle Enden zusammen" 
    },
    { 
      question: "Wozu dient der Kondensator bei einem Einphasen-Asynchronmotor?", 
      options: ["Startunterstützung", "Spannungserhöhung", "Motor bremsen", "Frequenzumwandlung"], 
      correct: "Startunterstützung" 
    },
    { type: "text", 
      question: "Wie prüfst du die Drehrichtung eines Motors vor dem Anlauf?", 
      correctKeywords: ["Drehrichtung", "Kurzzeitlauf", "Motoranschluss", "Prüfung"]
    },
    { type: "text", 
      question: "Erkläre den Unterschied zwischen Asynchron- und Synchronmotor.", 
      correctKeywords: ["Rotor", "Synchronisation", "Drehzahl", "Feld"]
    }
  ]
},

{id:"3_5",
  year: 3,
  name: "Schutztechnik & Sicherheit",
  questions: [
    { 
      question: "Welche Maßnahme schützt Anlagen vor Überstrom?", 
      options: ["FI-Schalter", "Leitungsschutzschalter", "Transformator", "Kondensator"], 
      correct: "Leitungsschutzschalter" 
    },
    { 
      question: "Was passiert, wenn ein FI-Schalter auslöst?", 
      options: ["Stromkreis wird unterbrochen", "Spannung steigt", "Motor dreht rückwärts", "Leitung wird kurzgeschlossen"], 
      correct: "Stromkreis wird unterbrochen" 
    },
    { type: "text", 
      question: "Beschreibe die Schritte zur sicheren Freischaltung einer Anlage nach VDE.", 
      correctKeywords: ["Trennen", "Sichern", "Spannungsfreiheit", "Prüfen"]
    },
    { type: "text", 
      question: "Welche persönliche Schutzausrüstung ist bei Arbeiten an Anlagen erforderlich?", 
      correctKeywords: ["Handschuhe", "Schutzbrille", "PSA", "Sicherheitsschuhe"]
    },
    { 
      question: "Welche Leiterfarbe zeigt nach VDE den Schutzleiter an?", 
      options: ["Gelb-Grün", "Blau", "Braun", "Schwarz"], 
      correct: "Gelb-Grün" 
    }
  ]
},

{id:"3_6",
  year: 3,
  name: "Messtechnik & Messgeräte",
  questions: [
    { 
      question: "Welche Messgröße wird mit einem Amperemeter erfasst?", 
      options: ["Spannung", "Strom", "Widerstand", "Leistung"], 
      correct: "Strom" 
    },
    { 
      question: "Wie misst man Spannung richtig?", 
      options: ["Parallel zum Verbraucher", "In Reihe zum Verbraucher", "An Erde anschließen", "Direkt an Sicherung"], 
      correct: "Parallel zum Verbraucher" 
    },
    { 
      question: "Was zeigt ein Multimeter bei Widerstandsmessung an?", 
      options: ["Ω", "A", "V", "W"], 
      correct: "Ω" 
    },
    { type: "text", 
      question: "Welche Fehlerquellen können Messungen verfälschen?", 
      correctKeywords: ["Kontaktfehler", "Messbereich", "lose Klemmen", "Spannung"]
    },
    { type: "text", 
      question: "Wie gehst du vor, um Messgeräte vor der Benutzung zu prüfen?", 
      correctKeywords: ["Sichtprüfung", "Batterie prüfen", "Messleitungen", "Funktionsprüfung"]
    }
  ]
},

{id:"3_7",
  year: 3,
  name: "Leistungsarten & Energie",
  questions: [
    { 
      question: "Welche Leistung wird tatsächlich in Arbeit oder Wärme umgesetzt?", 
      options: ["Wirkleistung", "Blindleistung", "Scheinleistung", "Leistungsfaktor"], 
      correct: "Wirkleistung" 
    },
    { 
      question: "Was ist die Einheit der Scheinleistung?", 
      options: ["VA", "W", "Var", "A"], 
      correct: "VA" 
    },
    { 
      question: "Wie berechnet sich die Blindleistung Q bei gegebener Wirkleistung P und Scheinleistung S?", 
      options: ["Q = √(S² − P²)", "Q = P × S", "Q = S − P", "Q = P / S"], 
      correct: "Q = √(S² − P²)" 
    },
    { type: "text", 
      question: "Erkläre den Unterschied zwischen Wirkleistung, Blindleistung und Scheinleistung.", 
      correctKeywords: ["Wirkleistung", "Blindleistung", "Scheinleistung", "Phasenwinkel"]
    },
    { type: "text", 
      question: "Wie kann Blindleistung im Netz reduziert werden?", 
      correctKeywords: ["Kondensator", "Blindleistungskompensation", "Netzbelastung", "Leistungsfaktor"]
    }
  ]
},


{id:"3_8",
  year: 3,
  name: "Schutztechnik & Sicherheitsmaßnahmen",
  questions: [
    { question: "Welche Schutzeinrichtung schützt vor Fehlerströmen?", 
      options: ["Sicherung", "FI-Schalter", "Leitungsschutzschalter", "Transformator"], 
      correct: "FI-Schalter" 
    },
    { question: "Welche Farbe hat der Neutralleiter nach VDE?", 
      options: ["Blau", "Gelb-Grün", "Braun", "Schwarz"], 
      correct: "Blau" 
    },
    { type: "text", 
      question: "Beschreibe die Funktion einer Not-Aus-Schaltung an einer Maschine.", 
      correctKeywords: ["Stromkreis", "unterbrechen", "Sicherheit", "Not-Aus"]
    },
    { question: "Welcher Parameter wird bei einem Frequenzumrichter nicht direkt beeinflusst?", 
      options: ["Frequenz", "Spannung", "Stromaufnahme", "Motorbaugröße"], 
      correct: "Motorbaugröße" 
    },
    { type: "text", 
      question: "Erkläre, wie du eine elektrische Anlage vor Inbetriebnahme überprüfst.", 
      correctKeywords: ["Sichtprüfung", "Messung", "Schutzleiter", "FI"]
    }
  ]
},

{id:"3_9",
  year: 3,
  name: "Frequenzumrichter & Schutztechnik",
  questions: [
    { question: "Wofür dient ein Frequenzumrichter?", 
      options: ["Strom speichern", "Drehzahl von Motoren variabel steuern", "Spannung gleichrichten", "Signalverstärkung"], 
      correct: "Drehzahl von Motoren variabel steuern" 
    },
    { question: "Welche Schutzmaßnahme verhindert Personenschäden bei Fehlerströmen?", 
      options: ["Sicherung", "FI-Schalter", "Transformator", "Diode"], 
      correct: "FI-Schalter" 
    },
    { type: "text", 
      question: "Beschreibe die Funktion einer Not-Aus-Schaltung in einer Maschine.", 
      correctKeywords: ["Stromkreis", "unterbrechen", "Sicherheit"]
    },
    { question: "Welche Spannung liefert ein Frequenzumrichter im Ausgang typischerweise?", 
      options: ["Immer 230 V", "Gleichspannung", "Frequenzvariable Wechselspannung", "Starkstrom 10 kV"], 
      correct: "Frequenzvariable Wechselspannung" 
    },
    { type: "text", 
      question: "Welche Maßnahmen ergreifst du bei einem gemeldeten Erdschluss in einer Anlage?", 
      correctKeywords: ["Prüfung", "Sicherung", "Abschalten", "Fehlerbehebung"]
    }
  ]
},

{id:"3_10",
  year: 3,
  name: "Motoranlauf & Steuerungen",
  questions: [
    { 
      question: "Welche Anlaufart reduziert den Anlaufstrom bei Asynchronmotoren?", 
      options: ["Direktanlauf", "Stern-Dreieck-Anlauf", "Frequenzumrichteranlauf", "Kondensatoranlauf"], 
      correct: "Stern-Dreieck-Anlauf" 
    },
    { 
      question: "Welche Vorteile bietet der Anlauf über einen Frequenzumrichter?", 
      options: ["Geringerer Strom, sanfter Start, variable Drehzahl", "Nur geringer Strom", "Schneller Start", "Spannungserhöhung"], 
      correct: "Geringerer Strom, sanfter Start, variable Drehzahl" 
    },
    { type: "text", 
      question: "Erkläre, warum ein Motor beim Direktanlauf hohen Strom zieht.", 
      correctKeywords: ["Widerstand", "Drehmoment", "Stromspitze", "Motor"]
    },
    { type: "text", 
      question: "Wie steuerst du die Drehzahl eines Motors mit Frequenzumrichter?", 
      correctKeywords: ["Frequenz", "Spannung", "PWM", "Drehzahl"]
    },
    { 
      question: "Welche Bauform wird häufig bei Drehstrommotoren für Industrieanwendungen verwendet?", 
      options: ["Kurzschlussläufer", "Schleifringläufer", "Permanentmagnet", "Gleichstrommotor"], 
      correct: "Kurzschlussläufer" 
    }
  ]
},

{id:"3_11",
  year: 3,
  name: "Frequenzumrichter Erweiterte Funktionen",
  questions: [
    { 
      question: "Was ermöglicht ein Bremseinrichtung beim Frequenzumrichter?", 
      options: ["Rückspeisung der Energie", "Erhöhung der Spannung", "Motorbeschleunigung", "Spannungsregelung"], 
      correct: "Rückspeisung der Energie" 
    },
    { 
      question: "Welche Schutzfunktion schützt den Motor vor Überhitzung?", 
      options: ["Überlast", "Übertemperatur", "Kurzschluss", "Unterspannung"], 
      correct: "Übertemperatur" 
    },
    { type: "text", 
      question: "Erkläre, was passiert, wenn ein Frequenzumrichter durch Überlast abschaltet.", 
      correctKeywords: ["Motor", "Strom", "Schutz", "Abschalten"]
    },
    { type: "text", 
      question: "Welche Parameter musst du einstellen, bevor du einen Frequenzumrichter in Betrieb nimmst?", 
      correctKeywords: ["Motordaten", "Frequenz", "Spannung", "Schutz"]
    },
    { 
      question: "Wie verhält sich die Ausgangsspannung eines Frequenzumrichters bei Drehzahländerung?", 
      options: ["Variabel zur Frequenz", "Immer konstant 230 V", "Nur AC zu DC", "Unverändert"], 
      correct: "Variabel zur Frequenz" 
    }
  ]
},

{id:"3_12",
  year: 3,
  name: "Sensorik & Steuerungen",
  questions: [
    { 
      question: "Welche Sensoren werden häufig zur Drehzahlmessung eingesetzt?", 
      options: ["Hallsensor, Encoder, Induktiver Sensor", "Thermoelement, Widerstand", "Diode, Kondensator", "Relais"], 
      correct: "Hallsensor, Encoder, Induktiver Sensor" 
    },
    { 
      question: "Was liefert ein Temperatursensor typischerweise als Ausgangssignal?", 
      options: ["Spannung oder Strom proportional zur Temperatur", "Frequenz", "PWM", "Drehmoment"], 
      correct: "Spannung oder Strom proportional zur Temperatur" 
    },
    { type: "text", 
      question: "Erkläre, wie ein Endschalter in einer Steuerung verwendet wird.", 
      correctKeywords: ["Schaltpunkt", "Signal", "Ansteuerung", "Sicherheit"]
    },
    { type: "text", 
      question: "Wie werden Sensoren bei einer Maschinensteuerung korrekt verdrahtet?", 
      correctKeywords: ["Stromversorgung", "Signal", "Masse", "Schutz"]
    },
    { 
      question: "Welche Steuerung ermöglicht die automatische Regelung einer Drehzahl?", 
      options: ["PID-Regler", "Frequenzumrichter", "Kondensator", "Relais"], 
      correct: "PID-Regler" 
    }
  ]
},

{id:"3_13",
  year: 3,
  name: "Leistungselektronik & Netztechnik",
  questions: [
    { 
      question: "Welche Baugruppe wandelt Gleichspannung in Wechselspannung?", 
      options: ["Inverter", "Gleichrichter", "Transformator", "Kondensator"], 
      correct: "Inverter" 
    },
    { 
      question: "Was ist die Hauptfunktion eines Gleichrichters?", 
      options: ["AC zu DC", "DC zu AC", "Spannung erhöhen", "Strom messen"], 
      correct: "AC zu DC" 
    },
    { type: "text", 
      question: "Beschreibe die Funktion eines Trenntransformators in einer Anlage.", 
      correctKeywords: ["Isolation", "Sicherheit", "Spannung", "Schutz"]
    },
    { type: "text", 
      question: "Welche Maßnahmen ergreifst du, um Netzrückwirkungen zu vermeiden?", 
      correctKeywords: ["Filter", "Drossel", "Kondensator", "EMV"]
    },
    { 
      question: "Welche Netzform wird typischerweise für industrielle Motoren eingesetzt?", 
      options: ["Drehstrom 400 V", "Einphasen 230 V", "DC 24 V", "Batteriebetrieb"], 
      correct: "Drehstrom 400 V" 
    }
  ]
},

{id:"3_14",
  year: 3,
  name: "Sicherheitsmaßnahmen & Arbeitsschutz",
  questions: [
    { 
      question: "Welche Maßnahme verhindert elektrische Schläge bei indirektem Kontakt?", 
      options: ["Schutzerdung", "Kurzschluss", "Überlast", "Drehrichtungsprüfung"], 
      correct: "Schutzerdung" 
    },
    { 
      question: "Welche Farben kennzeichnen nach VDE den Außenleiter?", 
      options: ["Braun, Schwarz, Grau", "Blau", "Gelb-Grün", "Rot, Blau, Gelb"], 
      correct: "Braun, Schwarz, Grau" 
    },
    { type: "text", 
      question: "Erkläre die Schritte der sicheren Anlagenfreischaltung vor Wartungsarbeiten.", 
      correctKeywords: ["Trennen", "Sichern", "Spannungsfreiheit", "Prüfen"]
    },
    { type: "text", 
      question: "Welche persönlichen Schutzmaßnahmen ergreifst du bei Arbeiten an Maschinen mit elektrischer Steuerung?", 
      correctKeywords: ["Handschuhe", "Schutzbrille", "PSA", "Sicherheitsschuhe"]
    },
    { 
      question: "Welche Schutzeinrichtung unterbricht den Stromkreis bei Überstrom?", 
      options: ["Leitungsschutzschalter", "FI-Schalter", "Transformator", "Kondensator"], 
      correct: "Leitungsschutzschalter" 
    }
  ]
},



];

