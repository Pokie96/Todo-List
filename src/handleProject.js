import { appendChildren, todaysDate } from "./helperFunction";
import { Project } from "./classes";
import { renderCreateAddTaskBtn, renderProjectTasks, removeAllTasksDOM, removeAddTaskButton, removeTaskForm } from "./handleTask";
import { Controller, Storer} from "./classes";

//A function to close the form that will be used in other 
//functions within this module
export const closeProjectForm = function(projectsList){
    //Select the form input fields
    const projectFormWrapper = document.querySelector('.project-form-wrapper');

    //Remove the form input fields
    if(projectFormWrapper){
        projectFormWrapper.remove();
    };

    //Re-Render the "New Project" button for use again
    renderNewProjectBtn(projectsList);

};

//This function will open a project form allowing user to 
//enter their project input
export const openProjectForm = function(arrayToSubmit){

    //Create the field elements for the form
    const projectFormWrapper = document.createElement('div');
    const buttonsWrapper = document.createElement('div');
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    //Add the inner text to the button elements
    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';

    //Assign a placeholder to the input element
    newProjectTitleInput.setAttribute('placeholder', 'Project Title');
    
    //Assign classes to the elements
    projectFormWrapper.className = 'project-form-wrapper';
    buttonsWrapper.className = 'project-form-buttons-wrapper';
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    //Add the relative event listeners to the button elements
    cancelNewProjectForm.addEventListener('click', () => {
        closeProjectForm(arrayToSubmit);
    });
    newProjectSubmit.addEventListener('click', () => {
        if(!newProjectTitleInput.value){
            alert('You must enter a title for the project!');
        } else{
            submitNewProject(arrayToSubmit);
        }
    });

    //Select the element where the form will be attached to
    const newProjectsForm = document.querySelector('.new-projects-form');

    //Attach the form to the previous element
    appendChildren(buttonsWrapper, newProjectSubmit, cancelNewProjectForm);
    appendChildren(projectFormWrapper, newProjectTitleInput, buttonsWrapper);

    newProjectsForm.appendChild(projectFormWrapper);
};

//Function that renders the project into the DOM to be 
//displayed on the page
export const renderProject = function(array, container){
    
    //Clear the DOM before rendering again
    container.innerHTML = '';

    //Loop through the given array
    for(let i = 0; i < array.length; i++){
        //Initialise our variables used throughout the function
        let project = array[i];
        let projectElement = document.createElement('div');
        let projectTitle = document.createElement('h2');
        let projectDate = document.createElement('p');
        let removeProjectBtn = document.createElement('button');
        const controller = new Controller;

        //Set inner text of the elements to the values inside
        //of the given objects
        projectTitle.innerText = project.title;
        projectDate.innerText = project.date;
        removeProjectBtn.innerText = 'X';

        //Give the project elements class names for future styling
        projectElement.className = 'indiv-project-containers';
        projectElement.id = `project-${i}`;
        projectTitle.className = 'project-titles';
        projectDate.className = 'project-dates';
        removeProjectBtn.className = 'remove-project-button';
        removeProjectBtn.id = `remove-project-button-${i}`;

        //Render the Add Task Button
        //renderCreateAddTaskBtn(projectElement, project);

        projectElement.addEventListener('click', (e) => {
            if(e.target === document.querySelector(`#remove-project-button-${i}`)){
                controller.deleteProject(project);
                renderProject(array, container);
                renderProjectTasks(project);
                removeAddTaskButton();
                removeAllTasksDOM();
                document.querySelector('#project-title').innerText = '';
            }else{
                Storer.currentlySelected = 'Project';
                removeAllTasksDOM();
                removeAddTaskButton();
                removeTaskForm();
                renderCreateAddTaskBtn(document.querySelector('.add-task-btn-wrapper'),project);
                renderProjectTasks(project);
                setActiveProject(document.querySelector(`#project-${i}`));
            }
        })

        //Append the child elements to their parent element
        appendChildren(projectElement, projectTitle, projectDate, removeProjectBtn);


        //Append the div to the given container
        container.appendChild(projectElement);

    }
};

//Function re-renders the "New Project" button again to the 
//DOM
export const renderNewProjectBtn = function(projectArray){
    if(!document.querySelector('#new-project-button')){
        const newProjectBtn = document.createElement('button');
        newProjectBtn.innerText = 'New Project';
        newProjectBtn.id = 'new-project-button';

        //Add the event listener back to the "New Project" button
        newProjectBtn.addEventListener('click', (e) => {
            openProjectForm(projectArray);
            e.target.remove();
        });

        //Append the button back to the correct div
        const buttonContainer = document.querySelector('.new-project-button-wrapper');
        buttonContainer.appendChild(newProjectBtn);

        removeAllTasksDOM();
    };
};

//Function to create and add a new Project to a given projectsList
export const submitNewProject = function(projectsList){
    //Select the title input element for the project form
    const newProjectTitleInput = document.querySelector('.new-project-title-input');

    //Assign the value entered into the title element to a variable
    const newProjectTitle = newProjectTitleInput.value;    

    //Create a new project with the given title, date and projectsList
    //to store it
    const newProject = new Project(newProjectTitle, todaysDate());

    const controller = new Controller();
    
    //Add the project to the given projects List
    controller.addProject(newProject);

    //Render the projects in the projects list into the given container
    renderProject(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm(projectsList);

    //Remove any currently active project title and task 
    //creation button
    removeAddTaskButton();
    document.querySelector('#project-title').innerText = '';
};

//Function removes the active style effect from all the buttons of the nav 
//in the side bar
export const removeAllActiveButtons = function(){
    const allProjectElements = document.querySelectorAll('.indiv-project-containers');
    const allCalenderButtons = document.querySelectorAll('.project-date-nav button');

    for(let project of allProjectElements){
        project.style.boxShadow = '1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB';
    };

    for(let calenderButton of allCalenderButtons){
        calenderButton.style.boxShadow = '1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB';
    };
}

//Function to show which project is currently chosen.
export const setActiveProject = function(currentProject){
    const projectTitle = document.querySelector("#project-title");
    projectTitle.innerText = '';
    
    removeAllActiveButtons()

    if(currentProject){
        projectTitle.innerText = currentProject.firstChild.textContent;
        currentProject.style.boxShadow = 'inset 4px 4px 6px black, inset -4px -4px 6px black, 1px 1px 3px #DFF8EB,-1px -1px 3px #DFF8EB';
    };
};

//Function shows which calender nav button is currently chosen.
export const setActiveCalenderButton = function(button){
    removeAllActiveButtons();
    button.style.boxShadow = 'inset 4px 4px 6px black, inset -4px -4px 6px black, 1px 1px 3px #DFF8EB,-1px -1px 3px #DFF8EB';
}
