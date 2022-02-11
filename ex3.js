class Author{
    constructor(name, email, gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    toString(){

        return `${this._name} ${this._email} ${this._gender} ` ;
      }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }

    get gender(){
        return this._gender;
    }

    set gender(value){
        this._gender = value;
    }

}

const author = new Author('','Shirvanzade', 'male');

console.log(author.toString());



class Book{
    constructor(title, author, price, quantity){
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get author(){
        return this._author;
    }

    set author(value){
        this._author = value;
    }

    get price(){

        return this._price;
    }

    set price(value){
        this._price = value;
    }

    get quantity(){

        return this._quantity;
    }

    set quantity(value){
        this._quantity = value;
    }

    toString(){

      return `${this._title} ${this._author} ${this._price} ` ;
    }

    getProfit(){

        return `${this._price * this._quantity}`
    }
}

const book1 = new Book('Qaos', author, 5000, 20);

console.log(book1.getProfit());
console.log(book1.toString());