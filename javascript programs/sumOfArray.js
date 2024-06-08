const arr=[2,4,6,1,6,5,8,4];
function arrSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(arrSum(arr));