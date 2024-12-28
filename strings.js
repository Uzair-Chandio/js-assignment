// Reverse a String: Write a function that takes a string and returns its reverse.

let phrase= "how are you doing today"
const reverser=(word)=>{
    let rev = '';
        for(i=word.length;i--;){
            rev += word[i]
        }
        return rev
}
const newPhrase = reverser(phrase)
console.log(newPhrase);




// Count Vowels: Create a function that counts the number of vowels in a string.

const counter=(word)=>{
    let num=0
    for(i=0;i<word.length;i++){
        if(word[i]==="a"||word[i]==="e"||word[i]==="i"||word[i]==="o"||word[i]==="u"){
        num+=1
        }
    }
    return num
}
const count=`given word contain ${counter(phrase)} vowels`
console.log(count)





// Check Palindrome: Write a function to check if a given string is a palindrome.

let word2="Dad"
const checker=(word)=>{
    let lowercase=word.toLowerCase()
    let test=""
    for(i=lowercase.length;i--;){
        test+=lowercase[i]
    }
   return lowercase===test
}
console.log(checker(phrase))
console.log(checker(word2))

// with if conditions

const checkerif=(word)=>{
    let lowercase=word.toLowerCase()
    let test=""
    for(i=lowercase.length;i--;){
        test+=lowercase[i]
    }
    if(lowercase===test){
        console.log(`given word ${word} is palindrome`)
    }
    else{
        console.log(`given word ${word} is not palindrome`)
    }
   return 
}


checkerif(word2)
checkerif(phrase)




