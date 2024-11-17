function MoveZeros(arr)
{ 
let  n=arr.length
 j=0
 for(let i=0;i<n;i++)
 {
    if(arr[i]!=0 && arr[j]==0)
        //swasp
    {let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp

    }
      if(arr[j]!=0)
        j++
 }
 return arr
}


console.log(MoveZeros([13,34,7,0,0,0,33,1]))