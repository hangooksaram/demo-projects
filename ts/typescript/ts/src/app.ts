function test(
    a:"literal"
):string{
    return a;
}


type User = {name :string, age : number};

const user:User = {name : "hj", age : 5}

// const cbTest =(a:string, callback:(a:string)=> void)=>{
//     if(a){
//         callback(a);
//     }
// }

// cbTest("yes", ()=>{});