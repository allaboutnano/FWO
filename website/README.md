# website/ – Bitpalast-Seiten (Stand 23.10.2026)

Vorbereitet aus der Vollsicherung vom 23.10.2026. Nur Texte und Quelldateien; WordPress-Kern, Themes (alles Standard „Twenty…“), Fremd-Plugins, `wp-config.php`, Uploads, Caches und Datenbanken sind bewusst **nicht** enthalten (siehe `.gitignore`).

Vorschlag Struktur im Repo `allaboutnano/FWO` (neben `ghaspi/`, `docs/`, `demokratie/`, `volksid/`):

```
website/
  CLAUDE.md
  fwo/                 (freieweltordnung.de)
    inhalt-alt/        Texte der alten Seite (Rohstoff)
    site/              Ziel: statischer Neubau
  basisdemokratie/     (Unterbereich: freieweltordnung.de/basisdemokratie/)
    inhalt-alt/
    site/
  fahamu-archiv/       nur Ruheseite-Vorlage
```
