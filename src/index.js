import { renderNewProjectBtn, setActiveCalenderButton } from "./handleProject";
import { Controller, Storer} from "./classes";
import './styles/indexStyle.css';
import { removeAddTaskButton, renderTasksForMonth, renderTasksForToday, renderTasksForWeek } from "./handleTask";

renderNewProjectBtn(Controller.projectsArray);

document.querySelector('#tasks-today').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Today';
    setActiveCalenderButton(document.querySelector('#tasks-today'))
    removeAddTaskButton();
    renderTasksForToday();
});

document.querySelector('#tasks-week').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Week';
    setActiveCalenderButton(document.querySelector('#tasks-week'))
    removeAddTaskButton();
    renderTasksForWeek();
});

document.querySelector('#tasks-month').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Month';
    setActiveCalenderButton(document.querySelector('#tasks-month'))
    removeAddTaskButton();
    renderTasksForMonth();
});


