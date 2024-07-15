let button = document.getElementById('btn');

button.addEventListener('click', function () {
    let color = Math.trunc(Math.random() * 999999)
    document.body.style.backgroundColor = '#' + color;
})