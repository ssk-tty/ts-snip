/**
 * check arg is a member of array
 * @param array
 */
export const isIn =
    <A extends T, T>(array: A[]) =>
        (arg: T): arg is A =>
            array.some((a) => a === arg)
