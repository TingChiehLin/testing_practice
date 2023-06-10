import { fetchJoke } from "./4_mockFetch";

describe("4_mockFetch_test", () => {
  it("should fetch API successfully", async () => {
    const result = await fetchJoke();
    expect(result).toBe(true);
  });

  it("should retunr ", async () => {
    const result = await fetchJoke("what");
    expect(result).toBe("");
  });

  it("should have error messages ", async () => {
    const result = await fetchJoke("error message");
    expect(result).toBe("");
  });
});
