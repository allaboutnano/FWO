# Architektur (Entwurf)

```
Mensch ── VolksID (Nachweis: berechtigt, einmal gezählt, ohne Namen)
   │            │
   │        Datensafe (Schlüssel, Credentials – nur auf Nutzergeräten)
   ▼
 App ──► Verfahrenskern (demokratie/) ──► Ereignisprotokoll (append-only, signiert, nachzählbar)
   │                                              ▲
   └─► Zahlungen: Nano (nur Zahlungen)            │ Parameter-Beschlüsse
                                                  ▼
                              ghaSPI (ghaspi/): Rechenkern + params/ (GOV, SPI-Sätze)
```

## Prinzipien
- **Kern ohne Netz.** Verfahrenskern und ghaSPI sind reine Bibliotheken ohne Infrastruktur und damit testbar.
- **Kein Zentrum.** Es gibt kompatible Strukturen, keinen Betreiber, dem man glauben muss (Buch Kap. 7.5).
- **Nano hat keine Smart Contracts.** Das Protokoll liegt daher außerhalb von Nano (siehe ADR 0002).
- **Parameter ≠ Code.** Was das Buch der Basisdemokratie vorbehält, ist versionierte Konfiguration mit Beschluss-Referenz.
