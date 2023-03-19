interface ValidateConfig{
    [property:string]: {
        [validateProp:string] : string[]
    }
}

const registeredValidators:ValidateConfig= {};

function Required(target:any, propName:string){
    const {name} = target.constructor; 
    registeredValidators[name] = {
        [propName]: ['required']
    }
}

function PositiveNumber(target:any, propName:string){
    const {name} = target.constructor; 
    registeredValidators[name] = {
        [propName]: ['positive']
    }
}

function validate(obj:any){
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig){
        return true
    }
    let isValid = true;
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch (validator){
                case "required": 
                    return isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    return isValid = isValid && obj[prop] > 0
                    break;
            }
        }
    }
    return isValid;

}

class Course {
    @Required
    title:string

    @PositiveNumber
    price:number
    constructor(t:string,  p:number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit",()=> {
    const title:string= (document.getElementById("title") as HTMLInputElement).value;
    const price:number = +((document.getElementById("price") as HTMLInputElement).value);
    
    const course = new Course(title, price);
    
    if(!validate(course)){
        alert("invalid input")
        return;
    }
})