/**
 * Created by xxx on 17-7-17.
 */
'use strict'
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
class Student{
    constructor(name,age,klass){
        this.name=name;
        this.age=age;
        this.klass=klass;
    }
    introduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old."+" I am a Stusent. I am at Class "+this.klass;
    }
}
var person=new Person('Tom',18);
console.log(person.introduce());
