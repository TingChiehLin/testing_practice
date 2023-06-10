import { guardMove, guardPower } from "./2_mockFn";

describe("2_mockFn_test", () => {
  it("should execute moveCallback callback function", () => {
    const mockupMoveFn = jest.fn(
      (action, extras) => `${action} with ${extras}`
    );
    const result = guardMove(mockupMoveFn, "walk", "test");
    expect(mockupMoveFn).toBeCalled();
    expect(mockupMoveFn).toBeCalledTimes(1);
    expect(result).toBe("walk with test");
  });

  it("should return power < 500 sucessfully", () => {
    const mockupPowerFn = jest.fn((power) => `Total Power:${power}`);
    const result = guardPower(mockupPowerFn, 4);
    expect(mockupPowerFn).toBeCalledTimes(1);
    expect(result).toBe("Total Power:256");
  });

  it("throw an error due to power over 500", () => {
    const mockupPowerFn = jest.fn((power) => `Total Power:${power}`);
    expect(() => guardPower(mockupPowerFn, 20)).toThrowError();
  });
});
