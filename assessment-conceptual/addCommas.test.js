const addCommas = require('./addCommas');

describe('addCommas()', ()=> {

  test('is a function', ()=> {
    expect(typeof addCommas).toBe('function');
  });

  test('returns string', ()=> {
    expect(addCommas(Math.random(1)*1000000)).toEqual(expect.any(String))
    expect(addCommas('this is invalid')).toEqual(expect.any(String))
  });

  test('returns no commas with small numbers', ()=> {
    expect(addCommas(10)).toBe('10');
    expect(addCommas(0)).toBe('0');
    expect(addCommas(-999.99)).toBe('-999.99');
  });

  test('returns large positive integers', ()=> {
    expect(addCommas(123456789)).toBe('123,456,789');
    expect(addCommas(99999)).toBe('99,999');
    expect(addCommas(1234)).toBe('1,234');
  });

  test('returns large postive floats', ()=> {
    expect(addCommas(123456789.98)).toBe('123,456,789.98');
    expect(addCommas(99999.99)).toBe('99,999.99');
    expect(addCommas(1234.5)).toBe('1,234.5');
  });

  test('returns large negative floats', ()=> {
    expect(addCommas(-123456789.98)).toBe('-123,456,789.98');
    expect(addCommas(-99999.99)).toBe('-99,999.99');
    expect(addCommas(-1234.5)).toBe('-1,234.5');
  });

  test('returns large negative integers', ()=> {
    expect(addCommas(-123456789)).toBe('-123,456,789');
    expect(addCommas(-99999)).toBe('-99,999');
    expect(addCommas(-1234)).toBe('-1,234');
  });

  test('returns error message on invalid arguments', ()=> {
    expect(addCommas('this is invalid')).toMatch('invalid argument.');
    expect(addCommas(['somearray'])).toMatch('invalid argument.');
    expect(addCommas({some:'object'})).toMatch('invalid argument.');
    expect(addCommas('123,456')).toMatch('invalid argument.');
  });

});