let apple = document.getElementById('fruit');


function move() {
    let num1 = Math.trunc(Math.random() * 85);
    let num2 = Math.trunc(Math.random() * 85);
    apple.style.top = num1 + '%'
    apple.style.left = num2 + '%'
}
move();
setInterval(move,500)