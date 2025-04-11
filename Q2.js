const a=(array)=>{
    let temp=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            temp.push(array[i]);
        }
    }
    return temp;
}
console.log(a([1,2,3,4,45,5,6,8,90]))
const sum=(arr)=>{
   return  arr.reduce((tot,i)=>(tot+arr[i],0))
}
console.log(sum([1,2,3,4,5,6,7,8,]))