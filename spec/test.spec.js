const positiveSum = require('../scripts/firstScript');

const opposite = require('../scripts/secondScript');

const removeChar = require('../scripts/thirdScript');

const repeatStr = require('../scripts/fourtScript')

describe('Sum of positive elements', function () {
  test('positiveSum', function () {
    expect(positiveSum([3, 5, 7, 9])).toEqual(24);
    expect(positiveSum([3, 5, 7, 9, 15])).toEqual(39);
    expect(positiveSum([3, 5, 7, -9, 15])).toEqual(30);
    expect(positiveSum([])).toEqual(0);
  });
});

describe('Opposite number', function () {
  test('opposite', function () {
    expect(opposite(14)).toEqual(-14);
    expect(opposite(-9)).toEqual(9);
    expect(opposite(34)).toEqual(-34);
  });
});

describe('Remove First and Last Character', function () {
  test('removeChar', function () {
    expect(removeChar('eloquent')).toEqual('loquen');
    expect(removeChar('country')).toEqual('ountr');
    expect(removeChar('person')).toEqual('erso');
    expect(removeChar('place')).toEqual('lac');
    expect(removeChar('ooopsss')).toEqual('oopss');
  });
});

describe('String repeat', function () {
  test('repeatStr', function () {
    expect(repeatStr(3, "*")).toEqual("***");
    expect(repeatStr(5, "#")).toEqual("#####");
    expect(repeatStr(2, "ha ")).toEqual("ha ha ");
  });
});
