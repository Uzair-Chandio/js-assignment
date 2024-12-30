// 12. Sum of Digits: Write a program using a while loop to calculate the sum of digits of a given 
// number.

let number=27896
let sum=0

let num=number.toString()
let i=0

while(i<num.length){
    sum+=Number(num[i])
    
        i++;
}
console.log(sum)





// Number Guessing Game: Implement a simple guessing game where the user guesses a 
// number until they get it correct (simulate with a random number).

let guess=Number(prompt())
let randomNumber=4

while(guess!==randomNumber){
    guess=Number(prompt())
   randomNumber++
   if(randomNumber==10){
    randomNumber=3
   }
}



