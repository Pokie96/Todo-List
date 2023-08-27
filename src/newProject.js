import ToDo from "./createToDo";

class Project {
    constructor(title, date, array){
        this.title = title;
        this.date = date;
        this.array = array;
    }

    addProject(){
        this.array.push(this);
    }

    removeProject(){
        this.array.splice(this.array.indexOf(this), 1);
    }

    addToDo(toDoName, title, description, dueDate, priority, complete){
        const toDo = new ToDo(title, description, dueDate, priority, complete);
        this[toDoName] = toDo;
    }

    removeToDo(key){
        delete this[key];
    }
}

export default Project;