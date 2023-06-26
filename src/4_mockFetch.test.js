import { fetchJoke } from "./4_mockFetch";

describe("4_mockFetch_test", () => {
  //That mock is how you also test when the joke is type "single" or type "twopart"
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          type: ["single", "twopart"],
          joke: "a random joke here",
          joke2: "JavaScript Test Quiz ... Master Academy",
        }),
        Promise.reject({
          error: "${response.message}. ${response.causedBy.join('.')}"
        })
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  it("should pass an argument into fetchJoke", async () => {
    fetchJoke("javascript");
    await expect(fetch).toHaveBeenCalledTimes(1);
    await expect(fetch).toHaveBeenCalledWith(
      `https://v2.jokeapi.dev/joke/Programming?contains=javascript`
    );
  });

  it("should retun a joke (type single)", async () => {
    const joke = await fetchJoke("randomjoke");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(joke).toBe("a random joke here");
  });

  it("should return a joke (type twopart)", async () => {
    const joke2 = await fetchJoke("randomjoke");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(joke2).toBe("JavaScript Test Quiz ... Master Academy");
  });

  it("should have an error messages ", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));
    const result = await fetchJoke();
    expect(result).toThrowError();
  });
});
