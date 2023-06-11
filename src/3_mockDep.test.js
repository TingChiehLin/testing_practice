import { generatePassword } from "./3_mockDep";

describe("3_mockDep_test", () => {
  it("should give you an error when the size is 0", async () => {
    await expect(() => generatePassword(0, "")).toThrowError();
  });
  it("should contain special character", async () => {
    const result = await generatePassword(8, "@");
    expect(result).toContain("@");
  });
});
