var win_or_lose=new Promise((res,rej)=>{
    let ticketnum=323
    let pricenum=Math.floor(Math.random()*1000)
    if(ticketnum==pricenum)
    {
        res("you won the price and heart")
    }
})
win_or_lose.then(res=>console.log("I want to by a new car"))
