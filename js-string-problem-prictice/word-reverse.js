function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for(i=words.length-1; i>=0;i--){
        const elements=words[i];
        result.push(elements);
       
    }
    const reverse = result.join(' ');
    return reverse;
    
}



const myString = 'I am good boy';
const reverse = reverseWords(myString);
console.log(reverse);