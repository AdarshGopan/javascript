 var items=
    [
        {id:1,name:"smasungm52",brand:"samsung",band:"5g",price:31000,colors:["black","red","mint"]},
        {id:2,name:"samsung galaxy j7",brand:"samsung",band:"4g",price:28000,colors:["black"]},
        {id:3,name:"redminote10",brand:"mi",band:"4g",price:17000,colors:["black","red","mint"]},
        {id:4,name:"mi11i",brand:"mi",band:"5g",price:28000,colors:["black","red","mint"]},
        {id:5,name:"iqneo6",brand:"iq",band:"5g",price:30000,colors:["black","red","mint"]},
        {id:6,name:"motog72",brand:"motorola",band:"4g",price:17000,colors:["black","red","mint"]},       
    ] 

//  console.log(items.length);
//  items.map(p=>p.name).forEach(n=>console.log(n))
//  console.log(names);
// items.filter(p=>p.brand=="samsung").forEach(m=>console.log(m.name))
// items.filter(p=>p.band=="5g").forEach(p=>console.log(p.name))
// var costly=items.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(costly);

items.sort((n1,n2)=>n1.price-n2.price)
console.log(items);