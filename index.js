module.exports = function test(expectedResult, conditionToTest) {
  const green = '\x1b[32m%s\x1b[0m';
  const red = '\x1b[31m%s\x1b[0m';
  const failMsg = `Fail ${expectedResult} expected but got ${conditionToTest}`;
  const passMsg = `Pass ${expectedResult} === ${conditionToTest}`;
  const conditionPasses = conditionToTest === expectedResult;
  const response = conditionPasses ? passMsg : failMsg;
  const output = `${response}`;

  if (conditionPasses) {
    console.log(green, output);
  } else {
    console.log(red, output);
  }
  return conditionPasses;
};
