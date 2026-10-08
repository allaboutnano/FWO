/**
 * ghaSPI-Rechenkern. Formeln aus BUCH-FWO v41, Kapitel 8.
 * Reine Funktionen, keine Seiteneffekte, damit sie testbar und nachrechenbar bleiben.
 */

/** Anteil je Einwohner = Biokapazität pro Kopf × (1 − GOV)   [gha] (Kap. 8.2) */
export function anteilJeEinwohner(biokapazitaetGha: number, gov: number): number {
  if (gov < 0 || gov > 1) throw new RangeError("GOV muss zwischen 0 und 1 liegen");
  return biokapazitaetGha * (1 - gov);
}

/** Wie oft der Verbrauch den Anteil übersteigt (Kap. 8.4). > 1: zahlt drauf. */
export function verbrauchsfaktor(fussabdruckGha: number, anteilGha: number): number {
  return fussabdruckGha / anteilGha;
}

/** Wert eines gha = SPI-Aufkommen des Jahres ÷ verbrauchte gha des Jahres (Kap. 8.3) */
export function wertProGha(spiAufkommen: number, verbrauchteGha: number): number {
  if (verbrauchteGha <= 0) throw new RangeError("verbrauchteGha muss > 0 sein");
  return spiAufkommen / verbrauchteGha;
}

/**
 * Saldo einer Person: Anteil ausgezahlt minus Aufschlag auf den eigenen Verbrauch,
 * jeweils in gha, mit dem Wert eines gha bewertet. > 0: bekommt heraus (Kap. 8.6).
 */
export function saldo(anteilGha: number, verbrauchGha: number, wertGha: number): number {
  return (anteilGha - verbrauchGha) * wertGha;
}

/** Materialbilanz je Einwohner [t]: > 0 heißt, das Land gibt mehr ab, als es selbst verbraucht (Anh. D.2). */
export function materialDifferenz(entnahmeT: number, verbrauchT: number): number {
  return entnahmeT - verbrauchT;
}
