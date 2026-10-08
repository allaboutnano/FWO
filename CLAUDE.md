# CLAUDE.md – Arbeitsanweisung für Claude Code

Projekt: FWO – Werkzeuge zum Buch „Sei wie Wasser" (BUCH-FWO v41). Sprache der Doku: Deutsch. Code und Bezeichner: Deutsch für Fachbegriffe aus dem Buch (Anteil, Verbrauchsfaktor), sonst Englisch ist ok; bleib im Stil der Umgebung.

## Befehle
- `npm test` – Vitest (muss grün sein vor jedem Commit)
- `npm run typecheck` – tsc

## Regeln
1. **Zahlen gehören dem Buch.** Werte in `ghaspi/data/laender.csv` nur mit Quelle (`ghaspi/data/QUELLEN.md`) ändern. Lücken (z. B. GOV Afghanistan) bleiben leer, nie schätzen.
2. **Entscheidungen der Basisdemokratie nicht hartkodieren.** GOV und SPI-Sätze liegen in `ghaspi/params/` als Parameter mit Beschluss-Referenz.
3. **Formeln sind reine Funktionen** in `ghaspi/src/model.ts`, jede mit Kapitelverweis und Test gegen eine Buchzahl.
4. **Keine personenbezogenen Daten, Seeds, Schlüssel** im Repo. Datensafe/VolksID: Spezifikation und Code ja, Daten nie.
5. **Abstimmungen laufen nicht über GitHub** (Konten sind beliebig erstellbar). GitHub ist nur Host für Code und Spezifikation.
6. Offene Punkte aus dem Buch („Noch offen") bleiben offen und gehören in `docs/OFFENE-FRAGEN.md`, nicht stillschweigend gelöst.
7. Wichtige Architekturentscheidungen als ADR in `docs/adr/` festhalten.

## Nächste Schritte (Reihenfolge)
Siehe `docs/ANLEITUNG.md`, Abschnitt „Roadmap".
