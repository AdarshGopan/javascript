var l=[2,4,7,9,3,8,6,35,65,18,10,53,21]

var evens=l.filter((n)=>n%2==0)
console.log(evens);

var out=l.map((n)=>n>5?n+1:n-1)
console.log(out);
