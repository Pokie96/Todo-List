import openTaskForm from "./openTaskForm";

//Function creates our "Add Task Button" given a parent element
//to append to.
const createAddTaskBtn = function(elementToAppendTo){
    //Create the button element with text.
    const addTaskBtn = document.createElement('button');
    addTaskBtn.innerText = 'Add Task';

    //Add the event listener to the button which opens the 
    //"Task Form" on the element that was given.
    addTaskBtn.addEventListener('click', () => {
     openTaskForm(elementToAppendTo)
    })

    //Append the button to the given element.
    elementToAppendTo.appendChild(addTaskBtn);
};

export default createAddTaskBtn