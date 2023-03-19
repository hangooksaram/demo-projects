function Logger(constructor:Function){
    console.log(constructor);
}

@Logger
class Person{
    constructor(){
    }
}
