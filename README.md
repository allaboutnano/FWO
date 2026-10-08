# FWO

Quelloffene Werkzeuge zum Buch **„Sei wie Wasser"** (BUCH-FWO): fünf Pfeiler für ein freies Geldsystem,
eine freie Presse, Volksversammlungen, Basisdemokratie und Ressourcengerechtigkeit (ghaSPI).

> Status: Grundlage. Lauffähig ist bisher nur der **ghaSPI-Rechenkern** (`ghaspi/`).
> Alles andere ist Spezifikation in Arbeit.

| Ordner | Inhalt | Stand |
|---|---|---|
| `ghaspi/` | Rechenmodell, Datenbasis mit Quellen, Tests gegen Anhang D | läuft |
| `demokratie/` | Verfahren der Basisdemokratie (Liquid Delegation, Konsensieren, Machtgrenze) | Spezifikation |
| `volksid/` | offener Ausweis, gehört den Bürgern | Spezifikation |
| `datensafe/` | verschlüsselte, nutzerkontrollierte Ablage | Spezifikation |
| `docs/` | Anleitung, Architektur, offene Fragen, Entscheidungen (ADRs) | |

## Schnellstart

```bash
npm install
npm test          # prüft das Modell gegen die Zahlen aus Anhang D
npm run typecheck
```

**Wo anfangen?** → [`docs/ANLEITUNG.md`](docs/ANLEITUNG.md)

## Grundsätze

- Nichts Wichtiges hängt nur an einem Anbieter. Git ist dezentral; es gibt Spiegel (siehe ADR 0001).
- Keine personenbezogenen Daten, Seeds oder Schlüssel im Repo.
- Entscheidungen, die das Buch der Basisdemokratie vorbehält (z. B. GOV, SPI-Sätze), stehen nicht im Code, sondern in `ghaspi/params/`.
- Lücken bleiben sichtbar: lieber „offen" als eine geschätzte Zahl.
