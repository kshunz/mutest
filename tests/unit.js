var test = require(process.cwd());
var shouldReturnBoolean = test('no', 'no');

test(shouldReturnBoolean, true);
