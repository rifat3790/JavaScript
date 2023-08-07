function isLeapYear(a){
    let newArray=[];
    for(let i=0;i<a.length;i++){
        if(a[i]%4==0){
            newArray.push(a[i]);
        }
    }
    return newArray;
    // console.log(newArray);
}

const a=[2002, 2004, 2007, 2024, 2036, 2038];
const result=isLeapYear(a);
console.log("Leap year array element is: ",result);
// isLeapYear([2002, 2004, 2007, 2024, 2036, 2038]);