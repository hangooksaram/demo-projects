function LoggerFactory(loggMessage :string){
    return  function (constructor:Function){
        console.log(loggMessage);
    }
}


@LoggerFactory("this is from loggerFactory")
class PersonFactory{
    constructor(public name:string="hj"){
        console.log(name)
    }
}

function WithTemplate(template:string, el:string){
    return function(_:Function){
        console.log()
        const element= document.getElementById(el);
        if(element){
            element.innerHTML = template
        }
    }
}

@Logger
@WithTemplate("<h1>this is from WithTemplate</h1>", "app")
class PersonTemplate{
    constructor(){
    }
}