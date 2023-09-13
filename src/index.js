import { renderNewProjectBtn } from "./handleProject";
import { Controller } from "./classes";
import './styles/indexStyle.css';
import { findTasksForWeek } from "./handleTask";

renderNewProjectBtn(Controller.projectsArray);

document.querySelector('#tasks-week').addEventListener('click', findTasksForWeek);
