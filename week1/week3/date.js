
// console.log(d.xx)

let month=document.getElementById('month');

const months=[
    'January',
     'Feb',
     'March',
    'April',
    'May',
    'June',
    'July'
]
function displayTime(){
    const d= new Date();
    month.innerHTML=months[d.getMonth()]+' '+
d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
}
setInterval(displayTime,1000)

// learn to read  error messages
// use console log to check part of ur Code 
// run the code with both node.js amd the browser
