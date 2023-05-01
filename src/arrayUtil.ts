/**
 * check arg is a member of array
 * @param array
 */
export const isIn =
    <A extends T, T>(array: A[]) =>
        (arg: T): arg is A =>
            array.some((a) => a === arg)

/**
 * check arg is subset of array
 * @param array
 */
export const isAllIn =
    <A extends T, T>(array: A[]) =>
        (arg: T[]): arg is A[] =>
            arg.every((a) => isIn(array)(a))
