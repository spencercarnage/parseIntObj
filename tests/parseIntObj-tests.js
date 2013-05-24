test('Convert number strings into proper numbers', function () {
  expect(6);

  var originalObj = ({test: '1'});
  var convertedObj = _.parseIntObj(originalObj);
  var originalArr = ['1', '2', 3];
  var convertedArr = _.parseIntObj(originalArr);

  ok(
    typeof convertedObj.test === 'number', 
    "Should convert test key into a number"
  );

  // Do a deepEqual for good measure
  deepEqual(
    convertedObj,
    {test: 1}, 
    "Should convert test string value into a number value."
  );

  deepEqual(
    originalObj,
    {test: '1'},
    "Should leave the original object untouched."
  );

  ok(
    typeof convertedArr[0] === 'number', 
    "Should convert first index into a number"
  );

  // Do a deepEqual for good measure
  deepEqual(
    convertedArr,
    [1,2,3],
    "Should convert all number string array indexes into a number value."
  );

  deepEqual(
    originalArr,
    ['1', '2', 3],
    "Should leave the original array untouched."
  );
});
