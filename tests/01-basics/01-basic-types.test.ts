import { describe, it, expect } from "vitest";
import { add } from "../../src/01-basics/01-basic-types";

describe("足し算ができること", () => {
  it("1 + 2 は 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
