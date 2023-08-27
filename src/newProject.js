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
}

export default Project;