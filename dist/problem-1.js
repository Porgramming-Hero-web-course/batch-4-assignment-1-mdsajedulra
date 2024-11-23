"use strict";
{
    // Problem 1
    let sum = 0;
    const sumArray = (arr) => {
        arr.map(i => {
            sum = sum + i;
        });
        return sum;
    };
    const sumallNumber = sumArray([1, 2, 3, 4, 5]);
    console.log(sumallNumber);
}
