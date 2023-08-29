import Task from "./createTask";

//A class constructor that can be used to create new projects
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

    addTask(taskName, title, description, dueDate, priority, complete){
        const task = new Task(title, description, dueDate, priority, complete);
        this[taskName] = task;
    }

    removeTask(key){
        delete this[key];
    }
}

export default Project;