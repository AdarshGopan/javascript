class Person{
    constructor(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPerson()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
}
var p=new Person("ravi",24,"male")
p.printPerson() 