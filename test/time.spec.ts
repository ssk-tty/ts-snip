import {Timer} from '../src/timer';

describe('Timer', () => {
  describe('methods', () => {
    describe('positive', () => {
      it('sleep', async () => {
        const startTime: number = new Date().getTime();

        const SLEEP_TIME_MS: number = 3000;

        await Timer.sleep(SLEEP_TIME_MS);

        const endTime: number = new Date().getTime();

        const diff: number = endTime - startTime;

        expect(diff).toBeGreaterThanOrEqual(SLEEP_TIME_MS);
      });
    });
  });
});
