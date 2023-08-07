var soppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// When you know the specific property name , use dot notation
var penCount= soppingCard.pen;
// Alternative system
// When you know the specific property name , use dot notation
var penCount2 = soppingCard['pen'];

var propertyName= 'books';
var propertyValue = soppingCard[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(soppingCard);
var propertiesValues = Object.values(soppingCard);
// console.log(properties);
// console.log(propertiesValues);

// console.log(soppingCard);

// Set
soppingCard.mouse=15;
soppingCard['mouse'] = 22;
console.log(soppingCard);