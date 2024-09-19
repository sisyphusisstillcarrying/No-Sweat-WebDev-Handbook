// Four Pillars of DOM Manipulation
// 1. Selection of an Element

var a = document.querySelector('h1') // it means that we are selecting the first h1 tag in the document
// for id we use # and for class we use . in querySelector

// 2. Changing HTML
a.innerHTML = 'Changed Heading';

// 3. Changning CSS
a.style.color = 'white';
a.style.backgroundColor = 'black';

// 4. Event Listner (Event Handler)
// what is an event listner?
// an event listner is a function that performs an action based on a certain event.
a.addEventListener('click', function() {
    a.innerHTML = 'I was clicked';
    a.style.color = 'yellow';
    a.style.backgroundColor = 'red';
})


// Bulb Example
var bulb = document.querySelector('#bulb');
var button = document.querySelector('button'); // selecting the button
var flag = 0;
button.addEventListener('click', function() {
    if(flag ==0){
        bulb.style.backgroundColor = 'yellow';
        flag = 1;
    }else{
        bulb.style.backgroundColor = 'black';
        flag = 0;
    }
    
}