import {toKanjiDivided} from '../src/numberUtil';

describe('numberUtil', () => {
  it('toKanjiDivided', () => {
    expect(toKanjiDivided(123)).toEqual('123');
    expect(toKanjiDivided(1234)).toEqual('1234');
    expect(toKanjiDivided(12345)).toEqual('1万2345');
    expect(toKanjiDivided(123456)).toEqual('12万3456');
    expect(toKanjiDivided(1234567)).toEqual('123万4567');
    expect(toKanjiDivided(12345678)).toEqual('1234万5678');
    expect(toKanjiDivided(123456789)).toEqual('1億2345万6789');
    expect(toKanjiDivided(1234567890)).toEqual('12億3456万7890');
    expect(toKanjiDivided(12345678901)).toEqual('123億4567万8901');
    expect(toKanjiDivided(123456789012)).toEqual('1234億5678万9012');
    expect(toKanjiDivided(1234567890123)).toEqual('1兆2345億6789万123');
    expect(toKanjiDivided(12345678901234)).toEqual('12兆3456億7890万1234');
    expect(toKanjiDivided(123456789012345)).toEqual('123兆4567億8901万2345');
    expect(toKanjiDivided(1234567890123456)).toEqual('1234兆5678億9012万3456');
    expect(toKanjiDivided(1000000000000000)).toEqual('1000兆');
    expect(toKanjiDivided(1000010000200000)).toEqual('1000兆100億20万');
  });
});
