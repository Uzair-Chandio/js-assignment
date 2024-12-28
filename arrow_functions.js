
// Square of Numbers: Write an arrow function that takes an array of numbers and returns a
// new array with the square of each number.

numbers=[12,5,6,8,9,7,23,3,89,44,0,7,56,42]

const squares=(arr)=>{
    result=[]
    for(i=0;i<arr.length;i++){
        result.push(arr[i]**2)
        
    }
    return result
}
const squaresOfNumbers= squares(numbers)
console.log(squaresOfNumbers)





// Sum of Array: Create an arrow function that takes an array of numbers and returns the sum
// of all elements

const sum=(arr)=>{
   let a=0;
    for(i=0;i<arr.length;i++){
        a+=arr[i]
        }
        return a
}
const sumOfNumbers= sum(squaresOfNumbers)
console.log(sumOfNumbers)





// Filter Even Numbers: Use an arrow function to filter and return only the even numbers from
// an array.

const even=(arr)=>{
    result=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            result.push(arr[i])
        }
    }
    return result
}
const even_numbers= even(squaresOfNumbers)
console.log(even_numbers)


