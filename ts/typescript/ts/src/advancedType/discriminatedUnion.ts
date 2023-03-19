interface Bird {
    type: 'bird', // 리터럴 타입
    flyingSpeed : number
}

interface Horse{
    type: 'horse', // 리터럴 타입
    runningSpeed : number
}

type Animal=  Bird | Horse;

function moveAnimal(animal: Animal){
    switch (animal.type){
        case "bird":{
            console.log(animal.flyingSpeed)
            break;
        }
        case "horse":{
            console.log(animal.runningSpeed)
            break;
        }
    }
}