function MissingNumbers(arr)
{ 
let  n=arr.length+1
 j=0,

 sum= (n*(n+1))/2 
console.log(sum,n)
for(let i=0;i<n-1;i++)
{
    sum=sum-arr[i]
    console.log('in the loop',sum)
}

//  arrNew= new Array(n).fill(0)
//  arrNew[0]=1
//  for(let i=0;i<n;i++)
//  { 
//      if(arr[i]<n)
//     arrNew[arr[i]]=1
      

      
//  }
//  let value=arrNew.indexOf(0)
 return  sum 
}


console.log(MissingNumbers([2,4,1,8,3,6,7]))