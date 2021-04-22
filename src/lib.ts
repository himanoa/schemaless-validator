export type Validator<T> = (input: T) => Promise<void> 

export type ValidatorMap<T = unknown> = {
  value: T,
  validators: ReadonlyArray<Validator<T>>
}

/**
 * @param inputs validate target value and validator functions(array)
 * @since 2.10.0
 */
export function mapToPromiseArray<T>(inputs: ReadonlyArray<ValidatorMap<T>>): Promise<void>[] {
  return inputs.reduce<Promise<void>[]>(
    (acc, i) => {
      const validatorPromises = i.validators.map(
        validate => validate(i.value)
      )
      return[...acc, ...validatorPromises]
    },
    []
  )
}
