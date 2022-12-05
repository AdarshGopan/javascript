function smartSub(n1,n2)
{
    return n1>n2?n1-n2:n2-n1
                // if(n1>n2){
                //     return n1-n2
                // }
                // else{
                //     return n2-n1
                // }
            }
console.log(smartSub(1,7));
//arrow function
//======================================================
var smartsub=(n1,n2)=>n1>n2?n1-n2:n2-n1
console.log(smartsub(2,11));
