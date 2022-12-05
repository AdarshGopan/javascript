var num=32332321
var temp=num
var res=""
while(num!=0)
{
    let last=num%10
    res+=last
    num=Math.floor(num/10)
}
console.log(res);
if(res==temp)
{
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}