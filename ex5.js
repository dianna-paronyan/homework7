class Person{
    constructor(firstName, lastName, gender, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {

        return this._firstName;
    }

    set firstName(value) {

        this._firstName = value;
    }

    get lastName() {

        return this._lastName;
    }

    set lastName(value) {

        this._lastName = value;
      }

    get gender() {

        return this._gender;
    }
    
    get age() {

        return this._age;
    }

    set age(value) {

        this._age = value;
    }

    toString(){

       return `${this._firstName} ${this._lastName} ${this._gender}`
    }


}
let passExams = []
class Student extends Person{
    constructor(firstName, lastName, age, gender, program, year, fee){
        super(firstName, lastName, age, gender)
        this._program = program;
        this._year = year;
        this._fee = fee;
    }

    get year() {

        return this._year;
    }
    
    set year(value) {

        this._year = value;
    }
    
    get program() {

        return this._program;
    }
    
    set program(value) {

        this._program = value;
    }

    passExam(program, grade){

        if (grade >= 50) {

            passExams.push(program);

        }
        
        if (passExams.length === this._program.length) {

            this._year += 1;
        }
    }

    toString() {

        return super.toString() + ` ${this._program} ${this._year} ${this._fee}`
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }

    get program() {

        return this._program;
    }
    
    set program(value) {

        this._program = value;
    }

    get pay() {

        return this._pay;
    }

    set pay(value) {

        this._pay = value;
    }

    toString() {

        return super.toString() + ` ${this._program} ${this._pay}`
    }

}


const student1 = new Student("Gabriella", "Minasyan", "female", 19, ["React js", "Node js"], 2021, 20000);
student1.passExam("React js", 98);
console.log(student1._year);
student1.passExam("Node js", 96);
console.log(student1.toString());

const teacher = new Teacher("Harut", "Sahakyan", "male", 23, ["React js", "Node js"], 200000);
console.log(teacher.toString())