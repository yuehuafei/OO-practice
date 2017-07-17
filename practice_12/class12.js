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
        if(student.klass!=this){
            console.log('It is not one of us.');
        }else{
            this.leader=student.id;
        }
    }
    appendMember(student){
        student.klass=this;
    }
    isIn(student){
        if(student.klass.number==this.number){
            return true;
        }
        else{
            return false;
        }
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
    constructor(id,name,age,classes){
        super(id,name,age);
        this.classes=classes;
    }
    introduce(){
        if(this.classes.length==0){
            return super.introduce()+" I am a Teacher. I teach No Class ";
        }
        else{
            var str="";
            for(var item of this.classes){
                str+=item.number+",";
            }
            return super.introduce()+" I am a Teacher. I teach Class "+str;
        }
    }
    isTeachering(student){
        for(var item of this.classes){
            if(item.isIn(student)){
                if(student.id==item.leader){
                    console.log('I am '+this.name+". I know "+student.name+' become Leader of Class '+item.number);
                }
                else{
                    console.log('I am '+this.name+". I know "+student.name+' has joined Class '+item.number);
                }
                return true;
            }
        }
        console.log(student.name+' is not in my class.');
        return false;
    }
}
var person=new Person(1001,'Tom',21);
console.log(person.introduce());
var class1=new Class(2);
var student=new Student(1002,'Jerry',15,class1);
var class3=new Class(3);
var class4=new Class(4);
var student1=new Student(1004,'kim',15,class4);

class4.assignLeader(student1);

console.log(student.introduce());
console.log(student1.introduce());

//console.log(student1.klass);

var student3=new Student(1003,'Bob',14);
class1.assignLeader(student3);
class1.appendMember(student3);
console.log(student3.introduce());

var teacher = new Teacher(2001,'Tom',21,[]);
var teacher1 = new Teacher(2002,'Tom',21,[class1,class3,class4]);
teacher1.isTeachering(student);
teacher1.isTeachering(student1);
console.log(teacher.introduce());
console.log(teacher1.introduce());