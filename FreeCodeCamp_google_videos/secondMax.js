function secondMax(arr)
{let max=-Infinity
let secondmax=-Infinity
let diff=-Infinity


    for(let i=0;i <arr.length-1;i++)
    {if(arr[i]>max)
    {
        secondmax=max
        max=arr[i]
    }
     else if(secondmax<arr[i] && arr[i]!=max)
        {
            secondmax =arr[i]
        }
    }
        console.log('secondmax',secondmax)
        return secondmax
}


console.log(secondMax([13,34,7,33,1]))