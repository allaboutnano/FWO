# demokratie – Verfahren der Basisdemokratie (Spezifikation, Buch Kap. 6 und 7)

Noch kein Code. Zu spezifizieren:

- **Zustände eines Vorschlags:** Vorschlag (Problem · Lösung · Weg) → Diskussion → Bewertung (Konsensieren) → Beratung (Expertenrat) → Abstimmung
- **Drei Abstimmungen in fester Reihenfolge:** (1) Frage und Fachleute, (2) Vorschläge, (3) Ergebnis. Bei jeder: selbst stimmen oder für genau diesen Schritt delegieren.
- **Delegation:** themenweise, je Abstimmung neu, jederzeit ohne Begründung widerrufbar.
- **Machtgrenze:** Obergrenze übertragener Stimmen je Person, abhängig von der Zahl der Abstimmenden; bei Erreichen nimmt die Person keine weiteren an.
- **Konsensieren:** jede Variante 0–10 Widerstandspunkte, kleinste Summe gewinnt.
- **Expertenrat:** entsteht durch Delegation, berät, entscheidet nicht.
- **Offen:** Mindestbeteiligung, Fristen, genaue Obergrenze (siehe `docs/OFFENE-FRAGEN.md`).

Erste Implementierung: reine Funktionen (Delegationsgraph auflösen, Machtgrenze erzwingen, Konsensieren auswerten), mit Tests.
