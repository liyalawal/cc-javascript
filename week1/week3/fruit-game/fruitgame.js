let apple = document.getElementById('fruit');
let displayScore=document.getElementById('score');
let playArea=document.getElementById('Area')
let displaylives=document.getElementById('lives')
let lives=3
let scoreCount=0;

// move the fruit to random positions
function move() {
    let num1 = Math.trunc(Math.random() * 85);
    let num2 = Math.trunc(Math.random() * 85);
    let parameter1=17;
    let parameter2=70;

if(num1<parameter1){
    num1=parameter1;}
    else if(num1>parameter2){
        num1=parameter2;
    }
    if(num2 <parameter1){
        num2=parameter1;
    }else if(num2>parameter2){
        num2=parameter2;
    }
    
    apple.style.top = num1 + '%'
    apple.style.left = num2 + '%'
}

// increase score count when the fruit is clicked
apple.addEventListener('click',function(){
scoreCount++;
displayScore.innerHTML= 'Score:'+scoreCount;
});

// Lose a life when fruit is not clicked
playArea.addEventListener('click',function(){
    lives--;
    displaylives.innerHTML +='X '
    if(lives===0){
        alert('Game Over! Refresh the page to Restart.\n\nScore:'+ scoreCount);
    }
});

// Game Over

// update display according  to program activity
move();
setInterval(move,2200);
