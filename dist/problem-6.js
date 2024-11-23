"use strict";
{
    const updateProfile = (obj, updateObj) => {
        return Object.assign(Object.assign({}, obj), updateObj);
    };
    // Sample Input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // Sample Output
    console.log(updateProfile(myProfile, { age: 26 }));
}
