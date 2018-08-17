# &micro;test #
Micro-test Utility (mutest). This little helpful tool has been used for years to quickly test

### Getting Started ###
    const test = require('@kshunz/mutest')

> **Inline testing**

    test(true, 1===1);

    test(false, 1===1);

> **Will write to std out (console log)**

    Pass: true === true

    Fail: false expected but got true

### Use with async code as well ##

    const asyncPasses = false;

    somethingAsync((e, data) => {

    });
