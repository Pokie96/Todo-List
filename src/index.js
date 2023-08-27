import Project from "./newProject.js";
import renderProject from "./renderProject.js";
import ToDo from "./createToDo.js";

const ProjectArray = [];

const project1 = new Project("testproject1", "testdate", ProjectArray);
project1.addProject();

const project2 = new Project("testproject2", "testdate", ProjectArray);
project2.addProject();

const project3 = new Project("testproject3", "testdate", ProjectArray);
project3.addProject();

const project4 = new Project("testproject4", "testdate", ProjectArray);
project4.addProject();


project1.addToDo('TestToDo1', 'test title', 'test description', 'test due date', 'test priority', false);

renderProject(ProjectArray, document.querySelector('.projects-container'))