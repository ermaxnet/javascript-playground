const {
    fibonacciArray,
    toCapitalize
} = require("../../index");

describe("Функция toCapitalize", () => {
    let test, expectTest;

    beforeEach(() => {
        test = "aWesomE tEST";
        expectTest = "Awesome test";
    });

    it("должна возвращать определенный результат", () => {
        expect(toCapitalize()).toBeDefined();
    });

    it("должна возвращать строку", () => {
        expect(toCapitalize()).toBeString();
    });

    it("должна возвращать строку, равную по смыслу переданной ей", () => {
        const actual = toCapitalize(test);
        expect(actual.toLowerCase()).toEqual(test.toLowerCase());
    });

    it("должна возвращать строку в которой первая буква будет большой, а все остальные маленькими", () => {
        expect(toCapitalize(test)).toEqual(expectTest);
    });

});

describe("Функция fibonacciArray", () => {

    it("должна возвращать определенный результат", () => {
        expect(fibonacciArray()).toBeDefined();
    });

    it("должна возвращать массив", () => {
        expect(fibonacciArray()).toBeArray();
    });

    it("должен возвращать массив с длинной, равной цифре, переданной в функцию", () => {
        expect(fibonacciArray(0).length) .toEqual(0);
        expect(fibonacciArray(2).length) .toEqual(2);
        expect(fibonacciArray(5).length) .toEqual(5);
        expect(fibonacciArray(10).length).toEqual(10);
    });

    it("должна возвращать массив из чисел Фиббоначи в количестве, запрошенном у функции", () => {
        expect(fibonacciArray(0)) .toEqual([ ]);
        expect(fibonacciArray(2)) .toEqual([ 0, 1 ]);
        expect(fibonacciArray(5)) .toEqual([ 0, 1, 1, 2, 3 ]);
        expect(fibonacciArray(10)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]);
    });
});