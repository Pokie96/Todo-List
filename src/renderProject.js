import appendChildren from "./appendChildren";

const renderProject = function(array, container){
    //Loop through the given array
    for(let i = 0; i < array.length; i++){
        //Initialise our variables used throughout the function
        let project = array[i];
        let projectElement = document.createElement('div');
        let projectTitle = document.createElement('h2');
        let projectDate = document.createElement('p');

        //Set inner text of the elements to the values inside
        //of the given objects
        projectTitle.innerText = project.title;
        projectDate.innerText = project.date;

        //Give the project elements class names for future styling
        projectElement.className = 'ind-project-containers';
        projectTitle.className = 'project-titles';
        projectDate.className = 'project-dates';

        //Append the child elements to their parent element
        appendChildren(projectElement, projectTitle, projectDate)


        //Append the div to the given container
        container.appendChild(projectElement);
    }
}

export default renderProject;