const friends = [12, 45, 32, 22, 44, 62, 29, 69, 86];

const partial = friends.splice(2,5, 99, 555, 777);
console.log(partial);
console.log(friends);