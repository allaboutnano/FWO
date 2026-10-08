# ADR 0002: Abstimmungsprotokoll außerhalb von Nano

**Status:** Entwurf, Entscheidung offen

**Kontext:** Nano ist ein Zahlungsmittel ohne Smart Contracts. Eine „DAO" im Kontraktsinn ist dort nicht möglich.

**Optionen:**
1. Eigenes append-only Ereignisprotokoll (signierte, hashverkettete Einträge), Nano nur für Zahlungen.
2. Bestehendes quelloffenes System anpassen (Liquid Feedback, Consul, TrueRepublic – im Buch genannt).
3. Eigene oder bestehende Smart-Contract-Chain für die Zählung.

**Vorläufig:** Zuerst Verfahrenskern als Bibliothek (Option-unabhängig), Protokollwahl nach Schritt 4 der Roadmap.
