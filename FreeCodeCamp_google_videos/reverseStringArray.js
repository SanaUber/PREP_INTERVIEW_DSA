 
function reverseStringArray(arr)
{ 
let  n=arr.length
 i=0,j=n-1
 while(i<j)
 {
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
 }

 return arr
}

console.log(reverseStringArray([2,4,1,8,3,6,7]))
