/*---*/
function merge<T extends object, U>(a:T, b:U){
    return Object.assign(a, b);
}

merge<{name:string}, {age:string}>({name:"hj"}, {age: "29"});

/*---*/
interface Lengthy{
    length : number
}

function countAndDescribe<T extends Lengthy>(el:T):[T, string]{
    const describeText = el.length > 0 ? `got ${el.length} value` : "got no value" 
    return [el, describeText]; 
}

/*---*/
function extractAndConvert<T extends object, U extends keyof object>(obj:T, key:U){
    return obj[key];
}