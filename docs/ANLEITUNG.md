# Anleitung: FWO aufsetzen und weiterbauen

## 1. Neues Repo FWO anlegen

Dieser Ordner ist in sich geschlossen und kann als eigenes Repo verwendet werden.

```bash
# im Ordner FWO/
git init -b main
git add . && git commit -m "Grundlage FWO"
# auf github.com: neues Repo "FWO" anlegen (leer, ohne README), dann:
git remote add origin git@github.com:<DEIN-NAME>/FWO.git
git push -u origin main
```

**Spiegel einrichten (empfohlen, siehe ADR 0001):** zweites Remote bei Codeberg oder einer eigenen Forgejo-Instanz.

```bash
git remote add codeberg git@codeberg.org:<NAME>/FWO.git
git push codeberg main
```

## 2. Mit Claude Code weiterarbeiten

1. Repo klonen, im Ordner `claude` starten. `CLAUDE.md` wird automatisch gelesen.
2. Buch als Kontext: die .docx **nicht** ungeprüft veröffentlichen. Lokal als Markdown in `docs/buch/` ablegen und erst nach deiner Freigabe committen (Urheberrecht, Namen, Zahlen).
3. Pro Aufgabe ein Branch und ein Pull Request, klein halten: „ein Kapitel, eine Formel, ein Test".

Beispiel-Prompts:
- „Lies Kapitel 8 und Anhang D im Buch. Ergänze in `ghaspi/` den Rechner für 8.6 (Verteilung nach Dezilen) mit Test gegen die Tabelle."
- „Schreibe `demokratie/SPEC.md` aus Kapitel 7 als formale Beschreibung der Zustände eines Vorschlags."
- „Implementiere die Machtgrenze (Delegationsobergrenze) als reine Funktion mit Property-Tests."

## 3. Roadmap

| # | Schritt | Ergebnis | Ordner |
|---|---|---|---|
| 1 | Grundlage | Repo, Doku, ghaSPI-Kern mit Tests | erledigt |
| 2 | ghaSPI ausbauen | Verteilung (8.6), Wert eines gha, Rohstoff-Rückfluss, Szenarien | `ghaspi/` |
| 3 | ghaSPI-Rechner | statische Webseite (GitHub Pages / Codeberg Pages), nur Rechnung im Browser | `ghaspi/web/` |
| 4 | Verfahrenskern | Zustände Vorschlag → Diskussion → Konsensieren → Expertenrat → Abstimmung; Delegation themenweise, widerrufbar, mit Machtgrenze; Konsensieren (0–10, kleinste Summe) | `demokratie/` |
| 5 | Protokoll | Append-only, signiertes, hashverkettetes Ereignisprotokoll; jeder kann nachzählen | `demokratie/` |
| 6 | VolksID-Spezifikation | Anforderungen, Bedrohungsmodell, Standards (DID, Verifiable Credentials, Zero-Knowledge) | `volksid/` |
| 7 | Datensafe-Spezifikation | Ende-zu-Ende-Verschlüsselung, Schlüssel nur beim Nutzer | `datensafe/` |
| 8 | App | Oberfläche auf dem Verfahrenskern; Nano nur für Zahlungen | neu: `app/` |
| 9 | Pilot | zwei bis zehn reale Menschen entscheiden etwas Echtes (Buch Kap. 7.7) | |

Schritte 2–5 brauchen keine Identitätslösung und sind sofort machbar. Schritt 6 ist der schwierigste und blockiert alles ab einer öffentlichen Abstimmung.

## 4. Arbeitsprozess auf GitHub

- **Vorschlag** = Issue mit Vorlage *Problem · Lösung · Weg* (`.github/ISSUE_TEMPLATE/vorschlag.md`).
- **Diskussion** = GitHub Discussions (im Repo aktivieren: Settings → Features).
- **Änderung** = Pull Request, CI (`npm test`) muss grün sein.
- **Verbindliche Abstimmungen** passieren nicht hier, sondern im Verfahren aus `demokratie/` mit VolksID. Bis dahin entscheidet ein kleiner, benannter Kreis (steht in `GOVERNANCE.md`, noch zu schreiben).

## 5. Vor dem ersten Push entscheiden

- [ ] **Lizenz** für Code (z. B. AGPL-3.0: Fortentwicklungen bleiben offen; MIT: Dritte dürfen es schließen) und für Texte (z. B. CC BY-SA 4.0). Eine `LICENSE`-Datei fehlt absichtlich.
- [ ] Repo **öffentlich oder privat**? Öffentlich passt zum Buch, aber erst nach Prüfung des Inhalts.
- [ ] Wer sind die ersten Maintainer (`CODEOWNERS`)?
