import { mapToPromiseArray, ValidatorMap } from './lib'

describe("mapToPromiseArray", () => {
  it("not error", async () => {
    const validateMap: ValidatorMap<string> = {
      value: "foobar",
      validators: [(i: string) => i === "foobar" ? Promise.resolve() : Promise.reject("input is not foobar")]
    }

    await Promise.all(mapToPromiseArray([validateMap]))
    expect(1).toBe(1)
  })
})
