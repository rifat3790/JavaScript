const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini. sada sada kala kala';

const parts = lyrics.split('.');
const chars = lyrics.split('');
// console.log(parts);
// console.log(chars);

// slice
// const partial = lyrics.slice(5,8);
// const partial2 = lyrics.substring(5, 8);
// console.log(partial);
// console.log(partial2);

// Trim
// const st= '         Hello world!        ';
// console.log(st);
// console.log(st.trim());

// join
const line =['Tumi bondhu kala pakhi ami jeno ki',
' bosonto kale tomai bolte parini',
' sada sada kala kala'];

const newSong = line.join(':');
console.log(newSong);