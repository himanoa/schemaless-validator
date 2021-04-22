import { validate } from './lib'

describe("validate", () => {
  it("then", () => {
    validate((assert) => {
      assert(true, '絶対にこのエラーメッセージはでません')
    }).then((d) => {
      expect(d).toBe(undefined)
    }).catch(()=> {
      fail("ここには到達しないはず")
    })
  })
  it("error", () => {
    const name: string = "foo"
    const money = -12

    validate((assert) => {
      assert(0 < money, "金額は0円以上にしてください")
      assert(name === "Himanoa", "おまえはひまのあではない")
    }).catch(err => {
      expect(err).toStrictEqual(["金額は0円以上にしてください", "おまえはひまのあではない"])
    })
  })
})
