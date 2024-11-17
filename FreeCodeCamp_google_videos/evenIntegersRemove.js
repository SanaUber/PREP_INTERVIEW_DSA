
function evenIntegersRemove(arr)
{ 
let  n=arr.length
 
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1); // remove the even number at index i
    }
  }return arr
}


console.log(evenIntegersRemove([2,4,1,8,3,6,7]))
