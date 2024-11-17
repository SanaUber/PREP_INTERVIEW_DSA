//NextGreaterElement.js
function NextGreaterElement(arr)
{ 
let  n=arr.length-1
i=0,k=0
 j=n
 let result=new Array(n).fill(-1)
 let stack=[]
   for(let i=n;i>=0;i--)
   {
    console.log('ini;',stack)
    while(stack.length>0  && stack[stack.length-1]<arr[i])
     {  console.log('beforepop;',stack,arr[i]) 
        stack.pop()
        console.log('pop;',stack)}
         if(stack.length>0)

      { 
        console.log('result',stack)
        result[i]=stack[stack.length-1]
  }  
  console.log('what pushing',stack)
  stack.push(arr[i])
  console.log('what pushed',stack)
   }
 return result
}


console.log(NextGreaterElement([4,7,3,4,8,1]))
