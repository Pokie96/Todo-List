import { renderNewProjectBtn } from "./handleProject";
import { Controller } from "./classes";
import './styles/indexStyle.css';
import { findTasksForMonth, findTasksForToday, findTasksForWeek } from "./handleTask";

renderNewProjectBtn(Controller.projectsArray);

document.querySelector('#tasks-today').addEventListener('click', findTasksForToday);
document.querySelector('#tasks-week').addEventListener('click', findTasksForWeek);
document.querySelector('#tasks-month').addEventListener('click', findTasksForMonth);


