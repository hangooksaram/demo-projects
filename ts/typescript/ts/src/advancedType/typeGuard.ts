// typeof

// type a = string | number;
// type b = string | number;

// function add(a:a, b:b){
//     if(typeof a === "string" || typeof b === "string" ){
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// in

// type a = {
//     el1: string | number,
//     el2: string |boolean
// }

// type b = {
//     el1:string | number,
//     el3:string 
// }

// type c = a | b;


// function printObj(obj:c){
//     if("el1" in obj){
//         console.log(obj.el1)
//     }
//     if("el3" in obj){
//         console.log(obj.el3)
//     }
// }

// intance of

class A { 
    a(){
        console.log("a");
    }
    b(){
        console.log("b");
    }
}

class B { 
    a(){
        console.log("a");
    }
    c(){
        console.log("c");
    }
}

type c = A | B;

const obj1 = new A();
const obj2 = new B();

function useC(obj:c){
    if(obj instanceof A){
        console.log("this is obj1", obj);
    }
    if(obj instanceof B){
        console.log("this is obj2", obj);
    }
}
