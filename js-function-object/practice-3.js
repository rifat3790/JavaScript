var sum=0;
function make_avg(a,size){
    for(var i=0;i<size;i++){
        sum=sum+a[i];
    }
    var avg=sum/size;
    return avg;
}

var a=[10, 20, 30, 40];

var total=make_avg(a, a.length);
console.log(total);
