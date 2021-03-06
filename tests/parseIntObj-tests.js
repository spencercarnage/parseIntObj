test('Convert number strings into proper numbers', function () {
  expect(8);

  var originalObj = {test: '1', test2: '0.0.0'};
  var convertedObj = _.parseIntObj(originalObj);
  var originalArr = ['1', '2', 3, '0.0.0'];
  var convertedArr = _.parseIntObj(originalArr);

  ok(
    typeof convertedObj.test === 'number', 
    "Should convert test key into a number"
  );

  ok(
    typeof convertedObj.test2 === 'string', 
    "Should leave test1 key as string"
  );

  // Do a deepEqual for good measure
  deepEqual(
    convertedObj,
    {test: 1, test2: '0.0.0'}, 
    "Should convert test string value into a number value."
  );

  deepEqual(
    originalObj,
    {test: '1', test2: '0.0.0'},
    "Should leave the original object untouched."
  );

  ok(
    typeof convertedArr[0] === 'number', 
    "Should convert first index into a number"
  );

  ok(
    typeof convertedArr[3] === 'string', 
    "Should leave version # type string as a string"
  );

  // Do a deepEqual for good measure
  deepEqual(
    convertedArr,
    [1,2,3, '0.0.0'],
    "Should convert all number string array indexes into a number value."
  );

  deepEqual(
    originalArr,
    ['1', '2', 3, '0.0.0'],
    "Should leave the original array untouched."
  );
});
