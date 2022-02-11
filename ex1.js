class Rectangle{
    constructor(length, width){
        this._length = length;
        this._width = width;
    }

    getArea(){

      return `${this._length * this._width} ` ;
    }

    getPerimetier(){

        return `${(this._length * 2 ) + (this._width * 2 )} ` 
    }

    toString(){

        return `Rectangle length is equal ${this._length} ahn width is equal ${this._width}` 
    }

    get length(){

        return this._length;
    }

    set length(value){
        
        if(value <= this._width){

            throw new Error('length of rectangle must be longer than width')
        }
    }

    get width(){

        return this._width;
    }

    set width(value){
        
        if(value >= this._length){

            throw new Error('width of rectangle must be smaller than length');
            
        }
    }

}

const rectangle1 = new Rectangle(10,5);

rectangle1.length = 3;
console.log(rectangle1.length)