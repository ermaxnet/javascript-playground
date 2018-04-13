
export const toCapitalize = (word = "") => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const fibonacciArray = (count) => {
    const fibonacci = [];
    for (let i = 0; i < count; i++) {
        const next = i >= 2 
            ? fibonacci[i - 2] + fibonacci[i - 1]
            : i;
        fibonacci.push(next);
    }
    return fibonacci;
};