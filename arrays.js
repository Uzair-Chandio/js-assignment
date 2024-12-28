// Find Max Number: Write a function that finds and returns the maximum number in an array.

numbers=[1,45,7,8,9,22,55,77,21,3,0,65,78,87,79]
const maxNum=(arr)=>{
    let num=0;
    for(i=0; i<arr.length;i++){
        if(arr[i]>num){
            num=arr[i]
        }
    }
    return num
}
const maxNumber=maxNum(numbers)
console.log(maxNumber)





// Remove Duplicates: Create a function that removes duplicate values from an array.

let array=["cat","dog","lion","cow","cat","dog","snake","horse","horse" ,"horse"]

const duplicateRemover=(arr)=>{
    for(i=0;i<arr.length;i++){
        let test=arr[i]

        for(x=arr.length;x>i; x--){
            if(arr[x]=== test){
            arr.splice(x,1)     
            } 
        }
    }
    return arr
}
let newArray=duplicateRemover(array)
console.log(newArray)





// Merge Arrays: Write a function to merge two arrays and remove duplicates from the
// resulting array

let array2=["cat","chair","table","dog","book","snake","pen","pencil"]
const merge=(arr , arr2)=>{
    mergedArray=[]

    for(i=0;i<arr.length;i++){
        mergedArray.push(arr[i])
    }

    for(x=0;x<arr2.length;x++){
        mergedArray.push(arr2[x])
    }
    
    for(y=0;y<mergedArray.length;y++){
        let test=mergedArray[y]

        for(z=mergedArray.length;z>y; z--){
            if(mergedArray[z]=== test){
            mergedArray.splice(z,1)     
            }
        }
    }
    return mergedArray
}
let mergedArr=merge(array , array2)
console.log(mergedArr)

