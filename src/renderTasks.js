import appendChildren from "./appendChildren";
import assignClass from "./assignClass";

//Function to render the tasks of a project on to the DOM
//to be displayed on the page
const renderTasks = function(project){
    //Assign a variable to an array of the key names from each
    //project.
    let keyArray = Object.keys(project);

    //Create an element to contain all of the to do properties
    const tasksContainer = document.createElement('div');

    //Loop through the key arrays to find any to do keys inside 
    //of the projects.
    for(let i = 0; i < keyArray.length; i++){
        let currentKey = keyArray[i];
        if(project[keyArray[i]].type === "Task"){
            //Initialize all of the variables that will be 
            //used through the function to their dom elements
            const title = document.createElement('p');
            const description = document.createElement('p');
            const dueDate = document.createElement('p');
            const priority = document.createElement('p');
            const complete = document.createElement('p');

            //Append text to elements from their respective 
            //properties
            title.innerText = project[currentKey].title;
            description.innerText = project[currentKey].description;
            dueDate.innerText = project[currentKey].dueDate;
            priority.innerText = project[currentKey].priority;
            complete.innerText = project[currentKey].complete;

            //Assign a class name to these elements for future
            //styling.
            assignClass('task-properties', title, description, dueDate, priority, complete)

            //Append all of the new elements to the container
            //for this to do object
            appendChildren(tasksContainer, title, description, dueDate, priority, complete);

        } 
    }
    //Return the container containing all of the to do properties
    return tasksContainer
}

export default renderTasks;