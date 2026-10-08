import { describe, expect, it } from "vitest";
import { fileURLToPath } from "node:url";
import { ladeLaender } from "../src/daten";
import { anteilJeEinwohner, materialDifferenz, verbrauchsfaktor, wertProGha, saldo } from "../src/model";

const laender = ladeLaender(fileURLToPath(new URL("../data/laender.csv", import.meta.url)));
const get = (iso: string) => laender.find((l) => l.iso === iso)!;

// Erwartete Werte: BUCH-FWO v41, Anhang D.1 und D.2
const anteilD1: Record<string, number> = { BRA: 6.24, USA: 2.39, HUN: 2.06, DEU: 1.1, TZA: 0.62, SOM: 0.56 };
const diffD2: Record<string, number> = { BRA: 4.56, TZA: 2.18, SOM: -0.2, AFG: -0.39, HUN: -0.96, USA: -5.83, DEU: -7.34 };

describe("Anhang D.1: Anteil je Einwohner", () => {
  for (const [iso, erwartet] of Object.entries(anteilD1)) {
    it(`${iso} = ${erwartet} gha`, () => {
      const l = get(iso);
      expect(anteilJeEinwohner(l.biokapazitaetGha, l.gov!)).toBeCloseTo(erwartet, 2);
    });
  }
  it("Afghanistan: GOV bleibt offen, es wird nichts geschätzt", () => {
    expect(get("AFG").gov).toBeNull();
  });
});

describe("Kapitel 8.4: Verbrauch gegenüber Anteil", () => {
  it("Deutschland verbraucht rund das 3,5-fache seines Anteils", () => {
    const l = get("DEU");
    expect(verbrauchsfaktor(l.fussabdruckGha, anteilJeEinwohner(l.biokapazitaetGha, l.gov!))).toBeCloseTo(3.43, 1);
  });
  it("Brasilien verbraucht weniger als die Hälfte seines Anteils", () => {
    const l = get("BRA");
    expect(verbrauchsfaktor(l.fussabdruckGha, anteilJeEinwohner(l.biokapazitaetGha, l.gov!))).toBeLessThan(0.5);
  });
});

describe("Anhang D.2: Materialdifferenz [t]", () => {
  for (const [iso, erwartet] of Object.entries(diffD2)) {
    it(`${iso} = ${erwartet} t`, () => {
      const l = get(iso);
      expect(materialDifferenz(l.entnahmeT, l.verbrauchT)).toBeCloseTo(erwartet, 2);
    });
  }
});

describe("Kapitel 8.3 / 8.6: Wert und Saldo", () => {
  it("Wert eines gha = Aufkommen / verbrauchte gha", () => {
    expect(wertProGha(200, 100)).toBe(2);
  });
  it("Wer unter seinem Anteil bleibt, hat positiven Saldo", () => {
    expect(saldo(1.1, 0.5, 2)).toBeGreaterThan(0);
    expect(saldo(1.1, 3.78, 2)).toBeLessThan(0);
  });
  it("wertProGha lehnt 0 verbrauchte gha ab", () => {
    expect(() => wertProGha(1, 0)).toThrow();
  });
});
