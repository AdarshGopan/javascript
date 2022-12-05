var baleno={
    name:"baleno",
    brand:"nexa",
    price:"9lac",
    colors:["red","grey","blue"],
    varients:["petrol","ev"],
    getPrice(){
        return this.price
    }
}
var glanza={
    name:"glanza",
    brand:"Toyotta",
    price:"10lac",
}
glanza.__proto__=baleno //glanza inherit the properties of baleno with __proto__
console.log(glanza.varients);
console.log(glanza.colors);
// var arr=[]
// console.log(arr.__proto__.__proto__);//array,functions,string parent is object
// console.log(baleno.__proto__);
console.log(glanza.getPrice());//overriding parent price and return glanza's price 10lac
