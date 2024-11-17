function nonRepeatingString(a)
{ 
let  n=a.length,map=new Map()

 j=0
 for(let i=0;i<n;i++)
 {if(map.has(a[i]))
     map.set(a[i],map.get(a[i])+1)
     //how to add count of this charac)
     else
     map.set(a[i],1)
 }
 console.log(map)
 for(let i=0;i<n;i++)
    {if(map.get(a[i])==1)
        return a[i]}
 return null
}


console.log(nonRepeatingString("racecars"))
