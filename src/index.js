import { closeProjectForm, renderNewProjectBtn, setActiveCalenderButton } from "./handleProject";
import { Controller, Storer} from "./classes";
import './styles/indexStyle.css';
import { removeAddTaskButton, removeAllTasksDOM, removeCompletedTasks, removeTaskForm, renderTasksForMonth, renderTasksForToday, renderTasksForWeek } from "./handleTask";

renderNewProjectBtn(Controller.projectsArray);

document.querySelector('#tasks-today').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Today';
    closeProjectForm();
    removeTaskForm();
    setActiveCalenderButton(document.querySelector('#tasks-today'))
    removeAddTaskButton();
    renderTasksForToday();
});

document.querySelector('#tasks-week').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Week';
    closeProjectForm();
    removeTaskForm();
    setActiveCalenderButton(document.querySelector('#tasks-week'))
    removeAddTaskButton();
    renderTasksForWeek();
});

document.querySelector('#tasks-month').addEventListener('click', ()=>{
    Storer.currentlySelected = 'Month';
    closeProjectForm();
    removeTaskForm();
    setActiveCalenderButton(document.querySelector('#tasks-month'))
    removeAddTaskButton();
    renderTasksForMonth();
});

document.querySelector('#remove-complete-tasks-button').addEventListener('click', () => {
    removeCompletedTasks();
    closeProjectForm();
    removeTaskForm();
});



