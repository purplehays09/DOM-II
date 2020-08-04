// Your code goes here
/*
mouseover - basically the same as hover
keydown - press a key on the keyboard
wheel - when you use the mouse and or trackpad wheel
load - fires when the whole page loads
focus - basically clicking into something like a text field. focusIn - only the selected field
resize - fires when resizing the whole window
scroll - fires on scroll, not nessasarily on wheel
select - drag over text
dblclick - fires on double click
drag / drop - fires on drag and or drop

*/

/*
do 1 for each of the nav buttons 
do 1 for each of the bottom buttons

do 3 for the input
*/

let input = document.querySelector('#locationId');
// let homeButton = document.querySelector('.nav-link:nth-of-type(1)');
// let aboutButton = document.querySelector('.nav-link:nth-of-type(2)');
// let blogButton = document.querySelector('.nav-link:nth-of-type(3)');
// let Contact = document.querySelector('.nav-link:nth-of-type(4)');
let words = document.querySelector('.content-destination p')

let imgs = document.querySelectorAll('img')
imgs.forEach(img => {
    img.style.width = '100%';
    img.style.height = '100%';
})
let navButtons = document.querySelectorAll('nav a')

let sunButton = document.querySelector('.btn:nth-of-type(1)');
let mountainButton = document.querySelector('.btn:nth-of-type(2)');
let islandButton = document.querySelector('.btn:nth-of-type(3)');

// // debugger
// function hoverButton(event){
//     homeButton.style.backgroundColor = "black";
//     homeButton.style.color = 'white';
// }

// homeButton.addEventListener('mouseover',hoverButton)

navButtons.forEach(button => {
    button.addEventListener('mouseover',function(event){
        event.target.style.backgroundColor = "black";
        event.target.style.color = 'white';
    })
})

let scale = 1;
// const el = document.querySelector('img');
// el.onwheel = zoom;

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    imgs.forEach(img => {
        img.style.transform = `scale(${scale})`;
    })
  }

    imgs.forEach(img => {
        img.onwheel = zoom;
        img.addEventListener('mouseover', function(event){
            event.target.addEventListener('wheel',zoom)
    })
})


function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
    // const input = document.querySelector('input');
    input.addEventListener('select', logSelection);
        
    // words.addEventListener('select', event => {
    //     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    //     input.textContent = `You selected: ${selection}`;
// })


