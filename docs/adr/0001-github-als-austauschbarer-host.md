# ADR 0001: GitHub nur als austauschbarer Host

**Status:** angenommen

**Kontext:** GitHub ist zentralisiert (Konten und Repos können gesperrt werden). Das Buch verlangt, dass nichts abgeschaltet oder gekauft werden kann. Zugleich bringt GitHub Reichweite und Werkzeuge.

**Entscheidung:** Code, Spezifikation und Daten liegen in Git und werden auf GitHub gehostet **und** auf mindestens einen zweiten Host gespiegelt. Verbindliche Abstimmungen laufen nie über GitHub (beliebig erstellbare Konten). Keine Daten von Personen im Repo.

**Folgen:** Kein Feature, das nur auf GitHub existiert, darf kritisch werden (z. B. Actions-only-Prozesse ohne lokale Entsprechung).
