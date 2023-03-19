interface Obj{
    name : string,
    id : number
}

const obj:Partial<Obj> = {};

obj.id = 5;
obj.name = "hj";

const readonlyArr:Readonly<Array<number>> = [1,2,3];

//arr.push(4); // error