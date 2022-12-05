var init=4
var fin=22
var sum=0
for(i=init;i<=fin;i++)
{
    if(i%2==0)
    {
        sum=sum+i
        console.log(i);
    }
}
console.log(`sum of even number between range=${sum}`);