// Project Euler: Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

// multiplesOf3and5(1000) should return 233168.
// multiplesOf3and5(49) should return 543.
// multiplesOf3and5(19564) should return 89301183.
// multiplesOf3and5(8456) should return 16687353.

function multiplesOf3and5(number) {
  // Good luck!
   let result= 0;
   for (let i =0; i < number ; i++){
     let test = i % 3 === 0 || i % 5 === 0;
     if(test) result += i;
   }
  return result;
}

console.log(multiplesOf3and5(19564));