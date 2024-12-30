// 14. Print Numbers: Use a do-while loop to print numbers from 1 to 20


i=1
do{
console.log(i);
i++;
}while(i<21)





//  Collect User Input: Simulate collecting input from a user (e.g., prompts) in a do-while loop 
// until they type "stop"
i=0
let input;
// let stopCase="stop"
do{
    input=String(prompt());
   
  
    i++;
}while(input.toLowerCase()!=="stop")
    