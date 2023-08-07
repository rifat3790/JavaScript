const country = 'Bangladesh';
const age = 21;
const isIndependent = true;
const student = {id: 121, class: 11, Name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20 ];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));


const newFriendAge = [12, 13, 11, 13];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);