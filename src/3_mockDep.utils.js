/**
 * Async function, resolves if password is truthy
 * @param {String} password
 */
export async function validatePasswordApi(password) {
  return await Promise.resolve(!!password);
}
// what are the possible outcomes of generatePassword() ? Those are the things you need to test.
/**
 * Return a random number between min and max
 * @param {Number} min
 * @param {Number} max
 */
export function randomizer(min, max) {
  return Math.round(Math.random() * (max - min));
}
