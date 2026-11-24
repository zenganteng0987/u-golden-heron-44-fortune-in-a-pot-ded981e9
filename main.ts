// SPDX-License-Identifier: MIT
// Fortune in a Pot — writes one kind, funny fortune for a houseplant
// (at most 120 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Chosen over two rivals: the cat joke was about the cat, not the plant,
// and the "favorite keeper" line was warm but not funny. This one keeps the
// fortune cadence ("This week ... will ..."), names this plant's own window,
// and lands its small joke on the plant showing off — kind, no doom.
const FORTUNE =
  "This week, a sunbeam will find your favorite leaf, and you will spend the afternoon showing off for the window.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORTUNE + "\n", "utf8");
