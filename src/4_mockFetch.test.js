import { fetchJoke } from "./4_mockFetch";

describe("4_mockFetch_test", () => {
  global.fetch = jest.fn(() => {
    Promise.resolve({
      json: () => Promise.resolve(),
    });
  });

  beforeEach(() => {
    fetch.mockClear();
  });

  it("should pass an argument into fetchJoke", async () => {
    fetchJoke("javascript");
    await expect(fetch).toHaveBeenCalledTimes(1);
    await expect(fetch).toHaveBeenCalledWith(
      `https://v2.jokeapi.dev/joke/Programming?contains=javascript}`
    );
  });

  //not really sure about how to test with response.type === 'single'
  it("should retunr joke when response type is single", async () => {
    const result = await fetchJoke("randomjoke");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should have error messages ", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));
    const result = await fetchJoke();
    expect(result).toThrowError();
  });
});
