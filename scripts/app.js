function createPhoneNumber(numbers) {
    numbers = numbers.join('');

    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}

// TEST
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 5, 9, 0]));