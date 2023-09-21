//Contains the classes required for my JavaScript application

import { getArrayLocal } from "./helperFunction";

//A class constructor that can be used to create new projects
export class Project {
    constructor(title, date){
        this.title = title;
        this.date = date;
        this.taskList = [];
    }

    addTask(title, description, dueDate, priority, complete){
        const task = new Task(title, description, dueDate, priority, complete);
        this.taskList.push(task);
    }

    removeTask(task){
        this.taskList.splice(this.taskList.indexOf(task), 1);
    }

    static restoreGenericObject(genericObject){
        let restoredObject = new Project(genericObject.title, genericObject.date);
        return restoredObject;
    }
};

//Class to store values that are shared throughout the whole of the program
export class Storer {
    constructor(){

    };

    static get currentlySelected() {
        return this._currentlySelected || undefined;
    }

    static set currentlySelected(value) {
        this._currentlySelected = value;
    }

    //Function to store an array into local storage
    static storeArrayLocal(keyName, array){
        localStorage.setItem(keyName, JSON.stringify(array));
    };

    //Function returns an array from local storage
    static getArrayLocal(keyName){
        let array;
        if(Storer.checkLocal(keyName) === true){
            let genericArray = JSON.parse(localStorage.getItem(keyName));
            array = Storer.restoreGenericArray(genericArray);
        } else{
            array = [];
        }
        return array;
    };

    //Function checks for existing array stored in local storage
    //and removes it
    static removeArrayLocal(keyName){
        localStorage.removeItem(keyName);
    };

    //Function clears the local storage
    static clearLocal(){
        localStorage.clear();
    };

    //Check local storage for a key
    static checkLocal(key){
        if(key in localStorage){
            return true;
        } else{
            return false;
        }
    };

    static restoreGenericArray = function(array){
        let restoredArray = [];
        for(let i = 0; i < array.length; i++){
            let restoredObject = Project.restoreGenericObject(array[i]);
            restoredArray.push(restoredObject);
        }
        return restoredArray;
    }
};

//This class has control over the collection of the projects
export class Controller {
    static projectsArray = Storer.getArrayLocal('Projects Array');

    getProjectsArray(){
        return Controller.projectsArray;
    };

    addProject(project){
        Controller.projectsArray.push(project);
    };

    deleteProject(project){
        Controller.projectsArray.splice(Controller.projectsArray.indexOf(project), 1);
    };
    
};

//This is the class constructor for our Tasks
export class Task {
    constructor(title, description, dueDate, priority, complete = false){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
        this.type = "Task";
    }; 

    changeCompleteStatus(){
        if(this.complete === false){
            this.complete = true;
        } else{
            this.complete = false;
        };
    };
};

