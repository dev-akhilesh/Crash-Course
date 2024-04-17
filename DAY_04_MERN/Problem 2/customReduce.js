function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
}


const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (acc, current) => acc + current, 0);
console.log(sum); // Output: 15
