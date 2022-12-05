var person={
    name:"ravi",
    age:20,
    gender:"male",
    getName(){
        return this.name
    }
}
console.log(person.getName());
console.log(person.gender);
console.log(person.age);
// add extra data to person
// =================================
person.salary=26000;
console.log(person.salary);
person.height=180.1
console.log(person.height);
// adding 5000 to salary
// ================================
person.salary+=5000
console.log(person.salary);

console.log("height" in person); //wheather height attribute is present or note in person
