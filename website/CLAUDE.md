# CLAUDE.md – website/ (Bauauftrag für Claude Code in der Cloud)

Gilt für den Ordner `website/` im bestehenden Repo `allaboutnano/FWO` (privat). Das Repo-Wurzel-`CLAUDE.md` gilt zusätzlich.

## Ziel
Die Internetseiten von Johannes (Hosting Bitpalast) „frisch machen“ – als statische Seiten im Repo, ohne WordPress. Basisdemokratie ist ein **Unterbereich von FWO** (`freieweltordnung.de/basisdemokratie/`), keine eigene Domain-Seite mehr.

## Ordner
| Ordner | Inhalt | Auftrag |
|---|---|---|
| `fwo/` | `inhalt-alt/` = Texte der Live-Seite freieweltordnung.de (WordPress-Export 21.10.2026) | Statischen Neubau in `fwo/site/` erzeugen: Start, Status quo, Ursachen, Lösungen, 5 Pfeiler, Impressum, Datenschutz. Seitenbaum: `090-AUSGABE/FWO-Website/2026-10-21_PLAN-FWO-Ueberarbeitung_v1.md` Abschnitt 3.2 (Johannes legt ihn dem Repo bei). |
| `basisdemokratie/` | `inhalt-alt/` = provisorische Seite basisdemokratischepartei.de | Als Unterseite von FWO neu schreiben (Pfeiler 4 Basisdemokratie / Volksversammlung). Alter Text ist Rohstoff, nicht Vorgabe. |
| `fahamu-archiv/` | Baukasten-Seite „Fahamu NGO“ (nur HTML) | **Nicht weiterentwickeln.** Nur Vorlage für eine Ruheseite ohne Spendenaufruf (die NGO ist nicht angemeldet). |

## Regeln (hart)
1. **Nichts einspielen.** Kein Deployment, kein Zugriff auf Bitpalast/Plesk, kein SSH. Ausgeliefert wird später von Johannes' Hauptsitzung.
2. **Ein Pull Request je Website-Bereich** (`fwo`, `basisdemokratie`, `fahamu-ruheseite`). Kein Merge ohne Johannes.
3. **Keine Geheimnisse** im Repo: keine Passwörter, Schlüssel, `wp-config.php`, Salts, API-Schlüssel, Wallet-Seeds. Die alte Seite enthielt einen öffentlich eingebetteten NOWPayments-Schlüssel – nicht übernehmen.
4. **Rote Liste:** NOWPayments, walletnow.app/NOW Wallet nirgends verlinken oder einbetten (Entscheidung Johannes 17.10.).
5. **E-Mail nie im Klartext** (kein `mailto:` mit Adresse im HTML; Kontaktformular-Link oder per JavaScript zusammengesetzt).
6. **Spendenadresse** `nano_1iafhemp…` nicht übernehmen, bis Johannes sie bestätigt. Als Platzhalter `{{SPENDENADRESSE-OFFEN}}`.
7. **Texte:** deutsch, Sie-Form für Leser (außer Johannes schreibt in der Quelle bewusst anders), direkt, kurz, kein KI-Ton, nicht gendern, nie „Shikamoo“, nie unterwürfig. Sinn der Quelltexte nicht verändern; Fehler korrigieren: „Das 5 Konzept“ (Wort fehlt – Frage an Johannes statt raten), „18 Jahre Recherche“ → „20 Jahre (seit 2006)“, „Hello world!“ löschen.
8. **Nie als Firma auftreten.** Impressum/Absender: Johannes als Privatperson bzw. Initiative; keine erfundenen Rechtsformen.
9. **Pflichtangaben prüfen und als offene Punkte melden (nicht erfinden):** Impressum (DDG §5 statt TMG, MStV §18; ladungsfähige Anschrift – der Altbestand nennt nur „c/o Poststelle FWO“), Datenschutzerklärung (kein Zähldienst, kein Google-Analytics, keine externen Schriften; `page-stats.de` entfernen), Cookie-Hinweis nur falls Cookies gesetzt werden. Keine Rechtsberatung vortäuschen; Liste „offene Rechtsfragen“ in der PR-Beschreibung.
10. **Technik:** reines HTML/CSS, kein Build-Zwang, kein CDN, keine externen Schriften; mobil zuerst (390 px) und Desktop (1280 px); Sprungmarken und mitlaufendes Menü auf langen Seiten (nur CSS `position: sticky`). Bilder < 5 MB, mit Alt-Text.
11. **Zwei Fehlversuche → Stopp** und Ursache in der PR beschreiben. „Unbekannt“ ist erlaubt, Raten nicht.
12. **Prüfzeile** in jeder PR: `Geprüft: Quelle = inhalt-alt/<datei> | offene Fragen: …`.

## Ablauf je PR
1. Branch `website/<bereich>`; 2. bauen; 3. Screenshots 390/1280 anhängen; 4. Linkprüfung (intern, extern); 5. PR mit Liste: was geändert, was entfernt, was offen.
