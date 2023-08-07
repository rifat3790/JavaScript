function factorial(number){
    fact=1;
    for(let i=1;i<=number;i++){
        fact=fact*i;
    }
    return fact;
}

const number=factorial(3);
console.log(number);