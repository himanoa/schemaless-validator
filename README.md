# schemaless-validator

A library for quickly and freedom creating validation 

```typescript
import { validate } from '@himanoa/schemaless-validator'

const input = 12

validate((assert) => {
  assert(input > 13, "input must be more than 13")
  assert(input.toString().length > 13, "input must be at least 13 characters")
}).catch(errors => {
  console.dir(errors)
  /*
   * console.dir
   *  [
   *    'input must be more than 13',
   *    'input must be at least 13 characters'
   *  ]
   *
   */
})
```

## Install

```
npm install @himanoa/schemaless-validator
```

or

```
yarn add @himanoa/schemaless-validator
```

## API

### `validate(validator: (assert: (cond: boolean, exceptMessage: string)) => void): Promise<void>`

Execute validator function.

Return the `Promise.resolve<void>` if error array is empty when after execute `validator` and return the `Promise.resolve(exceptMessageArray)` when error is not empty

See. [test case](https://github.com/himanoa/schemaless-validator/blob/master/src/lib.test.ts#L17-L22)

## LICENSE 

MIT
