
import openProjectForm from "./openProjectForm.js";

const projectsList = [];

//Add functionality to the "New Project" button, which will 
//open a form, allowing the user to input their project 
//information
const newProjectBtn = document.querySelector('#new-project-button');
newProjectBtn.addEventListener('click', (e) => {
    openProjectForm(projectsList);
    e.target.remove();
});


