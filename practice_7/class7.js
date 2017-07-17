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
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass==null){
            return super.introduce()+" I am a Teacher. I teach No Class ";
        }
        return super.introduce()+" I am a Teacher. I teach Class "+this.klass;
    }
}
var person=new Person('Tom',21);
console.log(person.introduce());
var student=new Student('Tom',21,2);
console.log(student.introduce());
var teacher = new Teacher('Tom',21);
var teacher1 = new Teacher('Tom',21,4);
console.log(teacher.introduce());
console.log(teacher1.introduce());
