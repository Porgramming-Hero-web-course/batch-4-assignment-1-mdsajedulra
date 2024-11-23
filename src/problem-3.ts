{
    // Problem 3

const countWordOccurrences = (sentence: string, word:string) => {

    const upperCaseSentence = sentence.toUpperCase();
    const upperCaseWord = word.toUpperCase();
    
    const words = upperCaseSentence.split(" ");
    console.log(words)
    
    let count = 0; 
    
    for(let i = 0; i < words.length; i++) {
        let w = words[i];
        if(w === upperCaseWord){
            count++;
        }
    } 
    return count;
    
    
    }
    
    
    console.log(countWordOccurrences("I love love love typescript", "love"))
    
}