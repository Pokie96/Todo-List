import Project from "./createProject";
import renderProject from "./renderProject";
import closeProjectForm from "./closeProjectForm";

//Function to create and add a new Project to a given projectsList
const submitNewProject = function(projectsList){
    //Select the title input element for the project form
    const newProjectTitleInput = document.querySelector('.new-project-title-input');

    //Assign the value entered into the title element to a variable
    const newProjectTitle = newProjectTitleInput.value;    

    //Create a new project with the given title, date and projectsList
    //to store it
    const newProject = new Project(newProjectTitle, 2023,projectsList);

    //Add the project to the given projects List
    newProject.addProject();

    //Render the projects in the projects list into the given container
    renderProject(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm(projectsList);

    //Re-Render the "New Project" button for use again.
    /*const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectForm);*/
};

export default submitNewProject;