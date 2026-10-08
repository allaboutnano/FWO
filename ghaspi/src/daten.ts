import { readFileSync } from "node:fs";

export interface Land {
  land: string;
  iso: string;
  biokapazitaetGha: number;
  /** null = bewusst offen (keine Schätzung) */
  gov: number | null;
  fussabdruckGha: number;
  entnahmeT: number;
  verbrauchT: number;
  hinweis: string;
}

const num = (s: string): number | null => (s.trim() === "" ? null : Number(s));

/** Liest data/laender.csv. Bewusst ohne Abhängigkeiten; die Datei enthält keine Anführungszeichen oder Kommas in Werten. */
export function ladeLaender(pfad: string): Land[] {
  const [kopf, ...zeilen] = readFileSync(pfad, "utf8").trim().split(/\r?\n/);
  const spalten = kopf.split(",");
  return zeilen.map((z) => {
    const w = z.split(",");
    const r = Object.fromEntries(spalten.map((s, i) => [s, w[i] ?? ""]));
    return {
      land: r.land,
      iso: r.iso,
      biokapazitaetGha: num(r.biokapazitaet_gha)!,
      gov: num(r.gov),
      fussabdruckGha: num(r.fussabdruck_gha)!,
      entnahmeT: num(r.entnahme_t)!,
      verbrauchT: num(r.verbrauch_t)!,
      hinweis: r.hinweis,
    };
  });
}
