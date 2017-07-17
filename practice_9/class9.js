/**
 * Created by xxx on 17-7-17.
 */
'use strict';
class Person {
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
class Class{
    constructor(number) {
        this.number = number;
    }
    assignLeader(student){
        this.leader=student.id;
    }
}
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass.leader==this.id){
            return super.introduce()+" I am a Stusent. I am Leader of Class "+this.klass.number;
        }
        else{
            return super.introduce()+" I am a Stusent. I am at Class "+this.klass.number;
        }

    }
}
class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass==null){
            return super.introduce()+" I am a Teacher. I teach No Class ";
        }
        return super.introduce()+" I am a Teacher. I teach Class "+this.klass;
    }
}
var person=new Person(1001,'Tom',21);
console.log(person.introduce());
var class1=new Class(2);
var student=new Student(1002,'Jerry',15,class1);

var class4=new Class(4);
var student1=new Student(1004,'kim',15,class4);

class4.assignLeader(student1);

console.log(student.introduce());
console.log(student1.introduce());

var teacher = new Teacher(2001,'Tom',21);
var teacher1 = new Teacher(2002,'Tom',21,2);
console.log(teacher.introduce());
console.log(teacher1.introduce());