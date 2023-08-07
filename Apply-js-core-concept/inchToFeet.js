// const myInches = 144;
// const myFeet = myInches/12;

// console.log("Feet:",myFeet);

function inchToFeet(inches){
    const feet = inches/12;
    return feet.toFixed(2);
}

const dataInches = 144;
const dataFeet = inchToFeet(dataInches);
console.log(dataFeet);