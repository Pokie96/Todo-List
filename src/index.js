import { renderNewProjectBtn } from "./handleProject";
import { Controller, Storer} from "./classes";
import './styles/indexStyle.css';
import { renderTasksForMonth, renderTasksForToday, renderTasksForWeek } from "./handleTask";

renderNewProjectBtn(Controller.projectsArray);

document.querySelector('#tasks-today').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Today';
    renderTasksForToday();
});

document.querySelector('#tasks-week').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Week';
    renderTasksForWeek();
});

document.querySelector('#tasks-month').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Month';
    renderTasksForMonth();
});


