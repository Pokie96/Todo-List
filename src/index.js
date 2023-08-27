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

renderProject(ProjectArray, document.querySelector('.projects-container'))
console.log(ProjectArray);

const testToDo1 = new ToDo('TestTitle1', "TestDescription", 'TestDate', 'TestPriority', false);
const testToDo2 = new ToDo('TestTitle2', "TestDescription", 'TestDate', 'TestPriority', false);
const testToDo3 = new ToDo('TestTitle3', "TestDescription", 'TestDate', 'TestPriority', false);
const testToDo4 = new ToDo('TestTitle4', "TestDescription", 'TestDate', 'TestPriority', false);

testToDo1.addToDo(project1, "ToDo1");
testToDo2.addToDo(project1, "ToDo2");
testToDo3.addToDo(project1, "ToDo3");
testToDo4.addToDo(project1, "ToDo4");

testToDo3.removeToDo(project1, "ToDo3");

testToDo1.changeCompleteStatus();