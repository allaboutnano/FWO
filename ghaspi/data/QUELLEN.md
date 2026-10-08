# Quellen der Datenbasis

Übernommen aus BUCH-FWO v41, Anhang D. Jede Zahl muss auf diese Quellen zurückführbar bleiben.

| Spalte | Quelle | Datenjahr |
|---|---|---|
| `biokapazitaet_gha`, `fussabdruck_gha` | Global Footprint Network, National Footprint and Biocapacity Accounts, 2025 Edition | 2022 |
| `gov` | abgeleitet aus Staatsausgaben (Gesundheit, Bildung), Weltbank | 2022 |
| `entnahme_t`, `verbrauch_t` | UNEP International Resource Panel, Global Material Flows Database (t je Einwohner und Jahr) | 2019 |

## Regeln
- Lücken bleiben leer. Keine geschätzten Werte eintragen (Buch: „dann steht dort keine Zahl statt einer geschätzten").
- GOV ist eine **Näherung** und eine Entscheidung der Basisdemokratie, keine Naturgröße.
- Tonnen messen nicht Zerstörung (Anhang D.3). Die Materialbilanz zeigt nur die Richtung des Flusses.
- Änderungen an dieser Datei nur per Pull Request mit Quellenangabe.
