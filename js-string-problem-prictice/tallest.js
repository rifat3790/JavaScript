function maxArray(numbers){
    let largest = numbers[0];
    for(let i=0;i<numbers.length;i++){
        const elements = numbers[i];
        if(elements> largest){
            largest=elements;
        }
    }
    return largest;
    

}

const heights = [167, 190, 120, 165, 137 ];
const tallest = maxArray(heights);
console.log(tallest);