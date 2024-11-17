
function RemoveElemenets(arr,rem)
{ 
let  n=arr.length
 j=0
 
 for(let i=0;i<n;i++)
 {
     if(arr[i]==rem)
        arr[i]='_'
     
 }
 
 return arr
}


console.log(RemoveElemenets([3,2,2,3],3))
