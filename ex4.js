class Account{
    constructor(id, name, balance){
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    credit(amount){

        return `${amount + this._balance}`
    }

    debit(amount){
        
        return this._balance < amount ? "Amount exceeded balance." :  `${this._balance - amount}`
       
    }

    transferTo(anotherAccount, amount){

        if(amount > this._balance){

            return "Amount exceeded balance." ;

        }else{
            
              this._balance = this._balance - amount;
              anotherAccount +=  amount;
              
        }
    
        return anotherAccount;
    }

    static identifyAccounts(accountFirst, accountSecond){

        if(accountFirst._id === accountSecond._id && accountFirst._name === accountSecond._name && 
            accountFirst._balance === accountSecond._balance){

            return 'Accounts are  same';

        }else{

            return `Accounts aren't same`
        }
             
    }

    toString(){

        return `${this._name}'s account id is ${this._id} and the balace is ${this._balance}:` ;
    }

    
    get id(){

        return this._id;
    }
    set id(value){

        this._id = value;
    }

    get name(){

        return this._name;
    }
    set name(value){

        this._name = value;
    }

    get balance(){

        return this._balance;
    }
    set balance(value){

        this._balance = value;
        
    }
}

const accaunt1 = new Account(4715,'Gor', 50000);
const accaunt2 = new Account(4575,'Nona', 20000);

console.log(Account.identifyAccounts(accaunt1, accaunt2));
accaunt2._balance = accaunt1.transferTo(accaunt2._balance, 10000);
console.log(accaunt1.toString())
console.log(accaunt2._balance);
console.log(accaunt1._balance);
