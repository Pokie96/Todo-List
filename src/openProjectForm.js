import appendChildren from "./appendChildren";
import Project from "./newProject";
import renderProject from "./renderProject";

//This function will open a project form allowing user to 
//enter their project input
const openProjectForm = function(arrayToSubmit){

    //Create the field elements for the form
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    //Add the inner text to the button elements
    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';
    
    //Assign classes to the elements
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    //Add the relative event listeners to the button elements
    cancelNewProjectForm.addEventListener('click', closeProjectForm);
    newProjectSubmit.addEventListener('click', () => {
        submitNewProject(arrayToSubmit);
    });

    //Select the element where the form will be attached to
    const newProjectsForm = document.querySelector('.new-projects-form');

    //Attach the form to the previous element
    appendChildren(newProjectsForm, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

};

//A function to close the form that will be used in other 
//functions within this module
const closeProjectForm = function(){
    //Select the form input fields
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectSubmit = document.querySelector('.new-project-submit');
    const cancelNewProjectForm = document.querySelector('.cancel-new-project');

    //Remove the form input fields
    newProjectTitleInput.remove();
    newProjectSubmit.remove();
    cancelNewProjectForm.remove();

    //Re-Render the "New Project" button for use again
    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectForm);

};

//Function to create and add a new Project to a given array
const submitNewProject = function(array){
    //Select the title input element for the project form
    const newProjectTitleInput = document.querySelector('.new-project-title-input');

    //Assign the value entered into the title element to a variable
    const newProjectTitle = newProjectTitleInput.value;    

    //Create a new project with the given title, date and array
    //to store it
    const newProject = new Project(newProjectTitle, 2023,array);

    //Add the project to the given array
    newProject.addProject();

    //Render the projects in the array into the given container
    renderProject(array, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm();

    //Re-Render the "New Project" button for use again.
    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectForm);
};

export default openProjectForm;