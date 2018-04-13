beforeEach(() => {
    jasmine.addMatchers({
        toBeString: () => {
            return {
                compare(actual) {
                    return {
                        pass: typeof actual === "string"
                    };
                }
            };
        },
        toBeArray: () => {
            return {
                compare(actual) {
                    return {
                        pass: actual instanceof Array
                    };
                }
            };
        }
    });
});