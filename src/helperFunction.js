import { addDays } from "date-fns";


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
}

//This function gets a date created from the date input and reformats 
//it to be more suitable for display on the page
export const reformatDate = function(date){
    const reformattedDate =  date.split("-").reverse().join("/");
    const newReformattedDate = removeCharacter(4, reformattedDate);
    return newReformattedDate;
}
    
export const findThisWeek = function(){
    const dateArray = [];
    const date = new Date();
    let nextDay = addDays(date, 1);

    dateArray.push(date, nextDay);

    while(nextDay.getDay() !== 0){
        nextDay = addDays(nextDay, 1);
        dateArray.push(nextDay);
    }

    return dateArray;
};

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
}

export const removeCharacter = function(position, date) {
    let newString =
        date.substr(0, position - 1)+
        date.substr(
            position,
            date.length
        );
    return newString;
};
