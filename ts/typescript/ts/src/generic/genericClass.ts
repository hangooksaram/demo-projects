class DataStorage<T>{
    private data:Array<T> = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item), 1)
    }
}

const dataStorage = new DataStorage();

dataStorage.addItem(5);
dataStorage.addItem("5");