import appendChildren from "./appendChildren";

const openProjectField = function(){
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';
    
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    cancelNewProjectForm.addEventListener('click', closeProjectField);

    const projectContainer = document.querySelector('.projects-container');

    appendChildren(projectContainer, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

};

const closeProjectField = function(){
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectSubmit = document.querySelector('.new-project-submit');
    const cancelNewProjectForm = document.querySelector('.cancel-new-project');

    newProjectTitleInput.remove();
    newProjectSubmit.remove();
    cancelNewProjectForm.remove();
};

export default openProjectField;