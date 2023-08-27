class ToDo {
    constructor(title, description, dueDate, priority, complete = false){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }; 

    addToDo(project, keyName){
        project[keyName] = this;
    }

    removeToDo(project, key){
        delete project[key];
    }

    changeCompleteStatus(){
        if(this.complete === false){
            this.complete = true;
        } else{
            this.complete = false;
        };
    };
};

export default ToDo;