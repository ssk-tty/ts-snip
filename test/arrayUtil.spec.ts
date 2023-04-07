import {isIn} from '../src/arrayUtil';

describe('arrayUtil', () => {
  describe('positive', () => {
    it('isIn', async () => {
      const testArray = [
        'a',
        'b',
        'c',
      ];

      const checkFunc = isIn(testArray);

      expect(checkFunc('a')).toBeTruthy();
      expect(checkFunc('z')).toBeFalsy();
    });
  });
});
