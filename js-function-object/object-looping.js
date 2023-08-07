
var age = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}

var soppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    
}

const keys = Object.keys(soppingCard);
const values = Object.values(soppingCard);

// console.log(keys);
// console.log(values);

for(var i=0;i<keys.length;i++){
    // console.log(keys[i]);
    // console.log(soppingCard[i]);
    var propertyName = keys[i];
    var propertyValue = soppingCard[propertyName];
    // console.log(propertyName,propertyValue);
}

// for in loop
for(var propertyName in soppingCard){
    const values=soppingCard[propertyName];
    console.log(propertyName, values);
}