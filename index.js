module.exports = function test(expectedResult, conditionToTest) {
	var fail = '\033[1;31mFail: \033[0m';
	var pass = '\033[1;32mPass: \033[0m';
  var failMsg = fail + `${expectedResult} expected but got ${conditionToTest}`;
  var passMsg = pass + `${expectedResult} === ${conditionToTest}`;
  var conditionPasses = conditionToTest === expectedResult;
  var response = conditionPasses ? passMsg : failMsg;

  process.stdout.write(response  + '\n');

	return conditionPasses;
};
