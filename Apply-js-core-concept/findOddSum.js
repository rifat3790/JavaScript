function getSumOfAeeay(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
        if(number[i]%2 ==1){
            sum = sum+number[i];
        }
    }
    return sum;
}

const myNumbers= [12 , 65, 45, 78, 32, 45, 91 ];
const sum=getSumOfAeeay(myNumbers);
console.log(sum);