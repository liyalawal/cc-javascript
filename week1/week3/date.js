
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