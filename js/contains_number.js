const containsNumber = (numbers, aNumber) => {
    return numbers.indexOf(aNumber) >= 0 ? true : false;
}

const displayResult = () => {
    let aNumber = 11;
    let numbers = [1, 4, 2, 5, 6, 3, 5, 3, 2];

    if (containsNumber(numbers, aNumber)) {
        return `Array contains the number ${aNumber}`;
    } else {
        return `Array doesn't contain the number ${aNumber}`;
    }
}