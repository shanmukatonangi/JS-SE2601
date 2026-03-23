
function Shortestworddistance(wordsDict,word1,word2){
 let index1=-1
 let index2=-1    
 let mindistance=2000

 for(let i=0;i<wordsDict.length;i++){
    if(wordsDict[i]==word1){
        index1=i//0 3
    }

    if(wordsDict[i]==word2){
        index2=i//1 6
    }
  
    if(index1 !== -1 && index2 !=-1){
        mindistance=Math.min(mindistance,Math.abs(index1-index2))
    }
    
 }
 return mindistance

}


const wordsDict = ["apple", "fig", "cherry", "apple", "date", "banana", "fig"];

console.log(Shortestworddistance(wordsDict, "apple", "fig"))
// Output: 3

