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
class Class{
    constructor(number) {
        this.number = number;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+" I am a Stusent. I am at Class "+this.klass.number;
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
    introduceWith(student){
        if(student.klass.number==this.klass){
            return super.introduce()+" I am a Teacher. I teach "+student.name;
        }
        else{
            return super.introduce()+" I am a Teacher. I don't teach "+student.name;
        }
    }
}
var person=new Person('Tom',21);
console.log(person.introduce());
var class1=new Class(2);
var class4=new Class(4);
var student=new Student('Jerry',15,class1);
var student1=new Student('kim',15,class4);
console.log(student.introduce());
console.log(student1.introduce());
var teacher = new Teacher('Tom',21);
var teacher1 = new Teacher('Tom',21,2);
console.log(teacher.introduce());
console.log(teacher1.introduce());
console.log(teacher1.introduceWith(student));
console.log(teacher1.introduceWith(student1));
