function customMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(numbers, num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
