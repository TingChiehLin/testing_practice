import { fetchJoke } from "./4_mockFetch";

describe("4_mockFetch_test", () => {
  global.fetch = jest.fn();
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should pass an argument into fetchJoke", async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve({
            type: "single",
            joke: "a random joke here",
          }),
      });
    });

    fetchJoke("javascript");
    await expect(fetch).toHaveBeenCalledTimes(1);
    await expect(fetch).toHaveBeenCalledWith(
      "https://v2.jokeapi.dev/joke/Programming?contains=javascript"
    );
  });

  it("should retun a joke (type single)", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            type: "single",
            joke: "a random joke here",
          }),
      })
    );

    const joke = await fetchJoke("randomjoke");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(joke).toBe("a random joke here");
  });

  it("should return a joke (type twopart)", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            type: "twopart",
            setup: "JavaScript is",
            delivery: "Master Academy",
          }),
      })
    );
    const joke = await fetchJoke("randomjoke");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(joke).toBe("JavaScript is ... Master Academy");
  });

  it("should have an error messages ", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));
    const result = await fetchJoke();
    expect(result).toThrowError();
  });
});
