import { addDays } from "date-fns";
import { Project } from "./classes";


//Function to help append multiple children at once to a parent
//element
export const appendChildren = function(parent, ...children){ 
    for(let i = 0; i < children.length; i++){
        parent.appendChild(children[i]);
    };
};

//Function to allow me to add the same class name to multiple
//elements.
export const assignClass = function(className, ...elements){
    for(let i = 0; i < elements.length; i++){
        elements[i].className = className;
    };
};

//Function gets the current date and returns it in a suitable format
//to be displayed on the page
export const todaysDate = function(){
    const fullDate = new Date();

    let day = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    return currentDate;
};

//This function gets a date created from the date input and reformats 
//it to be more suitable for display on the page
export const reformatDate = function(date){
    const reformattedDate =  date.split("-").reverse().join("/");
    let newReformattedDate = '';
    let character = '0';
    if(reformattedDate[3] === character){
        newReformattedDate = removeCharacter(4, reformattedDate);
    } else{
        newReformattedDate = reformattedDate;
    }
    
    return newReformattedDate;
};

//Function finds all the days in the current week and returns them as an 
//array  
export const findThisWeek = function(){
    const dateArray = [];
    const date = new Date();
    let nextDay = addDays(date, 1);

    dateArray.push(date);

    while(nextDay.getDay() !== 1){
        dateArray.push(nextDay);
        nextDay = addDays(nextDay, 1);
    };

    return dateArray;
};


//Function reformats the full dates in the week array so that the dates only 
//contain the relevant information
export const reformatThisWeek = function(week){
    const weekDayArray = [];
    for(let i = 0; i < week.length; i++){
        let day = week[i].getDate();
        let month = week[i].getMonth() + 1;
        let year = week[i].getFullYear();

        let thisFullDay = `${day}/${month}/${year}`;
        
        weekDayArray.push(thisFullDay);
    }
    return weekDayArray;
};

//Function finds all the dates in the current month and returns it as an 
//array
export const findThisMonth = function(){
    const dateArray = [];
    const date = new Date();
    let nextDay = addDays(date, 1);
    let currentMonth = date.getMonth() + 1;

    dateArray.push(date);

    while(nextDay.getMonth()+ 1 === currentMonth){
        dateArray.push(nextDay);
        nextDay = addDays(nextDay, 1);
    }
    return dateArray;
};

//Function reformats the dates in the month array so that the dates contain 
//only the relevant information
export const reformatThisMonth = function(originalMonthArray){
    const monthArray = [];
    for(let i = 0; i < originalMonthArray.length; i++){
        let day = originalMonthArray[i].getDate();
        let month = originalMonthArray[i].getMonth() + 1;
        let year = originalMonthArray[i].getFullYear();

        let thisFullDay = `${day}/${month}/${year}`;
        
        monthArray.push(thisFullDay);
    };
    return monthArray
};


//Function removes a character from a specified position of a given string
export const removeCharacter = function(position, string) {
    let newString =
        string.substr(0, position - 1)+
        string.substr(
            position,
            string.length
        );
    return newString;
};


