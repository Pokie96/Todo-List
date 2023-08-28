
import openProjectField from "./openProjectField.js";

const projectsList = [];

const newProjectBtn = document.querySelector('#new-project-button');
newProjectBtn.addEventListener('click', () => {
    openProjectField(projectsList);
    console.log(projectsList);
});
