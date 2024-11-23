"use strict";
{
    // // Problem 1
    // let sum:number=0;
    // const sumArray = (arr:number[]) => {
    //     arr.map(i => {
    //         sum =  sum + i;
    //     })
    //    return sum;
    // }
    // const sumallNumber =  sumArray([1, 2, 3, 4, 5]);
    // console.log(sumallNumber);
    // // Problem 2
    // let arr = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];
    // const removeDuplicates = (arr: number[]): number[] => {
    //     return [...new Set(arr)];
    // }
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    // // Problem 3
    // const countWordOccurrences = (sentence: string, word:string) => {
    // const upperCaseSentence = sentence.toUpperCase();
    // const upperCaseWord = word.toUpperCase();
    // const words = upperCaseSentence.split(" ");
    // console.log(words)
    // let count = 0; 
    // for(let i = 0; i < words.length; i++) {
    //     let w = words[i];
    //     if(w === upperCaseWord){
    //         count++;
    //     }
    // } 
    // return count;
    // }
    // console.log(countWordOccurrences("I love love love typescript", "love"))
    // // Problem 3
    // type Circle = {
    //         shape: "circle", 
    //     radius: 5,
    // }
    // type Rectangle = {
    //     shape: "rectangle"
    //     width: number, 
    //     height: number,
    // }
    // type Shape = Circle |   Rectangle;
    // const calculateShapeArea = (shape:Shape):number=>{
    //     if(shape.shape === "rectangle"){
    //         const area  = shape.height * shape.width;
    //         return area;
    //     }
    //     else if(shape.shape === "circle"){
    //         const area = Math.PI * shape.radius * shape.radius;
    //         return area
    //     }
    // return 0;
    // }
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    //   });
    // console.log(circleArea, rectangleArea)
    // problem 5
    // const getProperty =<X, Y extends keyof X> (obj: X, key : Y)=>{
    //     return obj[key];
    // }
    // const person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name"));
    // Problem 6
    // interface Profile {
    //     name: string;
    //     age: number;
    //     email: string;
    // }
    // const updateProfile = (obj: Profile, updateObj: prof)
    //Problem 7
    // class Car {
    //     make: string; //
    //     model: string; //
    //     year: number; //
    //     constructor(make: string, model: string, year: number) {
    //         this.make = make;
    //         this.model = model;
    //         this.year = year;
    //     }
    //     getCarAge(){
    //         const currentYear: number = new Date().getFullYear();
    //         const age =  currentYear-this.year
    //         const returnAge =`${age} (assuming current year is ${currentYear})`
    //     //   console.log( returnAge);
    //     return returnAge;
    //     }
    // }
    // const car = new Car("Honda", "Civic", 2018)
    // console.log(car.getCarAge())
    // Problem 8
    const validateKeys = (obj, keys) => {
        return keys.every(key => key in obj);
    };
    // function validateKeys<X extends object, Y extends keyof X>(obj: X, keys: Y[]) {
    //    return  keys.every(key => key in obj);
    // }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
    console.log(validateKeys(person, ["name", "address"]));
}
