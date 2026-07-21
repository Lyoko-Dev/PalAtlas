import test from "node:test";
import assert from "node:assert/strict";
import { version } from "../src/index.js";

test("expone la versión del proyecto", () => {
  assert.equal(version, "0.1.0");
});

