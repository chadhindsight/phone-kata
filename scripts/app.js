function createPhoneNumber(numbers) {
    numbers = numbers.join('');

    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}

// TEST
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 5, 9, 0]));
console.log(createPhoneNumber([9, 2, 4, 4, 3, 8, 7, 5, 9, 1]));