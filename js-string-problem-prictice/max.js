// const jim = 84;
// const dela = 97;
// const chinku = 97;

// if(jim>dela && jim>chinku){
//     console.log('Jim will get the cake.')
// }
// else if (dela>jim && dela>chinku){
//     console.log('Dela will get the cake.')
// }
// else{
//     console.log('Chinku will get the cake.')
// }

// --------------
// using math function

function maxCheck(num1, num2, num3){
    let maxNumber=Math.max(num1,num2,num3);
    return maxNumber;
}

const number=maxCheck(10,40,20);
console.log('Maximum Number is: '+number);
