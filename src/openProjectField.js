import appendChildren from "./appendChildren";
import Project from "./newProject";
import renderProject from "./renderProject";


const openProjectField = function(arrayToSubmit){
    
    tempRemoveNewProjectBtn();
    
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';
    
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    cancelNewProjectForm.addEventListener('click', closeProjectForm);
    newProjectSubmit.addEventListener('click', () => {
        submitNewProject(arrayToSubmit);
    });

    const newProjectsForm = document.querySelector('.new-projects-form');

    appendChildren(newProjectsForm, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

};

const closeProjectForm = function(){
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectSubmit = document.querySelector('.new-project-submit');
    const cancelNewProjectForm = document.querySelector('.cancel-new-project');

    newProjectTitleInput.remove();
    newProjectSubmit.remove();
    cancelNewProjectForm.remove();

    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectField);

};

const submitNewProject = function(array){
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectTitle = newProjectTitleInput.value;    
    const newProject = new Project(newProjectTitle, 2023,array);
    console.log(newProject);
    newProject.addProject();
    console.log(array)
    
    renderProject(array, document.querySelector('.projects-container'));

    closeProjectForm();

    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectField);
};

const tempRemoveNewProjectBtn = function(){
    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.removeEventListener('click', openProjectField);
}

export default openProjectField;