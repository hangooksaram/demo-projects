type NumberType = number | string;

function noOverloadAdd(a:NumberType, b:NumberType){
    if(typeof a === "string" || typeof b ==="string"){
        return a.toString() + b.toString()
    }
    return a+b;
}

const result1 = noOverloadAdd("max ", "min");
// result1.split(' ') 
// 우리는 반환값이 string 이라는 것을 알 수 있지만 ts 는 이를 알 수 없기 때문에 위의 split 메서드는 사용할 수 없고 에러 뜸

function overloadAdd(a:number, b:number): number
function overloadAdd(a:string, b:string): string
function overloadAdd(a:NumberType, b:NumberType){
    if(typeof a === "string" || typeof b ==="string"){
        return a.toString() + b.toString()
    }
    return a+b;
}

const result2 = overloadAdd("max ", "min");
result2.split(' '); // 함수 오버로드로 사용 가능