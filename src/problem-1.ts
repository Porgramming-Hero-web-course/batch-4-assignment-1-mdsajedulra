{
     // Problem 1

let sum:number=0;
const sumArray = (arr:number[]) => {
    arr.map(i => {
        sum =  sum + i;
    
    })
   return sum;

}
const sumallNumber =  sumArray([1, 2, 3, 4, 5]);

console.log(sumallNumber);

}