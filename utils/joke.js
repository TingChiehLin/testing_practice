//https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&amount=6

const fetchJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&amount=6";
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
};

export { fetchJoke };
