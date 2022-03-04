export class Timer {
  /**
   * await ms
   */
  static sleep = (ms: number): Promise<void> => new Promise(this.doNothingFor(ms));

  /**
   * Promise executor
   */
  private static doNothingFor = (ms: number) =>
      (resolve: () => void) => setTimeout(() => resolve(), ms);
}
