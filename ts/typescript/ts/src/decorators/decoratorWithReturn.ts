function DecoratorWithReturn(template:string, el:string){
    return function<T extends {new(...args:any[]) : {name:string}}>(originalConstructor:T){
        console.log(originalConstructor)
        return class extends originalConstructor{ // 새로운 class (생성자 함수) 를 return 하겠다.
            constructor(..._:any[]){
                super(); // 상속된 class 이니까 super call
                const element= document.getElementById(el);
                if(element){
                    element.innerHTML = template
                    element.textContent = this.name;     
                }
            }
        }
    }
}

@DecoratorWithReturn("<h1>yes</h1>", "app with return")
class PersonWithReturn{
    name:string= "hj"
    constructor(){
        console.log("this is person ")
    }
}