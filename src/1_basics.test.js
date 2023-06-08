import { multiply, isSmallerThan10 } from "./1_basics";

describe("1_Basics Testing Practice", () => {
  describe("multiply()", () => {
    it("multiples a and b", () => {
      const result = multiply(3, 4);
      expect(result).toBe(12);
    });
  });

  describe("isSmallerThan10()", () => {
    it("should be smaller than 10?", () => {
      const result = isSmallerThan10(7);
      expect(result).toBe("yes dah!");
    });
    it("should not be smaller than 10?", () => {
      const result = isSmallerThan10(12);
      expect(result).toBe("not really...");
    });
  });
});
