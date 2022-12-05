setTimeout(()=>{
    console.log("line 1.0");
},0)
console.log("line A");
setTimeout(()=>{
    console.log("line 2.0");
},4000)
setTimeout(()=>{
    console.log("line 3.0");
},4000)
console.log("line B");
setTimeout(()=>{
    console.log("line 4.0");
},2000)

// webapi -> dom events,fetch,setTimeOut(),setInterval()
// manage asynchronus types


// hoisting==========================
one()
function one()
{
    console.log("fun");
}
a
var a=10;
// coercion===========
console.log("10"==10);
console.log("10"===10);//strict check no auto conversion 

