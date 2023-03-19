const arr:Array<string>= ["1", "@"]
const promiseFunc:Promise<string> = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log(resolve("yes"))
    }, 1000)
})