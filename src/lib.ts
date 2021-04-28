export type Assertion<T> = (cond: boolean, exceptMessage: T) => void 

type Validator<T> = (assert: Assertion<T>) => void

export function validate<T>(validator: Validator<T>) {
  const errors: T[] = []

  const assert: Assertion<T> = (cond, exceptMessage) => {
    if(!cond) errors.push(exceptMessage)
  }

  validator(assert)

  if(0 < errors.length) {
    return Promise.reject(errors)
  }

  return Promise.resolve()
}
