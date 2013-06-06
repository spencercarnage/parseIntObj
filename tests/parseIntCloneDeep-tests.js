test('Convert number strings into proper numbers', function () {
  expect(7);

  var originalObj = {
    test: '1',
    test2: {
      test: '1',
      test2: 1
    }
  };

  var convertedObj = _.parseIntDeepClone(originalObj);
  var originalArr = ['1', '2', 3, ['1']];
  var convertedArr = _.parseIntDeepClone(originalArr);

  ok(
    typeof convertedObj.test === 'number', 
    "Should convert test key into a number"
  );

  // Do a deepEqual for good measure
  deepEqual(
    convertedObj,
    {test: 1, test2: {test: 1, test2: 1}}, 
    "Should convert test string value into a number value."
  );

  deepEqual(
    originalObj,
    {test: '1', test2: {test: '1', test2: 1}}, 
    "Should leave the original object untouched."
  );

  ok(
    typeof convertedArr[0] === 'number', 
    "Should convert first index into a number"
  );

  ok(
    typeof convertedArr[3][0] === 'number', 
    "Should convert first index into a number"
  );

  // Do a deepEqual for good measure
  deepEqual(
    convertedArr,
    [1,2,3, [1]],
    "Should convert all number string array indexes into a number value."
  );

  deepEqual(
    originalArr,
    ['1', '2', 3, ['1']],
    "Should leave the original array untouched."
  );
});
