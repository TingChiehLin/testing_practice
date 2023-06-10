/**
 * Calls moveCb conditionally based on give action
 * @param {Function} moveCallback
 * @param {String} action
 * @param {*} extras
 */

export const guardMove = (moveCallback, action, extras) => {
  console.log(`Calling ${action}`);

  if (["walk", "run"].includes(action)) {
    return moveCallback(action, extras);
  }

  console.error(`Invalid ${action}...`);
  return null;
};

export const guardPower = (cb, number) => {
  const power = number ** number; // eg 3 ** 3 = 3*3*3 = 27

  if (power <= 500) {
    return cb(power);
  }

  throw Error(`The power of number is bigger than 500...`);
};
