import renderToDos from "./renderToDos";

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

        //Append the child elements to their parent element
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDate);

        //Append the div to the given container
        container.appendChild(projectElement);
        container.appendChild(renderToDos(project))
    }
}

export default renderProject;