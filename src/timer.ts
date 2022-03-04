export class Timer {
  /**
   * await ms
   */
  static sleep = (ms: number): Promise<void> => new Promise((resolve) =>
    setTimeout(
      () => {resolve()},
      ms,
    )
  );
}
