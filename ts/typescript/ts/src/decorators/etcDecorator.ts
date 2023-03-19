// 속성 데코레이터
function Log(target:any, propertyName:string | Symbol){
    console.log("this is 속성 데코레이터")
    console.log("this is target", target);
    console.log("this is name", propertyName);
}

// 접근자 데코레이터
function Log2(target:any, name:string | Symbol, descriptor:PropertyDescriptor){
    console.log("this is 접근자 데코레이터")
    console.log("this is target", target);
    console.log("this is name", name);
    console.log("this is descriptor", descriptor);
}

// 메서드 데코레이터
function Log3(target:any, name:string | Symbol, descriptor:PropertyDescriptor){
    console.log("this is 메서드 데코레이터")
    console.log("this is target", target);
    console.log("this is name", name);
    console.log("this is descriptor", descriptor);
}


// 매개변수 데코레이터
function Log4(target:any, name:string | Symbol, position:number){
    console.log("this is 매개변수 데코레이터")
    console.log("this is target", target);
    console.log("this is name", name);
    console.log("this is position", position);
}

class Product{
    @Log
    title:string
    private _price:number

    @Log2
    set price(value:number){
        this._price = value;
    }

 
    constructor(){
        this._price= 5;
        this.title = "yes"
    }

    @Log3
    getPrice(){
        console.log(this._price);
    }
}