//Function to allow me to add the same class name to multiple
//elements.
const assignClass = function(className, ...elements){
    for(let i = 0; i < elements.length; i++){
        elements[i].className = className;
    }
}

export default assignClass