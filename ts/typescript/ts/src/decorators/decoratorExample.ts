function autobind(_:any, _2:string, descriptor:PropertyDescriptor){
     const originalDescriptor = descriptor.value;
     const adjDescriptor:PropertyDescriptor = {
        configurable:true,
        enumerable: false,
        get(){
            const boundFn = originalDescriptor.bind(this); // 데코레이터에서 this 를 올바르게 참조
            return boundFn
        }
     }
     return adjDescriptor
}


class Printer {
    message  ="this is printer"

    @autobind
    showMessage(){
        console.log(this.message) // this 는 위의 작업 없으면 이벤트 리스너 참조
    }
}

const button = document.querySelector('button');
const p = new Printer();
button?.addEventListener("click", ()=> {
    p.showMessage();
})