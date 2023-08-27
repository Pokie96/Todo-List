import Project from "./newProject.js"

const ProjectArray = [];

const project1 = new Project("testproject1", "testdate", ProjectArray);
project1.addProject();
project1.removeProject();

const project2 = new Project("testproject2", "testdate", ProjectArray);
project2.addProject();
project2.removeProject();

const project3 = new Project("testproject3", "testdate", ProjectArray);
project3.addProject();

const project4 = new Project("testproject4", "testdate", ProjectArray);
project4.addProject();

console.log(ProjectArray);