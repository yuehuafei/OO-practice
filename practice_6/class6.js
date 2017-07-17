/**
 * Created by xxx on 17-7-17.
 */
'use strict';
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+" I am a Stusent. I am at Class "+this.klass;
    }
}
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return super.introduce()+" I am a Worker. I have a job ";

    }
}
var person=new Person('Tom',21);
console.log(person.introduce());
var student=new Student('Tom',21,2);
console.log(student.introduce());
var worker = new Worker('Tom',21);
console.log(worker.introduce());

