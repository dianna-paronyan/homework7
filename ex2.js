class Employee{
    constructor(id, firstName, lastName, salary, position, workingHours){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._salary = salary;
        this._position = position;
        this._workingHours = workingHours;
    }

    getFullName(){

      return `${this._firstName} ${this._lastName}`;

    }

    getAnnularSalary() {

        return `${12 * this._salary}`;
    }

    raiseSalary(percent){

        return `${((this._salary * percent)/100) + this._salary }`;
    }

    get id(){

        return this._id;
    }

    set id(value){

        this._id = value;
    }

    get salary(){

        return this._salary;
    }
    
    set salary(value){

       this._salary = value;
    }

    get position(){

        return this._position;
    }
    set position(value){

       this._position = value;
    }

    get workingHours(){

        return this._workingHours;
    }

    set workingHours(value){

        if(value > this._workingHours){

            this._salary = this.raiseSalary(10);
        }

        return this._workingHours = value;
    }

}

const employee1 = new Employee("111", 'Anna', 'Avanesyan', 300000, 'engeneer', 8);
employee1.workingHours = 10;
console.log(employee1.workingHours);
console.log(employee1);
