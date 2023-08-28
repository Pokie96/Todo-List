
import openProjectForm from "./openProjectForm.js";

const projectsList = [];

const newProjectBtn = document.querySelector('#new-project-button');
newProjectBtn.addEventListener('click', () => {
    openProjectForm(projectsList);
    console.log(projectsList);
});
