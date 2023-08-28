import Project from "./newProject.js";
import renderProject from "./renderProject.js";
import openProjectField from "./openProjectField.js";

const ProjectArray = [];

const newProjectBtn = document.querySelector('#new-project-button')

newProjectBtn.addEventListener('click', openProjectField)