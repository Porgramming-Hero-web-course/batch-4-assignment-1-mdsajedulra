"use strict";
{
    // Problem 2
    let arr = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];
    const removeDuplicates = (arr) => {
        return [...new Set(arr)];
    };
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
