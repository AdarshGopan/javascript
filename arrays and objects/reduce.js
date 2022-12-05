var l=[2,4,7,9,3,8,6,35,65,18,10,53,21]

var res=l.reduce((n1,n2)=>n1+n2)
console.log(res);
// =============================
var res=l.reduce((n1,n2)=>n1*n2)
console.log(res);
// =============================
// largest
// =============================
var res=l.reduce((n1,n2)=>n1<n2?n2:n1)
console.log(res);

// minimum
// ============================
var min=l.reduce((n1,n2)=>n1>n2?n2:n1)
console.log(min);