function reverseString(text){
    let reverse = '';
    for(i=text.length-1;i>=0;i--){
        const elements=text[i];
        reverse=reverse + elements;
        // console.log(elements, reverse);
    }
    return reverse;
}

const myString = 'I am good boy';
const reverse = reverseString(myString)
console.log(reverse);