export type Assertion = (cond: boolean, exceptMessage: string) => void 

type Validate = (validator: (check: (cond: boolean, exceptMessage: string) => void) => void) => Promise<void>

export const validate: Validate = (validator) => {
  const errors: string[] = []

  const assert: Assertion = (cond, exceptMessage) => {
    if(!cond) errors.push(exceptMessage)
  }

  validator(assert)

  if(0 < errors.length) {
    Promise.reject(errors)
  }

  return Promise.resolve()
}

